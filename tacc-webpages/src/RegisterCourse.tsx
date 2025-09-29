"use client";

import { useEffect, useState } from "react";
import { paystack_public_key, supabase } from "./lib/supabase";
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
  IconButton,
} from "@mui/material";
import { Email, Person, Phone, School, Send } from "@mui/icons-material";
import Paystack from "@paystack/inline-js";
import { Scholarship } from "./types/Scholarship";
import { Course } from "./types/Course";
import { useRouter } from "next/router";

export default function CourseRegistration() {
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [scholarshipCode, setScholarshipCode] = useState("");
  const [scholarship, setScholarship] = useState<Scholarship>();
  const [amount, setAmount] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState<Course>();
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);
  const [userExists, setUserExists] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error" | "info";
    text: string;
    action?: string;
  } | null>(null);
  const router = useRouter()

  const checkUserExists = async () => {
    const { data, error } = await supabase.auth.getUser();
    if (!error) {
      setUserId(data?.user?.id)
      setEmail(data?.user?.email as string);
      setFirstName(data?.user?.user_metadata["first_name"] as string);
      setLastName(data?.user?.user_metadata["last_name"] as string);
    }

    console.log(data);

    if (!data?.user) {
      setMessage({
        type: "error",
        text: "You don't have an account yet, we will create one.",
        action: "need-login",
      });
      setUserExists(false);
    } else if (data?.user) {
      setUserExists(true);
      setMessage({
        type: "info",
        text: "You've got an account, let's register this course",
      });
    } else {
      setUserExists(false);
      setMessage(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    const fetchCourses = async () => {
      const { data, error } = await supabase.from("courses").select("*");
      if (!error && data) setCourses(data);
    };
    checkUserExists();
    fetchCourses();
  }, []);

  const setCourse = (value: any) => {
    console.log(value);
  };

  const checkScholarship = async () => {
    const { data, error } = await supabase
      .from("scholarship")
      .select("*")
      .eq("code", scholarshipCode)
      .limit(1)
      .single();

    if (!error) {
      setScholarship(data);
    }
  };

  const registerCourse = async () => {
    const { error } = await supabase.from("purchases").insert([
      {
        user_id: userId,
        phone,
        course_id: selectedCourse?.id,
        scholarship: scholarship?.id,
        amount: (selectedCourse?.amount ?? 1) * (scholarship?.rate ?? 1),
      },
    ]);

    if (error) {
      setMessage({ type: "error", text: error.message });
    } else {
      setMessage({ type: "success", text: "Registration successful! Redirecting to Dashboard" });
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      // setSelectedCourse({});
      setTimeout(() => router.push("/dashboard"), 1000);
    }
  };

  const checkOut = async (email: string, amount: number) => {
    const popup = new Paystack();
    try {
      popup.newTransaction({
        key: paystack_public_key(),
        email,
        amount: amount * 100,
        onSuccess: (transaction) => {
          registerCourse();
          setLoading(false);
        },
        onLoad: (response) => {
          console.log("onLoad: ", response);
        },
        onCancel: () => {
          setLoading(false);
        },
        onError: (error) => {
          console.log("Error: ", error.message);
          setLoading(false);
        },
      });
    } catch {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !phone || !selectedCourse) {
      setMessage({ type: "error", text: "Please fill all fields." });
      return;
    }
    setLoading(true);
    checkOut(email, selectedCourse.amount * (scholarship?.rate ?? 1));
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
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            textAlign="center"
          >
            Course Registration
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            textAlign="center"
            mb={4}
          >
            Fill in your details to enroll in a course. We'll check if you're
            already registered.
          </Typography>

          {message && (
            <Alert severity={message.type} sx={{ mb: 3 }}>
              {message.text}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {!userExists && message && message.action == "need-login" && (
                <Grid size={{ xs: 12 }}>
                  <Button
                    href="/register?from=courses/register&slug=plc-tia-portal"
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
                    {loading ? (
                      <CircularProgress size={24} />
                    ) : (
                      "Continue to Login or Create Account"
                    )}
                  </Button>
                </Grid>
              )}

              {userExists && (
                <>
                  {/* Email first */}
                  <Grid size={{ xs: 12, md: 12 }}>
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

                  <Grid size={{ xs: 12, sm: 6 }}>
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
                  <Grid size={{ xs: 12, sm: 6 }}>
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
                  <Grid size={{ xs: 12 }}>
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
                  <Grid size={{ md: 7 }}>
                    <TextField
                      label="Scholarship Code"
                      fullWidth
                      value={scholarshipCode}
                      onChange={(e) => setScholarshipCode(e.target.value)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={checkScholarship} edge="end">
                              <Send />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid size={{ md: 5 }}>
                    <Alert severity={scholarship?.rate ? "success" : "error"}>
                      {" "}
                      {(scholarship?.rate ?? 0) * 100}% schorlaship applied{" "}
                    </Alert>
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <TextField
                      select
                      label="Select Course"
                      fullWidth
                      required
                      value={selectedCourse?.title}
                      onChange={(e) =>
                        setSelectedCourse(courses?.at(Number(e.target.value)))
                      }
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <School />
                          </InputAdornment>
                        ),
                      }}
                    >
                      {courses.map((course, index) => (
                        <MenuItem key={course.id} value={index}>
                          {course.title}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  {selectedCourse?.amount && (
                    <Grid size={{ xs: 12 }}>
                      {" "}
                      <Alert severity="success">
                        Total Amount: NGN{" "}
                        {selectedCourse?.amount * (scholarship?.rate ?? 1)}
                      </Alert>{" "}
                    </Grid>
                  )}

                  <Grid size={{ xs: 12 }}>
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
                </>
              )}
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
