"use client"; // only if using App Router

import { useEffect, useState } from "react";
import { supabase } from "../../src/lib/supabase";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Box,
  Button,
  Alert,
} from "@mui/material";
import { useRouter } from "next/navigation"; // or next/router for Pages Router
import DashboardLayout from "./_layout";

interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail_url?: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);

      // Get current user
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.push("/register"); // redirect if not logged in
        return;
      }

      // Query purchased courses (joined with courses table)
      const { data, error } = await supabase
        .from("purchases")
        .select("courses(id, title, description, thumbnail_url)")
        .eq("user_id", session.user.id);

      if (error) {
        setMessage(error.message);
      } else {
        const purchasedCourses = data.map((item: any) => item.courses);
        setCourses(purchasedCourses);
      }

      setLoading(false);
    };

    fetchCourses();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/register");
  };

  return (
    <>
    <DashboardLayout>

      {/* Page Content */}
      <Container maxWidth="lg" sx={{ mt: 6, minHeight:"60vh" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          My Courses
        </Typography>

        {loading ? (
          <Box display="flex" justifyContent="center" mt={8}>
            <CircularProgress />
          </Box>
        ) : message ? (
          <Alert severity="error" sx={{ mt: 3 }}>
            {message}
          </Alert>
        ) : courses.length > 0 ? (
          <Grid container spacing={4}>
            {courses.map((course) => (
              <Grid  size={{ xs: 12, sm:6, md: 4 }} key={course.id}>
                <Card
                  sx={{
                    borderRadius: 4,
                    boxShadow: 6,
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: 12,
                    },
                  }}
                >
                  {course.thumbnail_url && (
                    <CardMedia
                      component="img"
                      height="180"
                      image={course.thumbnail_url}
                      alt={course.title}
                      sx={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
                    />
                  )}
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {course.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 1 }}
                    >
                      {course.description.length > 100
                        ? course.description.slice(0, 100) + "..."
                        : course.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box textAlign="center" mt={10}>
            <Typography variant="h6" color="text.secondary">
              You haven’t purchased any courses yet.
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 3,
                borderRadius: 3,
                py: 1.2,
                px: 4,
                textTransform: "none",
                background: "black",
              }}
              onClick={() => router.push("/courses")}
            >
              Browse Courses
            </Button>
          </Box>
        )}
      </Container>
      </DashboardLayout>
    </>
  );
}
