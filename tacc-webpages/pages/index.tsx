import * as React from 'react';
import { AppBar, Toolbar, Stack, Typography, Container, Button, Box, Grid, Card } from '@mui/material'
import { Link } from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import shadows from '@mui/material/styles/shadows';
import { grey } from '@mui/material/colors';
import Image from 'next/image'
import Heading from '../src/Heading';
import PCard from '../src/PCard';
import HeroSection from '../src/HeroSection';
import CourseSection from '../src/CourseSection';

export default function Home() {
  return (
    <>
    <Container maxWidth="lg">
      {/* App Bar Section */}
      <Heading></Heading>

      {/* Hero Section */}
      <HeroSection></HeroSection>

      {/* Course Section */}
      <CourseSection></CourseSection>

    </Container>
    
    {/* Footer */}
      <Box component="footer" sx={{ py: 4, textAlign: 'center', background: "black", color: "white", width:"100%"}}>
        <Typography variant="body2">© {new Date().getFullYear()} MyCompany. All rights reserved.</Typography>
      </Box>
    </>
  );
}
