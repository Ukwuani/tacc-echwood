"use client";

import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Typography,
  Divider,
  Avatar,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { supabase } from "../../src/lib/supabase";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Course } from "../../src/types/Course";

export default function CourseDetailPage() {

  const router = useRouter();
  const [courses, setCourses] = useState<Course>();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);

      // Query purchased courses (joined with courses table)
      const { data, error } = await supabase.from("courses").select()
      .ilike("slug", router?.query.course as string)
      .single()

      if (error) {
        setMessage(error.message);
      } else {
        setCourses(data);
      }

      setLoading(false);
    };

    fetchCourses();
  }, [router]);

  return (
    <Box sx={{ pb: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: "#feecd3",
          py: { xs: 6, md: 10 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Chip label="Featured Course" sx={{ mb: 2 }} />
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            {courses?.title}
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
            {courses?.description}
          </Typography>
          <Button
          href='/courses/register/enroll'
            variant="contained"
            sx={{
              mx: 1,
              background: "black",
              borderRadius: 100,
              fontWeight: "bold",
              fontSize: { xs: 8, md: 12 },
              px: { xs: 2, md: 6 },
            }}
            size="large"
          >
            Enroll Now
          </Button>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Grid container spacing={6}>
          {/* Left: Course Details */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography variant="h5" gutterBottom>
              What You'll Learn
            </Typography>
            <List dense>
              {courses?.objectives.map((point, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckCircleIcon color="warning" />
                  </ListItemIcon>
                  <ListItemText primary={point} />
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Right: Sidebar */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                p: 3,
                // border: '1px solid #ddd',
                borderRadius: "1.66rem",
                backgroundColor: "#f2fbf2",
              }}
            >
              <Typography variant="subtitle1" gutterBottom>
                Instructor
              </Typography>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                sx={{ mb: 2 }}
              >
                <Avatar src={courses?.instructor?.image} alt="Instructor" />
                <Box>
                  <Typography variant="body1" fontWeight="medium">
                    {courses?.instructor?.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {courses?.instructor?.title}
                  </Typography>
                </Box>
              </Stack>

              <Typography variant="subtitle1" sx={{ mt: 2 }}>
                Course Details
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemText
                    primary="Duration"
                    secondary={courses?.instructor?.duration}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Level"
                    secondary={courses?.instructor?.level}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Certificate"
                    secondary={courses?.instructor?.certificate}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Format"
                    secondary={courses?.instructor?.format}
                  />
                </ListItem>
              </List>

              <Button
              href='/courses/register/enroll'
                variant="contained"
                sx={{
                  mx: 1,
                  background: "black",
                  borderRadius: 100,
                  fontWeight: "bold",
                  fontSize: { xs: 8, md: 12 },
                  px: { xs: 2, md: 6 },
                }}
                fullWidth
              >
                Enroll Now
              </Button>
            </Box>
          </Grid>
        </Grid>

      <Divider sx={{ my: 4 }} />
        {/* Course Content Outline */}

        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Course Outline
        </Typography>

        <Grid container sx={{ my: 4 }}>
          {courses?.outline.map(({ title, items }, index) => (
            <Grid
              size={{ xs: 12, md: 5 }}
              sx={{ background: "#f7f7f6", borderRadius: '1rem', m: 2, p:2 }}
            >
              <Typography variant="h6" key={index}>
                🔗 {title}
              </Typography>

              {items.map((item, index) => (
                <Typography sx={{ ml: 4 }} key={index}>
                  {" "}
                  - {item}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
      </Container>


      <Divider sx={{ my: 6 }} />
      {/* CTA */}
      <Box textAlign="center">
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Ready to Future-Proof Your Automation Career?
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={3}>
          Enroll today and gain practical, job-ready skills with hands-on labs,
          expert guidance, and certification.
        </Typography>
        <Button
        href='/courses/register/enroll'
          variant="contained"
          sx={{
            mx: 1,
            background: "black",
            borderRadius: 100,
            fontWeight: "bold",
            fontSize: { xs: 8, md: 12 },
            px: { xs: 2, md: 6 },
          }}
          size="large"
        >
          Enroll Now
        </Button>
      </Box>
    </Box>
  );
}
