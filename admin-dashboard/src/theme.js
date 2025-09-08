import { createTheme } from '@mui/material/styles';

// --- NEW FLUORESCENT & BLUE LIGHT THEME ---

// Define the core colors for a modern, clean, and vibrant light theme
const VIBRANT_BLUE = '#0062FF';      // A modern, energetic primary blue
const LIGHT_VIBRANT_BLUE = '#E6F0FF';// A light shade for backgrounds and hovers
const VIBRANT_AQUA = '#00F5D4';      // The fluorescent accent color
const WHITE = '#ffffff';
const LIGHT_GRAY_BG = '#f5f7fa';     // The default app background
const DARK_GRAY_TEXT = '#212529';    // A strong, readable primary text color
const MEDIUM_GRAY_TEXT = '#5A6472';  // For secondary, less important text
const ERROR_RED = '#FF4757';         // A modern, vibrant red
const BORDER_GRAY = '#EAEBEF';       // For subtle borders and dividers

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: VIBRANT_BLUE,
      light: LIGHT_VIBRANT_BLUE,
    },
    secondary: {
      main: VIBRANT_AQUA,
      // Contrast text for the secondary color needs to be dark for readability
      contrastText: DARK_GRAY_TEXT,
    },
    background: {
      default: LIGHT_GRAY_BG,
      paper: WHITE,
    },
    text: {
      primary: DARK_GRAY_TEXT,
      secondary: MEDIUM_GRAY_TEXT,
    },
    error: {
      main: ERROR_RED,
    },
    divider: BORDER_GRAY,
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.2rem',
      fontWeight: 700,
      color: VIBRANT_BLUE, // Headers use the primary energetic blue
      letterSpacing: '0.5px',
    },
    h4: {
      fontSize: '2rem',
      fontWeight: 600,
      color: VIBRANT_BLUE,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: VIBRANT_BLUE,
      marginBottom: '1rem',
    },
    h6: {
      fontSize: '1.1rem',
      fontWeight: 600,
      color: DARK_GRAY_TEXT, // Use the primary text color for sub-headers
    },
    body1: {
      color: DARK_GRAY_TEXT,
    },
    body2: {
      color: MEDIUM_GRAY_TEXT,
    },
  },
  components: {
    // Style overrides for all Paper components (cards, dialogs, etc.)
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 98, 255, 0.08)', // A subtle blue-tinted shadow
          border: `1px solid ${BORDER_GRAY}`,
        },
      },
    },
    // Style overrides for all Buttons
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 20px',
          boxShadow: 'none', // A flatter look for buttons
        },
        // Secondary buttons will use the fluorescent color
        containedSecondary: {
            // The palette `contrastText` defined above will handle the text color automatically
            '&:hover': {
                backgroundColor: '#00DFC4', // A slightly darker shade on hover
            }
        }
      },
    },
    // Table styling
    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: LIGHT_VIBRANT_BLUE, // Use the light blue for the header
          fontWeight: 700,
          color: VIBRANT_BLUE, // Use the main blue for header text
          borderBottom: `1px solid ${BORDER_GRAY}`,
        },
        root: {
          borderBottom: `1px solid ${BORDER_GRAY}`,
        },
      },
    },
    // Table container styling
    MuiTableContainer: {
      styleOverrides: {
        root: {
          // Inherits the clean MuiPaper style, perfect for tables.
          // This keeps styling consistent.
        },
      },
    },
    // AppBar (Navbar) styling for a clean look
    MuiAppBar: {
        styleOverrides: {
            root: {
                backgroundColor: WHITE,
                color: VIBRANT_BLUE,
                boxShadow: '0 2px 8px rgba(0, 98, 255, 0.08)',
            }
        }
    }
  },
});

export default theme;