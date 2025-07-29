'use client'

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
} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

export default function CourseDetailPage() {
  return (
    <Box sx={{ pb: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: '#e3f2fd',
          py: { xs: 6, md: 10 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Chip label="Featured Course" color="primary" sx={{ mb: 2 }} />
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            SCADA, IIoT & AI Integration for Industry 4.0
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
            Learn how to integrate SCADA, MES, IIoT, AI, and Cloud technologies to build smart, connected, and resilient industrial systems. Ideal for professionals ready to lead in Industry 4.0.
          </Typography>
          <Button variant="contained" size="large">
            Enroll Now
          </Button>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Grid container spacing={6}>
          {/* Left: Course Details */}
          <Grid size={{ xs:12, md:8}}>
            <Typography variant="h5" gutterBottom>
              What You'll Learn
            </Typography>
            <List dense>
              {[
                'Connect SCADA systems with IIoT and cloud platforms',
                'Use AI to optimize industrial processes',
                'Work with real-world datasets and simulation labs',
                'Understand protocols like MQTT, OPC UA, and Modbus',
                'Design scalable, secure architectures for smart factories',
              ].map((point, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={point} />
                </ListItem>
              ))}
            </List>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h5" gutterBottom>
              Course Overview
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              This course takes a hands-on, project-based approach to teaching the fundamentals and advanced concepts of SCADA, IIoT, AI, and cloud integration. Whether you're a technician, engineer, or manager, you'll gain practical experience through labs and real-world use cases.
            </Typography>
          </Grid>

          {/* Right: Sidebar */}
          <Grid size={{ xs: 12, md:4}}>
            <Box
              sx={{
                p: 3,
                border: '1px solid #ddd',
                borderRadius: "1.66rem",
                backgroundColor: '#fafafa',
              }}
            >
              <Typography variant="subtitle1" gutterBottom>
                Instructor
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                <Avatar src="/imgs/barnes.png" alt="Instructor" />
                <Box>
                  <Typography variant="body1" fontWeight="medium">
                    Barnes Uk
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lead Automation Engineer
                  </Typography>
                </Box>
              </Stack>

              <Typography variant="subtitle1" sx={{ mt: 2 }}>
                Course Details
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemText primary="Duration" secondary="6 Weeks" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Level" secondary="Intermediate to Advanced" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Certificate" secondary="Yes, upon completion" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Format" secondary="100% Online + Labs" />
                </ListItem>
              </List>

              <Button variant="contained" fullWidth sx={{ mt: 3 }}>
                Enroll Now
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
