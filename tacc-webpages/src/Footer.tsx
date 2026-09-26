import React from 'react';
import { Box, Container, Typography, Link, Grid, Button } from '@mui/material';

const Footer = () => {
  return (
       <Box sx={{ 
        bgcolor: 'white', borderTop: '1px solid #e0e0e0',
         py: 6 }}>
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
                <strong>Email:</strong> info@echwood.com
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>LinkedIn:</strong> <a href='https://www.linkedin.com/company/control-circle' style={{ color: 'inherit', textDecoration: 'none' }}> @control-circle </a>
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Services
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {[
                  { label: 'PLC Programming', href: '/courses' },
                  { label: 'SCADA Training', href: '/courses' },
                  { label: 'IIoT Courses', href: '/courses' },
                  { label: 'System Integration', href: '/system-integrator' },
                ].map((item) => (
                  <li key={item.label}>
                    <Button
                      href={item.href}
                      sx={{
                        color: 'text.secondary',
                        textTransform: 'none',
                        p: 0,
                        justifyContent: 'flex-start',
                        '&:hover': { color: '#0066ff' },
                      }}
                    >
                      {item.label}
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
                {[
                  { label: 'About Us', href: '/about' },
                  { label: 'Careers', href: 'https://ng.linkedin.com/company/control-circle' },
                  { label: 'Events', href: '/events' },
                  { label: 'Contact', href: '/contact-us' },
                ].map((item) => (
                  <li key={item.label}>
                    <Button
                      href={item.href}
                      sx={{
                        color: 'text.secondary',
                        textTransform: 'none',
                        p: 0,
                        justifyContent: 'flex-start',
                        '&:hover': { color: '#0066ff' },
                      }}
                    >
                      {item.label}
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
                {[
                  { label: 'Ignition Modules', href: '/ignition-modules' },
                  { label: 'Tutorials', href: '/courses' },
                  { label: 'Community', href: 'https://www.linkedin.com/company/control-circle' },
                  { label: 'Support', href: '/contact-us' },
                ].map((item) => (
                  <li key={item.label}>
                    <Button
                      href={item.href}
                      sx={{
                        color: 'text.secondary',
                        textTransform: 'none',
                        p: 0,
                        justifyContent: 'flex-start',
                        '&:hover': { color: '#0066ff' },
                      }}
                    >
                      {item.label}
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
  );
};

export default Footer;
