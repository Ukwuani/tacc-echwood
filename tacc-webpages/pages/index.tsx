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
import HeroSection2 from '../src/Hero2';
import HeroSection from '../src/HeroSection';
import CourseSection from '../src/CourseSection';
import DefaultLayout from '../src/DefaultLayout';

export default function Home() {
  return (
    <DefaultLayout>
    <Container maxWidth="lg">
      {/* App Bar Section */}
      {/* <Heading></Heading> */}


      {/* Hero Section */}
      <HeroSection></HeroSection>

      {/* Course Section */}
      <CourseSection></CourseSection>

    </Container>
    
    
    </DefaultLayout>
  );
}
