import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Paper,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Button,
  IconButton,
  Avatar,
  Chip,
  Card,
  CardContent,
  Typography,
  Divider,
  LinearProgress,
  Tooltip,
  Menu,
  MenuItem,
  InputAdornment,
  ThemeProvider,
  createTheme,
  Stack,
} from '@mui/material';
import {
  PlayArrow,
  Pause,
  VolumeUp,
  VolumeOff,
  Fullscreen,
  Settings,
  Search,
  Notifications,
  CheckCircle,
  PlayCircle,
  Schedule,
  Visibility,
  ThumbUp,
  Share,
  Bookmark,
  MoreVert,
  Comment,
  KeyboardArrowRight,
} from '@mui/icons-material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0f172a',
      paper: '#1e293b',
    },
    primary: {
      main: '#3b82f6',
    },
    secondary: {
      main: '#a855f7',
    },
    text: {
      primary: '#f1f5f9',
      secondary: '#94a3b8',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(15, 23, 42, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(51, 65, 85, 0.5)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.8) 100%)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(51, 65, 85, 0.5)',
        },
      },
    },
  },
});

export default function VideoStreaming() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [playlistOpen, setPlaylistOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const videos = [
    { id: 1, title: 'Module 1: Getting Started with React Hooks', duration: '42:15', views: '12.5K', completed: true, watched: 35 },
    { id: 2, title: 'Module 2: State Management Patterns', duration: '58:30', views: '9.8K', completed: false, watched: 0 },
    { id: 3, title: 'Module 3: Context API Deep Dive', duration: '1:05:20', views: '8.2K', completed: false, watched: 0 },
    { id: 4, title: 'Module 4: Custom Hooks & Best Practices', duration: '52:45', views: '7.1K', completed: false, watched: 0 },
    { id: 5, title: 'Module 5: Performance Optimization', duration: '48:10', views: '6.5K', completed: false, watched: 0 },
    { id: 6, title: 'Module 6: Testing React Components', duration: '1:15:30', views: '5.9K', completed: false, watched: 0 },
  ];

  const currentVideo = videos.find(v => v.id === currentVideoId);
  const filteredVideos = videos.filter(v => v.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleMenuOpen = (event: { currentTarget: React.SetStateAction<null>; }) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#0f172a' }}>
        {/* Header */}
        
        <AppBar position="sticky" elevation={0}>
          <Toolbar>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flex: 1 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 1.5,
                  background: 'linear-gradient(135deg, #3b82f6 0%, #a855f7 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <PlayArrow sx={{ color: 'white', fontSize: 24 }} />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1 }}>
                  TACC 
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  Advanced React Patterns
                </Typography>
              </Box>
            </Box>

            <TextField
              placeholder="Search modules..."
              size="small"
              sx={{ width: 300, mr: 2 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search sx={{ fontSize: 20 }} />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />

            <Tooltip title="Notifications">
              <IconButton color="inherit">
                <Notifications />
              </IconButton>
            </Tooltip>
            <Avatar sx={{ background: 'linear-gradient(135deg, #3b82f6 0%, #a855f7 100%)' }} />
          </Toolbar>
        </AppBar>

        {/* Main Content */}
        <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
          {/* Video Player Section */}
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            {/* Video Player */}
            <Box
              sx={{
                flex: 1,
                background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <Box sx={{ textAlign: 'center', color: 'white' }}>
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #a855f7 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3,
                  }}
                >
                  <PlayArrow sx={{ fontSize: 56 }} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600, maxWidth: 400 }}>
                  {currentVideo?.title}
                </Typography>
              </Box>

              {/* Video Controls Overlay */}
              <Paper
                elevation={0}
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                  p: 2.5,
                  backdropFilter: 'blur(10px)',
                }}
              >
                <LinearProgress
                  variant="determinate"
                  value={currentVideo?.watched || 0}
                  sx={{
                    mb: 2,
                    height: 6,
                    borderRadius: 1,
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    '& .MuiLinearProgress-bar': {
                      borderRadius: 1,
                      background: 'linear-gradient(90deg, #3b82f6 0%, #a855f7 100%)',
                    },
                  }}
                />
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Tooltip title={isPlaying ? 'Pause' : 'Play'}>
                      <IconButton
                        onClick={() => setIsPlaying(!isPlaying)}
                        sx={{
                          background: 'linear-gradient(135deg, #3b82f6 0%, #a855f7 100%)',
                          color: 'white',
                          '&:hover': { opacity: 0.9 },
                        }}
                      >
                        {isPlaying ? <Pause /> : <PlayArrow />}
                      </IconButton>
                    </Tooltip>
                    <Tooltip title={isMuted ? 'Unmute' : 'Mute'}>
                      <IconButton
                        onClick={() => setIsMuted(!isMuted)}
                        sx={{ color: 'white' }}
                      >
                        {isMuted ? <VolumeOff /> : <VolumeUp />}
                      </IconButton>
                    </Tooltip>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Tooltip title="Settings">
                      <IconButton sx={{ color: 'white' }}>
                        <Settings />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Fullscreen">
                      <IconButton sx={{ color: 'white' }}>
                        <Fullscreen />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Box>
              </Paper>
            </Box>

            {/* Video Info Section */}
            <Paper elevation={0} sx={{ p: 3, borderRadius: 0, borderBottom: '1px solid rgba(51, 65, 85, 0.5)' }}>
              <Box sx={{ maxWidth: 900 }}>
                <Typography variant="h5" sx={{ mb: 2, color: 'text.primary' }}>
                  {currentVideo?.title}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                  <Box sx={{ display: 'flex', gap: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Visibility sx={{ fontSize: 18, color: 'text.secondary' }} />
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {currentVideo?.views} views
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Schedule sx={{ fontSize: 18, color: 'text.secondary' }} />
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {currentVideo?.duration}
                      </Typography>
                    </Box>
                    {currentVideo?.completed && (
                      <Chip
                        icon={<CheckCircle />}
                        label="Completed"
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(34, 197, 94, 0.2)',
                          color: '#22c55e',
                          fontWeight: 600,
                        }}
                      />
                    )}
                  </Box>

                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Tooltip title="Like">
                      <IconButton size="small">
                        <ThumbUp sx={{ fontSize: 20 }} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Share">
                      <IconButton size="small">
                        <Share sx={{ fontSize: 20 }} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Bookmark">
                      <IconButton size="small">
                        <Bookmark sx={{ fontSize: 20 }} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="More">
                      <IconButton size="small" onClick={handleMenuOpen}>
                        <MoreVert sx={{ fontSize: 20 }} />
                      </IconButton>
                    </Tooltip>
                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                      <MenuItem onClick={handleMenuClose}>Report</MenuItem>
                      <MenuItem onClick={handleMenuClose}>Download</MenuItem>
                    </Menu>
                  </Box>
                </Box>

                {/* Instructor Card */}
                <Card
                  sx={{
                    background: 'rgba(51, 65, 85, 0.3)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(51, 65, 85, 0.5)',
                  }}
                >
                  <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar
                        sx={{
                          width: 56,
                          height: 56,
                          background: 'linear-gradient(135deg, #3b82f6 0%, #a855f7 100%)',
                        }}
                      />
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                          Sarah Chen
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                          Instructor • 45K subscribers
                        </Typography>
                      </Box>
                    </Box>
                    <Button
                      variant="contained"
                      sx={{
                        background: 'linear-gradient(135deg, #3b82f6 0%, #a855f7 100%)',
                        textTransform: 'none',
                        fontWeight: 600,
                      }}
                    >
                      Subscribe
                    </Button>
                  </CardContent>
                </Card>
              </Box>
            </Paper>

            {/* Description */}
            <Box sx={{ flex: 1, overflow: 'auto', p: 3, maxWidth: 900 }}>
              <Stack spacing={3}>
                <Box>
                  <Typography variant="h6" sx={{ mb: 1.5, color: 'text.primary' }}>
                    About this video
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 1.5 }}>
                    In this comprehensive module, we explore the fundamentals of React Hooks and how to effectively use them in modern React applications. Learn about useState, useEffect, and custom hooks while understanding best practices and common pitfalls.
                  </Typography>
                </Box>

                <Divider sx={{ borderColor: 'rgba(51, 65, 85, 0.5)' }} />

                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <Comment sx={{ color: 'text.secondary' }} />
                    <Typography variant="h6" sx={{ color: 'text.primary' }}>
                      Discussion
                    </Typography>
                  </Box>
                </Box>
              </Stack>
            </Box>
          </Box>

          {/* Sidebar - Playlist */}
          {playlistOpen && (
            <Paper
              elevation={0}
              sx={{
                width: 380,
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 0,
                borderLeft: '1px solid rgba(51, 65, 85, 0.5)',
                maxHeight: '100%',
              }}
            >
              {/* Sidebar Header */}
              <Box sx={{ p: 2, borderBottom: '1px solid rgba(51, 65, 85, 0.5)' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Course Modules
                  </Typography>
                  <IconButton size="small" onClick={() => setPlaylistOpen(false)}>
                    <KeyboardArrowRight />
                  </IconButton>
                </Box>
              </Box>

              {/* Search */}
              <Box sx={{ p: 2, borderBottom: '1px solid rgba(51, 65, 85, 0.5)' }}>
                <TextField
                  placeholder="Search modules..."
                  size="small"
                  fullWidth
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search sx={{ fontSize: 18 }} />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                />
              </Box>

              {/* Video List */}
              <List sx={{ flex: 1, overflow: 'auto', p: 0 }}>
                {filteredVideos.map((video) => (
                  <ListItemButton
                    key={video.id}
                    onClick={() => setCurrentVideoId(video.id)}
                    selected={currentVideoId === video.id}
                    sx={{
                      p: 2,
                      borderLeft: currentVideoId === video.id ? '3px solid #3b82f6' : 'none',
                      backgroundColor:
                        currentVideoId === video.id
                          ? 'rgba(59, 130, 246, 0.1)'
                          : 'transparent',
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 36, mr: 1 }}>
                      {video.completed ? (
                        <CheckCircle sx={{ color: '#22c55e' }} />
                      ) : currentVideoId === video.id ? (
                        <PlayCircle sx={{ color: '#3b82f6' }} />
                      ) : (
                        <Box
                          sx={{
                            width: 24,
                            height: 24,
                            border: '2px solid rgba(148, 163, 184, 0.5)',
                            borderRadius: 0.5,
                          }}
                        />
                      )}
                    </ListItemIcon>
                    <ListItemText
                      primary={video.title}
                      secondary={video.duration}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Paper>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
}