"use client"; // only if using App Router

import { useState } from "react";
import { supabase } from "../src/lib/supabase";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  Paper,
  Tabs,
  Tab,
  InputAdornment,
} from "@mui/material";
import { useRouter } from "next/navigation"; // or next/router for Pages Router
import { Email, Lock } from "@mui/icons-material";

export default function AuthPage() {
  const router = useRouter();
  const [tab, setTab] = useState<"register" | "login">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    if (tab === "register") {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) {
        setMessage({ type: "error", text: error.message });
      } else {
        setMessage({
          type: "success",
          text: "Registration successful! Please check your email to confirm.",
        });
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setMessage({ type: "error", text: error.message });
      } else {
        setMessage({ type: "success", text: "Login successful! Redirecting..." });
        setTimeout(() => router.push("/dashboard"), 1500);
      }
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
      <Container maxWidth="xs">
       
        <Paper
          elevation={10}
          sx={{
            p: 5,
            borderRadius: 4,
            textAlign: "center",
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {tab === "register" ? "Create Account" : "Welcome Back"}
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={3}>
            {tab === "register"
              ? "Join us today and start learning!"
              : "Login to continue your journey."}
          </Typography>

          <Tabs
            value={tab}
            onChange={(_, newValue) => setTab(newValue)}
            centered
            sx={{ mb: 3 }}
          >
            <Tab label="Register" value="register" />
            <Tab label="Login" value="login" />
          </Tabs>

          {message && (
            <Alert severity={message.type} sx={{ mb: 2, borderRadius: 2 }}>
              {message.text}
            </Alert>
          )}

          <Box component="form" onSubmit={handleAuth}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              required
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              required
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{
                mt: 3,
                borderRadius: 3,
                py: 1.5,
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: "bold",
                background: "black",
              }}
              disabled={loading}
            >
              {loading
                ? tab === "register"
                  ? "Registering..."
                  : "Logging in..."
                : tab === "register"
                ? "Sign Up"
                : "Login"}
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
