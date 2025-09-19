// import { createTheme } from '@mui/material/styles';

// // --- NEW FLUORESCENT & BLUE LIGHT THEME ---

// // Define the core colors for a modern, clean, and vibrant light theme
// const VIBRANT_BLUE = '#0062FF';      // A modern, energetic primary blue
// const LIGHT_VIBRANT_BLUE = '#E6F0FF';// A light shade for backgrounds and hovers
// const VIBRANT_AQUA = '#00F5D4';      // The fluorescent accent color
// const WHITE = '#ffffff';
// const LIGHT_GRAY_BG = '#f5f7fa';     // The default app background
// const DARK_GRAY_TEXT = '#212529';    // A strong, readable primary text color
// const MEDIUM_GRAY_TEXT = '#5A6472';  // For secondary, less important text
// const ERROR_RED = '#FF4757';         // A modern, vibrant red
// const BORDER_GRAY = '#EAEBEF';       // For subtle borders and dividers

// const theme = createTheme({
//   palette: {
//     mode: 'light',
//     primary: {
//       main: VIBRANT_BLUE,
//       light: LIGHT_VIBRANT_BLUE,
//     },
//     secondary: {
//       main: VIBRANT_AQUA,
//       // Contrast text for the secondary color needs to be dark for readability
//       contrastText: DARK_GRAY_TEXT,
//     },
//     background: {
//       default: LIGHT_GRAY_BG,
//       paper: WHITE,
//     },
//     text: {
//       primary: DARK_GRAY_TEXT,
//       secondary: MEDIUM_GRAY_TEXT,
//     },
//     error: {
//       main: ERROR_RED,
//     },
//     divider: BORDER_GRAY,
//   },
//   typography: {
//     fontFamily: 'Roboto, sans-serif',
//     h1: {
//       fontSize: '2.2rem',
//       fontWeight: 700,
//       color: VIBRANT_BLUE, // Headers use the primary energetic blue
//       letterSpacing: '0.5px',
//     },
//     h4: {
//       fontSize: '2rem',
//       fontWeight: 600,
//       color: VIBRANT_BLUE,
//     },
//     h5: {
//       fontSize: '1.5rem',
//       fontWeight: 600,
//       color: VIBRANT_BLUE,
//       marginBottom: '1rem',
//     },
//     h6: {
//       fontSize: '1.1rem',
//       fontWeight: 600,
//       color: DARK_GRAY_TEXT, // Use the primary text color for sub-headers
//     },
//     body1: {
//       color: DARK_GRAY_TEXT,
//     },
//     body2: {
//       color: MEDIUM_GRAY_TEXT,
//     },
//   },
//   components: {
//     // Style overrides for all Paper components (cards, dialogs, etc.)
//     MuiPaper: {
//       styleOverrides: {
//         root: {
//           borderRadius: '12px',
//           boxShadow: '0 4px 12px rgba(0, 98, 255, 0.08)', // A subtle blue-tinted shadow
//           border: `1px solid ${BORDER_GRAY}`,
//         },
//       },
//     },
//     // Style overrides for all Buttons
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: '8px',
//           textTransform: 'none',
//           fontWeight: 600,
//           padding: '10px 20px',
//           boxShadow: 'none', // A flatter look for buttons
//         },
//         // Secondary buttons will use the fluorescent color
//         containedSecondary: {
//             // The palette `contrastText` defined above will handle the text color automatically
//             '&:hover': {
//                 backgroundColor: '#00DFC4', // A slightly darker shade on hover
//             }
//         }
//       },
//     },
//     // Table styling
//     MuiTableCell: {
//       styleOverrides: {
//         head: {
//           backgroundColor: LIGHT_VIBRANT_BLUE, // Use the light blue for the header
//           fontWeight: 700,
//           color: VIBRANT_BLUE, // Use the main blue for header text
//           borderBottom: `1px solid ${BORDER_GRAY}`,
//         },
//         root: {
//           borderBottom: `1px solid ${BORDER_GRAY}`,
//         },
//       },
//     },
//     // Table container styling
//     MuiTableContainer: {
//       styleOverrides: {
//         root: {
//           // Inherits the clean MuiPaper style, perfect for tables.
//           // This keeps styling consistent.
//         },
//       },
//     },
//     // AppBar (Navbar) styling for a clean look
//     MuiAppBar: {
//         styleOverrides: {
//             root: {
//                 backgroundColor: WHITE,
//                 color: VIBRANT_BLUE,
//                 boxShadow: '0 2px 8px rgba(0, 98, 255, 0.08)',
//             }
//         }
//     }
//   },
// });

// export default theme;


import { createTheme } from '@mui/material/styles';

// --- DARK MODE THEME BASED ON REFERENCE IMAGE ---

// Dark theme colors from reference image
const DARK_PRIMARY_BG = '#0a0e1a';        // Deep navy background
const DARK_SECONDARY_BG = '#141b2d';      // Secondary dark background
const DARK_CARD_BG = '#1a2332';           // Card backgrounds
const BRIGHT_BLUE = '#4fc3f7';            // Bright cyan blue accent
const BRIGHT_GREEN = '#21af26ff';           // Success green
const BRIGHT_ORANGE = '#ff9800';          // Warning orange
const BRIGHT_RED = '#f44336';             // Error red
const BRIGHT_PURPLE = '#9c27b0';          // Purple accent
const WHITE_TEXT = '#ffffff';             // Primary white text
const GRAY_TEXT = '#b0bec5';              // Secondary gray text
const LIGHT_GRAY_TEXT = '#90a4ae';        // Tertiary gray text
const BORDER_COLOR = '#2d3748';           // Subtle borders

// Light theme colors (original)
const VIBRANT_BLUE = '#0062FF';
const LIGHT_VIBRANT_BLUE = '#E6F0FF';
const VIBRANT_AQUA = '#23ca63ff';
const WHITE = '#ffffff';
const LIGHT_GRAY_BG = '#f5f7fa';
const DARK_GRAY_TEXT = '#212529';
const MEDIUM_GRAY_TEXT = '#5A6472';
const ERROR_RED = '#FF4757';
const BORDER_GRAY = '#EAEBEF';

const createAppTheme = (darkMode = false) => {
  return createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? BRIGHT_BLUE : VIBRANT_BLUE,
        light: darkMode ? '#81d4fa' : LIGHT_VIBRANT_BLUE,
        dark: darkMode ? '#0288d1' : '#003d99',
      },
      secondary: {
        main: darkMode ? BRIGHT_GREEN : VIBRANT_AQUA,
        light: darkMode ? '#81c784' : '#B3F5E8',
        dark: darkMode ? '#388e3c' : '#00DFC4',
        contrastText: darkMode ? WHITE_TEXT : DARK_GRAY_TEXT,
      },
      background: {
        default: darkMode ? DARK_PRIMARY_BG : LIGHT_GRAY_BG,
        paper: darkMode ? DARK_CARD_BG : WHITE,
      },
      text: {
        primary: darkMode ? WHITE_TEXT : DARK_GRAY_TEXT,
        secondary: darkMode ? GRAY_TEXT : MEDIUM_GRAY_TEXT,
      },
      error: {
        main: darkMode ? BRIGHT_RED : ERROR_RED,
      },
      warning: {
        main: darkMode ? BRIGHT_ORANGE : '#f57c00',
      },
      info: {
        main: darkMode ? BRIGHT_BLUE : '#1976d2',
      },
      success: {
        main: darkMode ? BRIGHT_GREEN : '#388e3c',
      },
      divider: darkMode ? BORDER_COLOR : BORDER_GRAY,
    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
      h1: {
        fontSize: '2.2rem',
        fontWeight: 700,
        color: darkMode ? WHITE_TEXT : VIBRANT_BLUE,
        letterSpacing: '0.5px',
      },
      h4: {
        fontSize: '2rem',
        fontWeight: 600,
        color: darkMode ? WHITE_TEXT : VIBRANT_BLUE,
      },
      h5: {
        fontSize: '1.5rem',
        fontWeight: 600,
        color: darkMode ? WHITE_TEXT : VIBRANT_BLUE,
        marginBottom: '1rem',
      },
      h6: {
        fontSize: '1.1rem',
        fontWeight: 600,
        color: darkMode ? WHITE_TEXT : DARK_GRAY_TEXT,
      },
      body1: {
        color: darkMode ? WHITE_TEXT : DARK_GRAY_TEXT,
      },
      body2: {
        color: darkMode ? GRAY_TEXT : MEDIUM_GRAY_TEXT,
      },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: '12px',
            boxShadow: darkMode 
              ? '0 8px 32px rgba(0, 0, 0, 0.3)' 
              : '0 4px 12px rgba(0, 98, 255, 0.08)',
            border: `1px solid ${darkMode ? BORDER_COLOR : BORDER_GRAY}`,
            backgroundImage: 'none',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            textTransform: 'none',
            fontWeight: 600,
            padding: '10px 20px',
            boxShadow: 'none',
          },
          containedSecondary: {
            '&:hover': {
              backgroundColor: darkMode ? '#66bb6a' : '#00DFC4',
            }
          }
        },
      },
      MuiTableCell: {
        styleOverrides: {
          head: {
            backgroundColor: darkMode ? DARK_SECONDARY_BG : LIGHT_VIBRANT_BLUE,
            fontWeight: 700,
            color: darkMode ? BRIGHT_BLUE : VIBRANT_BLUE,
            borderBottom: `1px solid ${darkMode ? BORDER_COLOR : BORDER_GRAY}`,
          },
          root: {
            borderBottom: `1px solid ${darkMode ? BORDER_COLOR : BORDER_GRAY}`,
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: darkMode ? DARK_CARD_BG : WHITE,
            color: darkMode ? WHITE_TEXT : VIBRANT_BLUE,
            boxShadow: darkMode 
              ? '0 4px 20px rgba(0, 0, 0, 0.3)' 
              : '0 2px 8px rgba(0, 98, 255, 0.08)',
          }
        }
      },
      // Additional dark mode specific components
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            backgroundColor: darkMode ? DARK_CARD_BG : WHITE,
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: darkMode ? DARK_SECONDARY_BG : WHITE,
            borderRight: darkMode ? `1px solid ${BORDER_COLOR}` : `1px solid ${BORDER_GRAY}`,
          },
        },
      },
    },
  });
};

export default createAppTheme;