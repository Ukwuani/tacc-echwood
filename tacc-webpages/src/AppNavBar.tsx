import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Button,
  useMediaQuery,
  useTheme,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";
import React from "react";
import { supabase } from "./lib/supabase";

export interface AppNavBarProps {
  selectedPage?: string;
}

export default function AppNavBar({ selectedPage }: AppNavBarProps) {
  const pages = [
    { title: "Home", href: "/" },
    { title: "Courses", href: "/courses" },
    {
      title: "About",
      href: "/about",
    },
    {
      title: " Services",
      href: "/system-integrator",
    },
    {
      title: "Career",
      href: "https://ng.linkedin.com/company/control-circle",
    },
    { title: "Contact us", href: "/contact-us" },
  ];

   const [elevated, setElevated] = React.useState(false);
  const [hasSession, setHasSession] = React.useState(false);
  const router = useRouter()

  React.useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getUser();
      setHasSession(!error);
      
    };
    checkSession();
  }, [router]);

  React.useEffect(() => {
    const handleScroll = () => {
      setElevated(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="sticky" sx={{ bgcolor: "white", boxShadow: 1 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              background: "linear-gradient(135deg, #0066ff, #00c9ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            TACC
          </Typography>

          {/* Centered Menu */}
          {!isMobile && (
            <>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {pages.map((page) => (
                  <Button
                    key={page.title}
                    color="inherit"
                    sx={page.title.toLowerCase() == selectedPage?.toLowerCase() ? { color: "text.primary", fontWeight: 700 } : {color: "text.primary"}}
                    href={page.href}
                  >
                    {page.title}
                  </Button>
                ))}
          </Box>

          {/* Registration Button */}
                     
                        <Button
                          href={hasSession ? "/dashboard" : "/register"}
                          variant="contained"
                          color="inherit"
                          sx={{
              background: "linear-gradient(135deg, #0066ff, #00c9ff)",
              borderRadius: 100,
              px: 3,
              textTransform: "none",
              boxShadow: "0 4px 15px rgba(0, 102, 255, 0.3)",
            }}
                          
                        >
                          { hasSession ? "Dashboard" : "Sign In/Up"}
                        </Button>
            </>
          )}

            {isMobile && (
            <>
              <IconButton
                size="large"
                edge="end"
                color="primary"
                aria-label="menu"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>

              {/* Mobile Drawer */}
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                <Box
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={() => setDrawerOpen(false)}
                >
                   
                  <List>
                    {pages.map((page) => (
                      <ListItem key={page.title} disablePadding>
                        <ListItemButton component={Link} href={page.href}>
                          <ListItemText primary={page.title} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                   {/* Registration Button */}
                     
                        <Button
                          href={hasSession ? "/dashboard" : "/register"}
                          variant="contained"
                          color="inherit"
                          sx={{
              background: "linear-gradient(135deg, #0066ff, #00c9ff)",
              borderRadius: 100,
              px: 3,
              mx: 2,
              textTransform: "none",
              boxShadow: "0 4px 15px rgba(0, 102, 255, 0.3)",
            }}
                          
                        >
                          { hasSession ? "Dashboard" : "Sign In/Up"}
                        </Button>
                </Box>
              </Drawer>
            </>
          )}
        
        
        </Toolbar>
      </Container>
    </AppBar>
  );
}
