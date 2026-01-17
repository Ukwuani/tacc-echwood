'use client'

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { supabase } from '../../src/lib/supabase'
import { Course } from '../../src/types/Course'
import DefaultLayout from '../../src/DefaultLayout'

// type Course = {
//   title: string
//   image: string
//   description: string
//   link: string
//   tags: string[]
//   duration: string
// }

// const courses: Course[] = [
//   {
//     title: 'PLC Programming',
//     image: '/imgs/plc-course.webp',
//     description:
//       'Learn the foundations of PLC logic, ladder diagrams, and real-world applications.',
//     link: '/courses/plc-programming',
//     tags: ['Beginner', 'PLC'],
//     duration: '4 Weeks',
//   },
//   {
//     title: 'TIA Portal',
//     image: '/imgs/tia.webp',
//     description:
//       'Master Siemens TIA Portal for configuring, programming, and troubleshooting.',
//     link: '/courses/tia-portal',
//     tags: ['Intermediate', 'Siemens'],
//     duration: '5 Weeks',
//   },
//   {
//     title: 'SCADA',
//     image: '/imgs/scada_dash.webp',
//     description:
//       'Design real-time SCADA systems for process monitoring and control.',
//     link: '/courses/scada',
//     tags: ['SCADA', 'HMI'],
//     duration: '3 Weeks',
//   },
//   {
//     title: 'Advanced Ignition',
//     image: '/imgs/igntion.webp',
//     description:
//       'Deep dive into Ignition 8.3 with scripting, Perspective, and advanced deployment.',
//     link: '/courses/advanced-ignition',
//     tags: ['Advanced', 'Ignition'],
//     duration: '6 Weeks',
//   },
//   {
//     title: 'Unified Namespace (UNS)',
//     image: '/imgs/uns.webp',
//     description:
//       'Learn modern data structuring in industrial systems using Unified Namespace.',
//     link: '/courses/uns',
//     tags: ['MQTT', 'Architecture'],
//     duration: '2 Weeks',
//   },
//   {
//     title: 'AI in Smart Factory',
//     image: '/imgs/ai.webp',
//     description:
//       'Apply AI for predictive maintenance and intelligent automation in smart factories.',
//     link: '/courses/ai-smart-factory',
//     tags: ['AI', 'Industry 4.0'],
//     duration: '4 Weeks',
//   },
// ]

export default function CoursesPage() {
  const [tagFilter, setTagFilter] = useState<string>('All')
  const [sortBy, setSortBy] = useState<string>('title')
   const router = useRouter();
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchCourses = async () => {
        setLoading(true);
  
        // Query purchased courses (joined with courses table)
        const { data, error } = await supabase.from("courses").select();
      console.log(data)
        if (error) {
          setMessage(error.message);
        } else {
          setCourses(data);
        }
  
        setLoading(false);
      };
  
      fetchCourses();
    }, [router]);
  

  const uniqueTags = [
    'All',
    ...Array.from(new Set(courses?.flatMap((course) => course.tags))),
  ]

  const handleFilterChange = (event: SelectChangeEvent) => {
    setTagFilter(event.target.value)
  }

  const handleSortChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value)
  }

  const filteredCourses = courses
    .filter((course) =>
      tagFilter === 'All' ? true : course.tags.includes(tagFilter)
    )
    .sort((a, b) =>
      sortBy === 'title'
        ? a.title.localeCompare(b.title)
        : a.instructor.duration.localeCompare(b.instructor.duration)
    )

  return (
    <DefaultLayout>
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" fontWeight="bold" align="center" gutterBottom>
        Explore Our Courses
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" mb={4}>
        Hands-on training in PLCs, SCADA, UNS, Ignition, and AI for Industry 4.0.
      </Typography>

      {/* Filter & Sort Controls */}
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        justifyContent="center"
        alignItems="center"
        mb={4}
      >
        <FormControl size="small" sx={{ minWidth: 160 }}>
          <InputLabel>Filter by Tag</InputLabel>
          <Select value={tagFilter} label="Filter by Tag" onChange={handleFilterChange}>
            {uniqueTags.map((tag) => (
              <MenuItem key={tag} value={tag}>
                {tag}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ minWidth: 160 }}>
          <InputLabel>Sort by</InputLabel>
          <Select value={sortBy} label="Sort by" onChange={handleSortChange}>
            <MenuItem value="title">Title (A-Z)</MenuItem>
            <MenuItem value="duration">Duration</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      {/* Course Cards */}
      <Grid container spacing={4}>
        {filteredCourses.map((course) => (
          <Grid  key={course.title} size={{ xs: 12, sm:6, md: 6 }}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: "1.66rem" }}>
              <CardMedia
                component="img"
                height="180"
                image={course.thumbnail_url}
                alt={course.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {course.description}
                </Typography>
                <Stack direction="row" spacing={1} mt={1} flexWrap="wrap">
                  {course.tags.map((tag) => (
                    <Chip key={tag} label={tag} size="small" color="warning"/>
                  ))}
                </Stack>
              </CardContent>
              <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                <Typography variant="caption" color="text.secondary">
                  ⏱️ {course.instructor.duration}
                </Typography>
                <Button size="small" href={`/courses/${course.slug}`}>
                  View Course
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </DefaultLayout>
  )
}
