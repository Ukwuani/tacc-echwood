import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { AppCacheProvider } from "@mui/material-nextjs/v15-pagesRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../src/theme";
import Heading from "../src/Heading";
import { Box, Typography } from "@mui/material";
import Footer from "../src/Footer";

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <AppCacheProvider {...props}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Industrial Automation Training & System Integration | The Automation Control Center - PLC, SCADA, IIoT Courses</title>
        <meta name="description" content="Master industrial automation with TACC. Expert PLC programming courses, SCADA training, IIoT solutions, system integration services, and Industry 4.0 consulting. Get certified by industry professionals."/>
        <meta name="keywords" content="PLC training, SCADA courses, industrial automation, IIoT training, Industry 4.0, system integration, automation consulting, PLC programming, Modbus, OPC UA, MQTT, MES systems"/>
        <meta name="author" content="TACC - The Automation Control Circle"/>
        <meta property="og:title" content="Industrial Automation Training & System Integration | TACC"/>
        <meta property="og:description" content="Master industrial automation with expert-led PLC, SCADA, and IIoT training. Professional system integration and consulting services."/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://automationcc.com/"/>
        <meta property="og:image" content="https://automationcc.com/imgs/tacc.png"/>
        <link rel="canonical" href="https://tacc.echwood.com/"/>
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {/* App Bar Section
        <Heading></Heading>
        <Box mt="60px"></Box> */}
        <Component {...pageProps} />
        {/* Footer
        <Footer/> */}
        {/* <Box
          component="footer"
          sx={{
            py: 4,
            textAlign: "center",
            background: "black",
            color: "white",
            width: "100%",
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} MyCompany. All rights reserved.
          </Typography>
        </Box> */}
      </ThemeProvider>
    </AppCacheProvider>
  );
}
