import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Stack, Button, Container, Grid } from "@mui/material";
import PCard from "./PCard";

export default function HeroSection() {
  return (
    <>
      <Box
        sx={{
          mt:"120px",
          mb: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            mb: 2,
            mx: { xs: 4 },
            fontWeight: "900",
            fontSize: { xs: "1.2rem", md: "2.125rem" },
            textAlign: "center",
          }}
        >
          Master Industrial Automation from SCADA, PLCs to Smart Manufacturing
        </Typography>

        <Typography
          variant="body1"
          color="grey"
          sx={{
            mb: 2,
            mx: { xs: 4 },
            fontSize: { xs: "0.9rem", md: "1.2rem" },
            textAlign: "center",
          }}
        >
          Get hands-on training in PLCs, SCADA, IoT, and Industry 4.0 systems
          with real-world projects, expert instructors, and certification paths
          designed for engineers and technicians.
        </Typography>
        <Grid container spacing={2}>
          
          
          <Grid size={{xs: 12, md:4}} display="flex" justifyContent="center" alignItems="center" >

          <Button
            variant="contained"
            sx={{
              background: "black",
              borderRadius: 100,
              fontWeight: "bold",
              height:{xs:"3rem"},
              fontSize: { xs: "0.8rem", md: 12 },
              px: { xs: 2, md: 6 },
            }}
          >
            Register
          </Button>
           </Grid>

           <Grid sx={{margin: "auto"}} size={{xs: 10, md:6}} display="flex" justifyContent="center" alignItems="center">         
          <Box
            sx={{
              // width: "80%",
              // height: { xs: "100%", md: 40 },
              margin: "auto",
              overflow:"visible",
              position: "relative",
              alignContent: "center",
            }}
          >
            <img
              src="/imgs/people.png" // Replace with your image path
              alt="Industrial Automation Training"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                overflow: "visible",
              }}
            />
          </Box>
          </Grid> 
          {/* <Box> 
            <img 
            src={"/imgs/people.png"}
            alt="Industrial Automation Training"
            height={40}
            style={{alignContent: "center", margin: "auto"}}
          
             />
          </Box> */}
        </Grid>

        {/* Features Section */}
        <Box sx={{ py: 6, justifyContent: "center", alignItems: "center" }}>
          <Container>
            <Grid container spacing={6}>
              <Grid size={{ xs: 12, md: 6 }}>
                <PCard
                  background="#FEECD3"
                  image="/imgs/plc.webp"
                  title="From Field Devices to PLC"
                  description="Learn how PLCs work, learn how they are programmed. Start driving machines with logic."
                ></PCard>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <PCard
                  background="#d9e5d5"
                  image="/imgs/scada_dash.webp"
                  title="Learn SCADA, MES, IIOT and AI"
                  description="Data visualization and driving decisions through data has become industry priority. Start learning now"
                ></PCard>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}
