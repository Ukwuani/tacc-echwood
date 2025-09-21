import * as React from "react";
import Link from "@mui/material/Link";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import { Box, Stack, Button, Container, Grid } from "@mui/material";
import Copyright from "./Copyright";
import PCard from "./PCard";

export default function CourseSection() {
  return (
    <>
      <Box
        sx={{
          mt: 6,
          mb: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          sx={{
            mb: 2,
            mx: { xs: 4 },
            fontWeight: "900",
            fontSize: { xs: 14, md: "1.4rem" },
            textAlign: "center",
          }}
        >
          Discover Our Most Popular & Career-Boosting Courses
          <br />
          in Industrial Automation, PLCs, SCADA, IIOT 4.0 and Smart
          Manufacturing
        </Typography>

        <Typography
          variant="body1"
          color="grey"
          sx={{
            mb: 2,
            mx: { xs: 4 },
            fontSize: { xs: ".75rem", md: "1rem" },
            textAlign: "center",
          }}
        >
          Gain real-world skills with our top-rated courses in PLCs, SCADA, and
          industrial automation. Learn at your own pace and earn
          <br />
          certifications that boost your career in smart manufacturing and
          control systems.
        </Typography>

        {/* Introductory video */}
        <Box sx={{ py: 6, justifyContent: "center", alignItems: "center" }}>
          <Container>
            <Grid container sx={{ my: 4 }}>
              <Grid size={{ xs: 12, md: 6}}  >
                <iframe
  src="https://player.cloudinary.com/embed/?cloud_name=echwood&public_id=TaccEchwood_jnbvxc&autoplay=true&autoplay_mode=on-scroll&hide_context_menu=true&show_logo=false"
  width={"100%"}
  height={"310"} 
  style={{ borderRadius: 12, border: "none", marginTop: "20" }}

  allow="autoplay; encrypted-media; picture-in-picture"

></iframe>
                {/* 
                <iframe
                  height={"360"}
                  width={"100%"}
                  style={{ borderRadius: 12, border: "none", marginTop: "20" }}
                  id="ytplayer"
                  src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1"
                ></iframe> */}
              </Grid>
              <Grid size={{ xs: 12, md: 5 }} sx={{margin: "auto"}}>
                <Box
                  sx={{
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h1"
                    sx={{
                      my: 2,
                      mx: { xs: 4 },
                      fontSize: { xs: 12, md: "1.2rem" },
                      textAlign: "left",
                      fontWeight: "bold",
                    }}
                  >
                    Your Journey Into Industrial Automation Starts Here!
                  </Typography>

                  <Typography
                    variant="body1"
                    color="grey"
                    sx={{
                      mb: 2,
                      mx: { xs: 4 },
                      fontSize: { xs: "0.8rem", md: "1rem" },
                      textAlign: "left",
                    }}
                  >
                    Get a quick overview of what our platform offers. In just a
                    few minutes, you'll discover how our courses, labs, and
                    expert instructors can help you master PLCs, SCADA, IIoT,
                    and AI—from the ground up to advanced applications. Hit play
                    and take the first step toward Industry 4.0 excellence.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        {/* Features Section */}
        <Box sx={{ py: 6, justifyContent: "center", alignItems: "center" }}>
          <Container>
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 4 }}>
                <PCard
                  background="#e6dcff"
                  image="/imgs/plc.webp"
                  title="PLC Programming Track"
                  description="Learn the fundamentals of PLC programming and automation control. This hands-on course covers ladder logic, real-world applications, and troubleshooting skills essential for industrial automation careers."
                  link="/courses"
                ></PCard>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <PCard
                  background="#FEECD3"
                  image="/imgs/plc.webp"
                  title="Devices & Protocols Track"
                  description="Learn to connect, configure, and communicate with industrial field devices using key protocols like OPC UA, MQTT, Modbus, Profibus, HART, and 4-20mA. Gain practical skills to ensure reliable data flow in automation systems."
                  link="/course2"
                ></PCard>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <PCard
                  background="#ffd8d5"
                  image="/imgs/plc.webp"
                  title="SCADA, IIOT and AI Track"
                  description="Learn to integrate SCADA, MES, IIoT, AI, and Cloud tech to build smart, connected, and robust industrial systems. This course is ideal for automation professionals looking to lead digital transformation in the era of Industry 4.0."
                  link="/courses"
                ></PCard>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Courses */}
        {/* <Box sx={{ py: 6, justifyContent: "center", alignItems: "center" }}>
          <Container>
            <Grid container spacing={4}>
              <Grid>
                <Typography variant="h5">Fast</Typography>
                <Typography>
                  Optimized for performance with Next.js SSR.
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Typography variant="h5">Modern</Typography>
                <Typography>
                  Built with MUI and responsive design in mind.
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Typography variant="h5">Customizable</Typography>
                <Typography>
                  Customize components easily with MUI theming.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box> */}
      </Box>
    </>
  );
}
