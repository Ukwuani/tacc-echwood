
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
import DefaultLayout from '../src/DefaultLayout';

export default function Events() {
  return (
    <DefaultLayout>
    <Container maxWidth="lg">
      {/* App Bar Section */}
      {/* <Heading></Heading> */}
      


      {/* Embedded Reg Form */}
     <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeRU7Tm-W9z7ka0PwozBXeCeweUEegr7VcyXYjH-7CuUJRUsA/viewform?embedded=true" width="640" height="1533" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>


    </Container>
    
    
    </DefaultLayout>
  );
}
