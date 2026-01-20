'use client';

import React, { useState } from 'react';
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
  TextField,
  Paper,
  Stack,
  MenuItem,
  Snackbar,
  Alert,
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
  AccessTime,
  Send,
  LinkedIn,
  Twitter,
  Facebook,
  YouTube,
  WhatsApp,
} from '@mui/icons-material';
import AlertDialog from '../src/Dialog';

export default function ContactUsPage() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    subject: '',
    message: '',
  });

  const zFormURL = 'https://forms.zohopublic.com/echwood1/form/AskaQuestionForm/formperma/FWriqEnKK8aTwhLJw8c5tG4D0S1j5pWeQQGyaZIFGM0/htmlRecords/submit';

  const [openDialog, setOpenDialog] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    const formDataZ = new FormData();
    formDataZ.append("Name_First", formData.firstName);
    formDataZ.append("Name_Last", formData.lastName);
    formDataZ.append("Email", formData.email);
    formDataZ.append("MultiLine", `
        Subject: ${formData.subject} 
        \n\n-- Company Information --: ${formData.company}
        \n\n-- Message --: ${formData.message} 
        \n\n-- Contact Number --: ${formData.phone}
        \n\n-- Inquiry Details --: ${formData.inquiryType}
        \n\n-- \nSent via TACC Contact Us Page`);

    // Required Zoho hidden fields
    formDataZ.append("zf_referrer_name", "");
    formDataZ.append("zf_redirect_url", "");
    formDataZ.append("zf_validate", "true");

    try {
      await fetch(zFormURL, {
        method: "POST",
        mode: "no-cors",
        body: formDataZ
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    console.log('Form submitted:', formData);
    setOpenDialog(true);
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      inquiryType: '',
      subject: '',
      message: '',
    });
  };

  const inquiryTypes = [
    'Course Enrollment',
    'Corporate Training',
    'System Integration Services',
    'Research Collaboration',
    'Partnership Opportunities',
    'General Inquiry',
    'Technical Support',
    'Other',
  ];

  const contactInfo = [
    {
      icon: <Email sx={{ fontSize: 40 }} />,
      title: 'Email Addresses',
      details: [
        'info@echwood.com',
        'support@echwood.com',
      ],
    },
    {
      icon: <AccessTime sx={{ fontSize: 40 }} />,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 8:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 4:00 PM',
        'Sunday: Closed',
      ],
    },
  ];

  const officeLocations = [
    {
      city: 'Lagos (Headquarters)',
      address: '15 Industrial Avenue, Ikeja, Lagos',
      phone: '',
      email: 'lagos@echwood.com',
    },
    {
      city: 'Abuja',
      address: '42 Technology Hub, Central Business District, Abuja',
      phone: '',
      email: 'abuja@echwood.com',
    },
    {
      city: 'Port Harcourt',
      address: '8 Industrial Road, Trans Amadi, Port Harcourt',
      phone: '',
      email: 'portharcourt@echwood.com',
    },
  ];

  const departments = [
    {
      name: 'Course Enrollment & Admissions',
      email: 'info@echwood.com',
      phone: '',
      description: 'For questions about course registration, schedules, and enrollment procedures.',
    },
    {
      name: 'Corporate Training Services',
      email: 'info@echwood.com',
      phone: '',
      description: 'For customized corporate training programs and bulk enrollment inquiries.',
    },
    {
      name: 'System Integration & Consulting',
      email: 'info@echwood.com',
      phone: '',
      description: 'For SCADA/MES implementation, PLC programming, and automation consulting services.',
    },
    {
      name: 'Research & Development',
      email: 'research@echwood.com',
      phone: '',
      description: 'For research collaborations, innovation projects, and academic partnerships.',
    },
    {
      name: 'Technical Support',
      email: 'support@echwood.com',
      phone: '',
      description: 'For technical assistance with course materials, lab access, and platform issues.',
    },
    {
      name: 'Partnership & Business Development',
      email: 'info@echwood.com',
      phone: '',
      description: 'For partnership opportunities, vendor inquiries, and business collaborations.',
    },
  ];

  const socialMedia = [
    { icon: <LinkedIn sx={{ fontSize: 30 }} />, name: 'LinkedIn', link: '#', color: '#0077b5' },
    { icon: <Twitter sx={{ fontSize: 30 }} />, name: 'Twitter', link: '#', color: '#1da1f2' },
    { icon: <Facebook sx={{ fontSize: 30 }} />, name: 'Facebook', link: '#', color: '#4267b2' },
    { icon: <YouTube sx={{ fontSize: 30 }} />, name: 'YouTube', link: '#', color: '#ff0000' },
    { icon: <WhatsApp sx={{ fontSize: 30 }} />, name: 'WhatsApp', link: '#', color: '#25d366' },
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
              <Button color="inherit" sx={{ color: 'text.primary', fontWeight: 700 }}>
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
            Get In Touch
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.95, lineHeight: 1.6 }}>
            We're here to help you master industrial automation. Reach out to us for course inquiries, corporate training, or system integration services.
          </Typography>
        </Container>
      </Box>

      {/* Contact Form & Info Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        {/* Dialog for form submission */}
        <AlertDialog
          title="We Received Your Message"
          description={`Thank you for contacting us! We have received your message and will get back to you within 24 hours.`}
          toggleOpen={openDialog}
          handleClose={() => setOpenDialog(false)}
        />

        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid size= {{ xs: 12, md: 7 }}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                Send Us a Message
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Fill out the form below and we'll get back to you within 24 hours.
              </Typography>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid size= {{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid size= {{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid size= {{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid size= {{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid size= {{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Company/Organization (Optional)"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid size= {{ xs: 12 }}>
                    <TextField
                      fullWidth
                      select
                      label="Type of Inquiry"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      required
                    >
                      {inquiryTypes.map((type) => (
                        <MenuItem key={type} value={type}>
                          {type}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid size= {{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid size= {{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid size= {{ xs: 12 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      startIcon={<Send />}
                      sx={{
                        background: 'linear-gradient(135deg, #0066ff, #00c9ff)',
                        borderRadius: '50px',
                        px: 4,
                        py: 1.5,
                        textTransform: 'none',
                        fontSize: '1.1rem',
                        fontWeight: 600,
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>

          {/* Contact Information */}
          <Grid size= {{ xs: 12, md: 5 }}>
            <Stack spacing={3}>
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  sx={{
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 30px rgba(0, 102, 255, 0.15)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
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
                          flexShrink: 0,
                        }}
                      >
                        {info.icon}
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                          {info.title}
                        </Typography>
                        {info.details.map((detail, idx) => (
                          <Typography key={idx} variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                            {detail}
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              ))}

              {/* Social Media */}
              <Card>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                    Follow Us
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    {socialMedia.map((social, index) => (
                      <Box
                        key={index}
                        sx={{
                          width: 50,
                          height: 50,
                          bgcolor: social.color,
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          cursor: 'pointer',
                          transition: 'all 0.3s',
                          '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: '0 5px 20px rgba(0, 0, 0, 0.2)',
                          },
                        }}
                      >
                        {social.icon}
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* Office Locations */}
      {/* <Box sx={{ bgcolor: '#f8f9fc', py: 10 }}>
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
              Locations
            </Box>
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', mb: 6 }}>
            Visit us at any of our training centers across Nigeria
          </Typography>

          <Grid container spacing={4}>
            {officeLocations.map((location, index) => (
              <Grid size= {{ xs: 12, md: 4 }} key={index}>
                <Paper
                  sx={{
                    p: 4,
                    height: '100%',
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 20px 40px rgba(0, 102, 255, 0.15)',
                    },
                  }}
                >
                  <LocationOn sx={{ fontSize: 50, color: '#0066ff', mb: 2 }} />
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                    {location.city}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    <strong>Address:</strong> {location.address}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    <strong>Phone:</strong> {location.phone}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Email:</strong> {location.email}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box> */}

      {/* Departments */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, textAlign: 'center' }}>
          Contact by{' '}
          <Box
            component="span"
            sx={{
              background: 'linear-gradient(135deg, #0066ff, #00c9ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Department
          </Box>
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', mb: 6 }}>
          Reach out to the right team for faster assistance
        </Typography>

        <Grid container spacing={3}>
          {departments.map((dept, index) => (
            <Grid size= {{ xs: 12, md: 6 }} key={index}>
              <Paper sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#0066ff' }}>
                  {dept.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {dept.description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Email sx={{ fontSize: 18, color: '#0066ff' }} />
                    <Typography variant="body2">{dept.email}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Phone sx={{ fontSize: 18, color: '#0066ff' }} />
                    <Typography variant="body2">{dept.phone}</Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Map Section */}
      {/* <Box sx={{ bgcolor: '#f8f9fc', py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, textAlign: 'center' }}>
            Find Us on{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #0066ff, #00c9ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Google Maps
            </Box>
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', mb: 6 }}>
            Visit our headquarters in Lagos
          </Typography>

          <Paper sx={{ overflow: 'hidden', borderRadius: 2 }}>
            <Box
              sx={{
                width: '100%',
                height: 450,
                bgcolor: '#e0e0e0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h6" color="text.secondary">
                [Google Maps Integration Here]
              </Typography>
               In production, integrate Google Maps iframe or API 
            </Box>
          </Paper>
        </Container>
      </Box> */}

      {/* FAQ Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, textAlign: 'center' }}>
          Need Quick{' '}
          <Box
            component="span"
            sx={{
              background: 'linear-gradient(135deg, #0066ff, #00c9ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Answers?
          </Box>
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', mb: 6 }}>
          Check our frequently asked questions or contact us directly
        </Typography>

        <Grid container spacing={3}>
          <Grid size= {{ xs: 12, md: 6 }}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#0066ff' }}>
                What are your course schedules?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We offer flexible schedules including weekday, weekend, and evening classes. Contact our admissions team for the latest course calendar and upcoming start dates.
              </Typography>
            </Paper>
          </Grid>
          <Grid size= {{ xs: 12, md: 6 }}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#0066ff' }}>
                Do you provide corporate training?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Yes! We offer customized on-site and online corporate training programs. Contact our corporate training department for a tailored proposal.
              </Typography>
            </Paper>
          </Grid>
          <Grid size= {{ xs: 12, md: 6 }}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#0066ff' }}>
                How can I schedule a facility tour?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                You can schedule a tour of our training labs by calling our main office or filling out the contact form above. Tours are available Monday through Friday.
              </Typography>
            </Paper>
          </Grid>
          <Grid size= {{ xs: 12, md: 6 }}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#0066ff' }}>
                What payment methods do you accept?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We accept bank transfers, credit/debit cards, and offer payment plans for individual courses. Corporate clients can arrange invoicing through our finance department.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: 'white', borderTop: '1px solid #e0e0e0', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid size= {{ xs: 12, md: 3}}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                TACC
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                The Automation Control Circle - Your partner in industrial automation excellence.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Email:</strong> info@echwood.com
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Phone:</strong> +234 (0) 800 TACC AUTO
              </Typography>
            </Grid>
            <Grid size= {{ xs: 12, md: 3 }}>
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
            <Grid size= {{ xs: 12, md: 3 }}>
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
            <Grid size= {{ xs: 12, md: 3 }}>
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