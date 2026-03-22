'use client';
import { Card, CardContent, Box, Typography, LinearProgress, Skeleton } from '@mui/material';
import type { SkillProgress } from '@/types/Course';
import EmptyState from '@/components/shared/EmptyState';

interface Props { skills: SkillProgress[]; loading?: boolean; }

export default function SkillsPanel({ skills, loading }: Props) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 2.5 }}>
        <Typography variant="overline" color="text.secondary" fontWeight={700} letterSpacing={1} sx={{ mb: 1.5, display: 'block' }}>
          Skill Progress
        </Typography>

        {loading ? (
          Array.from({ length: 5 }).map((_, i) => (
            <Box key={i} sx={{ mb: 2 }}>
              <Skeleton variant="text" width="60%" height={16} sx={{ mb: 0.5 }} />
              <Skeleton variant="rounded" height={7} sx={{ borderRadius: 2 }} />
            </Box>
          ))
        ) : skills.length === 0 ? (
          <EmptyState icon="📊" title="No skills tracked" subtitle="Your skill progress will show here as you complete lessons." />
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {skills.map(s => (
              <Box key={s.id}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                  <Typography variant="body2" fontWeight={500}>{s.skill}</Typography>
                  <Typography variant="body2" fontWeight={700} color="text.secondary">{s.progress}%</Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={s.progress}
                  sx={{
                    '& .MuiLinearProgress-bar': { bgcolor: s.color },
                    bgcolor: s.color + '22',
                  }}
                />
              </Box>
            ))}
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
