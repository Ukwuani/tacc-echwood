import * as React from 'react';
import { AppBar, Toolbar, Stack, Typography, Container, Button, Box, Grid } from '@mui/material'




export default function Heading() {
  return (
    <AppBar position="static" color="transparent" sx={{boxShadow: 0}}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
              {/* Title */}
              <Typography variant="h6" sx={{ flexGrow: 1, fontSize: {xs: 14} }}>
                The Automation Control Circle
              </Typography>
    
              {/* Centered Menu */}
              <Stack direction="row" spacing={4} sx={{ display: {xs: "none", md: "block"}, flex: 2, justifyContent: 'center'}}>
                <Button href='#' color="inherit" sx={{ fontSize: 12}}>Home </Button>
                <Button href='#courses' color="inherit" sx={{ fontSize: 12}}>Courses</Button> 
                <Button href='#pricing' color="inherit" sx={{ fontSize: 12}}>Pricing</Button> 
                <Button href='#contact' color="inherit" sx={{ fontSize: 12}}>Contact</Button>
              </Stack>
    
              {/* Registration Button */}
              <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                <Button href='https://paystack.shop/tacc-couses' variant='outlined' color="inherit" sx={{borderRadius: 100, fontWeight: "bold", fontSize: {xs: 8, md: 12}, px: {xs:2, md:4}}}>Register</Button>
              </Box>
              
            </Toolbar>
          </AppBar>
  );
}
