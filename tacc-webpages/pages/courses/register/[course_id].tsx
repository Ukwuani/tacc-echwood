"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../src/lib/supabase";
import {
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
  Box,
  Alert,
  CircularProgress,
  Paper,
  InputAdornment,
  Grid,
} from "@mui/material";
import { Email, Person, Phone, School } from "@mui/icons-material";
import { error } from "console";

export default function CourseRegistration() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [courseId, setCourseId] = useState("");
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [userExists, setUserExists] = useState(true);
  const [message, setMessage] = useState<{ type: "success" | "error" | "info"; text: string } | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      const { data, error } = await supabase.from("courses").select("*");
      if (!error && data) setCourses(data);
    };
    fetchCourses();
  }, []);

  const checkUserExists = async () => {
    if (!email) return;
    setLoading(true);
    let res: any = {}
    try {
     res = await fetch(process.env.NEXT_PUBLIC_SUPABASE_URL+"/api/get-user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });} catch  {
  }
  
  const data = await res?.json();
  console.log(data)
  if (data?.user) {
    console.log("User exists:", data.user);
  } else {
    console.log("User not found");
  }

    if (!data) {
      setMessage({ type: "error", text: "You don't have an account yet, we will create one." });
      setUserExists(false);
    } else if (data) {
      setUserExists(true);
      setMessage({ type: "info", text: "You've got an account, let's register this course" });
    } else {
      setUserExists(false);
      setMessage(null);
    }
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userExists) return;

    if (!firstName || !lastName || !email || !phone || !courseId) {
      setMessage({ type: "error", text: "Please fill all fields." });
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("course_registrations").insert([
      { first_name: firstName, last_name: lastName, email, phone, course_id: courseId },
    ]);

    if (error) {
      setMessage({ type: "error", text: error.message });
    } else {
      setMessage({ type: "success", text: "Registration successful!" });
      setFirstName(""); setLastName(""); setEmail(""); setPhone(""); setCourseId("");
    }
    setLoading(false);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #b4e5bc 0%, #ccc1f0 100%)",
        p: 2,
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={12}
          sx={{
            p: 5,
            borderRadius: 4,
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(12px)",
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center">
            Course Registration
          </Typography>
          <Typography variant="body1" color="text.secondary" textAlign="center" mb={4}>
            Fill in your details to enroll in a course. We'll check if you're already registered.
          </Typography>

          {message && <Alert severity={message.type} sx={{ mb: 3 }}>{message.text}</Alert>}

          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {/* Email first */}
              <Grid  size={{xs:12, md:12}}>
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={checkUserExists}
                  disabled={loading}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              {!userExists && (
                <>
                  <Grid size={{xs:12, sm:6}}>
                    <TextField
                      label="First Name"
                      fullWidth
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Person />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid size={{xs:12, sm:6}}>
                    <TextField
                      label="Last Name"
                      fullWidth
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Person />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid size={{xs:12}}>
                    <TextField
                      label="Phone"
                      fullWidth
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Phone />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                </>
              )}

               <Grid size={{xs:12}}>
                    <TextField
                      select
                      label="Select Course"
                      fullWidth
                      required
                      value={courseId}
                      onChange={(e) => setCourseId(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <School />
                          </InputAdornment>
                        ),
                      }}
                    >
                      {courses.map((course) => (
                        <MenuItem key={course.id} value={course.id}>
                          {course.title}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid size={{xs:12}}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{
                        mt: 2,
                        py: 1.5,
                        fontSize: "1rem",
                        fontWeight: "bold",
                        borderRadius: 3,
                        background: "black",
                      }}
                      disabled={loading}
                    >
                      {loading ? <CircularProgress size={24} /> : "Register"}
                    </Button>
                  </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
