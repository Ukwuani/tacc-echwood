'use client';
import { Box, Typography, Paper, Chip, Grid } from '@mui/material';
import LocalFireDepartmentRoundedIcon from '@mui/icons-material/LocalFireDepartmentRounded';
import type { StudentStats } from '@/types/Course';

interface Props {
  stats: StudentStats | null;
  userName?: string;
}

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 17) return 'Good afternoon';
  return 'Good evening';
}

export default function WelcomeBanner({ stats, userName = 'Student' }: Props) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2.5, md: 3.5 },
        mb: 3,
        background: 'linear-gradient(135deg, #556cd618 0%, #8B9CE808 50%, #f472b608 100%)',
        border: '1px solid',
        borderColor: 'primary.main' + '22',
        borderRadius: 3,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative blob */}
      <Box sx={{
        position: 'absolute', top: -30, right: 80,
        width: 180, height: 180, borderRadius: '50%',
        background: 'radial-gradient(circle, #556cd614, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <Grid container alignItems="center" spacing={2}>
        <Grid size={{ xs: 12, md:7 }}>
          <Typography variant="h5" fontWeight={700} gutterBottom>
            {getGreeting()}, <Box component="span" color="primary.main">{userName}</Box> 👋
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {stats
              ? `You've studied ${stats.weekly_study_hours}h this week. Keep going to hit your ${stats.weekly_goal_hours}h goal!`
              : 'Welcome to your learning dashboard. Start exploring your courses!'}
          </Typography>
          {stats && (
            <Chip
              icon={<LocalFireDepartmentRoundedIcon sx={{ fontSize: '16px !important', color: '#f0b429 !important' }} />}
              label={`${stats.streak}-day learning streak — don't break it!`}
              size="small"
              sx={{ mt: 1.5, bgcolor: '#f0b42912', color: '#b07d00', fontWeight: 600, border: '1px solid #f0b42930' }}
            />
          )}
        </Grid>

        {stats && (
          <Grid size={{ xs: 12, md:5 }}>
            <Box sx={{ display: 'flex', gap: { xs: 2, md: 3 }, justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
              {[
                { num: stats.monthly_hours + 'h', label: 'This Month',  color: 'primary.main' },
                { num: stats.xp.toLocaleString(),  label: 'Total XP',   color: 'secondary.main' },
                { num: `Lvl ${stats.level}`,        label: 'Your Level', color: 'success.main' },
              ].map(s => (
                <Box key={s.label} sx={{ textAlign: 'center' }}>
                  <Typography variant="h5" fontWeight={800} color={s.color}>{s.num}</Typography>
                  <Typography variant="caption" color="text.secondary">{s.label}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        )}
      </Grid>
    </Paper>
  );
}
