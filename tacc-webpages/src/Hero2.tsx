import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Stack, Button, Container, Grid, Card, CardContent, Chip, Paper } from "@mui/material";
import { School, Science, Settings, VideoCall, CheckCircle } from "@mui/icons-material";

// PCard Component (since it's referenced but not shown)
const PCard = ({ background, image, title, description }: any) => (
  <Card
    sx={{
      background,
      borderRadius: 4,
      overflow: "hidden",
      height: "100%",
      transition: "all 0.3s",
      "&:hover": {
        transform: "translateY(-8px)",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
      },
    }}
  >
    <Box
      sx={{
        height: 200,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
    <CardContent sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

export default function HeroSection() {
  const services = [
    {
      icon: <School sx={{ fontSize: 40 }} />,
      title: "Courses & Staff Training",
      description: "Comprehensive PLC, SCADA, and IIoT training programs with industry certification.",
    },
    {
      icon: <Science sx={{ fontSize: 40 }} />,
      title: "Research & Development",
      description: "Leading-edge research in AI integration and smart manufacturing solutions.",
    },
    {
      icon: <Settings sx={{ fontSize: 40 }} />,
      title: "System Integration & Consulting",
      description: "End-to-end SCADA/MES implementation and automation consulting services.",
    },
    {
      icon: <VideoCall sx={{ fontSize: 40 }} />,
      title: "Webinars & Workshops",
      description: "Live expert sessions and hands-on virtual labs with industry leaders.",
    },
  ];

  const stats = [
    { value: "5000+", label: "Trained Professionals" },
    { value: "200+", label: "Corporate Clients" },
    { value: "50+", label: "Research Projects" },
    { value: "98%", label: "Success Rate" },
  ];

  const features = [
    "Allen-Bradley / Rockwell",
    "Siemens PLC",
    "Schneider Electric",
    "SCADA Systems",
    "OPC UA",
    "MQTT Protocol",
    "Modbus RTU/TCP",
    "Industrial IoT",
    "Edge Computing",
    "MES Systems",
    "Python for Automation",
    "Machine Learning",
  ];

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          mt: "120px",
          mb: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            mb: 2,
            mx: { xs: 4 },
            fontWeight: "900",
            fontSize: { xs: "1.5rem", md: "2.5rem" },
            textAlign: "center",
          }}
        >
          Master{" "}
          <Box
            component="span"
            sx={{
              background: "linear-gradient(135deg, #0066ff, #00c9ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Industrial Automation
          </Box>{" "}
          from SCADA, PLCs to Smart Manufacturing
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mb: 4,
            mx: { xs: 4 },
            fontSize: { xs: "0.9rem", md: "1.2rem" },
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          Get hands-on training in PLCs, SCADA, IoT, and Industry 4.0 systems
          with real-world projects, expert instructors, and certification paths
          designed for engineers and technicians.
        </Typography>

        <Grid container spacing={2} sx={{ mb: 6 }}>
          <Grid size={{ xs: 12, md: 4 }}  display="flex" justifyContent="center" alignItems="center">
            <Button
              variant="contained"
              href="/courses"
              sx={{
                background: "linear-gradient(135deg, #0066ff, #00c9ff)",
                borderRadius: 100,
                fontWeight: "bold",
                height: { xs: "3rem" },
                fontSize: { xs: "0.9rem", md: "1rem" },
                px: { xs: 3, md: 6 },
                boxShadow: "0 4px 15px rgba(0, 102, 255, 0.3)",
                textTransform: "none",
                "&:hover": {
                  background: "linear-gradient(135deg, #0052cc, #00a8cc)",
                  boxShadow: "0 6px 20px rgba(0, 102, 255, 0.4)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s",
              }}
            >
              Register Now
            </Button>
          </Grid>

          <Grid
            size={{ xs: 12, md: 6 }} 
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              sx={{
                margin: "auto",
                overflow: "visible",
                position: "relative",
                width: "100%",
                maxWidth: "600px",
              }}
            >
              <img
                src="/imgs/people.png"
                alt="Industrial Automation Training"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "16px",
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
                }}
              />
            </Box>
          </Grid>
        </Grid>

        {/* Stats Section */}
        <Box
          sx={{
            width: "100%",
            background: "linear-gradient(135deg, #0052cc, #0066ff)",
            py: 6,
            mb: 6,
          }}
        >
          <Container>
            <Grid container spacing={4}>
              {stats.map((stat, index) => (
                <Grid size={{ xs: 12, md: 3 }}  key={index}>
                  <Box sx={{ textAlign: "center", color: "white" }}>
                    <Typography variant="h2" sx={{ fontWeight: 800, mb: 1 }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="h6">{stat.label}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Services Section */}
        <Container sx={{ mb: 6 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              textAlign: "center",
              mb: 2,
              fontSize: { xs: "1.8rem", md: "2.5rem" },
            }}
          >
            Our{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg, #0066ff, #00c9ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Services
            </Box>
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ textAlign: "center", mb: 6 }}
          >
            Comprehensive solutions for industrial automation excellence
          </Typography>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid size={{ xs: 12, sm: 6,md: 3 }}  key={index}>
                <Card
                  sx={{
                    height: "100%",
                    transition: "all 0.3s",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 20px 40px rgba(0, 102, 255, 0.15)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3, textAlign: "center" }}>
                    <Box
                      sx={{
                        width: 70,
                        height: 70,
                        background: "linear-gradient(135deg, #0066ff, #00c9ff)",
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        mb: 2,
                        mx: "auto",
                      }}
                    >
                      {service.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Technologies Section */}
        <Container sx={{ mb: 6 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              textAlign: "center",
              mb: 2,
              fontSize: { xs: "1.8rem", md: "2.5rem" },
            }}
          >
            Technologies We{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg, #0066ff, #00c9ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Cover
            </Box>
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ textAlign: "center", mb: 4 }}
          >
            Master the most in-demand automation technologies
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: "center",
            }}
          >
            {features.map((feature, index) => (
              <Chip
                key={index}
                label={feature}
                sx={{
                  px: 2,
                  py: 3,
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  transition: "all 0.3s",
                  "&:hover": {
                    background: "linear-gradient(135deg, #0066ff, #4d94ff)",
                    color: "white",
                    transform: "scale(1.05)",
                  },
                }}
              />
            ))}
          </Box>
        </Container>

        {/* Original Features Section */}
        <Box sx={{ py: 6, justifyContent: "center", alignItems: "center" }}>
          <Container>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                textAlign: "center",
                mb: 6,
                fontSize: { xs: "1.8rem", md: "2.5rem" },
              }}
            >
              Start Your{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #0066ff, #00c9ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Learning Journey
              </Box>
            </Typography>
            <Grid container spacing={6}>
              <Grid size={{ xs: 12, md: 6 }} >
                <PCard
                  background="#FEECD3"
                  image="/imgs/plc.webp"
                  title="From Field Devices to PLC"
                  description="Learn how PLCs work, learn how they are programmed. Start driving machines with logic."
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }} >
                <PCard
                  background="#d9e5d5"
                  image="/imgs/scada_dash.webp"
                  title="Learn SCADA, MES, IIOT and AI"
                  description="Data visualization and driving decisions through data has become industry priority. Start learning now"
                />
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            width: "100%",
            bgcolor: "#f8f9fc",
            py: 8,
            textAlign: "center",
          }}
        >
          <Container maxWidth="md">
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 3 }}>
              Ready to Transform Your Career?
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
              Join thousands of professionals who have mastered industrial automation with TACC.
              Get certified, build real-world projects, and advance your career.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
            >
              <Button
                variant="contained"
                size="large"
                href="/courses"
                sx={{
                  background: "linear-gradient(135deg, #0066ff, #00c9ff)",
                  borderRadius: 100,
                  px: 5,
                  py: 1.5,
                  textTransform: "none",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  boxShadow: "0 4px 15px rgba(0, 102, 255, 0.3)",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 20px rgba(0, 102, 255, 0.4)",
                  },
                }}
              >
                Explore Courses
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="/contact"
                sx={{
                  borderRadius: 100,
                  px: 5,
                  py: 1.5,
                  textTransform: "none",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  borderColor: "#0066ff",
                  color: "#0066ff",
                  borderWidth: 2,
                  "&:hover": {
                    borderWidth: 2,
                    borderColor: "#0066ff",
                    background: "#0066ff",
                    color: "white",
                  },
                }}
              >
                Contact Us
              </Button>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
}