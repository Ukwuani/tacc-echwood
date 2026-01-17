import { Box, CssBaseline } from "@mui/material";

import { ReactNode } from "react";
import Heading from "./Heading";
import Footer from "./Footer";

export default function DefaultLayout({ children }: {
  children: ReactNode
}) {
  return (
    <>
      <CssBaseline />
      {/* App Bar Section */}
        <Heading></Heading>
        <Box mt="60px"></Box>
          {children}
        {/* Footer */}
        <Footer/>
  
    </>
  )
}