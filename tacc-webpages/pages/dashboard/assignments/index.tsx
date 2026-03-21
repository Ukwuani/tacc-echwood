'use client';
import React, { useEffect, useState } from 'react';
import {
  Grid, Card, CardContent, Box, Typography, Chip, Button,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, LinearProgress, Skeleton, ToggleButton, ToggleButtonGroup,
  TextField, InputAdornment,
} from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import HourglassTopRoundedIcon from '@mui/icons-material/HourglassTopRounded';
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import dayjs from 'dayjs';
import AppShell from '@/components/layout/AppShell';
import PageHeader from '@/components/shared/PageHeader';
import EmptyState from '@/components/shared/EmptyState';
import { fetchAssignments } from '@/lib/data';
import type { Assignment } from '@/types/Course';

const STATUS_META: Record<string, { label: string; color: 'default' | 'primary' | 'success' | 'error' | 'warning'; icon: React.ReactNode }> = {
  pending:   { label: 'Pending',   color: 'warning', icon: <HourglassTopRoundedIcon sx={{ fontSize: 14 }} /> },
  submitted: { label: 'Submitted', color: 'primary', icon: <CheckCircleRoundedIcon sx={{ fontSize: 14 }} /> },
  graded:    { label: 'Graded',    color: 'success', icon: <GradeRoundedIcon sx={{ fontSize: 14 }} /> },
  overdue:   { label: 'Overdue',   color: 'error',   icon: <WarningRoundedIcon sx={{ fontSize: 14 }} /> },
};

export default function AssignmentsPage() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [loading, setLoading]         = useState(true);
  const [statusFilter, setStatusFilter] = useState('all');
  const [search, setSearch]           = useState('');

  useEffect(() => {
    fetchAssignments('current-user').then(data => { setAssignments(data); setLoading(false); });
  }, []);

  const filtered = assignments.filter(a => {
    const matchStatus = statusFilter === 'all' || a.status === statusFilter;
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase()) ||
      (a.course?.title ?? '').toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  const counts = {
    all: assignments.length,
    pending: assignments.filter(a => a.status === 'pending').length,
    submitted: assignments.filter(a => a.status === 'submitted').length,
    graded: assignments.filter(a => a.status === 'graded').length,
    overdue: assignments.filter(a => a.status === 'overdue').length,
  };

  const avgGrade = () => {
    const graded = assignments.filter(a => a.grade != null);
    if (!graded.length) return null;
    return Math.round(graded.reduce((s, a) => s + (a.grade! / a.max_grade) * 100, 0) / graded.length);
  };

  return (
    <AppShell>
      <PageHeader
        title="Assignments"
        subtitle="Track your tasks and deadlines"
        breadcrumbs={[{ label: 'Dashboard', href: '/' }, { label: 'Assignments' }]}
      />

      {/* Summary cards */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {[
          { label: 'Total', value: counts.all, color: 'primary.main', bg: 'primary.main' + '10' },
          { label: 'Pending', value: counts.pending, color: 'warning.main', bg: 'warning.main' + '10' },
          { label: 'Overdue', value: counts.overdue, color: 'error.main', bg: 'error.main' + '10' },
          { label: 'Avg Grade', value: avgGrade() != null ? `${avgGrade()}%` : '—', color: 'success.main', bg: 'success.main' + '10' },
        ].map(s => (
          <Grid key={s.label}xs={6} sm={3}>
            <Card>
              <CardContent sx={{ p: 2, textAlign: 'center' }}>
                <Typography variant="h4" fontWeight={800} color={s.color}>
                  {loading ? <Skeleton width={40} sx={{ mx: 'auto' }} /> : s.value}
                </Typography>
                <Typography variant="caption" color="text.secondary" fontWeight={600}>{s.label}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Filters */}
      <Box sx={{ display: 'flex', gap: 2, mb: 2.5, flexWrap: 'wrap', alignItems: 'center' }}>
        <TextField
          size="small"
          placeholder="Search assignments…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          InputProps={{ startAdornment: <InputAdornment position="start"><SearchRoundedIcon sx={{ fontSize: 18, color: 'text.secondary' }} /></InputAdornment> }}
          sx={{ minWidth: 220 }}
        />
        <ToggleButtonGroup
          value={statusFilter} exclusive
          onChange={(_, v) => v && setStatusFilter(v)}
          size="small"
          sx={{ '& .MuiToggleButton-root': { textTransform: 'none', fontWeight: 600, fontSize: 13, px: 2 } }}
        >
          <ToggleButton value="all">All ({counts.all})</ToggleButton>
          <ToggleButton value="pending">Pending ({counts.pending})</ToggleButton>
          <ToggleButton value="overdue">Overdue ({counts.overdue})</ToggleButton>
          <ToggleButton value="graded">Graded ({counts.graded})</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {/* Table */}
      {loading ? (
        <Skeleton variant="rounded" height={300} sx={{ borderRadius: 2 }} />
      ) : filtered.length === 0 ? (
        <EmptyState icon="✅" title="No assignments found" subtitle="You're all caught up, or no assignments match your filter." />
      ) : (
        <TableContainer component={Paper} variant="outlined" sx={{ borderRadius: 2 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: 'background.default' }}>
                {['Assignment', 'Course', 'Due Date', 'Status', 'Grade', ''].map(h => (
                  <TableCell key={h} sx={{ fontWeight: 700, fontSize: 12, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '.06em', py: 1.5 }}>{h}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filtered.map(a => {
                const meta = STATUS_META[a.status];
                const due = dayjs(a.due_date);
                const isOverdue = a.status === 'overdue';
                const pct = a.grade != null ? Math.round((a.grade / a.max_grade) * 100) : null;
                return (
                  <TableRow key={a.id} hover sx={{ '&:last-child td': { border: 0 } }}>
                    <TableCell>
                      <Typography variant="body2" fontWeight={600}>{a.title}</Typography>
                    </TableCell>
                    <TableCell>
                      {a.course ? (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                          <Box component="span" sx={{ fontSize: 14 }}>{a.course.emoji}</Box>
                          <Typography variant="body2" color="text.secondary">{a.course.title}</Typography>
                        </Box>
                      ) : <Typography variant="body2" color="text.secondary">—</Typography>}
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" color={isOverdue ? 'error.main' : 'text.primary'} fontWeight={isOverdue ? 600 : 400}>
                        {due.format('MMM D, YYYY')}
                      </Typography>
                      {isOverdue && <Typography variant="caption" color="error.main">{Math.abs(due.diff(dayjs(), 'day'))}d overdue</Typography>}
                    </TableCell>
                    <TableCell>
                      <Chip
                        icon={meta.icon as any}
                        label={meta.label}
                        color={meta.color}
                        size="small"
                        variant="outlined"
                        sx={{ fontWeight: 600, fontSize: 11 }}
                      />
                    </TableCell>
                    <TableCell sx={{ minWidth: 100 }}>
                      {pct != null ? (
                        <Box>
                          <Typography variant="body2" fontWeight={700} color={pct >= 80 ? 'success.main' : pct >= 60 ? 'warning.main' : 'error.main'}>
                            {a.grade}/{a.max_grade} ({pct}%)
                          </Typography>
                          <LinearProgress variant="determinate" value={pct}
                            sx={{ mt: 0.5, '& .MuiLinearProgress-bar': { bgcolor: pct >= 80 ? '#34d399' : pct >= 60 ? '#f0b429' : '#f87171' }, bgcolor: 'action.disabledBackground' }} />
                        </Box>
                      ) : <Typography variant="body2" color="text.secondary">—</Typography>}
                    </TableCell>
                    <TableCell>
                      {a.status === 'pending' || a.status === 'overdue' ? (
                        <Button variant="contained" size="small" sx={{ fontSize: 12 }}>Submit</Button>
                      ) : (
                        <Button variant="outlined" size="small" sx={{ fontSize: 12 }}>View</Button>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </AppShell>
  );
}
