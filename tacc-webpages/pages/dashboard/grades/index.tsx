'use client';
import React, { useEffect, useState } from 'react';
import {
  Grid, Card, CardContent, Box, Typography, LinearProgress,
  Chip, Skeleton, Paper, Divider,
} from '@mui/material';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import AppShell from '@/components/layout/AppShell';
import PageHeader from '@/components/shared/PageHeader';
import EmptyState from '@/components/shared/EmptyState';
import { fetchAssignments, fetchCourses } from '@/lib/data';
import type { Assignment, Course } from '@/types/Course';

function gradeLabel(pct: number) {
  if (pct >= 90) return { letter: 'A', color: '#34d399' };
  if (pct >= 80) return { letter: 'B', color: '#556cd6' };
  if (pct >= 70) return { letter: 'C', color: '#f0b429' };
  if (pct >= 60) return { letter: 'D', color: '#fb923c' };
  return { letter: 'F', color: '#f87171' };
}

export default function GradesPage() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [courses, setCourses]         = useState<Course[]>([]);
  const [loading, setLoading]         = useState(true);

  useEffect(() => {
    Promise.all([fetchAssignments('current-user'), fetchCourses()]).then(([a, c]) => {
      setAssignments(a); setCourses(c); setLoading(false);
    });
  }, []);

  const graded = assignments.filter(a => a.grade != null);

  const byCourse = courses.map(c => {
    const cAssignments = graded.filter(a => a.course_id === c.id);
    if (!cAssignments.length) return null;
    const avg = Math.round(cAssignments.reduce((s, a) => s + (a.grade! / a.max_grade) * 100, 0) / cAssignments.length);
    return { course: c, assignments: cAssignments, avg };
  }).filter(Boolean) as { course: Course; assignments: Assignment[]; avg: number }[];

  const overallAvg = graded.length
    ? Math.round(graded.reduce((s, a) => s + (a.grade! / a.max_grade) * 100, 0) / graded.length)
    : null;

  return (
    <AppShell>
      <PageHeader
        title="Grades"
        subtitle="Your academic performance overview"
        breadcrumbs={[{ label: 'Dashboard', href: '/' }, { label: 'Grades' }]}
      />

      {/* Overall GPA card */}
      {!loading && overallAvg != null && (
        <Paper elevation={0} sx={{ p: 3, mb: 3, background: 'linear-gradient(135deg, #556cd618, #556cd608)', border: '1px solid', borderColor: 'primary.main' + '22', borderRadius: 3 }}>
          <Grid container alignItems="center" spacing={2}>
            <Grid>
              <Box sx={{ width: 72, height: 72, borderRadius: '50%', bgcolor: 'primary.main' + '18',
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <EmojiEventsRoundedIcon sx={{ color: 'primary.main', fontSize: 36 }} />
              </Box>
            </Grid>
            <Grid >
              <Typography variant="body2" color="text.secondary" fontWeight={600}>Overall Average</Typography>
              <Typography variant="h3" fontWeight={800} color="primary.main">{overallAvg}%</Typography>
              <Typography variant="body2" color="text.secondary">
                Based on {graded.length} graded assignment{graded.length !== 1 ? 's' : ''}
              </Typography>
            </Grid>
            <Grid >
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" fontWeight={900} sx={{ color: gradeLabel(overallAvg).color, lineHeight: 1 }}>
                  {gradeLabel(overallAvg).letter}
                </Typography>
                <Typography variant="caption" color="text.secondary">Letter Grade</Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      )}

      {loading ? (
        <Grid container spacing={2.5}>
          {[1, 2].map(i => <Grid key={i} size={{ xs: 12, md:6 }}><Skeleton variant="rounded" height={260} sx={{ borderRadius: 2 }} /></Grid>)}
        </Grid>
      ) : byCourse.length === 0 ? (
        <EmptyState icon="📊" title="No grades yet" subtitle="Your grades will appear here once assignments are graded." />
      ) : (
        <Grid container spacing={2.5}>
          {byCourse.map(({ course, assignments: cA, avg }) => {
            const gl = gradeLabel(avg);
            return (
              <Grid key={course.id} size={{ xs: 12, md:6 }}>
                <Card>
                  <CardContent sx={{ p: 2.5 }}>
                    {/* Course header */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                      <Box sx={{ fontSize: 28, width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center',
                        bgcolor: course.color + '18', borderRadius: 2 }}>{course.emoji}</Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="subtitle1" fontWeight={700}>{course.title}</Typography>
                        <Typography variant="caption" color="text.secondary">{course.instructor?.name}</Typography>
                      </Box>
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h4" fontWeight={800} sx={{ color: gl.color, lineHeight: 1 }}>{gl.letter}</Typography>
                        <Typography variant="caption" color="text.secondary">{avg}%</Typography>
                      </Box>
                    </Box>

                    {/* Average bar */}
                    <Box sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                        <Typography variant="caption" color="text.secondary" fontWeight={600}>Course Average</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <TrendingUpRoundedIcon sx={{ fontSize: 14, color: gl.color }} />
                          <Typography variant="caption" fontWeight={700} sx={{ color: gl.color }}>{avg}%</Typography>
                        </Box>
                      </Box>
                      <LinearProgress variant="determinate" value={avg}
                        sx={{ height: 8, '& .MuiLinearProgress-bar': { bgcolor: gl.color }, bgcolor: gl.color + '22' }} />
                    </Box>

                    <Divider sx={{ mb: 1.5 }} />

                    {/* Individual grades */}
                    <Typography variant="caption" color="text.secondary" fontWeight={700}
                      sx={{ textTransform: 'uppercase', letterSpacing: '.06em', display: 'block', mb: 1 }}>
                      Assignments
                    </Typography>
                    {cA.map(a => {
                      const pct = Math.round((a.grade! / a.max_grade) * 100);
                      const agl = gradeLabel(pct);
                      return (
                        <Box key={a.id} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.75 }}>
                          <Typography variant="body2" sx={{ flex: 1 }} noWrap>{a.title}</Typography>
                          <Typography variant="caption" color="text.secondary">{a.grade}/{a.max_grade}</Typography>
                          <Chip label={`${pct}%`} size="small"
                            sx={{ bgcolor: agl.color + '15', color: agl.color, fontWeight: 700, fontSize: 11, minWidth: 46 }} />
                        </Box>
                      );
                    })}
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      )}
    </AppShell>
  );
}
