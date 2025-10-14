import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  CircularProgress
} from '@mui/material';
import { Person as PersonIcon, ArrowBack as ArrowBackIcon } from '@mui/icons-material';

// Nivo
import { ResponsiveLine } from '@nivo/line';
import { ResponsivePie } from '@nivo/pie';

const CHART_COLORS = {
  primary: '#1976d2', // MUI primary
  purple: '#673ab7',
  green: '#4caf50',
  gray: '#bdbdbd'
};

// Light theme for charts
const lightNivoTheme = {
  textColor: '#374151',
  fontSize: 12,
  axis: {
    domain: {
      line: { stroke: '#e0e0e0', strokeWidth: 1 }
    },
    ticks: {
      line: { stroke: '#e0e0e0', strokeWidth: 1 },
      text: { fill: '#424242', fontWeight: 500 }
    },
    legend: {
      text: { fill: '#111827', fontWeight: 700 }
    }
  },
  grid: {
    line: { stroke: '#e0e0e0', strokeDasharray: '4 4' }
  },
  tooltip: {
    container: { background: '#fff', color: '#111', fontSize: 12, borderRadius: 6, boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }
  }
};

// Dark theme for charts
const darkNivoTheme = {
  textColor: '#ffffff',
  fontSize: 12,
  axis: {
    domain: {
      line: { stroke: '#4a5568', strokeWidth: 1 }
    },
    ticks: {
      line: { stroke: '#4a5568', strokeWidth: 1 },
      text: { fill: '#ffffff', fontWeight: 500 }
    },
    legend: {
      text: { fill: '#ffffff', fontWeight: 700 }
    }
  },
  grid: {
    line: { stroke: '#4a5568', strokeDasharray: '4 4' }
  },
  tooltip: {
    container: { background: '#2d3748', color: '#fff', fontSize: 12, borderRadius: 6, boxShadow: '0 2px 10px rgba(0,0,0,0.3)' }
  },
  legends: {
    text: {
      fill: '#ffffff'
    }
  }
};

// --- Real Data Chart Builders ---
// 1. Weekly User Logins (Line Chart)
// Replace these functions in UserProfilePage.jsx

// 1. Weekly User Logins (Line Chart) - FIXED
const getWeeklyLoginSeries = (sessions) => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const counts = [0, 0, 0, 0, 0, 0, 0];
  
  if (!Array.isArray(sessions)) {
    console.warn('getWeeklyLoginSeries: sessions is not an array', sessions);
    return [{
      id: 'User Logins',
      data: days.map((d, i) => ({ x: d, y: 0 }))
    }];
  }
  
  sessions.forEach(s => {
    if (s && s.created_at) {
      try {
        const d = new Date(s.created_at);
        if (!isNaN(d.getTime())) {
          const day = d.getDay(); // 0=Sun
          const idx = day === 0 ? 6 : day - 1; // Mon=0, Sun=6
          counts[idx]++;
        }
      } catch (e) {
        console.warn('Invalid date in session:', s.created_at);
      }
    }
  });
  
  return [{
    id: 'User Logins',
    data: days.map((d, i) => ({ x: d, y: counts[i] }))
  }];
};

// Weekly duration function and getISOWeek helper removed as they're no longer needed

// 3. Activity Status (Donut) - FIXED
const getActivityDonut = (sessions) => {
  if (!Array.isArray(sessions) || sessions.length === 0) {
    return [
      { id: 'Active Days', value: 0 },
      { id: 'Inactive Days', value: 30 }
    ];
  }
  
  // Last 30 days
  const now = new Date();
  const last30 = new Set();
  for (let i = 0; i < 30; i++) {
    last30.add(new Date(now.getFullYear(), now.getMonth(), now.getDate() - i).toDateString());
  }
  
  const activeDays = new Set();
  sessions.forEach(s => {
    if (s && s.created_at) {
      try {
        const d = new Date(s.created_at);
        if (!isNaN(d.getTime())) {
          const dateStr = d.toDateString();
          if (last30.has(dateStr)) {
            activeDays.add(dateStr);
          }
        }
      } catch (e) {
        console.warn('Invalid date in activity check:', s.created_at);
      }
    }
  });
  
  const activeCount = activeDays.size;
  const inactiveCount = 30 - activeCount;
  
  return [
    { id: 'Active Days', value: activeCount },
    { id: 'Inactive Days', value: inactiveCount }
  ];
};

const UserProfilePage = ({ users, sessions, toggleBlock, darkMode, fetchUserProfile, userProfiles }) => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const filter = searchParams.get('filter') || 'all';
  
  // State for API data
  const [userSessions, setUserSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const user = users.find(u => u.id.toString() === userId);

  // Fetch user profile data using the centralized function
  // Replace the useEffect in UserProfilePage.jsx

useEffect(() => {
  const loadUserProfile = async () => {
    if (!userId) {
      setError('No user ID provided');
      setLoading(false);
      return;
    }
    

    
    if (!fetchUserProfile) {
      console.warn('fetchUserProfile function not provided');
      // Fallback to prop sessions
      const fallbackSessions = Array.isArray(sessions)
        ? sessions.filter(s => s && s.user_id && s.user_id.toString() === userId)
        : [];
      setUserSessions(fallbackSessions);
      setLoading(false);
      return;
    }
    
    try {
      setLoading(true);
      setError(null);
      console.log('Loading user profile for userId:', userId);
      
      const sessionData = await fetchUserProfile(userId);
      console.log('Received session data:', sessionData);
      
      if (Array.isArray(sessionData)) {
        console.log('Setting userSessions with data:', sessionData);
        setUserSessions(sessionData);
      } else {
        console.error('Expected array, got:', sessionData);
        setUserSessions([]);
      }
    } catch (err) {
      console.error('Error loading user profile:', err);
      setError(err.message);
      
      // Fallback to prop sessions if API fails
      const fallbackSessions = Array.isArray(sessions)
        ? sessions.filter(s => s && s.user_id && s.user_id.toString() === userId)
        : [];
      console.log('Using fallback sessions:', fallbackSessions);
      setUserSessions(fallbackSessions);
    } finally {
      setLoading(false);
    }
  };

  loadUserProfile();
}, [userId, fetchUserProfile, sessions]);

  const loginHistory =
    userSessions.length > 0
      ? [...userSessions].sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 5)
      : [];

  // Choose theme based on dark mode
  const nivoTheme = darkMode ? darkNivoTheme : lightNivoTheme;

  // Loading state
  if (loading) {
    return (
      <Container sx={{ px: { xs: 1, sm: 3 } }}>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  // Error state (but still show user data if available)
  if (error && !user) {
    return (
      <Container sx={{ px: { xs: 1, sm: 3 } }}>
        <Typography variant="h5" sx={{ fontSize: { xs: '1.1rem', sm: '1.5rem' } }} color="error">
          Error: {error}
        </Typography>
        <Button startIcon={<ArrowBackIcon />} onClick={() => navigate(`/users?filter=${filter}`)}>
          Back to Users
        </Button>
      </Container>
    );
  }

  if (!user) {
    return (
      <Container sx={{ px: { xs: 1, sm: 3 } }}>
        <Typography variant="h5" sx={{ fontSize: { xs: '1.1rem', sm: '1.5rem' } }}>
          User not found.
        </Typography>
        <Button startIcon={<ArrowBackIcon />} onClick={() => navigate(`/users?filter=${filter}`)}>
          Back to Users
        </Button>
      </Container>
    );
  }

  const handleToggleBlock = () => {
    toggleBlock(user.username, !user.is_blocked);
  };

  return (
    <Container maxWidth="lg" sx={{ px: { xs: 1, sm: 3 } }}>
      <Button startIcon={<ArrowBackIcon />} onClick={() => navigate(`/users?filter=${filter}`)} sx={{ mb: 2 }}>
        Back to Users List
      </Button>
      
      {error && (
        <Box mb={2}>
          <Typography variant="body2" color="warning.main">
            Warning: {error}. Showing fallback data.
          </Typography>
        </Box>
      )}

      <Paper sx={{ p: { xs: 2, sm: 4 } }}>
        {/* User Header */}
        <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} alignItems={{ xs: 'flex-start', sm: 'center' }} mb={4}>
          <Avatar sx={{ width: 56, height: 56, mr: { sm: 2, xs: 0 }, mb: { xs: 2, sm: 0 }, bgcolor: 'primary.main' }}>
            <PersonIcon fontSize="large" />
          </Avatar>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: { xs: '1.2rem', sm: '2rem' } }}>
              {user.username || user.email}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Status: {user.is_blocked ? 'Blocked' : 'Active'} | Role: {user.is_admin ? 'Admin' : 'User'}
            </Typography>
            {user.department && (
              <Typography variant="body1" color="text.secondary">
                Department: {user.department}
              </Typography>
            )}
            {user.rank && (
              <Typography variant="body1" color="text.secondary">
                Rank: {user.rank}
              </Typography>
            )}
            
            {user.location && (
              <Typography variant="body1" color="text.secondary">
                Location: {user.location}
              </Typography>
            )}
            
            {user.ip && (
              <Typography variant="body1" color="text.secondary">
                IP Address: {user.ip}
              </Typography>
            )}
          </Box>
        </Box>

        {/* Charts */}
        <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1rem', sm: '1.1rem' } }}>
          Usage Insights
        </Typography>
        <Grid container spacing={2} mb={4} justifyContent="center">
          {/* Login Trends - Line chart */}
          <Grid item xs={12} sm={6}>
            <Paper variant="outlined" sx={{ p: 2, height: 320, borderRadius: 3 }}>
              <Typography variant="subtitle1" sx={{ mb: 1, color: 'primary.main', fontWeight: 700 }}>
                Weekly User Logins
              </Typography>
              <Box sx={{ width: '100%', height: 260 }}>
                <ResponsiveLine
                  data={getWeeklyLoginSeries(userSessions)}
                  theme={nivoTheme}
                  margin={{ top: 10, right: 10, bottom: 60, left: 45 }}
                  xScale={{ type: 'point' }}
                  yScale={{ type: 'linear', min: 0, max: 'auto', stacked: false }}
                  curve="monotoneX"
                  axisBottom={{
                    tickRotation: 0,
                    legend: 'Days',
                    legendOffset: 40,
                    legendPosition: 'middle'
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    legend: 'User Logins',
                    legendOffset: -35,
                    legendPosition: 'middle'
                  }}
                  enableGridX={true}
                  enableGridY={false}
                  colors={[CHART_COLORS.primary]}
                  lineWidth={4}
                  pointSize={10}
                  pointColor="#ffffff"
                  pointBorderWidth={3}
                  pointBorderColor={CHART_COLORS.primary}
                  useMesh={true}
                  motionConfig="gentle"
                />
              </Box>
            </Paper>
          </Grid>

          {/* Activity Status - Donut */}
          <Grid item xs={12} sm={6}>
            <Paper variant="outlined" sx={{ p: 2, height: 320, borderRadius: 3 }}>
              <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 700 }}>
                Activity Status (Last 30d)
              </Typography>
              <Box sx={{ width: '100%', height: 260 }}>
                <ResponsivePie
                  data={getActivityDonut(userSessions)}
                  theme={nivoTheme}
                  margin={{ top: 10, right: 10, bottom: 40, left: 10 }}
                  innerRadius={0.6}
                  padAngle={1.5}
                  cornerRadius={3}
                  activeOuterRadiusOffset={6}
                  colors={[CHART_COLORS.green, CHART_COLORS.gray]}
                  enableArcLabels={true}
                  arcLabelsSkipAngle={10}
                  arcLinkLabelsSkipAngle={10}
                  enableArcLinkLabels={false}
                  legends={[
                    {
                      anchor: 'bottom',
                      direction: 'row',
                      translateY: 30,
                      itemWidth: 110,
                      itemHeight: 14,
                      symbolSize: 10,
                      symbolShape: 'circle'
                    }
                  ]}
                  motionConfig="gentle"
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Login History */}
        <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1rem', sm: '1.1rem' } }}>
          Login History (Last 5)
        </Typography>
        <TableContainer component={Paper} elevation={0} variant="outlined">
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loginHistory.length > 0 ? (
                loginHistory.map(session => (
                  <TableRow key={session.id}>
                    <TableCell align="center">{new Date(session.created_at).toLocaleDateString()}</TableCell>
                    <TableCell align="center">{new Date(session.created_at).toLocaleTimeString()}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={2} align="center">
                    <Typography variant="body2" color="text.secondary">
                      No login history available
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Action Buttons */}
        <Box display="flex" justifyContent="flex-end" mt={4} gap={2}>
          <Button variant="outlined" color={user.is_blocked ? 'success' : 'error'} onClick={handleToggleBlock}>
            {user.is_blocked ? 'Grant Access' : 'Revoke Access'}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default UserProfilePage;