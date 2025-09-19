


// // // // import { Link, useLocation } from 'react-router-dom';
// // // // import {
// // // //   Box, List, ListItem,
// // // //   ListItemButton, ListItemIcon,
// // // //   ListItemText, IconButton, Drawer,
// // // //   useMediaQuery, Tooltip, Typography
// // // // } from '@mui/material';
// // // // import DashboardIcon from '@mui/icons-material/Dashboard';
// // // // import PeopleIcon from '@mui/icons-material/People';
// // // // import AnalyticsIcon from '@mui/icons-material/Analytics';
// // // // import MenuIcon from '@mui/icons-material/Menu';
// // // // import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// // // // import { useTheme } from '@mui/material/styles';
// // // // import SecurityIcon from '@mui/icons-material/Security';
// // // // import HistoryIcon from '@mui/icons-material/History';

// // // // const Sidebar = ({ isOpen, toggleSidebar }) => {
// // // //   const theme = useTheme();
// // // //   const location = useLocation();
// // // //   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

// // // //   const isActiveRoute = (path) => location.pathname === path;

// // // //   const menuItems = [
// // // //     {
// // // //       text: 'Dashboard',
// // // //       icon: DashboardIcon,
// // // //       path: '/',
// // // //       tooltip: 'Dashboard Overview'
// // // //     },
// // // //     {
// // // //       text: 'Users',
// // // //       icon: PeopleIcon,
// // // //       path: '/users',
// // // //       tooltip: 'User Management'
// // // //     },
// // // //     {
// // // //       text: 'Analytics',
// // // //       icon: AnalyticsIcon,
// // // //       path: '/analytics',
// // // //       tooltip: 'Analytics & Reports'
// // // //     },
// // // //     {
// // // //       text: 'JWT Sessions',
// // // //       icon: SecurityIcon,
// // // //       path: '/jwt-sessions',
// // // //       tooltip: 'View All JWT Sessions'
// // // //     },
// // // //     // {
// // // //     //   text: 'All Sessions',
// // // //     //   icon: HistoryIcon,
// // // //     //   path: '/sessions',
// // // //     //   tooltip: 'View All Sessions'
// // // //     // }
// // // //   ];

// // // //   const MenuItemComponent = ({ item }) => {
// // // //     const active = isActiveRoute(item.path);
// // // //     const showText = isMobile || isOpen;
// // // //     const Icon = item.icon;

// // // //     const handleClick = () => {
// // // //       if (isMobile) {
// // // //         toggleSidebar();
// // // //       }
// // // //     };

// // // //     // Determine icon/text color logic
// // // //     let iconColor = '#fff';
// // // //     let textColor = '#fff';
// // // //     if (active) {
// // // //       iconColor = '#111';
// // // //       textColor = '#111';
// // // //     } else if (isOpen && showText) {
// // // //       iconColor = '#fff';
// // // //       textColor = '#fff'; // explicitly white when open and not selected
// // // //     } else if (!isOpen) {
// // // //       iconColor = '#fff';
// // // //       textColor = '#fff';
// // // //     }

// // // //     const buttonContent = (
// // // //       <ListItemButton
// // // //         component={Link}
// // // //         to={item.path}
// // // //         selected={active}
// // // //         onClick={handleClick}
// // // //         sx={{
// // // //           minHeight: 48,
// // // //           borderRadius: 2,
// // // //           position: 'relative',
// // // //           overflow: 'hidden',
// // // //           transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
// // // //           mx: 1,
// // // //           my: 0.5,
// // // //           px: showText ? 2 : 0,
// // // //           justifyContent: showText ? 'flex-start' : 'center',
// // // //           bgcolor: active ? theme.palette.primary.light : theme.palette.primary.main,
// // // //           color: textColor,
// // // //           '&.Mui-selected': {
// // // //             bgcolor: theme.palette.primary.light,
// // // //             color: '#111 !important',
// // // //             '& .MuiListItemIcon-root': {
// // // //               color: '#111 !important',
// // // //             },
// // // //             '&::before': {
// // // //               content: '""',
// // // //               position: 'absolute',
// // // //               left: 0,
// // // //               top: 0,
// // // //               height: '100%',
// // // //               width: showText ? '4px' : '0px',
// // // //               bgcolor: theme.palette.primary.dark,
// // // //               transition: 'width 0.2s ease',
// // // //             },
// // // //             '&:hover': {
// // // //               bgcolor: `${theme.palette.primary.light}CC`,
// // // //             }
// // // //           },
// // // //           '&:hover': {
// // // //             bgcolor: theme.palette.primary.main, // Keep the original background color
// // // //             color: '#111 !important',
// // // //             '& .MuiListItemIcon-root': {
// // // //               color: '#111 !important',
// // // //             },
// // // //             '& .MuiTypography-root': {
// // // //               color: '#111 !important',
// // // //             },
// // // //             '& .MuiListItemText-root': {
// // // //               color: '#111 !important',
// // // //             }
// // // //           }
// // // //         }}
// // // //       >
// // // //         <ListItemIcon
// // // //           sx={{
// // // //             minWidth: showText ? 40 : 24,
// // // //             width: 24,
// // // //             height: 24,
// // // //             display: 'flex',
// // // //             alignItems: 'center',
// // // //             justifyContent: 'center',
// // // //             color: iconColor,
// // // //             transition: 'all 0.2s ease',
// // // //             mr: showText ? 2 : 0,
// // // //             '& svg': {
// // // //               width: 20,
// // // //               height: 20,
// // // //               flexShrink: 0,
// // // //             },
// // // //           }}
// // // //         >
// // // //           <Icon sx={{ color: iconColor, '.MuiListItemButton-root:hover &': { color: '#111 !important' } }} />
// // // //         </ListItemIcon>
// // // //         {showText && (
// // // //           <ListItemText
// // // //             primary={item.text}
// // // //             sx={{
// // // //               color: active ? '#111' : '#fff',
// // // //               '& .MuiTypography-root': {
// // // //                 fontWeight: active ? 700 : 500,
// // // //                 fontSize: '0.95rem',
// // // //                 whiteSpace: 'nowrap',
// // // //                 color: active ? '#111' : '#fff',
// // // //               },
// // // //               margin: 0,
// // // //               flex: 1,
// // // //               '.Mui-selected &, .MuiListItemButton-root:hover &': {
// // // //                 color: '#111 !important',
// // // //                 '& .MuiTypography-root': {
// // // //                   color: '#111 !important',
// // // //                 },
// // // //               },
// // // //             }}
// // // //           />
// // // //         )}
// // // //       </ListItemButton>
// // // //     );

// // // //     // Only show tooltip on desktop when sidebar is closed
// // // //     if (!showText && !isMobile) {
// // // //       return (
// // // //         <Tooltip
// // // //           title={item.tooltip}
// // // //           placement="right"
// // // //           arrow
// // // //           componentsProps={{
// // // //             tooltip: {
// // // //               sx: {
// // // //                 bgcolor: theme.palette.grey[800],
// // // //                 fontSize: '0.875rem',
// // // //                 fontWeight: 500,
// // // //               },
// // // //             },
// // // //             arrow: { sx: { color: theme.palette.grey[800] } },
// // // //           }}
// // // //         >
// // // //           <Box>{buttonContent}</Box>
// // // //         </Tooltip>
// // // //       );
// // // //     }
// // // //     return buttonContent;
// // // //   };

// // // //   const sidebarContent = (
// // // //     <Box sx={{
// // // //       display: 'flex',
// // // //       flexDirection: 'column',
// // // //       height: '100%',
// // // //       bgcolor: theme.palette.primary.light,
// // // //     }}>
// // // //       {/* Header */}
// // // //       <Box sx={{
// // // //         display: 'flex',
// // // //         justifyContent: (isOpen || isMobile) ? 'space-between' : 'center',
// // // //         alignItems: 'center',
// // // //         px: 2,
// // // //         py: 1.5,
// // // //         minHeight: 64, // Match TopBar height
// // // //         flexShrink: 0,
// // // //       }}>
// // // //         {(isOpen || isMobile) && (
// // // //           <Typography
// // // //             variant="body2"
// // // //             sx={{
// // // //               fontSize: '0.875rem',
// // // //               fontWeight: 600,
// // // //               color: theme.palette.primary.main,
// // // //               letterSpacing: '0.5px',
// // // //             }}
// // // //           >
// // // //             Navigation
// // // //           </Typography>
// // // //         )}
// // // //         <IconButton
// // // //           onClick={toggleSidebar}
// // // //           size="small"
// // // //           sx={{
// // // //             color: theme.palette.primary.main,
// // // //             width: 36,
// // // //             height: 36,
// // // //             '&:hover': {
// // // //               bgcolor: `${theme.palette.primary.main}10`,
// // // //               transform: 'rotate(180deg)',
// // // //             },
// // // //             transition: 'all 0.3s ease',
// // // //           }}
// // // //         >
// // // //           {(isOpen || isMobile) ? <ChevronLeftIcon /> : <MenuIcon />}
// // // //         </IconButton>
// // // //       </Box>

// // // //       {/* No divider needed */}

// // // //       {/* Menu Items */}
// // // //       <Box sx={{
// // // //         flexGrow: 1,
// // // //         overflowY: 'auto',
// // // //         overflowX: 'hidden',
// // // //         py: 1,
// // // //       }}>
// // // //         <List sx={{ px: 0, py: 1 }}>
// // // //           {menuItems.map((item) => (
// // // //             <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
// // // //               <MenuItemComponent item={item} />
// // // //             </ListItem>
// // // //           ))}
// // // //         </List>
// // // //       </Box>

// // // //       {/* Footer */}
// // // //       {(isOpen || isMobile) && (
// // // //         <Box sx={{
// // // //           p: 2,
// // // //           borderTop: `1px solid ${theme.palette.divider}`,
// // // //           mt: 'auto',
// // // //           flexShrink: 0,
// // // //         }}>
// // // //           <Typography
// // // //             variant="caption"
// // // //             sx={{
// // // //               textAlign: 'center',
// // // //               color: theme.palette.text.secondary,
// // // //               fontSize: '0.75rem',
// // // //               opacity: 0.7,
// // // //               display: 'block',
// // // //             }}
// // // //           >
// // // //             Admin Panel v1.0
// // // //           </Typography>
// // // //         </Box>
// // // //       )}
// // // //     </Box>
// // // //   );

// // // //   // Mobile drawer implementation
// // // //   if (isMobile) {
// // // //     return (
// // // //       <>
// // // //         {/* Backdrop for mobile */}
// // // //         {isOpen && (
// // // //           <Box
// // // //             onClick={toggleSidebar}
// // // //             sx={{
// // // //               position: 'fixed',
// // // //               top: 0,
// // // //               left: 0,
// // // //               right: 0,
// // // //               bottom: 0,
// // // //               bgcolor: 'rgba(0, 0, 0, 0.5)',
// // // //               zIndex: theme.zIndex.drawer - 1,
// // // //               transition: 'all 0.3s ease',
// // // //             }}
// // // //           />
// // // //         )}

// // // //         <Drawer
// // // //           variant="temporary"
// // // //           anchor="left"
// // // //           open={isOpen}
// // // //           onClose={toggleSidebar}
// // // //           ModalProps={{
// // // //             keepMounted: true,
// // // //             disablePortal: true,
// // // //           }}
// // // //           sx={{
// // // //             '& .MuiDrawer-paper': {
// // // //               boxSizing: 'border-box',
// // // //               width: 280,
// // // //               bgcolor: theme.palette.background.paper,
// // // //               borderRight: 'none',
// // // //               boxShadow: '8px 0 24px rgba(0, 0, 0, 0.15)',
// // // //             },
// // // //           }}
// // // //         >
// // // //           {sidebarContent}
// // // //         </Drawer>
// // // //       </>
// // // //     );
// // // //   }

// // // //   // Desktop fixed sidebar
// // // //   return (
// // // //     <Box
// // // //       className={`sidebar ${isOpen ? 'open' : 'closed'}`}
// // // //       sx={{
// // // //         width: isOpen ? 240 : 72,
// // // //         flexShrink: 0,
// // // //         transition: theme.transitions.create('width', {
// // // //           easing: theme.transitions.easing.sharp,
// // // //           duration: theme.transitions.duration.enteringScreen,
// // // //         }),
// // // //         overflowX: 'hidden',
// // // //         bgcolor: theme.palette.primary.main,
// // // //         borderRight: 'none',
// // // //         position: 'fixed',
// // // //         height: '100vh',
// // // //         left: 0,
// // // //         top: 0,
// // // //         zIndex: theme.zIndex.drawer,
// // // //         boxShadow: isOpen
// // // //           ? '4px 0 12px rgba(0, 98, 255, 0.10)'
// // // //           : '2px 0 8px rgba(0, 98, 255, 0.05)',
// // // //       }}
// // // //     >
// // // //       {sidebarContent}
// // // //     </Box>
// // // //   );
// // // // };

// // // // export default Sidebar;

// // // // import { Link, useLocation } from 'react-router-dom';
// // // // import {
// // // //   Box, List, ListItem,
// // // //   ListItemButton, ListItemIcon,
// // // //   ListItemText, IconButton, Drawer,
// // // //   useMediaQuery, Tooltip, Typography
// // // // } from '@mui/material';
// // // // import DashboardIcon from '@mui/icons-material/Dashboard';
// // // // import PeopleIcon from '@mui/icons-material/People';
// // // // import AnalyticsIcon from '@mui/icons-material/Analytics';
// // // // import MenuIcon from '@mui/icons-material/Menu';
// // // // import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// // // // import { useTheme } from '@mui/material/styles';
// // // // import SecurityIcon from '@mui/icons-material/Security';

// // // // const Sidebar = ({ isOpen, toggleSidebar, darkMode }) => {
// // // //   const theme = useTheme();
// // // //   const location = useLocation();
// // // //   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

// // // //   const isActiveRoute = (path) => location.pathname === path;

// // // //   const menuItems = [
// // // //     {
// // // //       text: 'Dashboard',
// // // //       icon: DashboardIcon,
// // // //       path: '/',
// // // //       tooltip: 'Dashboard Overview'
// // // //     },
// // // //     {
// // // //       text: 'Users',
// // // //       icon: PeopleIcon,
// // // //       path: '/users',
// // // //       tooltip: 'User Management'
// // // //     },
// // // //     {
// // // //       text: 'Analytics',
// // // //       icon: AnalyticsIcon,
// // // //       path: '/analytics',
// // // //       tooltip: 'Analytics & Reports'
// // // //     },
// // // //     {
// // // //       text: 'JWT Sessions',
// // // //       icon: SecurityIcon,
// // // //       path: '/jwt-sessions',
// // // //       tooltip: 'View All JWT Sessions'
// // // //     },
// // // //   ];

// // // //   const MenuItemComponent = ({ item }) => {
// // // //     const active = isActiveRoute(item.path);
// // // //     const showText = isMobile || isOpen;
// // // //     const Icon = item.icon;

// // // //     const handleClick = () => {
// // // //       if (isMobile) {
// // // //         toggleSidebar();
// // // //       }
// // // //     };

// // // //     // Dynamic color logic based on dark mode and active state
// // // //     const getIconColor = () => {
// // // //       if (active) {
// // // //         return darkMode ? '#0a0e1a' : '#111';
// // // //       }
// // // //       return darkMode ? '#ffffff' : '#ffffff';
// // // //     };

// // // //     const getTextColor = () => {
// // // //       if (active) {
// // // //         return darkMode ? '#0a0e1a' : '#111';
// // // //       }
// // // //       return darkMode ? '#ffffff' : '#ffffff';
// // // //     };

// // // //     const buttonContent = (
// // // //       <ListItemButton
// // // //         component={Link}
// // // //         to={item.path}
// // // //         selected={active}
// // // //         onClick={handleClick}
// // // //         sx={{
// // // //           minHeight: 48,
// // // //           borderRadius: 2,
// // // //           position: 'relative',
// // // //           overflow: 'hidden',
// // // //           transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
// // // //           mx: 1,
// // // //           my: 0.5,
// // // //           px: showText ? 2 : 0,
// // // //           justifyContent: showText ? 'flex-start' : 'center',
// // // //           bgcolor: active 
// // // //             ? (darkMode ? theme.palette.primary.main : theme.palette.primary.light)
// // // //             : 'transparent',
// // // //           color: getTextColor(),
// // // //           '&.Mui-selected': {
// // // //             bgcolor: darkMode ? theme.palette.primary.main : theme.palette.primary.light,
// // // //             color: darkMode ? '#0a0e1a !important' : '#111 !important',
// // // //             '& .MuiListItemIcon-root': {
// // // //               color: darkMode ? '#0a0e1a !important' : '#111 !important',
// // // //             },
// // // //             '& .MuiListItemText-root': {
// // // //               color: darkMode ? '#0a0e1a !important' : '#111 !important',
// // // //             },
// // // //             '&::before': {
// // // //               content: '""',
// // // //               position: 'absolute',
// // // //               left: 0,
// // // //               top: 0,
// // // //               height: '100%',
// // // //               width: showText ? '4px' : '0px',
// // // //               bgcolor: darkMode ? '#81d4fa' : theme.palette.primary.dark,
// // // //               transition: 'width 0.2s ease',
// // // //             },
// // // //             '&:hover': {
// // // //               bgcolor: darkMode 
// // // //                 ? `${theme.palette.primary.main}CC` 
// // // //                 : `${theme.palette.primary.light}CC`,
// // // //             }
// // // //           },
// // // //           '&:hover': {
// // // //             bgcolor: active 
// // // //               ? (darkMode ? `${theme.palette.primary.main}CC` : `${theme.palette.primary.light}CC`)
// // // //               : (darkMode ? 'rgba(79, 195, 247, 0.1)' : 'rgba(25, 118, 210, 0.08)'),
// // // //             color: active 
// // // //               ? (darkMode ? '#0a0e1a !important' : '#111 !important')
// // // //               : (darkMode ? '#81d4fa !important' : '#1976d2 !important'),
// // // //             '& .MuiListItemIcon-root': {
// // // //               color: active 
// // // //                 ? (darkMode ? '#0a0e1a !important' : '#111 !important')
// // // //                 : (darkMode ? '#81d4fa !important' : '#1976d2 !important'),
// // // //             },
// // // //             '& .MuiListItemText-root': {
// // // //               color: active 
// // // //                 ? (darkMode ? '#0a0e1a !important' : '#111 !important')
// // // //                 : (darkMode ? '#81d4fa !important' : '#1976d2 !important'),
// // // //             }
// // // //           }
// // // //         }}
// // // //       >
// // // //         <ListItemIcon
// // // //           sx={{
// // // //             minWidth: showText ? 40 : 24,
// // // //             width: 24,
// // // //             height: 24,
// // // //             display: 'flex',
// // // //             alignItems: 'center',
// // // //             justifyContent: 'center',
// // // //             color: getIconColor(),
// // // //             transition: 'all 0.2s ease',
// // // //             mr: showText ? 2 : 0,
// // // //             '& svg': {
// // // //               width: 20,
// // // //               height: 20,
// // // //               flexShrink: 0,
// // // //             },
// // // //           }}
// // // //         >
// // // //           <Icon />
// // // //         </ListItemIcon>
// // // //         {showText && (
// // // //           <ListItemText
// // // //             primary={item.text}
// // // //             sx={{
// // // //               color: getTextColor(),
// // // //               '& .MuiTypography-root': {
// // // //                 fontWeight: active ? 700 : 500,
// // // //                 fontSize: '0.95rem',
// // // //                 whiteSpace: 'nowrap',
// // // //                 color: getTextColor(),
// // // //               },
// // // //               margin: 0,
// // // //               flex: 1,
// // // //             }}
// // // //           />
// // // //         )}
// // // //       </ListItemButton>
// // // //     );

// // // //     // Only show tooltip on desktop when sidebar is closed
// // // //     if (!showText && !isMobile) {
// // // //       return (
// // // //         <Tooltip
// // // //           title={item.tooltip}
// // // //           placement="right"
// // // //           arrow
// // // //           componentsProps={{
// // // //             tooltip: {
// // // //               sx: {
// // // //                 bgcolor: darkMode ? '#1a2332' : theme.palette.grey[800],
// // // //                 color: darkMode ? '#ffffff' : '#ffffff',
// // // //                 fontSize: '0.875rem',
// // // //                 fontWeight: 500,
// // // //               },
// // // //             },
// // // //             arrow: { 
// // // //               sx: { 
// // // //                 color: darkMode ? '#1a2332' : theme.palette.grey[800] 
// // // //               } 
// // // //             },
// // // //           }}
// // // //         >
// // // //           <Box>{buttonContent}</Box>
// // // //         </Tooltip>
// // // //       );
// // // //     }
// // // //     return buttonContent;
// // // //   };

// // // //   const sidebarContent = (
// // // //     <Box sx={{
// // // //       display: 'flex',
// // // //       flexDirection: 'column',
// // // //       height: '100%',
// // // //       bgcolor: darkMode ? '#141b2d' : theme.palette.primary.main,
// // // //     }}>
// // // //       {/* Header */}
// // // //       <Box sx={{
// // // //         display: 'flex',
// // // //         justifyContent: (isOpen || isMobile) ? 'space-between' : 'center',
// // // //         alignItems: 'center',
// // // //         px: 2,
// // // //         py: 1.5,
// // // //         minHeight: 64,
// // // //         flexShrink: 0,
// // // //       }}>
// // // //         {(isOpen || isMobile) && (
// // // //           <Typography
// // // //             variant="body2"
// // // //             sx={{
// // // //               fontSize: '0.875rem',
// // // //               fontWeight: 600,
// // // //               color: darkMode ? theme.palette.primary.main : theme.palette.primary.main,
// // // //               letterSpacing: '0.5px',
// // // //             }}
// // // //           >
// // // //             Navigation
// // // //           </Typography>
// // // //         )}
// // // //         <IconButton
// // // //           onClick={toggleSidebar}
// // // //           size="small"
// // // //           sx={{
// // // //             color: darkMode ? theme.palette.primary.main : theme.palette.primary.main,
// // // //             width: 36,
// // // //             height: 36,
// // // //             '&:hover': {
// // // //               bgcolor: darkMode 
// // // //                 ? 'rgba(79, 195, 247, 0.1)' 
// // // //                 : `${theme.palette.primary.main}10`,
// // // //               transform: 'rotate(180deg)',
// // // //             },
// // // //             transition: 'all 0.3s ease',
// // // //           }}
// // // //         >
// // // //           {(isOpen || isMobile) ? <ChevronLeftIcon /> : <MenuIcon />}
// // // //         </IconButton>
// // // //       </Box>

// // // //       {/* Menu Items */}
// // // //       <Box sx={{
// // // //         flexGrow: 1,
// // // //         overflowY: 'auto',
// // // //         overflowX: 'hidden',
// // // //         py: 1,
// // // //       }}>
// // // //         <List sx={{ px: 0, py: 1 }}>
// // // //           {menuItems.map((item) => (
// // // //             <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
// // // //               <MenuItemComponent item={item} />
// // // //             </ListItem>
// // // //           ))}
// // // //         </List>
// // // //       </Box>

// // // //       {/* Footer */}
// // // //       {(isOpen || isMobile) && (
// // // //         <Box sx={{
// // // //           p: 2,
// // // //           borderTop: `1px solid ${darkMode ? '#2d3748' : theme.palette.divider}`,
// // // //           mt: 'auto',
// // // //           flexShrink: 0,
// // // //         }}>
// // // //           <Typography
// // // //             variant="caption"
// // // //             sx={{
// // // //               textAlign: 'center',
// // // //               color: darkMode ? '#b0bec5' : theme.palette.text.secondary,
// // // //               fontSize: '0.75rem',
// // // //               opacity: 0.7,
// // // //               display: 'block',
// // // //             }}
// // // //           >
// // // //             Admin Panel v1.0
// // // //           </Typography>
// // // //         </Box>
// // // //       )}
// // // //     </Box>
// // // //   );

// // // //   // Mobile drawer implementation
// // // //   if (isMobile) {
// // // //     return (
// // // //       <>
// // // //         {/* Backdrop for mobile */}
// // // //         {isOpen && (
// // // //           <Box
// // // //             onClick={toggleSidebar}
// // // //             sx={{
// // // //               position: 'fixed',
// // // //               top: 0,
// // // //               left: 0,
// // // //               right: 0,
// // // //               bottom: 0,
// // // //               bgcolor: 'rgba(0, 0, 0, 0.5)',
// // // //               zIndex: theme.zIndex.drawer - 1,
// // // //               transition: 'all 0.3s ease',
// // // //             }}
// // // //           />
// // // //         )}

// // // //         <Drawer
// // // //           variant="temporary"
// // // //           anchor="left"
// // // //           open={isOpen}
// // // //           onClose={toggleSidebar}
// // // //           ModalProps={{
// // // //             keepMounted: true,
// // // //             disablePortal: true,
// // // //           }}
// // // //           sx={{
// // // //             '& .MuiDrawer-paper': {
// // // //               boxSizing: 'border-box',
// // // //               width: 280,
// // // //               bgcolor: darkMode ? '#141b2d' : theme.palette.background.paper,
// // // //               borderRight: 'none',
// // // //               boxShadow: '8px 0 24px rgba(0, 0, 0, 0.15)',
// // // //             },
// // // //           }}
// // // //         >
// // // //           {sidebarContent}
// // // //         </Drawer>
// // // //       </>
// // // //     );
// // // //   }

// // // //   // Desktop fixed sidebar
// // // //   return (
// // // //     <Box
// // // //       className={`sidebar ${isOpen ? 'open' : 'closed'}`}
// // // //       sx={{
// // // //         width: isOpen ? 240 : 72,
// // // //         flexShrink: 0,
// // // //         transition: theme.transitions.create('width', {
// // // //           easing: theme.transitions.easing.sharp,
// // // //           duration: theme.transitions.duration.enteringScreen,
// // // //         }),
// // // //         overflowX: 'hidden',
// // // //         bgcolor: darkMode ? '#141b2d' : theme.palette.primary.main,
// // // //         borderRight: 'none',
// // // //         position: 'fixed',
// // // //         height: '100vh',
// // // //         left: 0,
// // // //         top: 0,
// // // //         zIndex: theme.zIndex.drawer,
// // // //         boxShadow: darkMode
// // // //           ? '4px 0 20px rgba(0, 0, 0, 0.3)'
// // // //           : '4px 0 12px rgba(0, 98, 255, 0.10)',
// // // //       }}
// // // //     >
// // // //       {sidebarContent}
// // // //     </Box>
// // // //   );
// // // // };

// // // // export default Sidebar;





// // // import { Link, useLocation } from "react-router-dom";
// // // import {
// // //   Box,
// // //   List,
// // //   ListItem,
// // //   ListItemButton,
// // //   ListItemIcon,
// // //   ListItemText,
// // //   IconButton,
// // //   Drawer,
// // //   useMediaQuery,
// // //   Tooltip,
// // //   Typography,
// // // } from "@mui/material";
// // // import DashboardIcon from "@mui/icons-material/Dashboard";
// // // import PeopleIcon from "@mui/icons-material/People";
// // // import AnalyticsIcon from "@mui/icons-material/Analytics";
// // // import MenuIcon from "@mui/icons-material/Menu";
// // // import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// // // import { useTheme } from "@mui/material/styles";
// // // import SecurityIcon from "@mui/icons-material/Security";

// // // const Sidebar = ({ isOpen, toggleSidebar, darkMode }) => {
// // //   const theme = useTheme();
// // //   const location = useLocation();
// // //   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

// // //   const isActiveRoute = (path) => location.pathname === path;

// // //   const menuItems = [
// // //     { text: "Dashboard", icon: DashboardIcon, path: "/", tooltip: "Dashboard Overview" },
// // //     { text: "Users", icon: PeopleIcon, path: "/users", tooltip: "User Management" },
// // //     { text: "Analytics", icon: AnalyticsIcon, path: "/analytics", tooltip: "Analytics & Reports" },
// // //     { text: "JWT Sessions", icon: SecurityIcon, path: "/jwt-sessions", tooltip: "View All JWT Sessions" },
// // //   ];

// // //   const MenuItemComponent = ({ item }) => {
// // //     const active = isActiveRoute(item.path);
// // //     const showText = isMobile || isOpen;
// // //     const Icon = item.icon;

// // //     const handleClick = () => {
// // //       if (isMobile) toggleSidebar();
// // //     };

// // //     // Background colors
// // //     const bgColor = active
// // //       ? darkMode
// // //         ? "#1E88E5"
// // //         : theme.palette.primary.light
// // //       : darkMode
// // //       ? "transparent"
// // //       : theme.palette.primary.main;

// // //     const hoverColor = active
// // //       ? darkMode
// // //         ? "#1565C0"
// // //         : `${theme.palette.primary.light}CC`
// // //       : darkMode
// // //       ? "rgba(79,195,247,0.1)"
// // //       : theme.palette.primary.main;

// // //     // Default text/icon colors
// // //     const textColor = active
// // //       ? darkMode
// // //         ? "#fff" // active dark → white
// // //         : "#111" // active light → black
// // //       : darkMode
// // //       ? "#fff" // default dark → white
// // //       : "#fff"; // default light → white

// // //     const iconColor = textColor;

// // //     const buttonContent = (
// // //       <ListItemButton
// // //         component={Link}
// // //         to={item.path}
// // //         selected={active}
// // //         onClick={handleClick}
// // //         sx={{
// // //           minHeight: 48,
// // //           borderRadius: 2,
// // //           position: "relative",
// // //           overflow: "hidden",
// // //           transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
// // //           mx: 1,
// // //           my: 0.5,
// // //           px: showText ? 2 : 0,
// // //           justifyContent: showText ? "flex-start" : "center",
// // //           bgcolor: bgColor,
// // //           color: textColor,
// // //           boxShadow: active
// // //             ? darkMode
// // //               ? "0 4px 12px rgba(237, 240, 241, 0.97)"
// // //               : "0 4px 12px rgba(0,98,255,0.2)"
// // //             : "none",
// // //           "&.Mui-selected": {
// // //             color: darkMode ? "#fff" : "#111", // active → white in dark, black in light
// // //             "& .MuiListItemIcon-root": { color: darkMode ? "#fff" : "#111" },
// // //             "& .MuiListItemText-root": { color: darkMode ? "#fff" : "#111" },
// // //             "&::before": {
// // //               content: '""',
// // //               position: "absolute",
// // //               left: 0,
// // //               top: 0,
// // //               height: "100%",
// // //               width: showText ? "4px" : "0px",
// // //               bgcolor: darkMode ? "#4fc3f7" : theme.palette.primary.dark,
// // //               transition: "width 0.2s ease",
// // //             },
// // //           },
// // //           "&:hover": {
// // //             bgcolor: hoverColor,
// // //             color: darkMode ? "#4fc3f7" : "#111", // hover → blue in dark, black in light
// // //             "& .MuiListItemIcon-root": { color: darkMode ? "#4fc3f7" : "#111" },
// // //             "& .MuiListItemText-root": { color: darkMode ? "#4fc3f7" : "#111" },
// // //           },

// // //           "&:hover": {
// // //   bgcolor: hoverColor,
// // //   color: darkMode ? "#4fc3f7" : "#111", // ✅ blue in dark, black in light
// // //   "& .MuiListItemIcon-root": { color: darkMode ? "#4fc3f7" : "#111" }, // ✅ matches text
// // //   "& .MuiListItemText-root": { color: darkMode ? "#4fc3f7" : "#111" }, // ✅ matches text
// // // },
// // //         }}
// // //       >
// // //         <ListItemIcon
// // //           sx={{
// // //             minWidth: showText ? 40 : 24,
// // //             width: 24,
// // //             height: 24,
// // //             display: "flex",
// // //             alignItems: "center",
// // //             justifyContent: "center",
// // //             color: iconColor,
// // //             transition: "all 0.2s ease",
// // //             mr: showText ? 2 : 0,
// // //             "& svg": { width: 20, height: 20 },
// // //           }}
// // //         >
// // //           <Icon />
// // //         </ListItemIcon>
// // //         {showText && (
// // //           <ListItemText
// // //             primary={item.text}
// // //             sx={{
// // //               "& .MuiTypography-root": {
// // //                 fontWeight: active ? 700 : 500,
// // //                 fontSize: "0.95rem",
// // //                 whiteSpace: "nowrap",
// // //                 color: active
// // //                   ? darkMode
// // //                     ? "#fff"
// // //                     : "#111"
// // //                   : textColor,
// // //               },
// // //             }}
// // //           />
// // //         )}
// // //       </ListItemButton>
// // //     );

// // //     if (!showText && !isMobile) {
// // //       return (
// // //         <Tooltip
// // //           title={item.tooltip}
// // //           placement="right"
// // //           arrow
// // //           componentsProps={{
// // //             tooltip: {
// // //               sx: {
// // //                 bgcolor: darkMode ? "#1a2332" : theme.palette.grey[800],
// // //                 color: "#fff",
// // //                 fontSize: "0.875rem",
// // //                 fontWeight: 500,
// // //               },
// // //             },
// // //             arrow: {
// // //               sx: { color: darkMode ? "#1a2332" : theme.palette.grey[800] },
// // //             },
// // //           }}
// // //         >
// // //           <Box>{buttonContent}</Box>
// // //         </Tooltip>
// // //       );
// // //     }

// // //     return buttonContent;
// // //   };

// // //   const sidebarContent = (
// // //     <Box
// // //       sx={{
// // //         display: "flex",
// // //         flexDirection: "column",
// // //         height: "100%",
// // //         bgcolor: darkMode ? "#141b2d" : theme.palette.primary.light,
// // //       }}
// // //     >
// // //       {/* Header */}
// // //       <Box
// // //         sx={{
// // //           display: "flex",
// // //           justifyContent: isOpen || isMobile ? "space-between" : "center",
// // //           alignItems: "center",
// // //           px: 2,
// // //           py: 1.5,
// // //           minHeight: 64,
// // //           flexShrink: 0,
// // //         }}
// // //       >
// // //         {(isOpen || isMobile) && (
// // //           <Typography
// // //             variant="body2"
// // //             sx={{
// // //               fontSize: "0.875rem",
// // //               fontWeight: 600,
// // //               color: darkMode ? "#4fc3f7" : theme.palette.primary.main,
// // //               letterSpacing: "0.5px",
// // //             }}
// // //           >
// // //             Navigation
// // //           </Typography>
// // //         )}
// // //         <IconButton
// // //           onClick={toggleSidebar}
// // //           size="small"
// // //           sx={{
// // //             color: darkMode ? "#4fc3f7" : theme.palette.primary.main,
// // //             width: 36,
// // //             height: 36,
// // //             "&:hover": {
// // //               bgcolor: darkMode
// // //                 ? "rgba(79,195,247,0.1)"
// // //                 : `${theme.palette.primary.main}10`,
// // //               transform: "rotate(180deg)",
// // //             },
// // //             transition: "all 0.3s ease",
// // //           }}
// // //         >
// // //           {isOpen || isMobile ? <ChevronLeftIcon /> : <MenuIcon />}
// // //         </IconButton>
// // //       </Box>

// // //       {/* Menu */}
// // //       <Box sx={{ flexGrow: 1, overflowY: "auto", py: 1 }}>
// // //         <List sx={{ px: 0, py: 1 }}>
// // //           {menuItems.map((item) => (
// // //             <ListItem key={item.text} disablePadding>
// // //               <MenuItemComponent item={item} />
// // //             </ListItem>
// // //           ))}
// // //         </List>
// // //       </Box>

// // //       {/* Footer */}
// // //       {(isOpen || isMobile) && (
// // //         <Box
// // //           sx={{
// // //             p: 2,
// // //             borderTop: `1px solid ${darkMode ? "#2d3748" : theme.palette.divider}`,
// // //             mt: "auto",
// // //           }}
// // //         >
// // //           <Typography
// // //             variant="caption"
// // //             sx={{
// // //               textAlign: "center",
// // //               color: darkMode ? "#b0bec5" : theme.palette.text.secondary,
// // //               fontSize: "0.75rem",
// // //               opacity: 0.7,
// // //             }}
// // //           >
// // //             Admin Panel v1.0
// // //           </Typography>
// // //         </Box>
// // //       )}
// // //     </Box>
// // //   );

// // //   if (isMobile) {
// // //     return (
// // //       <Drawer
// // //         variant="temporary"
// // //         anchor="left"
// // //         open={isOpen}
// // //         onClose={toggleSidebar}
// // //         ModalProps={{ keepMounted: true }}
// // //         sx={{
// // //           "& .MuiDrawer-paper": {
// // //             width: 280,
// // //             bgcolor: darkMode ? "#141b2d" : theme.palette.background.paper,
// // //             boxShadow: darkMode
// // //               ? "8px 0 24px rgba(0,0,0,0.4)"
// // //               : "8px 0 24px rgba(0,98,255,0.15)",
// // //           },
// // //         }}
// // //       >
// // //         {sidebarContent}
// // //       </Drawer>
// // //     );
// // //   }

// // //   return (
// // //     <Box
// // //       className={`sidebar ${isOpen ? "open" : "closed"}`}
// // //       sx={{
// // //         width: isOpen ? 240 : 72,
// // //         flexShrink: 0,
// // //         transition: theme.transitions.create("width", {
// // //           easing: theme.transitions.easing.sharp,
// // //           duration: theme.transitions.duration.enteringScreen,
// // //         }),
// // //         overflowX: "hidden",
// // //         bgcolor: darkMode ? "#141b2d" : theme.palette.primary.main,
// // //         position: "fixed",
// // //         height: "100vh",
// // //         left: 0,
// // //         top: 0,
// // //         zIndex: theme.zIndex.drawer,
// // //         boxShadow: darkMode
// // //           ? "4px 0 20px rgba(0,0,0,0.4)"
// // //           : isOpen
// // //           ? "4px 0 12px rgba(0,98,255,0.15)"
// // //           : "2px 0 8px rgba(0,98,255,0.08)",
// // //       }}
// // //     >
// // //       {sidebarContent}
// // //     </Box>
// // //   );
// // // };

// // // export default Sidebar;
// // import { Link, useLocation } from "react-router-dom";
// // import {
// //   Box,
// //   List,
// //   ListItem,
// //   ListItemButton,
// //   ListItemIcon,
// //   ListItemText,
// //   IconButton,
// //   Drawer,
// //   useMediaQuery,
// //   Tooltip,
// //   Typography,
// // } from "@mui/material";
// // import DashboardIcon from "@mui/icons-material/Dashboard";
// // import PeopleIcon from "@mui/icons-material/People";
// // import AnalyticsIcon from "@mui/icons-material/Analytics";
// // import MenuIcon from "@mui/icons-material/Menu";
// // import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// // import { useTheme } from "@mui/material/styles";
// // import SecurityIcon from "@mui/icons-material/Security";

// // const Sidebar = ({ isOpen, toggleSidebar, darkMode }) => {
// //   const theme = useTheme();
// //   const location = useLocation();
// //   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

// //   const isActiveRoute = (path) => location.pathname === path;

// //   const menuItems = [
// //     { text: "Dashboard", icon: DashboardIcon, path: "/", tooltip: "Dashboard Overview" },
// //     { text: "Users", icon: PeopleIcon, path: "/users", tooltip: "User Management" },
// //     { text: "Analytics", icon: AnalyticsIcon, path: "/analytics", tooltip: "Analytics & Reports" },
// //     { text: "JWT Sessions", icon: SecurityIcon, path: "/jwt-sessions", tooltip: "View All JWT Sessions" },
// //   ];

// //   const MenuItemComponent = ({ item }) => {
// //     const active = isActiveRoute(item.path);
// //     const showText = isMobile || isOpen;
// //     const Icon = item.icon;

// //     const handleClick = () => {
// //       if (isMobile) toggleSidebar();
// //     };

// //     // Background colors
// //     const bgColor = active
// //       ? darkMode
// //         ? "#1E88E5"
// //         : theme.palette.primary.light
// //       : "transparent";

// //     const hoverColor = active
// //       ? darkMode
// //         ? "#1565C0"
// //         : `${theme.palette.primary.light}CC`
// //       : darkMode
// //       ? "rgba(79,195,247,0.1)"
// //       : theme.palette.primary.main;

// //     const buttonContent = (
// //       <ListItemButton
// //         component={Link}
// //         to={item.path}
// //         selected={active}
// //         onClick={handleClick}
// //         sx={{
// //           minHeight: 48,
// //           borderRadius: 2,
// //           position: "relative",
// //           overflow: "hidden",
// //           transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
// //           mx: 1,
// //           my: 0.5,
// //           px: showText ? 2 : 0,
// //           justifyContent: showText ? "flex-start" : "center",
// //           bgcolor: bgColor,
// //           boxShadow: active
// //             ? darkMode
// //               ? "0 4px 12px rgba(237, 240, 241, 0.97)"
// //               : "0 4px 12px rgba(0,98,255,0.2)"
// //             : "none",

// //           // Default state colors
// //           "& .MuiListItemIcon-root": {
// //             color: darkMode ? "#fff" : "#fff",
// //             transition: "color 0.2s ease",
// //           },
// //           "& .MuiListItemText-root": {
// //             color: darkMode ? "#fff" : "#fff",
// //             transition: "color 0.2s ease",
// //           },

// //           // Active state - ensure white icons/text in dark mode
// //           "&.Mui-selected": {
// //             "& .MuiListItemIcon-root": { 
// //               color: darkMode ? "#fff !important" : "#111 !important" 
// //             },
// //             "& .MuiListItemText-root": { 
// //               color: darkMode ? "#fff !important" : "#111 !important" 
// //             },
// //             "&::before": {
// //               content: '""',
// //               position: "absolute",
// //               left: 0,
// //               top: 0,
// //               height: "100%",
// //               width: showText ? "4px" : "0px",
// //               bgcolor: darkMode ? "#4fc3f7" : theme.palette.primary.dark,
// //               transition: "width 0.2s ease",
// //             },
// //             // Override hover colors when selected
// //             "&:hover": {
// //               "& .MuiListItemIcon-root": { 
// //                 color: darkMode ? "#4fc3f7 !important" : "#111 !important" 
// //               },
// //               "& .MuiListItemText-root": { 
// //                 color: darkMode ? "#4fc3f7 !important" : "#111 !important" 
// //               },
// //             },
// //           },

// //           // Hover state for non-selected items
// //           "&:hover:not(.Mui-selected)": {
// //             bgcolor: hoverColor,
// //             "& .MuiListItemIcon-root": { 
// //               color: darkMode ? "#4fc3f7 !important" : "#111 !important" 
// //             },
// //             "& .MuiListItemText-root": { 
// //               color: darkMode ? "#4fc3f7 !important" : "#111 !important" 
// //             },
// //           },
// //         }}
// //       >
// //         <ListItemIcon
// //           sx={{
// //             minWidth: showText ? 40 : 24,
// //             width: 24,
// //             height: 24,
// //             display: "flex",
// //             alignItems: "center",
// //             justifyContent: "center",
// //             mr: showText ? 2 : 0,
// //             "& svg": { width: 20, height: 20 },
// //           }}
// //         >
// //           <Icon />
// //         </ListItemIcon>
// //         {showText && (
// //           <ListItemText
// //             primary={item.text}
// //             sx={{
// //               "& .MuiTypography-root": {
// //                 fontWeight: active ? 700 : 500,
// //                 fontSize: "0.95rem",
// //                 whiteSpace: "nowrap",
// //               },
// //             }}
// //           />
// //         )}
// //       </ListItemButton>
// //     );

// //     if (!showText && !isMobile) {
// //       return (
// //         <Tooltip
// //           title={item.tooltip}
// //           placement="right"
// //           arrow
// //           componentsProps={{
// //             tooltip: {
// //               sx: {
// //                 bgcolor: darkMode ? "#1a2332" : theme.palette.grey[800],
// //                 color: "#fff",
// //                 fontSize: "0.875rem",
// //                 fontWeight: 500,
// //               },
// //             },
// //             arrow: {
// //               sx: { color: darkMode ? "#1a2332" : theme.palette.grey[800] },
// //             },
// //           }}
// //         >
// //           <Box>{buttonContent}</Box>
// //         </Tooltip>
// //       );
// //     }

// //     return buttonContent;
// //   };

// //   const sidebarContent = (
// //     <Box
// //       sx={{
// //         display: "flex",
// //         flexDirection: "column",
// //         height: "100%",
// //         bgcolor: darkMode ? "#141b2d" : theme.palette.primary.light,
// //       }}
// //     >
// //       {/* Header */}
// //       <Box
// //         sx={{
// //           display: "flex",
// //           justifyContent: isOpen || isMobile ? "space-between" : "center",
// //           alignItems: "center",
// //           px: 2,
// //           py: 1.5,
// //           minHeight: 64,
// //           flexShrink: 0,
// //         }}
// //       >
// //         {(isOpen || isMobile) && (
// //           <Typography
// //             variant="body2"
// //             sx={{
// //               fontSize: "0.875rem",
// //               fontWeight: 600,
// //               color: darkMode ? "#4fc3f7" : theme.palette.primary.main,
// //               letterSpacing: "0.5px",
// //             }}
// //           >
// //             Navigation
// //           </Typography>
// //         )}
// //         <IconButton
// //           onClick={toggleSidebar}
// //           size="small"
// //           sx={{
// //             color: darkMode ? "#4fc3f7" : theme.palette.primary.main,
// //             width: 36,
// //             height: 36,
// //             "&:hover": {
// //               bgcolor: darkMode
// //                 ? "rgba(79,195,247,0.1)"
// //                 : `${theme.palette.primary.main}10`,
// //               transform: "rotate(180deg)",
// //             },
// //             transition: "all 0.3s ease",
// //           }}
// //         >
// //           {isOpen || isMobile ? <ChevronLeftIcon /> : <MenuIcon />}
// //         </IconButton>
// //       </Box>

// //       {/* Menu */}
// //       <Box sx={{ flexGrow: 1, overflowY: "auto", py: 1 }}>
// //         <List sx={{ px: 0, py: 1 }}>
// //           {menuItems.map((item) => (
// //             <ListItem key={item.text} disablePadding>
// //               <MenuItemComponent item={item} />
// //             </ListItem>
// //           ))}
// //         </List>
// //       </Box>

// //       {/* Footer */}
// //       {(isOpen || isMobile) && (
// //         <Box
// //           sx={{
// //             p: 2,
// //             borderTop: `1px solid ${darkMode ? "#2d3748" : theme.palette.divider}`,
// //             mt: "auto",
// //           }}
// //         >
// //           <Typography
// //             variant="caption"
// //             sx={{
// //               textAlign: "center",
// //               color: darkMode ? "#b0bec5" : theme.palette.text.secondary,
// //               fontSize: "0.75rem",
// //               opacity: 0.7,
// //             }}
// //           >
// //             Admin Panel v1.0
// //           </Typography>
// //         </Box>
// //       )}
// //     </Box>
// //   );

// //   if (isMobile) {
// //     return (
// //       <Drawer
// //         variant="temporary"
// //         anchor="left"
// //         open={isOpen}
// //         onClose={toggleSidebar}
// //         ModalProps={{ keepMounted: true }}
// //         sx={{
// //           "& .MuiDrawer-paper": {
// //             width: 280,
// //             bgcolor: darkMode ? "#141b2d" : theme.palette.background.paper,
// //             boxShadow: darkMode
// //               ? "8px 0 24px rgba(0,0,0,0.4)"
// //               : "8px 0 24px rgba(0,98,255,0.15)",
// //           },
// //         }}
// //       >
// //         {sidebarContent}
// //       </Drawer>
// //     );
// //   }

// //   return (
// //     <Box
// //       className={`sidebar ${isOpen ? "open" : "closed"}`}
// //       sx={{
// //         width: isOpen ? 240 : 72,
// //         flexShrink: 0,
// //         transition: theme.transitions.create("width", {
// //           easing: theme.transitions.easing.sharp,
// //           duration: theme.transitions.duration.enteringScreen,
// //         }),
// //         overflowX: "hidden",
// //         bgcolor: darkMode ? "#141b2d" : theme.palette.primary.main,
// //         position: "fixed",
// //         height: "100vh",
// //         left: 0,
// //         top: 0,
// //         zIndex: theme.zIndex.drawer,
// //         boxShadow: darkMode
// //           ? "4px 0 20px rgba(0,0,0,0.4)"
// //           : isOpen
// //           ? "4px 0 12px rgba(0,98,255,0.15)"
// //           : "2px 0 8px rgba(0,98,255,0.08)",
// //       }}
// //     >
// //       {sidebarContent}
// //     </Box>
// //   );
// // };

// // export default Sidebar;


// import { Link, useLocation } from "react-router-dom";
// import {
//   Box,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   IconButton,
//   Drawer,
//   useMediaQuery,
//   Tooltip,
//   Typography,
// } from "@mui/material";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import PeopleIcon from "@mui/icons-material/People";
// import AnalyticsIcon from "@mui/icons-material/Analytics";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import { useTheme } from "@mui/material/styles";
// import SecurityIcon from "@mui/icons-material/Security";

// const Sidebar = ({ isOpen, toggleSidebar, darkMode }) => {
//   const theme = useTheme();
//   const location = useLocation();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

//   const isActiveRoute = (path) => location.pathname === path;

//   const menuItems = [
//     { text: "Dashboard", icon: DashboardIcon, path: "/", tooltip: "Dashboard Overview" },
//     { text: "Users", icon: PeopleIcon, path: "/users", tooltip: "User Management" },
//     { text: "Analytics", icon: AnalyticsIcon, path: "/analytics", tooltip: "Analytics & Reports" },
//     { text: "JWT Sessions", icon: SecurityIcon, path: "/jwt-sessions", tooltip: "View All JWT Sessions" },
//   ];

//   const MenuItemComponent = ({ item }) => {
//     const active = isActiveRoute(item.path);
//     const showText = isMobile || isOpen;
//     const Icon = item.icon;

//     const handleClick = () => {
//       if (isMobile) toggleSidebar();
//     };

//     // Background colors
//     const bgColor = active
//       ? darkMode
//         ? "#1E88E5"
//         : theme.palette.primary.light
//       : "transparent";

//     const hoverColor = active
//       ? darkMode
//         ? "#1565C0"
//         : `${theme.palette.primary.light}CC`
//       : darkMode
//       ? "rgba(79,195,247,0.1)"
//       : theme.palette.primary.main;

//     const buttonContent = (
//       <ListItemButton
//         component={Link}
//         to={item.path}
//         selected={active}
//         onClick={handleClick}
//         sx={{
//           minHeight: 48,
//           borderRadius: 2,
//           position: "relative",
//           overflow: "hidden",
//           transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
//           mx: 1,
//           my: 0.5,
//           px: showText ? 2 : 0,
//           justifyContent: showText ? "flex-start" : "center",
//           bgcolor: bgColor,
//           boxShadow: active
//             ? darkMode
//               ? "0 4px 12px rgba(237, 240, 241, 0.97)"
//               : "0 4px 12px rgba(0,98,255,0.2)"
//             : "none",

//           // Default state colors
//           "& .MuiListItemIcon-root": {
//             color: darkMode ? "#fff" : "#fff",
//             transition: "color 0.2s ease",
//           },
//           "& .MuiListItemText-root": {
//             color: darkMode ? "#fff" : "#fff",
//             transition: "color 0.2s ease",
//           },

//           // Active state - ensure white icons/text in dark mode
//           "&.Mui-selected": {
//             "& .MuiListItemIcon-root": { 
//               color: darkMode ? "#fff !important" : "#111 !important" 
//             },
//             "& .MuiListItemText-root": { 
//               color: darkMode ? "#fff !important" : "#111 !important" 
//             },
//             "&::before": {
//               content: '""',
//               position: "absolute",
//               left: 0,
//               top: 0,
//               height: "100%",
//               width: showText ? "4px" : "0px",
//               bgcolor: darkMode ? "#4fc3f7" : theme.palette.primary.dark,
//               transition: "width 0.2s ease",
//             },
//             // Override hover colors when selected
//             "&:hover": {
//               "& .MuiListItemIcon-root": { 
//                 color: darkMode ? "#4fc3f7 !important" : "#111 !important" 
//               },
//               "& .MuiListItemText-root": { 
//                 color: darkMode ? "#4fc3f7 !important" : "#111 !important" 
//               },
//             },
//           },

//           // Hover state for non-selected items
//           "&:hover:not(.Mui-selected)": {
//             bgcolor: hoverColor,
//             "& .MuiListItemIcon-root": { 
//               color: darkMode ? "#4fc3f7 !important" : "#111 !important" 
//             },
//             "& .MuiListItemText-root": { 
//               color: darkMode ? "#4fc3f7 !important" : "#111 !important" 
//             },
//           },
//         }}
//       >
//         <ListItemIcon
//           sx={{
//             minWidth: showText ? 40 : 24,
//             width: 24,
//             height: 24,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             mr: showText ? 2 : 0,
//             "& svg": { width: 20, height: 20 },
//           }}
//         >
//           <Icon />
//         </ListItemIcon>
//         {showText && (
//           <ListItemText
//             primary={item.text}
//             sx={{
//               "& .MuiTypography-root": {
//                 fontWeight: active ? 700 : 500,
//                 fontSize: "0.95rem",
//                 whiteSpace: "nowrap",
//               },
//             }}
//           />
//         )}
//       </ListItemButton>
//     );

//     if (!showText && !isMobile) {
//       return (
//         <Tooltip
//           title={item.tooltip}
//           placement="right"
//           arrow
//           componentsProps={{
//             tooltip: {
//               sx: {
//                 bgcolor: darkMode ? "#1a2332" : theme.palette.grey[800],
//                 color: "#fff",
//                 fontSize: "0.875rem",
//                 fontWeight: 500,
//               },
//             },
//             arrow: {
//               sx: { color: darkMode ? "#1a2332" : theme.palette.grey[800] },
//             },
//           }}
//         >
//           <Box>{buttonContent}</Box>
//         </Tooltip>
//       );
//     }

//     return buttonContent;
//   };

//   const sidebarContent = (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         height: "100%",
//         bgcolor: darkMode ? "#141b2d" : theme.palette.primary.main,
//       }}
//     >
//       {/* Header */}
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: isOpen || isMobile ? "space-between" : "center",
//           alignItems: "center",
//           px: 2,
//           py: 1.5,
//           minHeight: 64,
//           flexShrink: 0,
//         }}
//       >
//         {(isOpen || isMobile) && (
//           <Typography
//             variant="body2"
//             sx={{
//               fontSize: "0.875rem",
//               fontWeight: 600,
//               color: darkMode ? "#4fc3f7" : theme.palette.primary.main,
//               letterSpacing: "0.5px",
//             }}
//           >
//             Navigation
//           </Typography>
//         )}
//         <IconButton
//           onClick={toggleSidebar}
//           size="small"
//           sx={{
//             color: darkMode ? "#4fc3f7" : theme.palette.primary.main,
//             width: 36,
//             height: 36,
//             "&:hover": {
//               bgcolor: darkMode
//                 ? "rgba(79,195,247,0.1)"
//                 : `${theme.palette.primary.main}10`,
//               transform: "rotate(180deg)",
//             },
//             transition: "all 0.3s ease",
//           }}
//         >
//           {isOpen || isMobile ? <ChevronLeftIcon /> : <MenuIcon />}
//         </IconButton>
//       </Box>

//       {/* Menu */}
//       <Box sx={{ flexGrow: 1, overflowY: "auto", py: 1 }}>
//         <List sx={{ px: 0, py: 1 }}>
//           {menuItems.map((item) => (
//             <ListItem key={item.text} disablePadding>
//               <MenuItemComponent item={item} />
//             </ListItem>
//           ))}
//         </List>
//       </Box>

//       {/* Footer */}
//       {(isOpen || isMobile) && (
//         <Box
//           sx={{
//             p: 2,
//             borderTop: `1px solid ${darkMode ? "#2d3748" : theme.palette.divider}`,
//             mt: "auto",
//           }}
//         >
//           <Typography
//             variant="caption"
//             sx={{
//               textAlign: "center",
//               color: darkMode ? "#b0bec5" : theme.palette.text.secondary,
//               fontSize: "0.75rem",
//               opacity: 0.7,
//             }}
//           >
//             Admin Panel v1.0
//           </Typography>
//         </Box>
//       )}
//     </Box>
//   );

//   if (isMobile) {
//     return (
//       <Drawer
//         variant="temporary"
//         anchor="left"
//         open={isOpen}
//         onClose={toggleSidebar}
//         ModalProps={{ keepMounted: true }}
//         sx={{
//           "& .MuiDrawer-paper": {
//             width: 280,
//             bgcolor: darkMode ? "#141b2d" : theme.palette.primary.main,
//             boxShadow: darkMode
//               ? "8px 0 24px rgba(0,0,0,0.4)"
//               : "8px 0 24px rgba(0,98,255,0.15)",
//           },
//         }}
//       >
//         {sidebarContent}
//       </Drawer>
//     );
//   }

//   return (
//     <Box
//       className={`sidebar ${isOpen ? "open" : "closed"}`}
//       sx={{
//         width: isOpen ? 240 : 72,
//         flexShrink: 0,
//         transition: theme.transitions.create("width", {
//           easing: theme.transitions.easing.sharp,
//           duration: theme.transitions.duration.enteringScreen,
//         }),
//         overflowX: "hidden",
//         bgcolor: darkMode ? "#141b2d" : theme.palette.primary.main,
//         position: "fixed",
//         height: "100vh",
//         left: 0,
//         top: 0,
//         zIndex: theme.zIndex.drawer,
//         boxShadow: darkMode
//           ? "4px 0 20px rgba(0,0,0,0.4)"
//           : isOpen
//           ? "4px 0 12px rgba(0,98,255,0.15)"
//           : "2px 0 8px rgba(0,98,255,0.08)",
//       }}
//     >
//       {sidebarContent}
//     </Box>
//   );
// };

// export default Sidebar;


import { Link, useLocation } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Drawer,
  useMediaQuery,
  Tooltip,
  Typography,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useTheme } from "@mui/material/styles";
import SecurityIcon from "@mui/icons-material/Security";

const Sidebar = ({ isOpen, toggleSidebar, darkMode }) => {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const isActiveRoute = (path) => location.pathname === path;

  const menuItems = [
    { text: "Dashboard", icon: DashboardIcon, path: "/", tooltip: "Dashboard Overview" },
    { text: "Users", icon: PeopleIcon, path: "/users", tooltip: "User Management" },
    { text: "Analytics", icon: AnalyticsIcon, path: "/analytics", tooltip: "Analytics & Reports" },
    { text: "JWT Sessions", icon: SecurityIcon, path: "/jwt-sessions", tooltip: "View All JWT Sessions" },
  ];

  const MenuItemComponent = ({ item }) => {
    const active = isActiveRoute(item.path);
    const showText = isMobile || isOpen;
    const Icon = item.icon;

    const handleClick = () => {
      if (isMobile) toggleSidebar();
    };

    // Background colors
    const bgColor = active
      ? darkMode
        ? "#1E88E5"
        : theme.palette.primary.light
      : "transparent";

    const hoverColor = active
      ? darkMode
        ? "#1565C0"
        : `${theme.palette.primary.light}CC`
      : darkMode
      ? "rgba(79,195,247,0.1)"
      : theme.palette.primary.main;

    const buttonContent = (
      <ListItemButton
        component={Link}
        to={item.path}
        selected={active}
        onClick={handleClick}
        sx={{
          minHeight: 48,
          borderRadius: 2,
          position: "relative",
          overflow: "hidden",
          transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
          mx: 1,
          my: 0.5,
          px: showText ? 2 : 0,
          justifyContent: showText ? "flex-start" : "center",
          bgcolor: bgColor,
          boxShadow: active
            ? darkMode
              ? "0 4px 12px rgba(237, 240, 241, 0.97)"
              : "0 4px 12px rgba(0,98,255,0.2)"
            : "none",

          // Default state colors
          "& .MuiListItemIcon-root": {
            color: darkMode ? "#fff" : "#fff",
            transition: "color 0.2s ease",
          },
          "& .MuiListItemText-root": {
            color: darkMode ? "#fff" : "#fff",
            transition: "color 0.2s ease",
          },

          // Active state - ensure white icons/text in dark mode
          "&.Mui-selected": {
            "& .MuiListItemIcon-root": { 
              color: darkMode ? "#fff !important" : "#111 !important" 
            },
            "& .MuiListItemText-root": { 
              color: darkMode ? "#fff !important" : "#111 !important" 
            },
            "&::before": {
              content: '""',
              position: "absolute",
              left: 0,
              top: 0,
              height: "100%",
              width: showText ? "4px" : "0px",
              bgcolor: darkMode ? "#4fc3f7" : theme.palette.primary.dark,
              transition: "width 0.2s ease",
            },
            // Override hover colors when selected
            "&:hover": {
              "& .MuiListItemIcon-root": { 
                color: darkMode ? "#4fc3f7 !important" : "#111 !important" 
              },
              "& .MuiListItemText-root": { 
                color: darkMode ? "#4fc3f7 !important" : "#111 !important" 
              },
            },
          },

          // Hover state for non-selected items
          "&:hover:not(.Mui-selected)": {
            bgcolor: hoverColor,
            "& .MuiListItemIcon-root": { 
              color: darkMode ? "#4fc3f7 !important" : "#111 !important" 
            },
            "& .MuiListItemText-root": { 
              color: darkMode ? "#4fc3f7 !important" : "#111 !important" 
            },
          },
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: showText ? 40 : 24,
            width: 24,
            height: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mr: showText ? 2 : 0,
            "& svg": { width: 20, height: 20 },
          }}
        >
          <Icon />
        </ListItemIcon>
        {showText && (
          <ListItemText
            primary={item.text}
            sx={{
              "& .MuiTypography-root": {
                fontWeight: active ? 700 : 500,
                fontSize: "0.95rem",
                whiteSpace: "nowrap",
              },
            }}
          />
        )}
      </ListItemButton>
    );

    if (!showText && !isMobile) {
      return (
        <Tooltip
          title={item.tooltip}
          placement="right"
          arrow
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: darkMode ? "#1a2332" : theme.palette.grey[800],
                color: "#fff",
                fontSize: "0.875rem",
                fontWeight: 500,
              },
            },
            arrow: {
              sx: { color: darkMode ? "#1a2332" : theme.palette.grey[800] },
            },
          }}
        >
          <Box>{buttonContent}</Box>
        </Tooltip>
      );
    }

    return buttonContent;
  };

  const sidebarContent = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        bgcolor: darkMode ? "#141b2d" : theme.palette.primary.light,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: isOpen || isMobile ? "space-between" : "center",
          alignItems: "center",
          px: 2,
          py: 1.5,
          minHeight: 64,
          flexShrink: 0,
        }}
      >
        {(isOpen || isMobile) && (
          <Typography
            variant="body2"
            sx={{
              fontSize: "0.875rem",
              fontWeight: 600,
              color: darkMode ? "#4fc3f7" : theme.palette.primary.main,
              letterSpacing: "0.5px",
            }}
          >
            Navigation
          </Typography>
        )}
        <IconButton
          onClick={toggleSidebar}
          size="small"
          sx={{
            color: darkMode ? "#4fc3f7" : theme.palette.primary.main,
            width: 36,
            height: 36,
            "&:hover": {
              bgcolor: darkMode
                ? "rgba(79,195,247,0.1)"
                : `${theme.palette.primary.main}10`,
              transform: "rotate(180deg)",
            },
            transition: "all 0.3s ease",
          }}
        >
          {isOpen || isMobile ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
      </Box>

      {/* Menu */}
      <Box sx={{ flexGrow: 1, overflowY: "auto", py: 1 }}>
        <List sx={{ px: 0, py: 1 }}>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <MenuItemComponent item={item} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Footer */}
      {(isOpen || isMobile) && (
        <Box
          sx={{
            p: 2,
            borderTop: `1px solid ${darkMode ? "#2d3748" : theme.palette.divider}`,
            mt: "auto",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              textAlign: "center",
              color: darkMode ? "#b0bec5" : theme.palette.text.secondary,
              fontSize: "0.75rem",
              opacity: 0.7,
            }}
          >
            Admin Panel v1.0
          </Typography>
        </Box>
      )}
    </Box>
  );

  if (isMobile) {
    return (
      <Drawer
        variant="temporary"
        anchor="left"
        open={isOpen}
        onClose={toggleSidebar}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            width: 280,
            bgcolor: darkMode ? "#141b2d" : theme.palette.primary.light,
            boxShadow: darkMode
              ? "8px 0 24px rgba(0,0,0,0.4)"
              : "8px 0 24px rgba(0,98,255,0.15)",
          },
        }}
      >
        {sidebarContent}
      </Drawer>
    );
  }

  return (
    <Box
      className={`sidebar ${isOpen ? "open" : "closed"}`}
      sx={{
        width: isOpen ? 240 : 72,
        flexShrink: 0,
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: "hidden",
        bgcolor: darkMode ? "#141b2d" : theme.palette.primary.main,
        position: "fixed",
        height: "100vh",
        left: 0,
        top: 0,
        zIndex: theme.zIndex.drawer,
        boxShadow: darkMode
          ? "4px 0 20px rgba(0,0,0,0.4)"
          : isOpen
          ? "4px 0 12px rgba(0,98,255,0.15)"
          : "2px 0 8px rgba(0,98,255,0.08)",
      }}
    >
      {sidebarContent}
    </Box>
  );
};

export default Sidebar;