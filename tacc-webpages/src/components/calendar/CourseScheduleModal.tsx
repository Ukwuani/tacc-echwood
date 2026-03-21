'use client';
import React, { useEffect, useState, useCallback } from 'react';
import {
  Dialog, DialogTitle, DialogContent, Box, Typography, IconButton,
  Chip, Button, Divider, Skeleton, Tooltip, Grid, Paper, Alert,
} from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import dayjs, { Dayjs } from 'dayjs';
import type { Course, CourseEvent } from '@/types/Course';
import { fetchEventsByCourse } from '@/lib/data';
import EmptyState from '@/components/shared/EmptyState';

const TYPE_META: Record<string, { label: string; color: string; icon: string }> = {
  live:     { label: 'Live Session',   color: '#34d399', icon: '🎙' },
  workshop: { label: 'Workshop',       color: '#556cd6', icon: '🛠' },
  review:   { label: 'Review',         color: '#f0b429', icon: '🔍' },
  guest:    { label: 'Guest Lecture',  color: '#f472b6', icon: '🎓' },
};

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

interface Props {
  course: Course | null;
  open: boolean;
  onClose: () => void;
}

export default function CourseScheduleModal({ course, open, onClose }: Props) {
  const [events, setEvents] = useState<CourseEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedDay, setSelectedDay] = useState<Dayjs | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    if (!course || !open) return;
    setLoading(true);
    setSelectedDay(null);
    fetchEventsByCourse(course.id).then(data => {
      setEvents(data);
      setLoading(false);
    });
  }, [course, open]);

  const eventsByDate = useCallback(() => {
    const map: Record<string, CourseEvent[]> = {};
    events.forEach(e => {
      const key = e.event_date.slice(0, 10);
      if (!map[key]) map[key] = [];
      map[key].push(e);
    });
    return map;
  }, [events]);

  const visibleEvents = selectedDay
    ? events.filter(e => e.event_date.slice(0, 10) === selectedDay.format('YYYY-MM-DD'))
    : events.filter(e => {
        const d = dayjs(e.event_date);
        return d.month() === currentDate.month() && d.year() === currentDate.year();
      });

  const handleCopy = (link: string, id: string) => {
    navigator.clipboard.writeText(link).then(() => {
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  // ── Calendar grid ──
  const startOfMonth = currentDate.startOf('month');
  const daysInMonth = currentDate.daysInMonth();
  const firstDayOfWeek = startOfMonth.day();
  const today = dayjs();
  const emap = eventsByDate();

  const calCells: (Dayjs | null)[] = [
    ...Array(firstDayOfWeek).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => startOfMonth.add(i, 'day')),
  ];

  if (!course) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{ sx: { borderRadius: 3, overflow: 'hidden' } }}
    >
      {/* Header */}
      <DialogTitle sx={{ p: 0 }}>
        <Box sx={{
          px: 3, py: 2.5,
          background: `linear-gradient(135deg, ${course.color}22, ${course.color}08)`,
          borderBottom: '1px solid', borderColor: 'divider',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{
              width: 48, height: 48, borderRadius: 2, fontSize: 26,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              bgcolor: course.color + '22',
            }}>{course.emoji}</Box>
            <Box>
              <Chip label={course.subject} size="small"
                sx={{ bgcolor: course.color + '1A', color: course.color, fontWeight: 600, fontSize: 10, mb: 0.5 }} />
              <Typography variant="h6" fontWeight={700}>{course.title}</Typography>
              <Typography variant="caption" color="text.secondary">👤 {course?.instructor?.name}</Typography>
            </Box>
          </Box>
          <IconButton onClick={onClose} size="small"
            sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider' }}>
            <CloseRoundedIcon fontSize="small" />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent sx={{ p: 0 }}>
        <Grid container sx={{ minHeight: 480 }}>

          {/* ── Left: Calendar ── */}
          <Grid size={{ xs: 12, md:5 }} sx={{ borderRight: '1px solid', borderColor: 'divider', p: 2.5 }}>
            {/* Month nav */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="subtitle1" fontWeight={700}>
                {MONTHS[currentDate.month()]} {currentDate.year()}
              </Typography>
              <Box sx={{ display: 'flex', gap: 0.5 }}>
                <IconButton size="small" onClick={() => { setCurrentDate(d => d.subtract(1, 'month')); setSelectedDay(null); }}
                  sx={{ border: '1px solid', borderColor: 'divider' }}>
                  <ChevronLeftRoundedIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" onClick={() => { setCurrentDate(d => d.add(1, 'month')); setSelectedDay(null); }}
                  sx={{ border: '1px solid', borderColor: 'divider' }}>
                  <ChevronRightRoundedIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>

            {/* Day labels */}
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', mb: 0.5 }}>
              {DAYS.map(d => (
                <Typography key={d} variant="caption" color="text.secondary"
                  fontWeight={600} sx={{ textAlign: 'center', py: 0.5, fontSize: 10 }}>
                  {d}
                </Typography>
              ))}
            </Box>

            {/* Cells */}
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 0.25 }}>
              {calCells.map((day, i) => {
                if (!day) return <Box key={i} />;
                const key = day.format('YYYY-MM-DD');
                const hasEvent = !!emap[key]?.length;
                const isToday = day.isSame(today, 'day');
                const isSelected = selectedDay?.isSame(day, 'day');
                return (
                  <Box
                    key={i}
                    onClick={() => setSelectedDay(isSelected ? null : day)}
                    sx={{
                      aspectRatio: '1', borderRadius: 1.5,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexDirection: 'column', cursor: hasEvent ? 'pointer' : 'default',
                      bgcolor: isSelected ? course.color : isToday ? 'primary.main' + '18' : 'transparent',
                      border: isToday && !isSelected ? '1.5px solid' : '1.5px solid transparent',
                      borderColor: isToday && !isSelected ? 'primary.main' : 'transparent',
                      '&:hover': hasEvent ? { bgcolor: isSelected ? course.color : course.color + '18' } : {},
                      position: 'relative',
                    }}
                  >
                    <Typography variant="caption" fontWeight={isToday || isSelected ? 700 : 400}
                      sx={{ fontSize: 12, color: isSelected ? '#fff' : 'text.primary', lineHeight: 1 }}>
                      {day.date()}
                    </Typography>
                    {hasEvent && (
                      <Box sx={{
                        width: 4, height: 4, borderRadius: '50%', mt: 0.25,
                        bgcolor: isSelected ? '#fff' : course.color,
                      }} />
                    )}
                  </Box>
                );
              })}
            </Box>

            {/* Legend */}
            <Box sx={{ mt: 2, pt: 2, borderTop: '1px solid', borderColor: 'divider' }}>
              <Typography variant="caption" color="text.secondary" fontWeight={600} sx={{ mb: 1, display: 'block', textTransform: 'uppercase', letterSpacing: '.06em' }}>
                Session Types
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                {Object.entries(TYPE_META).map(([key, val]) => (
                  <Chip key={key} label={`${val.icon} ${val.label}`} size="small"
                    sx={{ bgcolor: val.color + '15', color: val.color, fontWeight: 600, fontSize: 10 }} />
                ))}
              </Box>
            </Box>
          </Grid>

          {/* ── Right: Events List ── */}
          <Grid size={{ xs: 12, md:7 }} sx={{ p: 2.5, overflow: 'auto', maxHeight: 520 }}>
            <Typography variant="subtitle2" color="text.secondary" fontWeight={600}
              sx={{ mb: 1.5, textTransform: 'uppercase', letterSpacing: '.06em', fontSize: 11 }}>
              {selectedDay ? `Sessions — ${selectedDay.format('MMMM D, YYYY')}` : `All Sessions This Month`}
            </Typography>

            {loading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} variant="rounded" height={110} sx={{ mb: 1.5, borderRadius: 2 }} />
              ))
            ) : visibleEvents.length === 0 ? (
              <EmptyState
                icon="📭"
                title="No sessions yet"
                subtitle={selectedDay
                  ? "There are no sessions scheduled on this day."
                  : "No sessions are scheduled this month. Check back later."}
              />
            ) : (
              visibleEvents.map(event => {
                const meta = TYPE_META[event.type] ?? TYPE_META.live;
                const eventDay = dayjs(event.event_date);
                return (
                  <Paper
                    key={event.id}
                    variant="outlined"
                    sx={{
                      p: 2, mb: 1.5, borderRadius: 2,
                      borderLeft: `4px solid ${meta.color}`,
                      transition: 'box-shadow .2s',
                      '&:hover': { boxShadow: '0 4px 16px rgba(0,0,0,0.08)' },
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                      <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                          <Chip label={`${meta.icon} ${meta.label}`} size="small"
                            sx={{ bgcolor: meta.color + '15', color: meta.color, fontWeight: 600, fontSize: 10 }} />
                        </Box>
                        <Typography variant="subtitle2" fontWeight={700}>{event.title}</Typography>
                      </Box>
                      <Box sx={{ textAlign: 'right', flexShrink: 0, ml: 2 }}>
                        <Typography variant="caption" fontWeight={700} color="primary.main" sx={{ display: 'block' }}>
                          {eventDay.format('MMM D')}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">{event.event_time}</Typography>
                      </Box>
                    </Box>

                    {event.description && (
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5, fontSize: 13 }}>
                        {event.description}
                      </Typography>
                    )}

                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Button
                        variant="contained"
                        size="small"
                        startIcon={<VideocamRoundedIcon />}
                        href={event.meeting_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ bgcolor: meta.color, '&:hover': { bgcolor: meta.color, opacity: 0.85 }, fontSize: 12 }}
                      >
                        Join Meeting
                      </Button>
                      <Tooltip title={copied === event.id ? 'Copied!' : 'Copy link'}>
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<ContentCopyRoundedIcon />}
                          onClick={() => handleCopy(event.meeting_link, event.id)}
                          sx={{ fontSize: 12, borderColor: 'divider', color: 'text.secondary' }}
                        >
                          {copied === event.id ? 'Copied!' : 'Copy Link'}
                        </Button>
                      </Tooltip>
                      <Tooltip title="Open in new tab">
                        <IconButton
                          size="small"
                          href={event.meeting_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ border: '1px solid', borderColor: 'divider', color: 'text.secondary' }}
                        >
                          <OpenInNewRoundedIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </Paper>
                );
              })
            )}
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
