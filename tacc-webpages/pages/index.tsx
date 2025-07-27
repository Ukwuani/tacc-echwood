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

export default function Home() {
  return (
    <>
    <Container maxWidth="lg">
      {/* App Bar Section */}
      <Heading></Heading>

      {/* Hero Section */}
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2, mx: {xs: 4}, fontWeight: "900", fontSize: {xs: 18, md:"2.125rem"}, textAlign: 'center'}}>
          Master Industrial Automation
          from SCADA, PLCs to Smart Manufacturing
        </Typography>
        
        <Typography variant="body1" color='grey' sx={{ mb: 2, mx: {xs: 4}, fontSize: {xs: "0.7rem", md: "1.2rem"}, textAlign: 'center'}}>
          Get hands-on training in PLCs, SCADA, IoT, and Industry 4.0 systems with real-world projects, 
          expert instructors, and certification paths designed for engineers and technicians.
        </Typography>
        <Stack direction="row" > 
          <Button variant="contained" sx={{ mx:1, background: "black", borderRadius: 100, fontWeight: "bold", fontSize: {xs: 8, md: 12}, px: {xs:2, md:6}}}>
            Register
            </Button>
          <Box
              sx={{
                width: '100%',
                height: { xs: 20, md: 40},
                margin: "auto",
                alignContent: "center",
                
              }}
            >
              <img
                src="/imgs/people.png" // Replace with your image path
                alt="Industrial Automation Training"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  overflow: "visible"
                }}
              />
            </Box>
          {/* <Box> 
            <img 
            src={"/imgs/people.png"}
            alt="Industrial Automation Training"
            height={40}
            style={{alignContent: "center", margin: "auto"}}
          
             />
          </Box> */}
        </Stack>

        {/* Features Section */}
        <Box sx={{ py: 6 ,justifyContent: 'center',
          alignItems: 'center'}}>
        <Container>
          <Grid container spacing={6} >
           
            <Grid size={{xs:12, md:6}} >
              <PCard 
              background="#FEECD3" 
              image="/imgs/plc.webp"
              title='From Field Devices to PLC'
              description='Learn how PLCs work, learn how they are programmed. Start driving machines with logic.'
              >

              </PCard>
              
            </Grid>


            <Grid size={{xs:12, md:6}}>
              <PCard 
              background="#d9e5d5" 
              image="/imgs/scada_dash.webp"
              title='Learn SCADA, MES, IIOT and AI'
              description='Data visualization and driving decisions through data has become industry priority. Start learning now'
              >

              </PCard>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Courses */}
      <Box sx={{ py: 6 ,justifyContent: 'center',
          alignItems: 'center'}}>
        <Container>
          <Grid container spacing={4} >
            <Grid >
              <Typography variant="h5">Fast</Typography>
              <Typography>Optimized for performance with Next.js SSR.</Typography>
            </Grid>
            <Grid size={{xs:12, md:4}}>
              <Typography variant="h5">Modern</Typography>
              <Typography>Built with MUI and responsive design in mind.</Typography>
            </Grid>
            <Grid size={{xs:12, md:4}}>
              <Typography variant="h5">Customizable</Typography>
              <Typography>Customize components easily with MUI theming.</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      
        <Copyright />
      </Box>
    </Container>
    {/* Footer */}
      <Box component="footer" sx={{ py: 4, textAlign: 'center', background: "black", width:"100%"}}>
        <Typography variant="body2">© {new Date().getFullYear()} MyCompany. All rights reserved.</Typography>
      </Box>
    </>
  );
}
