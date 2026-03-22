'use client';
import { Card, CardContent, Box, Typography, Skeleton } from '@mui/material';
import type { Activity } from '@/types/Course';
import EmptyState from '@/components/shared/EmptyState';

interface Props { items: Activity[]; loading?: boolean; }

export default function ActivityFeed({ items, loading }: Props) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 2.5 }}>
        <Typography variant="overline" color="text.secondary" fontWeight={700} letterSpacing={1}>
          Recent Activity
        </Typography>

        {loading ? (
          Array.from({ length: 5 }).map((_, i) => (
            <Box key={i} sx={{ display: 'flex', gap: 1.5, mt: 1.5 }}>
              <Skeleton variant="circular" width={8} height={8} sx={{ mt: 0.75, flexShrink: 0 }} />
              <Box sx={{ flex: 1 }}>
                <Skeleton variant="text" width="80%" height={18} />
                <Skeleton variant="text" width="40%" height={14} />
              </Box>
            </Box>
          ))
        ) : items.length === 0 ? (
          <EmptyState icon="📋" title="No activity yet" subtitle="Your learning activity will appear here." />
        ) : (
          <Box sx={{ mt: 1.5 }}>
            {items.map((item, i) => (
              <Box key={item.id} sx={{ display: 'flex', gap: 1.5, pb: i < items.length - 1 ? 1.5 : 0 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: item.color, mt: 0.75 }} />
                  {i < items.length - 1 && (
                    <Box sx={{ width: 1, flex: 1, bgcolor: 'divider', mt: 0.5, minHeight: 12 }} />
                  )}
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
                    <Box component="span" sx={{ mr: 0.5 }}>{item.icon}</Box>
                    {item.description}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">{item.time}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
