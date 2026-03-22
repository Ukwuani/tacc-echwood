'use client';
import { Card, CardContent, Box, Typography, LinearProgress, Chip } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  title: string;
  value: string;
  subtitle: string;
  icon: ReactNode;
  iconBg: string;
  progress?: number;
  progressColor?: string;
  chip?: string;
  chipColor?: 'success' | 'error' | 'warning' | 'default';
}

export default function StatCard({ title, value, subtitle, icon, iconBg, progress, progressColor, chip, chipColor }: Props) {
  return (
    <Card>
      <CardContent sx={{ p: 2.5 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5 }}>
          <Box sx={{ width: 44, height: 44, borderRadius: 2.5, bgcolor: iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>
            {icon}
          </Box>
          {chip && <Chip label={chip} color={chipColor || 'default'} size="small" sx={{ fontWeight: 600, fontSize: 11 }} />}
        </Box>
        <Typography variant="h4" fontWeight={700} sx={{ mb: 0.25 }}>{value}</Typography>
        <Typography variant="caption" color="text.secondary" fontWeight={500}>{title}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: progress != null ? 1 : 0 }}>{subtitle}</Typography>
        {progress != null && (
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{ '& .MuiLinearProgress-bar': { bgcolor: progressColor || 'primary.main' }, bgcolor: progressColor ? progressColor + '22' : 'primary.main' + '22' }}
          />
        )}
      </CardContent>
    </Card>
  );
}
