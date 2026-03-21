'use client';
import { Card, CardContent, Box, Typography, LinearProgress, Chip, Button } from '@mui/material';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import type { Course } from '@/types/Course';

interface Props {
  course: Course;
  onScheduleClick: (course: Course) => void;
}

const statusLabel: Record<string, string> = {
  in_progress: 'In Progress',
  upcoming: 'Upcoming',
  completed: 'Completed',
};
const statusColor: Record<string, 'primary' | 'warning' | 'success'> = {
  in_progress: 'primary',
  upcoming: 'warning',
  completed: 'success',
};

export default function CourseCard({ course, onScheduleClick }: Props) {
  console.log('Rendering CourseCard for', course);
  return (
    <Card sx={{
      height: '100%', display: 'flex', flexDirection: 'column',
      transition: 'transform .2s, box-shadow .2s',
      '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 8px 30px rgba(0,0,0,0.10)' },
      cursor: 'pointer',
    }}
      onClick={() => onScheduleClick(course)}
    >
      {/* Thumb */}
      <Box sx={{
        height: 110, display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: `linear-gradient(135deg, ${course.color}33, ${course.color}11)`,
        fontSize: 48,
        borderBottom: '1px solid', borderColor: 'divider',
      }}>
        {course.emoji}
      </Box>

      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.75 }}>
          <Chip
            label={course.subject}
            size="small"
            sx={{ bgcolor: course.color + '1A', color: course.color, fontWeight: 600, fontSize: 10 }}
          />
          <Chip
            label={statusLabel[course.status]}
            color={statusColor[course.status]}
            size="small"
            variant="outlined"
            sx={{ fontSize: 10 }}
          />
        </Box>
        <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 0.25, lineHeight: 1.3 }}>{course.title}</Typography>
        <Typography variant="caption" color="text.secondary" sx={{ mb: 1.5 }}>👤 {course?.instructor?.name}</Typography>

        <Box sx={{ mb: 1.5 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
            <Typography variant="caption" color="text.secondary">Progress</Typography>
            <Typography variant="caption" fontWeight={600} color="text.primary">{course.progress}%</Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={course.progress}
            sx={{
              '& .MuiLinearProgress-bar': { bgcolor: course.color },
              bgcolor: course.color + '22',
            }}
          />
          <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
            {course.completed_lessons}/{course.total_lessons} lessons
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1.5, flex: 1 }}>
          <PlayArrowRoundedIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
          <Typography variant="caption" color="text.secondary">{course.next_lesson}</Typography>
        </Box>

        <Button
          variant="contained"
          size="small"
          startIcon={<CalendarMonthRoundedIcon />}
          onClick={e => { e.stopPropagation(); onScheduleClick(course); }}
          sx={{ bgcolor: course.color, '&:hover': { bgcolor: course.color, opacity: 0.88 }, mt: 'auto' }}
          fullWidth
        >
          View Schedule
        </Button>
      </CardContent>
    </Card>
  );
}
