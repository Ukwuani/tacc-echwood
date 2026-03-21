'use client';
import React, { useEffect, useState } from 'react';
import { Grid, Box, Typography, Tabs, Tab, Button, Skeleton } from '@mui/material';
import AppShell from '../../src/components/layout/AppShell';
import WelcomeBanner from '../../src/components/dashboard/WelcomeBanner';
import StatCard from '../../src/components/dashboard/StatCard';
import CourseCard from '../../src/components/courses/CourseCard';
import ActivityFeed from '../../src/components/dashboard/ActivityFeed';
import XPLevelCard from '../../src/components/dashboard/XPLevelCard';
import UpcomingEvents from '../../src/components/calendar/UpcomingEvents';
import SkillsPanel from '../../src/components/skills/SkillsPanel';
import CourseScheduleModal from '../../src/components/calendar/CourseScheduleModal';
import EmptyState from '../../src/components/shared/EmptyState';
import TimerRoundedIcon from '@mui/icons-material/TimerRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import {
  getUserProfile, fetchCourses, fetchEnrolledCourses, fetchAllEvents, fetchStats, fetchActivity, fetchSkills,
} from '../../src/lib/data';
import type { Course, CourseEvent, StudentStats, Activity, SkillProgress } from '../../src/types/Course';
import router from 'next/router';

const FILTERS = ['All', 'In Progress', 'Upcoming', 'Completed'];
const STATUS_MAP: Record<string, string> = {
  'In Progress': 'in_progress', 'Upcoming': 'upcoming', 'Completed': 'completed',
};

export default function DashboardPage() {
  const [user, setUser]     = useState<any>({});
  const [courses, setCourses]     = useState<Course[]>([]);
  const [events, setEvents]       = useState<CourseEvent[]>([]);
  const [stats, setStats]         = useState<StudentStats | null>(null);
  const [activity, setActivity]   = useState<Activity[]>([]);
  const [skills, setSkills]       = useState<SkillProgress[]>([]);
  const [loading, setLoading]     = useState(true);
  const [tab, setTab]             = useState(0);
  const [modalCourse, setModalCourse] = useState<Course | null>(null);

  useEffect(() => {
    getUserProfile().then(profile => {
      setUser(profile);
      if (!profile?.id) {
        router.push("/register"); // redirect if not logged in
        return;
      }
      let userId = profile?.id;
      Promise.all([
      // fetchCourses(),
      fetchEnrolledCourses(userId),
      fetchAllEvents(userId),
      fetchStats(userId),
      fetchActivity(userId),
      fetchSkills(userId),
    ]).then(([c, e, s, a, sk]) => {
      setCourses(c); setEvents(e); setStats(s); setActivity(a); setSkills(sk);
      setLoading(false);
    });
    });

    
  }, []);

  const filteredCourses = tab === 0
    ? courses
    : courses.filter(c => c.status === STATUS_MAP[FILTERS[tab]]);

  return (
    <AppShell>
      <WelcomeBanner stats={stats} userName={user?.firstName} />

      {/* Stat cards */}
      <Grid container spacing={2.5} sx={{ mb: 3 }}>
        <Grid  size={{ xs: 12, sm: 4 }}>
          <StatCard
            title="Weekly Study Time"
            value={loading ? '—' : `${stats?.weekly_study_hours ?? 0}h`}
            subtitle={`Goal: ${stats?.weekly_goal_hours ?? 8}h / week`}
            icon={<TimerRoundedIcon sx={{ color: '#556cd6' }} />}
            iconBg="#556cd618"
            progress={stats ? Math.round((stats?.weekly_study_hours / stats?.weekly_goal_hours) * 100) : 0}
            progressColor="#556cd6"
            chip="↑ 18%"
            chipColor="success"
          />
        </Grid>
        <Grid  size={{ xs: 12, sm: 4 }}>
          <StatCard
            title="Assignments Due"
            value={loading ? '—' : String(stats?.assignments_due ?? 0)}
            subtitle={`${stats?.assignments_overdue ?? 0} overdue`}
            icon={<AssignmentRoundedIcon sx={{ color: '#f87171' }} />}
            iconBg="#f8717118"
            progress={stats ? Math.max(0, 100 - ((stats?.assignments_overdue / Math.max(stats?.assignments_due, 1)) * 100)) : 100}
            progressColor="#f87171"
            chip={stats?.assignments_overdue ? `${stats?.assignments_overdue} overdue` : 'On track'}
            chipColor={stats?.assignments_overdue ? 'error' : 'success'}
          />
        </Grid>
        <Grid  size={{ xs: 12, sm: 4 }}>
          <StatCard
            title="XP Points"
            value={loading ? '—' : (stats?.xp ?? 0).toLocaleString()}
            subtitle={`Level ${stats?.level ?? 1} Scholar`}
            icon={<StarRoundedIcon sx={{ color: '#f0b429' }} />}
            iconBg="#f0b42918"
            progress={stats ? Math.round(((stats?.xp % 1000) / 1000) * 100) : 0}
            progressColor="#f0b429"
            chip="↑ 340 today"
            chipColor="success"
          />
        </Grid>
      </Grid>

      {/* Courses + right column */}
      <Grid container spacing={2.5} sx={{ mb: 3 }}>
        <Grid  size={{ xs: 12, md:8 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
            <Typography variant="h6" fontWeight={700}>Enrolled Courses</Typography>
            <Button variant="text" size="small" sx={{ color: 'primary.main' }} href="/courses">See all →</Button>
          </Box>
          <Tabs
            value={tab}
            onChange={(_, v) => setTab(v)}
            sx={{ mb: 2, '& .MuiTab-root': { fontSize: 13, fontWeight: 600, minWidth: 90, textTransform: 'none' } }}
          >
            {FILTERS.map(f => <Tab key={f} label={f} />)}
          </Tabs>

          {loading ? (
            <Grid container spacing={2}>
              {[1, 2].map(i => <Grid key={i}  size={{ xs: 12, sm:6 }}><Skeleton variant="rounded" height={320} sx={{ borderRadius: 2 }} /></Grid>)}
            </Grid>
          ) : filteredCourses.length === 0 ? (
            <EmptyState icon="📚" title="No courses found" subtitle="You haven't enrolled in any courses yet. Start exploring!" action={{ label: 'Browse Courses', onClick: () => {} }} />
          ) : (
            <Grid container spacing={2}>
              {filteredCourses.map(c => (
                <Grid key={c.id}  size={{ xs: 12, sm:6 }}>
                  <CourseCard course={c} onScheduleClick={setModalCourse} />
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>

        {/* Right column */}
        <Grid  size={{ xs: 12, md:4 }} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
          <UpcomingEvents events={events} loading={loading} />
          <XPLevelCard stats={stats} loading={loading} />
        </Grid>
      </Grid>

      {/* Bottom row */}
      <Grid container spacing={2.5}>
        <Grid  size={{ xs: 12, md:4 }}><ActivityFeed items={activity} loading={loading} /></Grid>
        <Grid  size={{ xs: 12, md:4 }}><SkillsPanel skills={skills} loading={loading} /></Grid>
        <Grid  size={{ xs: 12, md:4 }}>
          {/* Leaderboard preview */}
          <Box component="a" href="/leaderboard" sx={{ textDecoration: 'none' }}>
            <EmptyState icon="🏆" title="View Leaderboard" subtitle="See how you rank against your classmates." />
          </Box>
        </Grid>
      </Grid>

      <CourseScheduleModal
        course={modalCourse}
        open={!!modalCourse}
        onClose={() => setModalCourse(null)}
      />
    </AppShell>
  );
}
