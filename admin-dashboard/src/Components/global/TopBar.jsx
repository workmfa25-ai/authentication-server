


// import {
//   Box,
//   Typography,
//   useTheme,
//   IconButton,
//   AppBar,
//   Toolbar,
//   useMediaQuery,
// } from "@mui/material";
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link as RouterLink } from "react-router-dom";
// import Logo from "../../Assets/logo.png";
// import '../../index.css';

// const TopBar = ({ toggleSidebar }) => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//   return (
//     <AppBar
//       position="sticky"
//       elevation={0}
//       sx={{
//         bgcolor: theme.palette.background.paper,
//         color: theme.palette.primary.main,
//         borderBottom: `1px solid ${theme.palette.divider}`,
//         boxShadow: '0 2px 8px rgba(0, 98, 255, 0.08)',
//         zIndex: theme.zIndex.appBar,
//         // FIXED: Remove margin and width adjustments - let main content handle spacing
//         ml: 0,
//         width: '100%',
//       }}
//     >
//       <Toolbar
//         sx={{
//           px: { xs: 1.5, sm: 2, md: 3 }, // Consistent padding across breakpoints
//           minHeight: { xs: 56, sm: 64 },
//           height: { xs: 56, sm: 64 },
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//         }}
//       >
//         <Box sx={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: { xs: 1, sm: 1.5 },
//           flex: 1,
//         }}>
//           {/* Mobile menu button */}
//           {isMobile && (
//             <IconButton
//               edge="start"
//               color="primary"
//               aria-label="menu"
//               onClick={toggleSidebar}
//               sx={{
//                 padding: '8px',
//                 '&:hover': {
//                   bgcolor: `${theme.palette.primary.main}10`,
//                 },
//               }}
//             >
//               <MenuIcon />
//             </IconButton>
//           )}

//           {/* Logo and Title */}
//           <Box sx={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: { xs: 0.75, sm: 1 },
//           }}>
//             <Box
//               sx={{
//                 height: { xs: 32, sm: 40 },
//                 width: { xs: 32, sm: 40 },
//                 overflow: 'hidden',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 borderRadius: '8px',
//                 bgcolor: `${theme.palette.primary.main}08`,
//                 p: 0.5,
//                 flexShrink: 0,
//               }}
//             >
//               <img
//                 src={Logo}
//                 alt="Admin Logo"
//                 style={{
//                   height: '100%',
//                   width: 'auto',
//                   objectFit: 'contain',
//                 }}
//               />
//             </Box>

//             {/* Desktop title */}
//             <Typography
//               variant="h6"
//               component={RouterLink}
//               to="/"
//               sx={{
//                 color: theme.palette.primary.main,
//                 fontWeight: 700,
//                 fontSize: { sm: "1.1rem", md: "1.25rem" },
//                 letterSpacing: "0.3px",
//                 textDecoration: "none",
//                 background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 backgroundClip: 'text',
//                 transition: "all 0.3s ease",
//                 "&:hover": {
//                   transform: 'translateY(-1px)',
//                   textShadow: '0 2px 8px rgba(0, 98, 255, 0.3)',
//                 },
//                 display: { xs: 'none', sm: 'block' },
//                 whiteSpace: 'nowrap',
//               }}
//             >
//               Admin Dashboard
//             </Typography>

//             {/* Mobile title */}
//             <Typography
//               variant="h6"
//               component={RouterLink}
//               to="/"
//               sx={{
//                 color: theme.palette.primary.main,
//                 fontWeight: 700,
//                 fontSize: "1rem",
//                 letterSpacing: "0.3px",
//                 textDecoration: "none",
//                 background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 backgroundClip: 'text',
//                 display: { xs: 'block', sm: 'none' },
//               }}
//             >
//               Admin
//             </Typography>
//           </Box>
//         </Box>

//         {/* Right side */}
//         <Box sx={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: { xs: 0.75, sm: 1 },
//           flexShrink: 0,
//         }}>
//           {/* Status indicator */}
//           <Box sx={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: { xs: 0.5, sm: 0.75 },
//             color: theme.palette.text.secondary,
//             fontSize: '0.875rem',
//             fontWeight: 500,
//           }}>
//             <Box
//               sx={{
//                 width: { xs: 6, sm: 8 },
//                 height: { xs: 6, sm: 8 },
//                 borderRadius: '50%',
//                 bgcolor: '#4caf50',
//                 animation: 'pulse 2s infinite',
//                 '@keyframes pulse': {
//                   '0%': {
//                     transform: 'scale(0.95)',
//                     boxShadow: '0 0 0 0 rgba(76, 175, 80, 0.7)',
//                   },
//                   '70%': {
//                     transform: 'scale(1)',
//                     boxShadow: '0 0 0 6px rgba(76, 175, 80, 0)',
//                   },
//                   '100%': {
//                     transform: 'scale(0.95)',
//                     boxShadow: '0 0 0 0 rgba(76, 175, 80, 0)',
//                   },
//                 },
//               }}
//             />
//             <Typography
//               variant="body2"
//               sx={{
//                 color: theme.palette.text.secondary,
//                 fontSize: { xs: '0.75rem', sm: '0.875rem' },
//                 fontWeight: 500,
//                 display: { xs: 'none', sm: 'block' },
//                 whiteSpace: 'nowrap',
//               }}
//             >
//               Online
//             </Typography>
//           </Box>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default TopBar;

import {
  Box,
  Typography,
  useTheme,
  IconButton,
  AppBar,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from "react-router-dom";
import Logo from "../../Assets/logo.png";
import '../../index.css';
import LogoutIcon from "@mui/icons-material/Logout";
import { Button } from "@mui/material";

const TopBar = ({ toggleSidebar, sidebarOpen, onLogout }) => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: theme.palette.background.paper,
        color: theme.palette.primary.main,
        borderBottom: `1px solid ${theme.palette.divider}`,
        boxShadow: '0 2px 8px rgba(0, 98, 255, 0.08)',
        zIndex: theme.zIndex.appBar - 1, // Lower than sidebar
        width: '100%',
        left: 0,
        right: 0,
      }}
    >
      <Toolbar
        sx={{
          px: { xs: 2, sm: 3 },
          minHeight: { xs: 56, sm: 64 },
          height: { xs: 56, sm: 64 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: { xs: 1, sm: 1.5 },
          flex: 1,
        }}>
          {/* Mobile menu button */}
          {isMobile && (
            <IconButton
              edge="start"
              color="primary"
              aria-label="open navigation menu"
              onClick={toggleSidebar}
              sx={{
                padding: '8px',
                '&:hover': {
                  bgcolor: `${theme.palette.primary.main}10`,
                  transform: 'scale(1.05)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Logo and Title */}
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: 0.75, sm: 1.25 },
          }}>
            <Box
              component={RouterLink}
              to="/"
              sx={{
                height: { xs: 32, sm: 40 },
                width: { xs: 32, sm: 40 },
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
                bgcolor: `${theme.palette.primary.main}08`,
                p: 0.5,
                flexShrink: 0,
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                '&:hover': {
                  bgcolor: `${theme.palette.primary.main}12`,
                  transform: 'scale(1.05)',
                },
              }}
            >
              <img
                src={Logo}
                alt="Admin Logo"
                style={{
                  height: '100%',
                  width: 'auto',
                  objectFit: 'contain',
                }}
              />
            </Box>

            {/* Title - responsive sizing */}
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 700,
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                letterSpacing: "0.3px",
                textDecoration: "none",
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: 'translateY(-1px)',
                  textShadow: '0 2px 8px rgba(0, 98, 255, 0.3)',
                },
                whiteSpace: 'nowrap',
                // Hide/show based on screen size and sidebar state
                display: {
                  xs: isMobile ? 'block' : 'none', // Always show on mobile
                  sm: 'block', // Always show on larger screens
                },
              }}
            >
              {/* Responsive title text */}
              <Box
                component="span"
                sx={{
                  display: { xs: 'none', sm: 'inline' }
                }}
              >
                Admin Dashboard
              </Box>
              <Box
                component="span"
                sx={{
                  display: { xs: 'inline', sm: 'none' }
                }}
              >
                Admin
              </Box>
            </Typography>
          </Box>
        </Box>
        {/* Right side - Status indicator */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 0.75, sm: 1 },
            flexShrink: 0,
          }}
        >
          {/* Online status */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 0.5, sm: 0.75 },
              color: theme.palette.text.secondary,
              fontSize: "0.875rem",
              fontWeight: 500,
            }}
          >
            <Box
              sx={{
                width: { xs: 6, sm: 8 },
                height: { xs: 6, sm: 8 },
                borderRadius: "50%",
                bgcolor: "#4caf50",
                animation: "pulse 2s infinite",
                "@keyframes pulse": {
                  "0%": { transform: "scale(0.95)", boxShadow: "0 0 0 0 rgba(76, 175, 80, 0.7)" },
                  "70%": { transform: "scale(1)", boxShadow: "0 0 0 6px rgba(76, 175, 80, 0)" },
                  "100%": { transform: "scale(0.95)", boxShadow: "0 0 0 0 rgba(76, 175, 80, 0)" },
                },
              }}
            />
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                fontWeight: 500,
                display: { xs: "none", sm: "block" },
                whiteSpace: "nowrap",
              }}
            >
              Online
            </Typography>
          </Box>

          {/* ✅ Logout button here */}
          <Button
            variant="outlined"
            color="primary"
            startIcon={<LogoutIcon />}
            onClick={onLogout}
            sx={{
              textTransform: "none",
              fontWeight: 600,
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              borderRadius: "8px",
              ml: 2,
              "&:hover": {
                bgcolor: `${theme.palette.primary.main}10`,
              },
            }}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;

