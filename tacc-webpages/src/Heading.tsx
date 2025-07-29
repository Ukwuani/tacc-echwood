import * as React from "react";
import {
  AppBar,
  Toolbar,
  Stack,
  Typography,
  Container,
  Button,
  Box,
  Grid,
} from "@mui/material";
import { Link } from "./Link";

export default function Heading() {
  const [elevated, setElevated] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setElevated(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <AppBar position="fixed" color="transparent" sx={{ 
      backgroundColor: elevated ? '#fff' : 'transparent',
      transition: 'background-color 0.3s ease, color 0.3s ease',
      boxShadow: 0, margin: "auto"}}>
       <Container maxWidth="lg">
      <Toolbar sx={{ justifyContent: "space-between"}}>
        {/* Title */}
        <Typography variant="h6" sx={{ flexGrow: 1, fontSize: { xs: 14 } }}>
          The Automation Control Circle
        </Typography>

        {/* Centered Menu */}
        <Stack
          direction="row"
          spacing={4}
          sx={{
            display: { xs: "none", md: "block" },
            flex: 2,
            justifyContent: "center",
          }}
        >
          <Button component={Link} noLinkStyle href="/" color="inherit" sx={{ fontSize: 12 }}>
            Home{" "}
          </Button>
          <Button component={Link} noLinkStyle href="/courses" color="inherit" sx={{ fontSize: 12 }}>
            Courses
          </Button>
          <Button component={Link} noLinkStyle href="https://ng.linkedin.com/company/control-circle?trk=public_post_feed-actor-image" color="inherit" sx={{ fontSize: 12 }}>
            Career
          </Button>
          <Button href="#contact" color="inherit" sx={{ fontSize: 12 }}>
            Contact
          </Button>
        </Stack>

        {/* Registration Button */}
        <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
          <Button
            href="https://paystack.shop/tacc-couses"
            variant="outlined"
            color="inherit"
            sx={{
              borderRadius: 100,
              fontWeight: "bold",
              fontSize: { xs: 8, md: 12 },
              px: { xs: 2, md: 4 },
            }}
          >
            Register
          </Button>
        </Box>
      </Toolbar>
      </Container>
    </AppBar>
  );
}
