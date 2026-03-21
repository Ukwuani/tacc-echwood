'use client';
import { Card, CardContent, Box, Typography, Button, Skeleton, Chip } from '@mui/material';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import dayjs from 'dayjs';
import type { CourseEvent } from '@/types/Course';
import EmptyState from '@/components/shared/EmptyState';

interface Props { events: CourseEvent[]; loading?: boolean; }

const TYPE_COLOR: Record<string, string> = {
  live: '#34d399', workshop: '#556cd6', review: '#f0b429', guest: '#f472b6',
};

export default function UpcomingEvents({ events, loading }: Props) {
  const today = dayjs();
  const upcoming = events
    .filter(e => dayjs(e.event_date).isSame(today, 'day') || dayjs(e.event_date).isAfter(today))
    .sort((a, b) => a.event_date.localeCompare(b.event_date))
    .slice(0, 5);

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 2.5 }}>
        <Typography variant="overline" color="text.secondary" fontWeight={700} letterSpacing={1} sx={{ mb: 1.5, display: 'block' }}>
          Upcoming Sessions
        </Typography>

        {loading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} variant="rounded" height={64} sx={{ mb: 1, borderRadius: 2 }} />
          ))
        ) : upcoming.length === 0 ? (
          <EmptyState icon="📅" title="No upcoming sessions" subtitle="Your scheduled sessions will appear here." />
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {upcoming.map(event => {
              const d = dayjs(event.event_date);
              const color = TYPE_COLOR[event.type] ?? '#556cd6';
              const isToday = d.isSame(today, 'day');
              return (
                <Box
                  key={event.id}
                  sx={{
                    display: 'flex', alignItems: 'center', gap: 1.5,
                    p: 1.25, borderRadius: 2,
                    border: '1px solid', borderColor: 'divider',
                    borderLeft: `3px solid ${color}`,
                    '&:hover': { bgcolor: 'action.hover' },
                  }}
                >
                  <Box sx={{ textAlign: 'center', minWidth: 36 }}>
                    <Typography variant="caption" fontWeight={800} sx={{ color, lineHeight: 1, display: 'block' }}>
                      {d.format('MMM').toUpperCase()}
                    </Typography>
                    <Typography variant="body2" fontWeight={700} sx={{ lineHeight: 1 }}>{d.date()}</Typography>
                  </Box>
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography variant="body2" fontWeight={600} noWrap>{event.title}</Typography>
                    <Typography variant="caption" color="text.secondary">{event.event_time}</Typography>
                    {isToday && <Chip label="Today" size="small" color="error" sx={{ ml: 0.5, height: 16, fontSize: 10 }} />}
                  </Box>
                  <Button
                    variant="contained"
                    size="small"
                    startIcon={<VideocamRoundedIcon sx={{ fontSize: '14px !important' }} />}
                    href={event.meeting_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ bgcolor: color, '&:hover': { bgcolor: color, opacity: 0.85 }, fontSize: 11, px: 1, py: 0.4, minWidth: 0, whiteSpace: 'nowrap' }}
                  >
                    Join
                  </Button>
                </Box>
              );
            })}
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
