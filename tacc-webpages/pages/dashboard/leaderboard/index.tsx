'use client';
import React, { useEffect, useState } from 'react';
import {
  Grid, Card, CardContent, Box, Typography, Avatar, Chip,
  LinearProgress, Paper, Skeleton, Divider,
} from '@mui/material';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import AppShell from '@/components/layout/AppShell';
import PageHeader from '@/components/shared/PageHeader';
import SkillsPanel from '@/components/skills/SkillsPanel';
import XPLevelCard from '@/components/dashboard/XPLevelCard';
import EmptyState from '@/components/shared/EmptyState';
import { fetchLeaderboard, fetchSkills, fetchStats } from '@/lib/data';
import type { LeaderboardEntry, SkillProgress, StudentStats } from '@/types/Course';

const RANK_META: Record<number, { icon: string; color: string; bg: string }> = {
  1: { icon: '🥇', color: '#B8860B', bg: '#FFF8E1' },
  2: { icon: '🥈', color: '#607D8B', bg: '#ECEFF1' },
  3: { icon: '🥉', color: '#8D6E63', bg: '#EFEBE9' },
};

export default function LeaderboardPage() {
  const [entries, setEntries]   = useState<LeaderboardEntry[]>([]);
  const [skills, setSkills]     = useState<SkillProgress[]>([]);
  const [stats, setStats]       = useState<StudentStats | null>(null);
  const [loading, setLoading]   = useState(true);

  useEffect(() => {
    Promise.all([
      fetchLeaderboard(),
      fetchSkills('current-user'),
      fetchStats('current-user'),
    ]).then(([lb, sk, st]) => {
      setEntries(lb); setSkills(sk); setStats(st); setLoading(false);
    });
  }, []);

  const top3   = entries.slice(0, 3);
  const rest   = entries.slice(3);
  const maxXP  = entries[0]?.xp ?? 1;

  return (
    <AppShell>
      <PageHeader
        title="Leaderboard"
        subtitle="See how you rank among your classmates"
        breadcrumbs={[{ label: 'Dashboard', href: '/' }, { label: 'Leaderboard' }]}
      />

      <Grid container spacing={2.5}>
        {/* Left: Leaderboard */}
        <Grid size={{ xs: 12, md:8 }}>
          {/* Podium */}
          {loading ? (
            <Skeleton variant="rounded" height={180} sx={{ mb: 2.5, borderRadius: 2 }} />
          ) : top3.length === 0 ? null : (
            <Paper elevation={0} sx={{ p: 3, mb: 2.5, background: 'linear-gradient(135deg, #556cd612, #f472b608)', border: '1px solid', borderColor: 'divider', borderRadius: 3 }}>
              <Typography variant="overline" color="text.secondary" fontWeight={700} letterSpacing={1} sx={{ display: 'block', mb: 2 }}>
                🏆 Top Performers
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: { xs: 2, sm: 4 } }}>
                {[top3[1], top3[0], top3[2]].filter(Boolean).map((entry, i) => {
                  const podiumRank = [2, 1, 3][i];
                  const meta = RANK_META[podiumRank] ?? { icon: String(podiumRank), color: '#556cd6', bg: '#556cd610' };
                  const height = podiumRank === 1 ? 90 : podiumRank === 2 ? 70 : 56;
                  return (
                    <Box key={entry.id} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                      <Typography sx={{ fontSize: 20 }}>{meta.icon}</Typography>
                      <Avatar sx={{ width: podiumRank === 1 ? 52 : 44, height: podiumRank === 1 ? 52 : 44,
                        bgcolor: entry.avatar_color, fontWeight: 700, fontSize: podiumRank === 1 ? 18 : 15,
                        border: entry.is_current_user ? '3px solid' : 'none', borderColor: 'primary.main' }}>
                        {entry.avatar_initials}
                      </Avatar>
                      <Typography variant="body2" fontWeight={700} sx={{ textAlign: 'center' }}>
                        {entry.name}
                        {entry.is_current_user && <Chip label="You" size="small" color="primary"
                          sx={{ ml: 0.5, height: 16, fontSize: 9, fontWeight: 700 }} />}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">{entry.xp.toLocaleString()} XP</Typography>
                      <Box sx={{ width: 64, height, bgcolor: meta.bg, border: '1px solid', borderColor: meta.color + '40',
                        borderRadius: '6px 6px 0 0', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', pt: 1 }}>
                        <Typography variant="h6" fontWeight={800} sx={{ color: meta.color }}>#{podiumRank}</Typography>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Paper>
          )}

          {/* Full list */}
          <Card>
            <CardContent sx={{ p: 0 }}>
              <Box sx={{ px: 2.5, py: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
                <Typography variant="subtitle1" fontWeight={700}>Full Rankings</Typography>
              </Box>
              {loading ? (
                Array.from({ length: 6 }).map((_, i) => (
                  <Box key={i} sx={{ display: 'flex', gap: 2, alignItems: 'center', px: 2.5, py: 1.5 }}>
                    <Skeleton variant="circular" width={36} height={36} />
                    <Box sx={{ flex: 1 }}><Skeleton variant="text" width="50%" /><Skeleton variant="text" width="30%" /></Box>
                    <Skeleton variant="text" width={60} />
                  </Box>
                ))
              ) : entries.length === 0 ? (
                <Box sx={{ p: 4 }}>
                  <EmptyState icon="🏅" title="No rankings yet" subtitle="Leaderboard data will appear once students earn XP." />
                </Box>
              ) : (
                entries.map((entry, i) => {
                  const meta = RANK_META[entry.rank];
                  const pct = Math.round((entry.xp / maxXP) * 100);
                  return (
                    <Box key={entry.id}>
                      <Box sx={{
                        display: 'flex', alignItems: 'center', gap: 2, px: 2.5, py: 1.5,
                        bgcolor: entry.is_current_user ? 'primary.main' + '08' : 'transparent',
                        borderLeft: entry.is_current_user ? '3px solid' : '3px solid transparent',
                        borderColor: entry.is_current_user ? 'primary.main' : 'transparent',
                        '&:hover': { bgcolor: 'action.hover' },
                      }}>
                        <Box sx={{ width: 28, textAlign: 'center' }}>
                          <Typography sx={{ fontSize: meta ? 18 : 14, fontWeight: 700, color: meta?.color ?? 'text.secondary' }}>
                            {meta?.icon ?? `#${entry.rank}`}
                          </Typography>
                        </Box>
                        <Avatar sx={{ width: 38, height: 38, bgcolor: entry.avatar_color, fontWeight: 700, fontSize: 14 }}>
                          {entry.avatar_initials}
                        </Avatar>
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                            <Typography variant="body2" fontWeight={600}>{entry.name}</Typography>
                            {entry.is_current_user && <Chip label="You" size="small" color="primary" sx={{ height: 18, fontSize: 10 }} />}
                          </Box>
                          <LinearProgress variant="determinate" value={pct}
                            sx={{ mt: 0.5, height: 4, '& .MuiLinearProgress-bar': { bgcolor: entry.avatar_color }, bgcolor: entry.avatar_color + '22' }} />
                        </Box>
                        <Box sx={{ textAlign: 'right', flexShrink: 0 }}>
                          <Typography variant="body2" fontWeight={800} color="secondary.main">
                            {entry.xp.toLocaleString()}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">XP</Typography>
                        </Box>
                      </Box>
                      {i < entries.length - 1 && <Divider />}
                    </Box>
                  );
                })
              )}
            </CardContent>
          </Card>
        </Grid>

        {/* Right: XP + Skills */}
        <Grid size={{ xs: 12, md:4 }} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
          <XPLevelCard stats={stats} loading={loading} />
          <SkillsPanel skills={skills} loading={loading} />
        </Grid>
      </Grid>
    </AppShell>
  );
}
