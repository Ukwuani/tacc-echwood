'use client';
import { Box, Typography, Breadcrumbs, Link } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
  action?: ReactNode;
}

export default function PageHeader({ title, subtitle, breadcrumbs, action }: Props) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
      <Box>
        {breadcrumbs && (
          <Breadcrumbs sx={{ mb: 0.5 }}>
            {breadcrumbs.map((b, i) =>
              b.href ? (
                <Link key={i} href={b.href} underline="hover" color="text.secondary" variant="caption">{b.label}</Link>
              ) : (
                <Typography key={i} variant="caption" color="text.primary" fontWeight={600}>{b.label}</Typography>
              )
            )}
          </Breadcrumbs>
        )}
        <Typography variant="h5" fontWeight={700}>{title}</Typography>
        {subtitle && <Typography variant="body2" color="text.secondary" sx={{ mt: 0.25 }}>{subtitle}</Typography>}
      </Box>
      {action && <Box sx={{ ml: 2 }}>{action}</Box>}
    </Box>
  );
}
