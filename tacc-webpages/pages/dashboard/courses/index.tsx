'use client';
import React, { useEffect, useState } from 'react';
import {
  Grid, Box, TextField, InputAdornment, ToggleButton, ToggleButtonGroup,
  MenuItem, Select, FormControl, InputLabel, Skeleton, Typography,
} from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AppShell from '@/components/layout/AppShell';
import PageHeader from '@/components/shared/PageHeader';
import CourseCard from '@/components/courses/CourseCard';
import CourseScheduleModal from '@/components/calendar/CourseScheduleModal';
import EmptyState from '@/components/shared/EmptyState';
import { fetchEnrolledCourses, getUserProfile } from '@/lib/data';
import type { Course } from '@/types/Course';

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sort, setSort] = useState('progress');
  const [modalCourse, setModalCourse] = useState<Course | null>(null);

  useEffect(() => {
    getUserProfile().then(profile => {
      if (profile?.id) 
        fetchEnrolledCourses(profile?.id).then(data => { setCourses(data); setLoading(false); });
    })
    
  }, []);

  const filtered = courses
    .filter(c => {
      const matchSearch = c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.instructor.name.toLowerCase().includes(search.toLowerCase()) ||
        c.subject.toLowerCase().includes(search.toLowerCase());
      const matchStatus = statusFilter === 'all' || c.status === statusFilter;
      return matchSearch && matchStatus;
    })
    .sort((a, b) => {
      if (sort === 'progress') return b.progress - a.progress;
      if (sort === 'title') return a.title.localeCompare(b.title);
      return 0;
    });

  return (
    <AppShell>
      <PageHeader
        title="My Courses"
        subtitle="All your enrolled courses in one place"
        breadcrumbs={[{ label: 'Dashboard', href: '/' }, { label: 'Courses' }]}
      />

      {/* Filters */}
      <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap', alignItems: 'center' }}>
        <TextField
          size="small"
          placeholder="Search courses…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          InputProps={{ startAdornment: <InputAdornment position="start"><SearchRoundedIcon sx={{ fontSize: 18, color: 'text.secondary' }} /></InputAdornment> }}
          sx={{ minWidth: 220 }}
        />
        <ToggleButtonGroup
          value={statusFilter}
          exclusive
          onChange={(_, v) => v && setStatusFilter(v)}
          size="small"
          sx={{ '& .MuiToggleButton-root': { textTransform: 'none', fontWeight: 600, fontSize: 13, px: 2 } }}
        >
          <ToggleButton value="all">All</ToggleButton>
          <ToggleButton value="in_progress">In Progress</ToggleButton>
          <ToggleButton value="upcoming">Upcoming</ToggleButton>
          <ToggleButton value="completed">Completed</ToggleButton>
        </ToggleButtonGroup>
        <FormControl size="small" sx={{ minWidth: 140, ml: 'auto' }}>
          <InputLabel>Sort by</InputLabel>
          <Select value={sort} label="Sort by" onChange={e => setSort(e.target.value)}>
            <MenuItem value="progress">Progress</MenuItem>
            <MenuItem value="title">Title A–Z</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Count */}
      {!loading && (
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Showing {filtered.length} of {courses.length} courses
        </Typography>
      )}

      {loading ? (
        <Grid container spacing={2.5}>
          {[1, 2, 3, 4].map(i => (
            <Grid key={i} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <Skeleton variant="rounded" height={340} sx={{ borderRadius: 2 }} />
            </Grid>
          ))}
        </Grid>
      ) : filtered.length === 0 ? (
        <EmptyState
          icon="🔍"
          title="No courses found"
          subtitle={search ? `No courses match "${search}". Try a different search.` : "You don't have any courses in this category."}
          action={search ? { label: 'Clear search', onClick: () => setSearch('') } : undefined}
        />
      ) : (
        <Grid container spacing={2.5}>
          {filtered.map(c => (
            <Grid key={c.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <CourseCard course={c} onScheduleClick={setModalCourse} />
            </Grid>
          ))}
        </Grid>
      )}

      <CourseScheduleModal
        course={modalCourse}
        open={!!modalCourse}
        onClose={() => setModalCourse(null)}
      />
    </AppShell>
  );
}
