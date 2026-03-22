'use client';
import React, { useEffect, useState, useCallback } from 'react';
import {
  Grid, Card, CardContent, Box, Typography, IconButton, Chip,
  Button, Paper, Skeleton, Select, MenuItem, FormControl,
} from '@mui/material';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import TodayRoundedIcon from '@mui/icons-material/TodayRounded';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import dayjs, { Dayjs } from 'dayjs';
import AppShell from '@/components/layout/AppShell';
import PageHeader from '@/components/shared/PageHeader';
import EmptyState from '@/components/shared/EmptyState';
import { fetchAllEvents } from '@/lib/data';
import type { CourseEvent } from '@/types/Course';

const DAYS_LABEL = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const TYPE_META: Record<string, { label: string; color: string; icon: string }> = {
  live:     { label: 'Live',      color: '#34d399', icon: '🎙' },
  workshop: { label: 'Workshop',  color: '#556cd6', icon: '🛠' },
  review:   { label: 'Review',    color: '#f0b429', icon: '🔍' },
  guest:    { label: 'Guest',     color: '#f472b6', icon: '🎓' },
};

export default function SchedulePage() {
  const [events, setEvents]       = useState<CourseEvent[]>([]);
  const [loading, setLoading]     = useState(true);
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedDay, setSelectedDay] = useState<Dayjs | null>(dayjs());
  const [typeFilter, setTypeFilter]   = useState('all');
  const [copied, setCopied]       = useState<string | null>(null);

  useEffect(() => {
    fetchAllEvents('current-user').then(data => { setEvents(data); setLoading(false); });
  }, []);

  const emap = useCallback(() => {
    const map: Record<string, CourseEvent[]> = {};
    events.forEach(e => {
      const key = e.event_date.slice(0, 10);
      if (!map[key]) map[key] = [];
      map[key].push(e);
    });
    return map;
  }, [events])();

  const today = dayjs();
  const startOfMonth = currentDate.startOf('month');
  const firstDow = startOfMonth.day();
  const daysInMonth = currentDate.daysInMonth();

  const calCells: (Dayjs | null)[] = [
    ...Array(firstDow).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => startOfMonth.add(i, 'day')),
  ];

  const dayEvents = selectedDay
    ? (emap[selectedDay.format('YYYY-MM-DD')] ?? []).filter(e => typeFilter === 'all' || e.type === typeFilter)
    : [];

  const allThisMonth = Object.entries(emap)
    .filter(([k]) => k.startsWith(currentDate.format('YYYY-MM')))
    .flatMap(([, evts]) => evts)
    .filter(e => typeFilter === 'all' || e.type === typeFilter)
    .sort((a, b) => a.event_date.localeCompare(b.event_date));

  const handleCopy = (link: string, id: string) => {
    navigator.clipboard.writeText(link).then(() => {
      setCopied(id); setTimeout(() => setCopied(null), 2000);
    });
  };

  const EventCard = ({ event }: { event: CourseEvent }) => {
    const meta = TYPE_META[event.type] ?? TYPE_META.live;
    const d = dayjs(event.event_date);
    return (
      <Paper variant="outlined" sx={{ p: 2, borderRadius: 2, borderLeft: `4px solid ${meta.color}`, mb: 1.5,
        transition: 'box-shadow .2s', '&:hover': { boxShadow: '0 4px 16px rgba(0,0,0,0.08)' } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
          <Box>
            <Chip label={`${meta.icon} ${meta.label}`} size="small"
              sx={{ bgcolor: meta.color + '15', color: meta.color, fontWeight: 600, fontSize: 10, mb: 0.5 }} />
            <Typography variant="subtitle2" fontWeight={700}>{event.title}</Typography>
            {(event as any).course && (
              <Typography variant="caption" color="text.secondary">{(event as any).course.emoji} {(event as any).course.title}</Typography>
            )}
          </Box>
          <Box sx={{ textAlign: 'right', flexShrink: 0, ml: 2 }}>
            <Typography variant="caption" fontWeight={700} color="primary.main" sx={{ display: 'block' }}>{d.format('MMM D')}</Typography>
            <Typography variant="caption" color="text.secondary">{event.event_time}</Typography>
          </Box>
        </Box>
        {event.description && (
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5, fontSize: 13 }}>{event.description}</Typography>
        )}
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button variant="contained" size="small" startIcon={<VideocamRoundedIcon sx={{ fontSize: '14px !important' }} />}
            href={event.meeting_link} target="_blank" rel="noopener noreferrer"
            sx={{ bgcolor: meta.color, '&:hover': { bgcolor: meta.color, opacity: 0.85 }, fontSize: 12 }}>
            Join
          </Button>
          <Button variant="outlined" size="small" startIcon={<ContentCopyRoundedIcon sx={{ fontSize: '14px !important' }} />}
            onClick={() => handleCopy(event.meeting_link, event.id)}
            sx={{ fontSize: 12, borderColor: 'divider', color: 'text.secondary' }}>
            {copied === event.id ? 'Copied!' : 'Copy Link'}
          </Button>
        </Box>
      </Paper>
    );
  };

  return (
    <AppShell>
      <PageHeader
        title="Schedule"
        subtitle="All your sessions and live events"
        breadcrumbs={[{ label: 'Dashboard', href: '/' }, { label: 'Schedule' }]}
        action={
          <FormControl size="small" sx={{ minWidth: 130 }}>
            <Select value={typeFilter} onChange={e => setTypeFilter(e.target.value)}>
              <MenuItem value="all">All Types</MenuItem>
              {Object.entries(TYPE_META).map(([k, v]) => (
                <MenuItem key={k} value={k}>{v.icon} {v.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
        }
      />

      <Grid container spacing={2.5}>
        {/* Calendar */}
        <Grid  size={{ xs: 12,md: 5, lg: 4 }}>
          <Card>
            <CardContent sx={{ p: 2.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6" fontWeight={700}>{MONTHS[currentDate.month()]} {currentDate.year()}</Typography>
                <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
                  <IconButton size="small" onClick={() => { setCurrentDate(d => d.subtract(1, 'month')); setSelectedDay(null); }}
                    sx={{ border: '1px solid', borderColor: 'divider' }}>
                    <ChevronLeftRoundedIcon fontSize="small" />
                  </IconButton>
                  <Button size="small" startIcon={<TodayRoundedIcon />}
                    onClick={() => { setCurrentDate(dayjs()); setSelectedDay(dayjs()); }}
                    sx={{ fontSize: 12, textTransform: 'none', fontWeight: 600 }}>
                    Today
                  </Button>
                  <IconButton size="small" onClick={() => { setCurrentDate(d => d.add(1, 'month')); setSelectedDay(null); }}
                    sx={{ border: '1px solid', borderColor: 'divider' }}>
                    <ChevronRightRoundedIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>

              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', mb: 0.5 }}>
                {DAYS_LABEL.map(d => (
                  <Typography key={d} variant="caption" color="text.secondary" fontWeight={600}
                    sx={{ textAlign: 'center', py: 0.5, fontSize: 10 }}>{d}</Typography>
                ))}
              </Box>

              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 0.3 }}>
                {calCells.map((day, i) => {
                  if (!day) return <Box key={i} />;
                  const key = day.format('YYYY-MM-DD');
                  const dayEvts = emap[key] ?? [];
                  const hasEvent = dayEvts.length > 0;
                  const isToday = day.isSame(today, 'day');
                  const isSelected = selectedDay?.isSame(day, 'day');
                  return (
                    <Box key={i} onClick={() => setSelectedDay(isSelected ? null : day)}
                      sx={{
                        aspectRatio: '1', borderRadius: 1.5, cursor: 'pointer',
                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                        bgcolor: isSelected ? 'primary.main' : isToday ? 'primary.main' + '15' : 'transparent',
                        border: isToday && !isSelected ? '1.5px solid' : '1.5px solid transparent',
                        borderColor: isToday && !isSelected ? 'primary.main' : 'transparent',
                        '&:hover': { bgcolor: isSelected ? 'primary.main' : 'action.hover' },
                        position: 'relative',
                      }}>
                      <Typography variant="caption" fontWeight={isToday || isSelected ? 700 : 400}
                        sx={{ fontSize: 12, color: isSelected ? '#fff' : 'text.primary', lineHeight: 1 }}>
                        {day.date()}
                      </Typography>
                      {hasEvent && (
                        <Box sx={{ width: 4, height: 4, borderRadius: '50%', mt: 0.25,
                          bgcolor: isSelected ? '#fff' : 'primary.main' }} />
                      )}
                    </Box>
                  );
                })}
              </Box>

              {/* Type legend */}
              <Box sx={{ mt: 2, pt: 2, borderTop: '1px solid', borderColor: 'divider' }}>
                <Typography variant="caption" color="text.secondary" fontWeight={600}
                  sx={{ display: 'block', mb: 0.75, textTransform: 'uppercase', letterSpacing: '.06em', fontSize: 10 }}>
                  Session Types
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {Object.entries(TYPE_META).map(([k, v]) => (
                    <Chip key={k} label={`${v.icon} ${v.label}`} size="small"
                      sx={{ bgcolor: v.color + '15', color: v.color, fontWeight: 600, fontSize: 10 }} />
                  ))}
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Events panel */}
        <Grid size={{ xs: 12, md: 7, lg: 8 }} >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="h6" fontWeight={700}>
              {selectedDay
                ? `Sessions — ${selectedDay.format('MMMM D, YYYY')}`
                : `All Sessions — ${MONTHS[currentDate.month()]}`}
            </Typography>
            {selectedDay && (
              <Button size="small" onClick={() => setSelectedDay(null)} sx={{ textTransform: 'none', fontSize: 13 }}>
                Show all this month
              </Button>
            )}
          </Box>

          {loading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} variant="rounded" height={130} sx={{ mb: 1.5, borderRadius: 2 }} />
            ))
          ) : (selectedDay ? dayEvents : allThisMonth).length === 0 ? (
            <EmptyState
              icon="📭"
              title="No sessions"
              subtitle={selectedDay ? 'No sessions scheduled on this day.' : 'No sessions scheduled this month.'}
            />
          ) : (
            (selectedDay ? dayEvents : allThisMonth).map(e => <EventCard key={e.id} event={e} />)
          )}
        </Grid>
      </Grid>
    </AppShell>
  );
}
