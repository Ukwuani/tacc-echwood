import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Toolbar,
  Stack,
  Typography,
  Container,
  Button,
  Box,
  Grid,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "./Link";

const pages = [
  { title: "Home", href: "/" },
  { title: "Courses", href: "/courses" },
  {
    title: "Career",
    href: "https://ng.linkedin.com/company/control-circle?trk=public_post_feed-actor-image",
  },
  { title: "Contact", href: "/contact" },
];

export default function Heading() {
  const [elevated, setElevated] = React.useState(false);

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
    <AppBar
      position="fixed"
      color="transparent"
      sx={{
        backgroundColor: elevated ? "#fff" : "transparent",
        transition: "background-color 0.3s ease, color 0.3s ease",
        boxShadow: 0,
        margin: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Title */}
          <Typography variant="h6" sx={{ flexGrow: 1, fontSize: { xs: 14 } }}>
            The Automation Control Circle
          </Typography>

          {/* Centered Menu */}
          {!isMobile && (
            <>
              <Stack
                direction="row"
                spacing={4}
                sx={{
                  flex: 2,
                  justifyContent: "center",
                }}
              >
                {pages.map((page) => (
                  <Button
                    component={Link}
                    noLinkStyle
                    href={page.href}
                    color="inherit"
                    sx={{ fontSize: 12 }}
                  >
                    {page.title}
                  </Button>
                ))}
              </Stack>

              {/* Registration Button */}
              <Box
                sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}
              >
                <Button
                  href="/register"
                  variant="outlined"
                  color="inherit"
                  sx={{
                    borderRadius: 100,
                    fontWeight: "bold",
                    fontSize: { xs: 8, md: 12 },
                    px: { xs: 2, md: 4 },
                  }}
                >
                  Sign In/Up
                </Button>
              </Box>
            </>
          )}

          {isMobile && (
            <>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
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
                </Box>
              </Drawer>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
