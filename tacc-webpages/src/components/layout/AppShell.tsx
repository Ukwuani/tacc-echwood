'use client';
import React, { useEffect, useState } from 'react';
import {
  Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText,
  Toolbar, AppBar, Typography, IconButton, Avatar, Badge,
  Tooltip, Divider, useTheme, useMediaQuery,
} from '@mui/material';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { usePathname, useRouter } from 'next/navigation';
import { getUserProfile } from '@/lib/data';

const DRAWER_W = 240;

const NAV = [
  { label: 'Dashboard',    icon: <DashboardRoundedIcon />,    href: '/dashboard' },
  { label: 'My Courses',   icon: <MenuBookRoundedIcon />,     href: '/dashboard/courses' },
  { label: 'Schedule',     icon: <CalendarMonthRoundedIcon />,href: '/dashboard/schedule' },
  { label: 'Assignments',  icon: <AssignmentRoundedIcon />,   href: '/dashboard/assignments' },
  { label: 'Grades',       icon: <GradeRoundedIcon />,        href: '/dashboard/grades' },
  { label: 'Leaderboard',  icon: <EmojiEventsRoundedIcon />,  href: '/dashboard/leaderboard' },
];

export default function AppShell({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const [user, setUser]     = useState<any>({});

  useEffect(() => {
    getUserProfile().then(profile => {
      if (!profile?.id) {
        router.push("/register"); // redirect if not logged in
        return;
      }
      setUser(profile);
    });

    
  }, []);

  const drawer = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Logo */}
      <Box sx={{ px: 3, py: 2.5, display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <img src="imgs/tacc.jpeg" alt="TACC" style={{
          width: 38, height: 38, borderRadius: 2,
          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontWeight: 800, fontSize: 18, boxShadow: '0 4px 14px rgba(85,108,214,0.4)',
        }}></img>
        <Typography variant="h6" fontWeight={700} color="primary">TACC</Typography>
      </Box>
      <Divider sx={{ mx: 2 }} />

      {/* Nav */}
      <List sx={{ px: 1.5, pt: 1, flex: 1 }}>
        {NAV.map(item => {
          const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          return (
            <ListItemButton
              key={item.href}
              onClick={() => { router.push(item.href); if (isMobile) setMobileOpen(false); }}
              sx={{
                borderRadius: 2, mb: 0.5, py: 1.1,
                color: active ? 'primary.main' : 'text.secondary',
                bgcolor: active ? 'primary.main' + '18' : 'transparent',
                '& .MuiListItemIcon-root': { color: active ? 'primary.main' : 'text.secondary' },
                '&:hover': { bgcolor: 'primary.main' + '12', color: 'primary.main', '& .MuiListItemIcon-root': { color: 'primary.main' } },
              }}
            >
              <ListItemIcon sx={{ minWidth: 38 }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: 14, fontWeight: active ? 600 : 500 }} />
              {active && <Box sx={{ width: 4, height: 22, borderRadius: 2, bgcolor: 'primary.main', ml: 1 }} />}
            </ListItemButton>
          );
        })}
      </List>

      <Divider sx={{ mx: 2 }} />
      <List sx={{ px: 1.5, pb: 1 }}>
        <ListItemButton sx={{ borderRadius: 2, color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
          <ListItemIcon sx={{ minWidth: 38 }}><SettingsRoundedIcon /></ListItemIcon>
          <ListItemText primary="Settings" primaryTypographyProps={{ fontSize: 14, fontWeight: 500 }} />
        </ListItemButton>
      </List>

      {/* User */}
      <Box sx={{ p: 2, mx: 1.5, mb: 1.5, bgcolor: 'primary.main' + '0D', borderRadius: 3, display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Avatar sx={{ width: 36, height: 36, bgcolor: 'primary.main', fontSize: 14, fontWeight: 700 }}>{user?.firstName?.charAt(0) ?? "-"}{user?.lastName?.charAt(0) ?? "-"}</Avatar>
        <Box>
          <Typography variant="body2" fontWeight={600}>{user?.firstName ?? "Hey"} {user?.lastName ?? "There"}</Typography>
          <Typography variant="caption" color="text.secondary">Automation Engineer</Typography>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Sidebar */}
      {isMobile ? (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{ '& .MuiDrawer-paper': { width: DRAWER_W, boxSizing: 'border-box' } }}
        >
          {drawer}
        </Drawer>
      ) : (
        <Drawer
          variant="permanent"
          sx={{ width: DRAWER_W, flexShrink: 0, '& .MuiDrawer-paper': { width: DRAWER_W, boxSizing: 'border-box', border: 'none', boxShadow: '1px 0 12px rgba(0,0,0,0.06)' } }}
        >
          {drawer}
        </Drawer>
      )}

      {/* Main */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        {/* Topbar */}
        <AppBar
          position="sticky"
          elevation={0}
          sx={{ bgcolor: 'background.paper', color: 'text.primary', borderBottom: '1px solid', borderColor: 'divider' }}
        >
          <Toolbar sx={{ gap: 1.5 }}>
            {isMobile && (
              <IconButton edge="start" onClick={() => setMobileOpen(true)}>
                <MenuRoundedIcon />
              </IconButton>
            )}
            <Box sx={{ flex: 1 }} />
            <Tooltip title="Search">
              <IconButton sx={{ color: 'text.secondary' }}><SearchRoundedIcon /></IconButton>
            </Tooltip>
            <Tooltip title="Notifications">
              <IconButton sx={{ color: 'text.secondary' }}>
                <Badge badgeContent={3} color="error">
                  <NotificationsRoundedIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <Avatar sx={{ width: 36, height: 36, bgcolor: 'primary.main', fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>{user?.firstName?.charAt(0) ?? "-"}{user?.lastName?.charAt(0) ?? "-"}</Avatar>
          </Toolbar>
        </AppBar>

        {/* Page content */}
        <Box component="main" sx={{ flex: 1, p: { xs: 2, md: 3 }, overflow: 'auto' }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
