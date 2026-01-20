import { Box, CssBaseline } from "@mui/material";

import { ReactNode } from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import AppNavBar from "./AppNavBar";

export default function DefaultLayout({ children, page }: {
  children: ReactNode;
  page?: string;
}) {
  return (
    <>
      <CssBaseline />
      {/* App Bar Section */}
        {/* <Heading></Heading> */}
        <AppNavBar selectedPage={page}></AppNavBar>
        {/* <Box mt="60px"></Box> */}
          {children}
        {/* Footer */}
        <Footer/>
  
    </>
  )
}