'use client';
import { Box, Typography, Button } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  icon: string;
  title: string;
  subtitle: string;
  action?: { label: string; onClick: () => void };
}

export default function EmptyState({ icon, title, subtitle, action }: Props) {
  return (
    <Box sx={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', py: 8, px: 3, textAlign: 'center',
    }}>
      <Box sx={{ fontSize: 56, mb: 2, lineHeight: 1 }}>{icon}</Box>
      <Typography variant="h6" fontWeight={600} gutterBottom>{title}</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 340, mb: action ? 3 : 0 }}>
        {subtitle}
      </Typography>
      {action && (
        <Button variant="contained" onClick={action.onClick}>{action.label}</Button>
      )}
    </Box>
  );
}
