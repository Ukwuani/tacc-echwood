'use client'

import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material'

export default function CourseDescriptionPage() {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        {/* Course Title & Overview */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="overline" color="secondary">
            Professional Certification Course
          </Typography>
          <Typography variant="h1" fontWeight="bold" gutterBottom sx={{fontSize: { xs: 18, md: "2.125rem" }}}>
            SCADA, IIoT & AI Integration for Smart Industries
          </Typography>
          <Typography variant="h6" color="text.secondary" maxWidth="md" sx={{fontSize: { xs: "0.8rem", md: "1.125rem" }}}>
            Learn how to integrate SCADA, MES, IIoT, AI, and Cloud to build smart, connected, and robust industrial systems. Ideal for professionals ready to lead in Industry 4.0.
          </Typography>
          <Stack direction="row" spacing={2} mt={3}>
            <Chip label="Intermediate Level" color="default" />
            <Chip label="4 Weeks" color="default" />
            <Chip label="Certificate Included" color="success" />
          </Stack>
        </Box>

        {/* Instructor */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Meet Your Instructor
          </Typography>
          <Stack direction="row" spacing={3} alignItems="center">
            <Box
              component="img"
              src="/imgs/barnes.png"
              alt="Instructor"
              sx={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover' }}
            />
            <Box>
              <Typography variant="subtitle1">Engr. Ozizi Elijah</Typography>
              <Typography variant="body2" color="text.secondary">
                Automation Specialist, 15+ years in industrial systems, SCADA expert.
              </Typography>
            </Box>
          </Stack>
        </Box>

        {/* What You'll Learn */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            What You’ll Learn
          </Typography>
          <Grid container spacing={2}>
            {[
              'How SCADA systems work and how to deploy them',
              'Connecting field devices using industrial protocols',
              'Integrating IIoT with Cloud and Edge computing',
              'Using AI to optimize industrial operations',
              'Designing secure and scalable smart factory solutions',
            ].map((point, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Typography variant="body1">• {point}</Typography>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Course Content Outline */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Course Outline
          </Typography>
          <Stack spacing={2}>
            <Typography>📘 Module 1: Introduction to SCADA & Automation</Typography>
            <Typography>🔗 Module 2: Connecting Field Devices & Protocols</Typography>
            <Typography>🌐 Module 3: IIoT & Cloud Integration</Typography>
            <Typography>🧠 Module 4: AI in Industrial Applications</Typography>
            <Typography>🛠️ Final Project: Build a Smart Monitoring System</Typography>
          </Stack>
        </Box>

        <Divider sx={{ my: 6 }} />

        {/* CTA */}
        <Box textAlign="center">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Ready to Future-Proof Your Automation Career?
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={3}>
            Enroll today and gain practical, job-ready skills with hands-on labs, expert guidance, and certification.
          </Typography>
          <Button variant="contained"
            sx={{
              mx: 1,
              background: "black",
              borderRadius: 100,
              fontWeight: "bold",
              fontSize: { xs: 8, md: 12 },
              px: { xs: 2, md: 6 },
            }} size="large">
            Enroll Now
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
