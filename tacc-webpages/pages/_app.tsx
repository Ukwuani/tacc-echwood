import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { AppCacheProvider } from "@mui/material-nextjs/v15-pagesRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../src/theme";
import Heading from "../src/Heading";
import { Box, Typography } from "@mui/material";

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <AppCacheProvider {...props}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {/* App Bar Section */}
        <Heading></Heading>
        <Box mt="60px"></Box>
        <Component {...pageProps} />
        {/* Footer */}
        <Box
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
        </Box>
      </ThemeProvider>
    </AppCacheProvider>
  );
}
