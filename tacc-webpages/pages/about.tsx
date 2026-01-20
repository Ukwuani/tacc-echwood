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
  Avatar,
  Paper,
  Stack,
  Divider,
} from '@mui/material';
import {
  School,
  EmojiObjects,
  Groups,
  TrendingUp,
  Verified,
  Public,
  WorkspacePremium,
  Psychology,
  Engineering,
  Science,
} from '@mui/icons-material';

export default function AboutUsPage() {
  const values = [
    {
      icon: <Verified sx={{ fontSize: 50 }} />,
      title: 'Excellence',
      description: 'We maintain the highest standards in industrial automation training, ensuring our students receive world-class education that meets international industry benchmarks.',
    },
    {
      icon: <EmojiObjects sx={{ fontSize: 50 }} />,
      title: 'Innovation',
      description: 'We continuously integrate cutting-edge technologies and methodologies into our curriculum, staying ahead of Industry 4.0 trends and emerging automation solutions.',
    },
    {
      icon: <Groups sx={{ fontSize: 50 }} />,
      title: 'Community',
      description: 'We foster a collaborative learning environment where students, instructors, and industry professionals share knowledge and support each others growth.',
    },
    {
      icon: <WorkspacePremium sx={{ fontSize: 50 }} />,
      title: 'Integrity',
      description: 'We operate with transparency and honesty in all our interactions, building trust through ethical practices and genuine commitment to student success.',
    },
  ];

  const team = [
    {
      name: 'Michael Echefu',
      role: 'Chairman & CEO',
      expertise: 'Industry Expert',
      bio: '20+ years of experience in the industry across manufacturing, and process industries. ',
      avatar: 'M',
    },
    {
      name: 'Engr. Elijah Ozizi',
      role: 'Director of Training',
      expertise: 'PLC Programming & SCADA Systems',
      bio: 'Certified Siemens and Rockwell instructor with many years of hands-on industrial experience. Specialized in Control Systems and IIOT 4.0.',
      avatar: 'E',
    },
    {
      name: 'Barnes Ukwuani',
      role: 'Head of Research & Development',
      expertise: 'IIoT, AI & Machine Learning',
      bio: 'Leading researcher in industrial IoT applications and predictive maintenance. Pioneering AI applications in industrial automation and enabling companies achieve smart manufacturing and Industry 4.0.',
      avatar: 'B',
    },
    {
      name: 'Engr. Opisa O.',
      role: 'System Integration Lead',
      expertise: 'PLC,MES, SCADA & Enterprise Systems',
      bio: 'Expert in large-scale automation projects. Successfully integrated SCADA/MES systems for companies in many sectors.',
      avatar: 'S',
    },
    {
      name: 'Engr. Michael Ezema',
      role: 'Senior Instructor - PLC Systems',
      expertise: 'Allen-Bradley, Siemens, Schneider',
      bio: '12 years of field experience in automotive and pharmaceutical automation. Certified in multiple PLC platforms and industrial networks.',
      avatar: 'M',
    },
  ];

  // const milestones = [
  //   {
  //     year: '2015',
  //     title: 'Echwood Founded',
  //     description: 'Established with a vision to enabling businesses drive growth with ERP, starting with our ERP software in Lagos.',
  //   },
  //   {
  //     year: '2017',
  //     title: 'First Research Lab',
  //     description: 'Opened our state-of-the-art Research Lab .',
  //   },
  //   {
  //     year: '2018',
  //     title: '200+ Companies Served',
  //     description: 'Reached milestone of serving over 200 companies, enhancing their operational efficiency through automation.',
  //   },
  //   {
  //     year: '2020',
  //     title: 'Launched Logistix ERP',
  //     description: 'Launched Logistix ERP software to help manufacturing and logistics companies streamline operations and improve efficiency.',
  //   },
  //   {
  //     year: '2021',
  //     title: 'Industry 4.0 Certification',
  //     description: 'Introduced comprehensive Industry 4.0 and IIoT training programs, becoming West Africas leading provider in smart manufacturing education.',
  //   },
  //   // {
  //   //   year: '2022',
  //   //   title: 'International Recognition',
  //   //   description: 'Received ISA certification and established partnerships with Siemens, Rockwell Automation, and Schneider Electric.',
  //   // },
  //   {
  //     year: '2023',
  //     title: 'System Integration Services',
  //     description: 'Expanded into full-service system integration, completing SCADA/MES projects for major industrial facilities.',
  //   },
  //   {
  //     year: '2025',
  //     title: 'TACC branched off & 9000+ trained',
  //     description: 'Celebrated training over 9000 automation professionals with a 98% satisfaction rate and 200+ corporate clients.',
  //   },
  // ];

  const partnerships = [
    'Siemens',
    'Rockwell Automation',
    'Schneider Electric',
    'ABB',
    'Mitsubishi Electric',
    'ISA (International Society of Automation)',
    'Dangote Group',
    'Nigerian Breweries',
    'Shell Nigeria',
    'Chevron Nigeria',
    'Total Energies',
    'Nestle Nigeria',
  ];

  const certifications = [
    {
      icon: <Verified sx={{ fontSize: 40 }} />,
      title: 'ISA Certified Training Provider',
      org: 'International Society of Automation',
    },
    {
      icon: <School sx={{ fontSize: 40 }} />,
      title: 'IEC 61131-3 Compliant Curriculum',
      org: 'International Electrotechnical Commission',
    },
    {
      icon: <WorkspacePremium sx={{ fontSize: 40 }} />,
      title: 'Industry 4.0 Partner',
      org: 'Smart Manufacturing Alliance',
    },
    {
      icon: <Public sx={{ fontSize: 40 }} />,
      title: 'ISO 9001:2015 Certified',
      org: 'Quality Management Systems',
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
              <Button color="inherit" sx={{ color: 'text.primary', fontWeight: 700 }}>
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
          background: 'linear-gradient(135deg, #0066ff 0%, #00c9ff 100%)',
          py: 12,
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 3 }}>
            About TACC
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.95, lineHeight: 1.6 }}>
            Empowering the next generation of automation professionals through excellence in training, research, and innovation.
          </Typography>
        </Container>
      </Box>

      {/* Mission & Vision Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              sx={{
                p: 5,
                height: '100%',
                background: 'linear-gradient(135deg, #f8f9fc 0%, #ffffff 100%)',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <TrendingUp sx={{ fontSize: 50, color: '#0066ff', mr: 2 }} />
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                  Our Mission
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.secondary' }}>
                To bridge automation skills gap by providing world-class training in PLCs, SCADA, IIoT, and Industry 4.0 technologies. We empower engineers, technicians, and organizations to excel in the era of smart manufacturing through hands-on learning, cutting-edge research, and comprehensive system integration services.
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              sx={{
                p: 5,
                height: '100%',
                background: 'linear-gradient(135deg, #f8f9fc 0%, #ffffff 100%)',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <EmojiObjects sx={{ fontSize: 50, color: '#00c9ff', mr: 2 }} />
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                  Our Vision
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.secondary' }}>
                To become a leading center of excellence in industrial automation education and innovation. We envision a future where automation professionals drive global smart manufacturing initiatives, contributing to sustainable industrial growth and technological advancement across the continent and beyond.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Our Story Section */}
      <Box sx={{ bgcolor: 'white', py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, textAlign: 'center' }}>
            Our{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #0066ff, #00c9ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Story
            </Box>
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', mb: 6 }}>
            A decade of excellence in industrial automation education
          </Typography>
          
          <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.9, color: 'text.secondary', mb: 4 }}>
              The Automation Control Circle (TACC) was founded by a group of experienced automation engineers who recognized a critical skills gap in the industrial sector. With manufacturing facilities struggling to find qualified PLC programmers and SCADA specialists, they set out to create a training institution that would meet international standards while addressing local industry needs.
            </Typography>
            
            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.9, color: 'text.secondary', mb: 4 }}>
              What started as a small training center in Lagos with 40 students has grown into a premier industrial automation institution. We've trained over 9,000 professionals, partnered with many corporations, and established ourselves as the go-to provider for PLC, SCADA, IIoT, and Industry 4.0 training.
            </Typography>
            
            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.9, color: 'text.secondary' }}>
              Today, TACC operates state-of-the-art training programs with the latest automation hardware from OEMS. Our research division develops innovative solutions for predictive maintenance and smart manufacturing, while our system integration team implements IIOT 4.0 solutions for major industrial clients.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Core Values Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, textAlign: 'center' }}>
          Our{' '}
          <Box
            component="span"
            sx={{
              background: 'linear-gradient(135deg, #0066ff, #00c9ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Core Values
          </Box>
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', mb: 6 }}>
          The principles that guide everything we do
        </Typography>

        <Grid container spacing={4}>
          {values.map((value, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Card
                sx={{
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
                      width: 80,
                      height: 80,
                      background: 'linear-gradient(135deg, #0066ff, #00c9ff)',
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      mb: 3,
                    }}
                  >
                    {value.icon}
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    {value.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Team Section */}
      <Box sx={{ bgcolor: '#f8f9fc', py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, textAlign: 'center' }}>
            Meet Our{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #0066ff, #00c9ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Expert Team
            </Box>
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', mb: 6 }}>
            Industry veterans with decades of combined experience
          </Typography>

          <Grid container spacing={4}>
            {team.map((member, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Paper
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    height: '100%',
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 15px 35px rgba(0, 102, 255, 0.1)',
                    },
                  }}
                >
                  <Avatar
                    sx={{
                      width: 100,
                      height: 100,
                      bgcolor: '#0066ff',
                      fontSize: '2.5rem',
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    {member.avatar}
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {member.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: '#0066ff',
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    {member.role}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', mb: 2 }}>
                    {member.expertise}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {member.bio}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Milestones Timeline */}
      {/* <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, textAlign: 'center' }}>
          Our{' '}
          <Box
            component="span"
            sx={{
              background: 'linear-gradient(135deg, #0066ff, #00c9ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Journey
          </Box>
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', mb: 6 }}>
          Key milestones in our growth and success
        </Typography>

        <Box sx={{ position: 'relative' }}>
          {milestones.map((milestone, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                mb: 4,
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                alignItems: 'center',
              }}
            >
              <Box sx={{ flex: 1, pr: index % 2 === 0 ? 4 : 0, pl: index % 2 === 0 ? 0 : 4 }}>
                <Paper
                  sx={{
                    p: 3,
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      boxShadow: '0 10px 30px rgba(0, 102, 255, 0.15)',
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: '#0066ff',
                      mb: 1,
                    }}
                  >
                    {milestone.year}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {milestone.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {milestone.description}
                  </Typography>
                </Paper>
              </Box>
            </Box>
          ))}
        </Box>
      </Container> */}

      {/* Certifications & Accreditations */}
      {/* <Box sx={{ bgcolor: '#f8f9fc', py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, textAlign: 'center' }}>
            Certifications &{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #0066ff, #00c9ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Accreditations
            </Box>
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', mb: 6 }}>
            Recognized by leading international organizations
          </Typography>

          <Grid container spacing={4}>
            {certifications.map((cert, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Paper
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    height: '100%',
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 30px rgba(0, 102, 255, 0.15)',
                    },
                  }}
                >
                  <Box sx={{ color: '#0066ff', mb: 2 }}>{cert.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: '1rem' }}>
                    {cert.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {cert.org}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box> */}

      {/* Partners & Clients */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, textAlign: 'center' }}>
          Our{' '}
          <Box
            component="span"
            sx={{
              background: 'linear-gradient(135deg, #0066ff, #00c9ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Partners
          </Box>
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', mb: 6 }}>
          Trusted by leading organizations worldwide
        </Typography>

        <Grid container spacing={2}>
          {partnerships.map((partner, index) => (
            <Grid size={{ xs: 6, sm: 4, md: 3 }} key={index}>
              <Paper
                sx={{
                  p: 3,
                  textAlign: 'center',
                  fontWeight: 600,
                  transition: 'all 0.3s',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #0066ff, #00c9ff)',
                    color: 'white',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                {partner}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0066ff 0%, #00c9ff 100%)',
          py: 10,
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 3 }}>
            Join the TACC Family
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.95 }}>
            Become part of Africa's leading industrial automation community. Whether you're an individual looking to advance your career or a company seeking training solutions, we're here to help.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: '#0066ff',
                borderRadius: '50px',
                px: 5,
                py: 2,
                textTransform: 'none',
                fontSize: '1.1rem',
                fontWeight: 600,
                '&:hover': {
                  bgcolor: '#f0f0f0',
                },
              }}
            >
              Explore Courses
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'white',
                color: 'white',
                borderRadius: '50px',
                px: 5,
                py: 2,
                textTransform: 'none',
                fontSize: '1.1rem',
                fontWeight: 600,
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2,
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Contact Us
            </Button>
          </Stack>
        </Container>
      </Box>

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