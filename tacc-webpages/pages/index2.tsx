'use client';

import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Chip,
  Avatar,
  Paper,
  Stack,
} from '@mui/material';
import {
  School,
  Science,
  Settings,
  VideoCall,
  CheckCircle,
  Menu as MenuIcon,
} from '@mui/icons-material';

export default function TACCHomePage() {
  const services = [
    {
      icon: <School sx={{ fontSize: 40 }} />,
      title: 'Courses & Staff Training',
      description: 'Comprehensive training programs designed for engineers, technicians, and teams looking to excel in industrial automation.',
      features: [
        'PLC Programming Track',
        'SCADA & HMI Systems',
        'IIoT & Industry 4.0',
        'Devices & Protocols',
        'Corporate Training Programs',
        'Certification Paths',
      ],
    },
    {
      icon: <Science sx={{ fontSize: 40 }} />,
      title: 'Research & Development',
      description: 'Leading-edge research in automation technologies, AI integration, and smart manufacturing solutions.',
      features: [
        'AI & Machine Learning in Automation',
        'Predictive Maintenance Systems',
        'Digital Twin Technology',
        'Energy Optimization',
        'Industry 4.0 Implementation',
        'Custom Research Projects',
      ],
    },
    {
      icon: <Settings sx={{ fontSize: 40 }} />,
      title: 'System Integration & Consulting',
      description: 'End-to-end system integration services and expert consulting to optimize your industrial operations.',
      features: [
        'SCADA/MES Implementation',
        'PLC Programming & Configuration',
        'Protocol Integration (OPC UA, MQTT)',
        'Network Architecture Design',
        'Process Optimization',
        'Technical Audits',
      ],
    },
    {
      icon: <VideoCall sx={{ fontSize: 40 }} />,
      title: 'Webinars & Workshops',
      description: 'Interactive online sessions with industry experts covering the latest trends and technologies in automation.',
      features: [
        'Live Expert Sessions',
        'Q&A with Industry Leaders',
        'Hands-on Virtual Labs',
        'Case Study Discussions',
        'Monthly Topic Series',
        'On-Demand Recordings',
      ],
    },
  ];

  const stats = [
    { value: '5000+', label: 'Trained Professionals' },
    { value: '200+', label: 'Corporate Clients' },
    { value: '50+', label: 'Research Projects' },
    { value: '98%', label: 'Success Rate' },
  ];

  const features = [
    {
      icon: <CheckCircle />,
      title: 'Hands-On Learning',
      description: 'Real PLC hardware, SCADA systems, and industrial equipment. Practice with actual automation controllers including Allen-Bradley, Siemens, and Schneider Electric PLCs.',
    },
    {
      icon: <School />,
      title: 'Industry-Certified Instructors',
      description: 'Learn from automation engineers with 15+ years of field experience in manufacturing, oil & gas, and process industries.',
    },
    {
      icon: <CheckCircle />,
      title: 'Job-Ready Curriculum',
      description: 'Our courses align with current industry standards including ISA, IEC 61131-3, and Industry 4.0 frameworks. Graduate with skills employers actively seek.',
    },
    {
      icon: <Science />,
      title: 'Flexible Learning Options',
      description: 'Choose from on-site training, live online classes, or self-paced courses. Access course materials 24/7 and learn at your own schedule.',
    },
    {
      icon: <Settings />,
      title: 'Lifetime Support',
      description: 'Join our community of automation professionals. Get ongoing support, participate in monthly webinars, and access updated course content for free.',
    },
    {
      icon: <VideoCall />,
      title: 'Industry Recognition',
      description: 'Earn certificates recognized by leading manufacturers and automation companies worldwide. Build a verified portfolio of completed projects.',
    },
  ];

  const technologies = [
    'Allen-Bradley / Rockwell',
    'Siemens PLC (S7-300/400/1200/1500)',
    'Schneider Electric',
    'Mitsubishi PLC',
    'SCADA (WinCC, Ignition, Wonderware)',
    'HMI Design',
    'OPC UA',
    'MQTT Protocol',
    'Modbus RTU/TCP',
    'Profibus & Profinet',
    'DeviceNet',
    'EtherNet/IP',
    'Industrial IoT (IIoT)',
    'Edge Computing',
    'Cloud Integration (AWS IoT, Azure)',
    'MES Systems',
    'Python for Automation',
    'SQL Databases',
    'Machine Learning for Predictive Maintenance',
    'Digital Twin Technology',
  ];

  const industries = [
    '🏭 Manufacturing & Production',
    '⚡ Energy & Utilities',
    '🛢️ Oil & Gas',
    '💊 Pharmaceutical',
    '🍔 Food & Beverage',
    '🚗 Automotive',
    '💧 Water Treatment',
    '🏗️ Building Automation',
    '⚙️ Process Industries',
    '📦 Packaging & Material Handling',
    '🔬 Chemical Processing',
    '♻️ Renewable Energy',
  ];

  const testimonials = [
    {
      text: "TACC's PLC programming course completely transformed my career. Within 3 months of completing the training, I secured a senior automation engineer position with a 40% salary increase. The hands-on labs and real-world projects made all the difference.",
      author: 'Michael Chen',
      role: 'Automation Engineer, Shell Nigeria',
    },
    {
      text: "As a maintenance technician, I wanted to move into programming. TACC's instructors made complex concepts like ladder logic and SCADA integration easy to understand. Now I'm leading automation projects at our manufacturing plant.",
      author: 'Amina Bello',
      role: 'Control Systems Engineer, Dangote Group',
    },
    {
      text: "The IIoT and Industry 4.0 course was exactly what our company needed. TACC customized the training for our team and helped us implement a complete predictive maintenance system. ROI was achieved in just 6 months.",
      author: 'David Okafor',
      role: 'Plant Manager, Nigerian Breweries',
    },
  ];

  const faqs = [
    {
      question: 'Do I need prior experience to start PLC training?',
      answer: 'No prior automation experience required. Our beginner-friendly PLC programming courses start with fundamentals including electrical basics, ladder logic, and control systems theory before progressing to advanced topics.',
    },
    {
      question: 'What certifications will I earn?',
      answer: "Upon completion, you'll receive TACC Professional Certification in your chosen track (PLC Programming, SCADA Systems, IIoT, or System Integration), recognized by major industrial employers across Africa and globally.",
    },
    {
      question: 'Can you provide corporate training for our team?',
      answer: "Absolutely! We offer customized on-site and online corporate training programs tailored to your company's specific automation systems, equipment, and operational goals. Contact us for a custom training proposal.",
    },
    {
      question: 'What makes TACC different from other automation training providers?',
      answer: 'Real industrial hardware (not simulators), instructors with active field experience, project-based curriculum using actual manufacturing scenarios, and lifetime access to updated course materials and community support.',
    },
    {
      question: 'Do you offer job placement assistance?',
      answer: 'Yes! We maintain partnerships with leading manufacturers and engineering firms. Top-performing students receive job referrals, resume reviews, and interview preparation for automation engineering positions.',
    },
    {
      question: 'How long does it take to complete a course?',
      answer: 'Course duration varies by track. Basic PLC programming takes 6-8 weeks, comprehensive SCADA training is 8-10 weeks, and full Industry 4.0 certification path is 12-16 weeks. Self-paced options available.',
    },
  ];

  return (
    <Box sx={{ bgcolor: '#fafafa', minHeight: '100vh' }}>
      {/* Navigation */}
      <AppBar position="sticky" sx={{ bgcolor: 'white', boxShadow: 1 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                background: 'linear-gradient(135deg, #0066ff, #00c9ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              TACC
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
              <Button color="inherit" sx={{ color: 'text.primary' }}>
                Home
              </Button>
              <Button color="inherit" sx={{ color: 'text.primary' }}>
                Services
              </Button>
              <Button color="inherit" sx={{ color: 'text.primary' }}>
                About
              </Button>
              <Button color="inherit" sx={{ color: 'text.primary' }}>
                Contact
              </Button>
            </Box>
            <Button
              variant="contained"
              sx={{
                background: 'linear-gradient(135deg, #0066ff, #00c9ff)',
                borderRadius: '50px',
                px: 3,
                textTransform: 'none',
                boxShadow: '0 4px 15px rgba(0, 102, 255, 0.3)',
              }}
            >
              Get Started
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #f8f9fc 0%, #ffffff 100%)',
          py: 10,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h2" sx={{ fontWeight: 800, mb: 3 }}>
                Master{' '}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(135deg, #0066ff, #00c9ff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Industrial Automation
                </Box>{' '}
                with Industry Experts
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                From PLCs and SCADA to IIoT and AI-driven smart manufacturing. We provide comprehensive training, cutting-edge research, and world-class system integration services.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    background: 'linear-gradient(135deg, #0066ff, #00c9ff)',
                    borderRadius: '50px',
                    px: 4,
                    py: 1.5,
                    textTransform: 'none',
                    fontSize: '1.1rem',
                  }}
                >
                  Explore Services
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderRadius: '50px',
                    px: 4,
                    py: 1.5,
                    textTransform: 'none',
                    fontSize: '1.1rem',
                    borderColor: '#0066ff',
                    color: '#0066ff',
                  }}
                >
                  Book Consultation
                </Button>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
                alt="Industrial Automation"
                sx={{
                  width: '100%',
                  borderRadius: 4,
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
            Our{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #0066ff, #00c9ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Services
            </Box>
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Comprehensive solutions for industrial automation excellence
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, md: 6}} key={index}>
              <Card
                sx={{
                    borderRadius: "1.66rem",
                  height: '100%',
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 20px 40px rgba(0, 102, 255, 0.15)',
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      background: 'linear-gradient(135deg, #0066ff, #00c9ff)',
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      mb: 3,
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                    {service.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 3 }}>
                    {service.description}
                  </Typography>
                  <Box component="ul" sx={{ pl: 0, listStyle: 'none' }}>
                    {service.features.map((feature, idx) => (
                      <Box
                        component="li"
                        key={idx}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          mb: 1,
                          color: 'text.secondary',
                        }}
                      >
                        <CheckCircle sx={{ fontSize: 20, color: '#00c9ff', mr: 1 }} />
                        {feature}
                      </Box>
                    ))}
                  </Box>
                  <Button
                    sx={{
                      mt: 2,
                      color: '#0066ff',
                      textTransform: 'none',
                      fontWeight: 600,
                    }}
                  >
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Stats Section */}
      <Box sx={{ background: 'linear-gradient(135deg, #000, #12161cff)', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid size={{ xs: 12, md: 3 }} key={index}>
                <Box sx={{ textAlign: 'center', color: 'white' }}>
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

      {/* Features Section */}
      <Box sx={{ bgcolor: '#f8f9fc', py: 10 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
              Why Choose{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #0066ff, #00c9ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                TACC
              </Box>{' '}
              for Industrial Automation Training?
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Comprehensive learning experience backed by industry expertise
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Paper
                  sx={{
                    p: 3,
                    height: '100%',
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  <Box sx={{ color: '#0066ff', mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#0066ff' }}>
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary">{feature.description}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Technologies Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
            Technologies &{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #0066ff, #00c9ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Platforms
            </Box>{' '}
            We Cover
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Master the most in-demand automation technologies
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
          {technologies.map((tech, index) => (
            <Chip
              key={index}
              label={tech}
              sx={{
                px: 2,
                py: 3,
                fontSize: '0.95rem',
                fontWeight: 500,
                transition: 'all 0.3s',
                '&:hover': {
                  background: 'linear-gradient(135deg, #0066ff, #4d94ff)',
                  color: 'white',
                  transform: 'scale(1.05)',
                },
              }}
            />
          ))}
        </Box>
      </Container>

      {/* Industries Section */}
      <Box sx={{ bgcolor: '#f8f9fc', py: 10 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
              Industries We{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #0066ff, #00c9ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Serve
              </Box>
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Specialized training and system integration for diverse industrial sectors
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {industries.map((industry, index) => (
              <Grid size={{ xs: 12, md: 3 }} key={index}>
                <Paper
                  sx={{
                    p: 2,
                    textAlign: 'center',
                    fontWeight: 600,
                    transition: 'all 0.3s',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #0066ff, #00c9ff)',
                      color: 'white',
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  {industry}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
            What Our{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #0066ff, #00c9ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Students
            </Box>{' '}
            Say
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Real success stories from automation professionals
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Paper sx={{ p: 4, height: '100%' }}>
                <Typography
                  sx={{
                    fontStyle: 'italic',
                    color: 'text.secondary',
                    mb: 3,
                    lineHeight: 1.8,
                  }}
                >
                  "{testimonial.text}"
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar sx={{ bgcolor: '#0066ff' }}>
                    {testimonial.author.charAt(0)}
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {testimonial.author}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ bgcolor: '#f8f9fc', py: 10, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 3 }}>
            Ready to Transform Your Automation Journey?
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            Join thousands of professionals who have elevated their careers with TACC. Whether you're looking for PLC training, SCADA certification, IIoT courses, research partnerships, or professional system integration services, we're here to help you master industrial automation and Industry 4.0 technologies.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              background: 'linear-gradient(135deg, #0066ff, #00c9ff)',
              borderRadius: '50px',
              px: 5,
              py: 2,
              textTransform: 'none',
              fontSize: '1.1rem',
            }}
          >
            Get Started Today
          </Button>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
            Frequently Asked{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #0066ff, #00c9ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Questions
            </Box>
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Everything you need to know about TACC's services
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {faqs.map((faq, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#0066ff' }}>
                  {faq.question}
                </Typography>
                <Typography color="text.secondary">{faq.answer}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: 'white', borderTop: '1px solid #e0e0e0', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                TACC
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                The Automation Control Circle - Your partner in industrial automation excellence.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Email:</strong> info@tacc.echwood.com
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Phone:</strong> +234 (0) 800 TACC AUTO
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Services
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {['PLC Programming', 'SCADA Training', 'IIoT Courses', 'System Integration'].map((item) => (
                  <li key={item}>
                    <Button
                      sx={{
                        color: 'text.secondary',
                        textTransform: 'none',
                        p: 0,
                        justifyContent: 'flex-start',
                        '&:hover': { color: '#0066ff' },
                      }}
                    >
                      {item}
                    </Button>
                  </li>
                ))}
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Company
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {['About Us', 'Careers', 'Blog', 'Contact'].map((item) => (
                  <li key={item}>
                    <Button
                      sx={{
                        color: 'text.secondary',
                        textTransform: 'none',
                        p: 0,
                        justifyContent: 'flex-start',
                        '&:hover': { color: '#0066ff' },
                      }}
                    >
                      {item}
                    </Button>
                  </li>
                ))}
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Resources
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {['Documentation', 'Tutorials', 'Community', 'Support'].map((item) => (
                  <li key={item}>
                    <Button
                      sx={{
                        color: 'text.secondary',
                        textTransform: 'none',
                        p: 0,
                        justifyContent: 'flex-start',
                        '&:hover': { color: '#0066ff' },
                      }}
                    >
                      {item}
                    </Button>
                  </li>
                ))}
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 6, pt: 4, borderTop: '1px solid #e0e0e0' }}>
            <Typography variant="body2" color="text.secondary">
              © 2025 TACC-Echwood. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}