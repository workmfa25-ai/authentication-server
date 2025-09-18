import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import './index.css';
import "./Components/tables/table.css";

import LoginForm from "./Components/LoginForm";
import TopBar from "./Components/global/TopBar";
import useAdmin from "./hooks/useAdmin";

// Import your page components
import DashboardPage from './Pages/DashboardPage';
import UsersPage from './Pages/UsersPage';
import UserProfilePage from './Pages/UserProfilePage';
import AnalyticsPage from './Pages/AnalyticsPage';
import Sidebar from "./Components/global/Sidebar";
import AllJwtSessionsPage from './Pages/AllJwtSessionsPage';
// import SessionsPage from './Pages/SessionsPage';

const API_URL = "http://127.0.0.1:8000";


function App() {
  // Helper to calculate current month login data from JWT sessions
  function calculateCurrentMonthLoginData(jwtSessions) {
    if (!Array.isArray(jwtSessions) || jwtSessions.length === 0) {
      return { data: [], daysInMonth: 0, monthTitle: '' };
    }

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const daysInMonth = new Date(year, month, 0).getDate();
    
    // Pre-calculate month strings
    const monthShort = now.toLocaleString('default', { month: 'short' });
    const monthLong = now.toLocaleString('default', { month: 'long' });
    
    // Use reduce instead of for loop
    const counts = jwtSessions.reduce((acc, s) => {
      if (!s?.created_at) return acc;
      const d = new Date(s.created_at);
      if (d.getFullYear() === year && (d.getMonth() + 1) === month) {
        const day = d.getDate() - 1;
        if (acc[day] !== undefined) acc[day]++;
      }
      return acc;
    }, Array(daysInMonth).fill(0));

    const data = counts.map((c, i) => ({
      dayNumber: i + 1,
      logins: c,
      dateLabel: `${monthShort} ${i + 1}, ${year}`
    }));

    return { data, daysInMonth, monthTitle: `${monthLong} ${year}` };
  };

  const {
    isLoggedIn,
    users,
    // recentsessions,
    // allsessions,
    error,
    isLoading,
    handleLogin,
    handleLogout,
    toggleBlock,
    recentJwtSessions,        // For dashboard (10 items)
    handleRevokeSession,      // Fixed the typo that was "handleRevokeSessionz"
    jwtSessions,              // Full list for charts
    tableJwtSessions,         // For pagination tables
    jwtTotal,                 // Total count for pagination
    jwtLoading,               // Loading state d pagination
    fetchJwtSessionsPage,
    // sessionTotal,
    // sessionLoading,
    // fetchSessionsPage,



  } = useAdmin(API_URL);
  //logout
  const navigate = useNavigate();

  const onLogout = async () => {
    try {
      const token = sessionStorage.getItem("token");
      console.log("Logout clicked, token =", token);

      if (token) {
        await fetch(`${API_URL}/admin/logout`, {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
        });
      }
    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
      handleLogout();             // ✅ call the hook’s logout to reset state
      navigate("/login", { replace: true });  // ✅ redirect
    }
  };


  const [isSideBarOpen, setisSidebarOpen] = useState(false);
  //anomaly change
  const [lastSeenAnomalyId, setLastSeenAnomalyId] = useState(() => {
    return localStorage.getItem("lastSeenAnomalyId") || null;
  });

  useEffect(() => {
    const fetchAnomalies = async (isInitialLoad = false) => {
      try {
        const res = await fetch(`${API_URL}/admin/anomalies`);
        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          const newest = data[0]; // backend returns DESC
          const newestId = newest.id.toString();

          if (isInitialLoad) {
            // ✅ On first load, just record the latest ID silently (no notification)
            if (!lastSeenAnomalyId) {
              setLastSeenAnomalyId(newestId);
              return;
            }
          }

          if (newestId !== lastSeenAnomalyId) {
            // ✅ Notify only if this is truly new
            if (Notification.permission === "granted" && navigator.serviceWorker) {
              navigator.serviceWorker.ready.then((registration) => {
                registration.showNotification("⚠️ Concurrent Login Detected", {
                  body: `${newest.username} - ${newest.description}`,
                  requireInteraction: true,
                  icon: "/favicon.ico",
                });
              });
            } else {
              alert(`⚠️ Concurrent login detected for ${newest.username}`);
            }
            setLastSeenAnomalyId(newestId);
          }
        }
      } catch (err) {
        console.error("Error fetching anomalies:", err);
      }
    };

    // ✅ Fetch once on initial load (silent)
    fetchAnomalies(true);

    const interval = setInterval(() => fetchAnomalies(false), 10000);
    return () => clearInterval(interval);
  }, [lastSeenAnomalyId]);

  useEffect(() => {
    if (lastSeenAnomalyId !== null) {
      localStorage.setItem("lastSeenAnomalyId", lastSeenAnomalyId);
    }
  }, [lastSeenAnomalyId]);

  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("md"));

  const toggleSidebar = () => {
    setisSidebarOpen(!isSideBarOpen);
  };

  // const calculateCurrentMonthLoginData = (jwtSessions) => {
  //   const now = new Date();
  //   const year = now.getFullYear();
  //   const month = now.getMonth(); // 0–11
  //   const daysInMonth = new Date(year, month + 1, 0).getDate();

  //   const counts = Array.from({ length: daysInMonth }, () => 0);

  //   if (Array.isArray(jwtSessions)) {
  //     for (const s of jwtSessions) {
  //       if (!s?.created_at) continue;
  //       const d = new Date(s.created_at);
  //       if (d.getFullYear() === year && d.getMonth() === month) {
  //         counts[d.getDate() - 1] += 1;
  //       }
  //     }
  //   }

  //   const monthShort = now.toLocaleString('default', { month: 'short' });
  //   const monthLong = now.toLocaleString('default', { month: 'long' });

  //   // Shape for the chart
  //   const data = counts.map((c, i) => ({
  //     dayNumber: i + 1,
  //     logins: c,
  //     dateLabel: `${monthShort} ${i + 1}, ${year}` // for tooltip
  //   }));

  //   return { data, daysInMonth, monthTitle: `${monthLong} ${year}` };
  // };

  const calculateWeeklyLoginData = () => {
    if (!jwtSessions || jwtSessions.length === 0) {
      return [
        { day: 'Mon', logins: 0 },
        { day: 'Tue', logins: 0 },
        { day: 'Wed', logins: 0 },
        { day: 'Thu', logins: 0 },
        { day: 'Fri', logins: 0 },
        { day: 'Sat', logins: 0 },
        { day: 'Sun', logins: 0 },
      ];
    }

    const loginCounts = [0, 0, 0, 0, 0, 0, 0];
    const today = new Date();
    
    // Get the current day of the week (0 = Sunday, 1 = Monday, etc.)
    const currentDayOfWeek = today.getDay();
    
    // Calculate the date of the most recent Monday (start of the week)
    // If today is Sunday (0), we need to go back 6 days to find Monday
    // If today is any other day, we go back (current day - 1) days
    const daysToSubtract = currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1;
    const currentWeekMonday = new Date(today);
    currentWeekMonday.setDate(today.getDate() - daysToSubtract);
    currentWeekMonday.setHours(0, 0, 0, 0);  // Start of the day

    jwtSessions.forEach(session => {
      if (session.created_at) {
        const date = new Date(session.created_at);
        
        // Only count sessions from the current week (Monday to today)
        if (date >= currentWeekMonday && date <= today) {
          const dayOfWeek = date.getDay(); // 0 = Sun
          const chartIndex = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // Mon-Sun
          loginCounts[chartIndex]++;
        }
      }
    });

    return [
      { day: 'Mon', logins: loginCounts[0] },
      { day: 'Tue', logins: loginCounts[1] },
      { day: 'Wed', logins: loginCounts[2] },
      { day: 'Thu', logins: loginCounts[3] },
      { day: 'Fri', logins: loginCounts[4] },
      { day: 'Sat', logins: loginCounts[5] },
      { day: 'Sun', logins: loginCounts[6] },
    ];
  };

  const weeklyLogindata = calculateWeeklyLoginData();


  return (
    <ThemeProvider theme={theme}>
      <Routes>
        {/* Public Route: Login */}
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/" replace />
            ) : (
              <LoginForm handleLogin={handleLogin} error={error} isLoading={isLoading} />
            )
          }


        />

        {/* Protected Routes */}
        {isLoggedIn ? (
          <Route
            path="/*"
            element={
              <Box sx={{ display: 'flex', minHeight: '100vh' }}>
                {/* Sidebar */}
                <Sidebar isOpen={isSideBarOpen} toggleSidebar={toggleSidebar} />

                {/* Main Area */}
                <Box
                  sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: {
                      xs: 0,
                      md: isSideBarOpen ? '240px' : '72px'
                    },
                    transition: theme.transitions.create('margin-left', {
                      easing: theme.transitions.easing.sharp,
                      duration: theme.transitions.duration.enteringScreen,
                    }),
                    minWidth: 0,
                  }}
                >
                  {/* TopBar */}
                  <TopBar
                    toggleSidebar={toggleSidebar}
                    sidebarOpen={isSideBarOpen}
                    onLogout={onLogout}
                  />


                  {/* Content */}
                  <Box
                    className="app-container"
                    sx={{
                      bgcolor: 'transparent',
                      minHeight: 'calc(100vh - 64px)',
                      pt: 3,
                      pb: 3,
                      px: 3,
                      overflow: 'auto',
                      width: '100%',
                    }}
                  >
                    <Routes>
                      <Route
                        path="/"
                        element={
                          <DashboardPage
                            users={users}
                            jwtSessions={jwtSessions}
                            tableJwtSessions={tableJwtSessions}
                            recentJwtSessions={recentJwtSessions}
                            handleRevokeSession={handleRevokeSession}
                            isLoading={isLoading}
                            weeklyLogindata={weeklyLogindata}
                            jwtSessiontotal={jwtTotal}
                            fetchJwtSessions={fetchJwtSessionsPage}
                            currentMonthLogindata={calculateCurrentMonthLoginData(jwtSessions)}
                            replace
                          />
                        }
                      />
                      <Route
                        path="/users"
                        element={<UsersPage users={users} toggleBlock={toggleBlock} replace />}
                      />
                      <Route
                        path="/users/:userId"
                        element={<UserProfilePage users={users} sessions={jwtSessions} toggleBlock={toggleBlock} replace />}
                      />
                      {/* <Route
                        path="/sessions"
                        element={<SessionsPage
                          allsessions={allsessions}
                          title="All Sessions"
                          isLoading={isLoading}
                          sessionTotal={sessionTotal}
                          fetchSessionsPage={fetchSessionsPage}
                          sessionLoading={sessionLoading} replace />}
                      /> */}
                      <Route
                        path="/jwt-sessions"
                        element={
                          <AllJwtSessionsPage
                            title="All JWT Sessions"
                            jwtSessions={jwtSessions}              // Paginated data
                            jwtTotal={jwtTotal}                    // Total count
                            jwtLoading={jwtLoading}                // Pagination loading state
                            fetchJwtSessionsPage={fetchJwtSessionsPage} // Pagination function
                            onRevokeSession={handleRevokeSession}
                            isLoading={isLoading}                  // General loading state
                            replace
                          />
                        }
                      />
                      <Route
                        path="/analytics"
                        element={
                          <AnalyticsPage
                            weeklyLogindata={weeklyLogindata}
                            allsessions={jwtSessions}
                            users={users}

                            replace
                          />
                        }
                      />
                      <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                  </Box>
                </Box>
              </Box>
            }
          />
        ) : (
          // If not logged in, redirect all other routes to login
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
