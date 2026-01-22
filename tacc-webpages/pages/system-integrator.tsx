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
  Paper,
  Stack,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
  TextField,
} from '@mui/material';
import {
  Settings,
  Engineering,
  People,
  Handshake,
  BuildCircle,
  Speed,
  Security,
  CloudSync,
  CheckCircle,
  TrendingUp,
  Support,
  BusinessCenter,
  Storefront,
  PrecisionManufacturing,
  IntegrationInstructions,
  Schema,
  Cable,
  Assignment,
  LocalShipping,
} from '@mui/icons-material';
import DefaultLayout from '../src/DefaultLayout';
import Head from 'next/head';

export default function SystemIntegrationPage() {
  const services = [
    {
      icon: <IntegrationInstructions sx={{ fontSize: 50 }} />,
      title: 'Complete System Integration',
      description: 'End-to-end SCADA/MES/ERP integration services for manufacturing facilities. We design, implement, and commission automation systems that streamline your operations.',
      features: [
        'SCADA System Design & Implementation',
        'MES/ERP Integration',
        'PLC Programming & Configuration',
        'HMI/SCADA Development',
        'Industrial Network Architecture',
        'System Commissioning & Validation',
      ],
    },
    {
      icon: <Support sx={{ fontSize: 50 }} />,
      title: 'Technical Support Services',
      description: 'Comprehensive maintenance and support services to keep your automation systems running at peak performance with minimal downtime.',
      features: [
        '24/7 Emergency Support',
        'Preventive Maintenance Programs',
        'Remote Diagnostics & Troubleshooting',
        'System Health Monitoring',
        'Software Updates & Patches',
        'Performance Optimization',
      ],
    },
    {
      icon: <People sx={{ fontSize: 50 }} />,
      title: 'Professional Staffing Solutions',
      description: 'Access our pool of trained and seasoned automation professionals for short-term projects or long-term placements.',
      features: [
        'PLC Programmers & Engineers',
        'SCADA Specialists',
        'Control Systems Engineers',
        'Instrumentation Technicians',
        'Project Managers',
        'Technical Consultants',
      ],
    },
    {
      icon: <Storefront sx={{ fontSize: 50 }} />,
      title: 'OEM Equipment Procurement',
      description: 'Leverage our partnerships with leading OEMs to get industrial automation equipment at competitive prices with guaranteed authenticity.',
      features: [
        'Siemens PLCs & SCADA Systems',
        'Rockwell/Allen-Bradley Products',
        'Schneider Electric Automation',
        'ABB Drives & Controllers',
        'Sensors & Field Instrumentation',
        'Industrial Networking Equipment',
      ],
    },
  ];

  const integrationProcess = [
    {
      step: '01',
      title: 'Consultation & Assessment',
      description: 'We begin with a thorough analysis of your current operations, identifying automation opportunities and defining project scope, timeline, and budget.',
      icon: <Assignment sx={{ fontSize: 40 }} />,
    },
    {
      step: '02',
      title: 'Design & Engineering',
      description: 'Our engineers develop detailed system architecture, network topology, I/O lists, and control strategies tailored to your specific requirements.',
      icon: <Schema sx={{ fontSize: 40 }} />,
    },
    {
      step: '03',
      title: 'Procurement & Logistics',
      description: 'We source all required hardware and software from trusted OEM partners, ensuring quality equipment at competitive prices with full warranty.',
      icon: <LocalShipping sx={{ fontSize: 40 }} />,
    },
    {
      step: '04',
      title: 'Installation & Integration',
      description: 'Our certified technicians handle complete system installation, including PLC programming, SCADA development, network configuration, and field device integration.',
      icon: <BuildCircle sx={{ fontSize: 40 }} />,
    },
    {
      step: '05',
      title: 'Testing & Commissioning',
      description: 'Comprehensive Factory Acceptance Testing (FAT) and Site Acceptance Testing (SAT) ensure all systems meet specifications and performance criteria.',
      icon: <Speed sx={{ fontSize: 40 }} />,
    },
    {
      step: '06',
      title: 'Training & Handover',
      description: 'We train your operations and maintenance teams on system operation, troubleshooting, and best practices before final handover.',
      icon: <People sx={{ fontSize: 40 }} />,
    },
  ];

  const supportPackages = [
    {
      name: 'Basic Support',
      price: 'Contact for Quote',
      features: [
        'Email & Phone Support (Business Hours)',
        'Monthly System Health Reports',
        'Quarterly Preventive Maintenance',
        'Software Updates',
        'Remote Diagnostics',
        'Response Time: 24 hours',
      ],
      highlighted: false,
    },
    {
      name: 'Premium Support',
      price: 'Contact for Quote',
      features: [
        '24/7 Emergency Hotline',
        'Weekly System Monitoring',
        'Monthly Preventive Maintenance',
        'Priority Remote & On-site Support',
        'Dedicated Support Engineer',
        'Response Time: 4 hours',
        'Annual System Audit',
        'Performance Optimization',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise Support',
      price: 'Contact for Quote',
      features: [
        '24/7 Emergency Hotline',
        'Real-time System Monitoring',
        'Bi-weekly Preventive Maintenance',
        'Dedicated Support Team',
        'On-site Resident Engineer (Optional)',
        'Response Time: 2 hours',
        'Quarterly System Audits',
        'Continuous Optimization',
        'Spare Parts Management',
      ],
      highlighted: false,
    },
  ];

  const staffingCategories = [
    {
      title: 'PLC Programmers',
      description: 'Certified programmers skilled in Ladder Logic, Structured Text, and Function Block programming for Siemens, Rockwell, and Schneider platforms.',
      icon: <Engineering />,
    },
    {
      title: 'SCADA Specialists',
      description: 'Experienced developers in WinCC, Ignition, Wonderware, and other leading SCADA platforms with strong HMI design capabilities.',
      icon: <CloudSync />,
    },
    {
      title: 'Control Systems Engineers',
      description: 'Engineers with expertise in process control, instrumentation, and automation system design for complex industrial applications.',
      icon: <Schema />,
    },
    {
      title: 'Instrumentation Technicians',
      description: 'Field technicians skilled in installation, calibration, and maintenance of sensors, transmitters, and control valves.',
      icon: <PrecisionManufacturing />,
    },
    {
      title: 'Project Managers',
      description: 'Certified PMP professionals with track records of successfully delivering automation projects on time and within budget.',
      icon: <BusinessCenter />,
    },
    {
      title: 'Technical Consultants',
      description: 'Senior consultants who provide strategic guidance on automation roadmaps, technology selection, and system optimization.',
      icon: <Handshake />,
    },
  ];

  const oemPartners = [
    {
      name: 'Siemens',
      products: 'S7-1200/1500 PLCs, WinCC SCADA, SIMATIC HMI, TIA Portal',
      savings: 'Trusted',
    },
    {
      name: 'Rockwell Automation',
      products: 'CompactLogix, ControlLogix, FactoryTalk View, Studio 5000',
      savings: 'Trusted',
    },
    {
      name: 'Schneider Electric',
      products: 'Modicon M340/M580, EcoStruxure, Vijeo Designer',
      savings: 'Trusted',
    },
    {
      name: 'ABB',
      products: 'AC Drives, Control Panels, Industrial Robots, SCADA Systems',
      savings: 'Trusted',
    },
    {
      name: 'Phoenix Contact',
      products: 'Industrial Ethernet, I/O Systems, Power Supplies, Surge Protection',
      savings: 'Trusted',
    },
    {
      name: 'Weidmüller',
      products: 'Terminal Blocks, Signal Conditioners, Industrial Connectors',
      savings: 'Trusted',
    },
  ];

  const industries = [
    { name: 'Oil & Gas', icon: '🛢️' },
    { name: 'Manufacturing', icon: '🏭' },
    { name: 'Pharmaceutical', icon: '💊' },
    { name: 'Food & Beverage', icon: '🍔' },
    { name: 'Power Generation', icon: '⚡' },
    { name: 'Water Treatment', icon: '💧' },
    { name: 'Mining', icon: '⛏️' },
    { name: 'Automotive', icon: '🚗' },
  ];

  const benefits = [
    {
      icon: <Security sx={{ fontSize: 40 }} />,
      title: 'Guaranteed Quality',
      description: 'All equipment sourced directly from OEMs with full manufacturer warranty and authenticity certificates.',
    },
    {
      icon: <TrendingUp sx={{ fontSize: 40 }} />,
      title: 'Cost Savings',
      description: 'Leverage our bulk purchasing power and OEM partnerships to save on automation equipment.',
    },
    {
      icon: <Support sx={{ fontSize: 40 }} />,
      title: 'End-to-End Service',
      description: 'From procurement to installation and ongoing support, we handle every aspect of your automation needs.',
    },
    {
      icon: <Speed sx={{ fontSize: 40 }} />,
      title: 'Fast Delivery',
      description: 'Stock availability and expedited shipping ensure minimal lead times for critical equipment.',
    },
  ];

  return (
    <>
      <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" /> 
      <title>Industrial Automation System Integrator | PLC, SCADA & IIoT</title>
      <meta name="description" content="Certified industrial automation system integrator delivering PLC, SCADA, IIoT and smart manufacturing solutions. "/>
      <meta name="keywords" content="PLC training, SCADA courses, industrial automation, IIoT training, Industry 4.0, system integration, automation consulting, PLC programming, Modbus, OPC UA, MQTT, MES systems"/>
      <meta name="author" content="TACC - The Automation Control Circle"/>
      
      {/* Open Graph */}
      <meta property="og:title" content="Industrial Automation System Integrator | PLC, SCADA & IIoT"/>
      <meta property="og:description" content="Certified industrial automation system integrator delivering PLC, SCADA, IIoT and smart manufacturing solutions."/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://automationcc.com/system-integrator" />
      <link rel="canonical" href="https://automationcc.com/system-integrator"/>
      {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
   
    </Head>
    <DefaultLayout page="Services">
    <Box sx={{ bgcolor: '#fafafa', minHeight: '100vh' }}>

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
            System Integration & Professional Services
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.95, lineHeight: 1.6, mb: 4 }}>
            Complete automation solutions from design to deployment. We integrate systems, provide technical support, staff your projects, and supply genuine OEM equipment at competitive prices.
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
              Request a Quote
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
              Schedule Consultation
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Services Overview */}
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
            Service Offerings
          </Box>
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', mb: 6 }}>
          Comprehensive solutions to meet all your industrial automation needs
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid size={{xs: 12, md: 6 }} key={index}>
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
                    {service.icon}
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                    {service.description}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <List dense>
                    {service.features.map((feature, idx) => (
                      <ListItem key={idx} disablePadding sx={{ mb: 1 }}>
                        <ListItemIcon sx={{ minWidth: 30 }}>
                          <CheckCircle sx={{ fontSize: 20, color: '#00c9ff' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={feature}
                          primaryTypographyProps={{
                            variant: 'body2',
                            color: 'text.secondary',
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Integration Process */}
      <Box sx={{ bgcolor: '#f8f9fc', py: 10 }}>
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
              Integration Process
            </Box>
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', mb: 6 }}>
            A proven methodology that delivers results on time and within budget
          </Typography>

          <Grid container spacing={4}>
            {integrationProcess.map((process, index) => (
              <Grid size={{xs: 12, md: 6 }} key={index}>
                <Paper
                  sx={{
                    p: 4,
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: `"${process.step}"`,
                      position: 'absolute',
                      top: -20,
                      right: -20,
                      fontSize: '8rem',
                      fontWeight: 900,
                      color: 'rgba(0, 102, 255, 0.05)',
                      zIndex: 0,
                    },
                  }}
                >
                  <Box sx={{ position: 'relative', zIndex: 1 }}>
                    <Box sx={{ color: '#0066ff', mb: 2 }}>{process.icon}</Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                      {process.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {process.description}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Support Packages */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, textAlign: 'center' }}>
          Technical{' '}
          <Box
            component="span"
            sx={{
              background: 'linear-gradient(135deg, #0066ff, #00c9ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Support Packages
          </Box>
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', mb: 6 }}>
          Choose the level of support that matches your operational requirements
        </Typography>

        <Grid container spacing={4}>
          {supportPackages.map((pkg, index) => (
            <Grid size={{xs: 12, md: 4 }} key={index}>
              <Card
                sx={{
                  height: '100%',
                  border: pkg.highlighted ? '3px solid #0066ff' : '1px solid #e0e0e0',
                  position: 'relative',
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: pkg.highlighted ? '0 25px 50px rgba(0, 102, 255, 0.25)' : '0 20px 40px rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                {pkg.highlighted && (
                  <Chip
                    label="MOST POPULAR"
                    sx={{
                      position: 'absolute',
                      top: 20,
                      right: 20,
                      background: 'linear-gradient(135deg, #0066ff, #00c9ff)',
                      color: 'white',
                      fontWeight: 700,
                    }}
                  />
                )}
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                    {pkg.name}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 800,
                      color: '#0066ff',
                      mb: 3,
                    }}
                  >
                    {pkg.price}
                  </Typography>
                  <Divider sx={{ mb: 3 }} />
                  <List dense>
                    {pkg.features.map((feature, idx) => (
                      <ListItem key={idx} disablePadding sx={{ mb: 1.5 }}>
                        <ListItemIcon sx={{ minWidth: 30 }}>
                          <CheckCircle sx={{ fontSize: 20, color: '#00c9ff' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={feature}
                          primaryTypographyProps={{
                            variant: 'body2',
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                  <Button
                    variant={pkg.highlighted ? 'contained' : 'outlined'}
                    fullWidth
                    sx={{
                      mt: 3,
                      borderRadius: '50px',
                      py: 1.5,
                      textTransform: 'none',
                      fontWeight: 600,
                      ...(pkg.highlighted && {
                        background: 'linear-gradient(135deg, #0066ff, #00c9ff)',
                      }),
                    }}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Professional Staffing */}
      <Box sx={{ bgcolor: '#f8f9fc', py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, textAlign: 'center' }}>
            Professional{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #0066ff, #00c9ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Staffing Solutions
            </Box>
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', mb: 6 }}>
            Hire trained and seasoned automation professionals for your projects
          </Typography>

          <Grid container spacing={4}>
            {staffingCategories.map((category, index) => (
              <Grid size={{xs: 12, sm: 6, md: 4 }} key={index}>
                <Paper
                  sx={{
                    p: 3,
                    height: '100%',
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 15px 35px rgba(0, 102, 255, 0.1)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      background: 'linear-gradient(135deg, #0066ff, #00c9ff)',
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      mb: 2,
                    }}
                  >
                    {category.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {category.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {category.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Paper sx={{ p: 5, mt: 6, background: 'linear-gradient(135deg, #f8f9fc 0%, #ffffff 100%)' }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, textAlign: 'center' }}>
              Why Choose Our Professionals?
            </Typography>
            <Grid container spacing={3}>
              <Grid size={{xs: 12, md: 4 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <CheckCircle sx={{ fontSize: 50, color: '#0066ff', mb: 2 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Certified & Trained
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    All professionals have completed our rigorous training programs and hold industry certifications.
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{xs: 12, md: 4 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <CheckCircle sx={{ fontSize: 50, color: '#0066ff', mb: 2 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Field Experience
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Minimum 3-5 years of hands-on experience in industrial automation projects.
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{xs: 12, md: 4 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <CheckCircle sx={{ fontSize: 50, color: '#0066ff', mb: 2 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Flexible Engagement
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Short-term contracts, project-based, or permanent placements available.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>

      {/* OEM Equipment Procurement */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, textAlign: 'center' }}>
          OEM Equipment{' '}
          <Box
            component="span"
            sx={{
              background: 'linear-gradient(135deg, #0066ff, #00c9ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Procurement
          </Box>
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', mb: 2 }}>
          Genuine automation equipment at competitive prices through our OEM partnerships
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto', mb: 6 }}>
          As part of our commitment to increasing global industrial automation coverage, we've partnered with leading OEMs to provide you with authentic equipment at the best prices in the market.
        </Typography>

        {/* Benefits */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {benefits.map((benefit, index) => (
            <Grid size={{xs: 12, sm:6, md: 3 }} key={index}>
              <Paper sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                <Box sx={{ color: '#0066ff', mb: 2 }}>{benefit.icon}</Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  {benefit.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {benefit.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* OEM Partners */}
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, textAlign: 'center' }}>
          Our OEM Partners
        </Typography>
        <Grid container spacing={3}>
          {oemPartners.map((partner, index) => (
            <Grid size={{xs: 12, md: 6 }} key={index}>
              <Card
                sx={{
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 15px 35px rgba(0, 102, 255, 0.15)',
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        background: 'linear-gradient(135deg, #0066ff, #00c9ff)',
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 800,
                        fontSize: '1.5rem',
                      }}
                    >
                      {partner.name.charAt(0)}
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        {partner.name}
                      </Typography>
                      <Chip
                        label={partner.savings}
                        size="small"
                        sx={{
                          bgcolor: '#e8f5e9',
                          color: '#2e7d32',
                          fontWeight: 600,
                          mt: 0.5,
                        }}
                      />

                    </Box>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Products:</strong> {partner.products}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Industries Served */}
      <Box sx={{ bgcolor: '#f8f9fc', py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, textAlign: 'center' }}>
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
          <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', mb: 6 }}>
            Trusted by leading companies across diverse industrial sectors
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {industries.map((industry, index) => (
              <Grid size={{xs: 12, sm:4, md: 3 }} key={index}>
                <Paper
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    height: '100%',
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 15px 35px rgba(0, 102, 255, 0.1)',
                    },
                  }}
                >
                  <Typography variant="h3" sx={{ mb: 1 }}>
                    {industry.icon}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {industry.name}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
    </DefaultLayout>
    </>
  );
}