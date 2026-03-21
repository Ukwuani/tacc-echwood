'use client';
import { Card, CardContent, Box, Typography, LinearProgress, Chip, Skeleton } from '@mui/material';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import type { StudentStats } from '@/types/Course';

const BADGES = [
  { label: '🔥 Streak Master', earned: true },
  { label: '📖 Bookworm',      earned: true },
  { label: '⚡ Fast Learner',  earned: true },
  { label: '🏆 Top 10%',       earned: false },
  { label: '🎯 Perfect Score', earned: false },
];

interface Props { stats: StudentStats | null; loading?: boolean; }

export default function XPLevelCard({ stats, loading }: Props) {
  if (loading) return (
    <Card><CardContent sx={{ p: 2.5 }}>
      <Skeleton variant="text" width="40%" />
      <Skeleton variant="rounded" height={8} sx={{ my: 1.5, borderRadius: 2 }} />
      <Skeleton variant="text" width="60%" />
    </CardContent></Card>
  );
  if (!stats) return null;

  const pct = Math.round(((stats.xp % 1000) / 1000) * 100);

  return (
    <Card>
      <CardContent sx={{ p: 2.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <EmojiEventsRoundedIcon sx={{ color: 'secondary.main' }} />
          <Typography variant="overline" color="text.secondary" fontWeight={700} letterSpacing={1}>
            Level Progress
          </Typography>
        </Box>

        <Box sx={{ p: 2, bgcolor: 'primary.main' + '0A', borderRadius: 2.5, mb: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2" color="text.secondary">Level {stats.level} → Level {stats.level + 1}</Typography>
            <Typography variant="body2" fontWeight={700} color="secondary.main">{stats.xp.toLocaleString()} XP</Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={pct}
            sx={{
              height: 10,
              background: 'linear-gradient(90deg, #556cd6, #f472b6)',
              '& .MuiLinearProgress-bar': {
                background: 'linear-gradient(90deg, #556cd6, #f472b6)',
              },
              bgcolor: 'primary.main' + '22',
            }}
          />
          <Typography variant="caption" color="text.secondary" sx={{ mt: 0.75, display: 'block' }}>
            {stats.xp_to_next.toLocaleString()} XP to next level
          </Typography>
        </Box>

        <Typography variant="overline" color="text.secondary" fontWeight={700} letterSpacing={1} sx={{ display: 'block', mb: 1 }}>
          Badges
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
          {BADGES.map(b => (
            <Chip
              key={b.label}
              label={b.label}
              size="small"
              sx={b.earned
                ? { bgcolor: '#f0b42912', color: '#7a5800', border: '1px solid #f0b42930', fontWeight: 600, fontSize: 11 }
                : { bgcolor: 'action.disabledBackground', color: 'text.disabled', fontSize: 11 }
              }
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
