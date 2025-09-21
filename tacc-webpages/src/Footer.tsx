import React from 'react';
import { Box, Container, Typography, Link, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: 'auto',
        color: "white",
        backgroundColor: "black"
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <Link href="#" color="inherit" underline="hover" display="block">
              About
            </Link>
            <Link href="https://ng.linkedin.com/company/control-circle?trk=public_post_feed-actor-image" color="inherit" underline="hover" display="block">
              Careers
            </Link>
            <Link href="#" color="inherit" underline="hover" display="block">
              Contact
            </Link>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom>
              Resources
            </Typography>
            <Link href="#" color="inherit" underline="hover" display="block">
              Blog
            </Link>
            <Link href="#" color="inherit" underline="hover" display="block">
              Help Center
            </Link>
            <Link href="#" color="inherit" underline="hover" display="block">
              Privacy Policy
            </Link>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Link href="#" color="inherit" underline="hover" display="block">
              Twitter
            </Link>
            <Link href="#" color="inherit" underline="hover" display="block">
              LinkedIn
            </Link>
            <Link href="#" color="inherit" underline="hover" display="block">
              GitHub
            </Link>
          </Grid>
        </Grid>

        <Box mt={4} textAlign="left">
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Tacc-Echwood. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
