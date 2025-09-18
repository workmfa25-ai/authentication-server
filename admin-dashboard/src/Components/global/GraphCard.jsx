// import { Paper, Typography, useTheme, Box } from "@mui/material";

// const GraphCard = ({ title, chart, height = 300 }) => {
//   const theme = useTheme();

//   return (
//     <Paper
//       elevation={3}
//       sx={{
//         p: { xs: 2, sm: 3 },
//         borderRadius: 2,
//         backgroundColor: theme.palette.background.paper,
//         border: `1px solid ${theme.palette.divider}`,
//       }}
//     >
//       {title && (
//         <Typography
//           variant="h6"
//           sx={{
//             mb: 2,
//             fontWeight: 600,
//             color: theme.palette.primary.main,
//             fontSize: { xs: '1rem', sm: '1.15rem' },
//           }}
//         >
//           {title}
//         </Typography>
//       )}
//       <Box sx={{ width: '100%', height: { xs: 200, sm: typeof height === 'number' ? height : 300 } }}>
//         {chart}
//       </Box>
//     </Paper>
//   );
// };

// export default GraphCard;

import { Paper, Typography, useTheme, Box, alpha } from "@mui/material";

const GraphCard = ({ title, chart, height = 300 }) => {
  const theme = useTheme();

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2.5, sm: 3.5 },
        borderRadius: 3,
        backgroundColor: alpha(theme.palette.background.paper, 0.85),
        backdropFilter: 'blur(8px)',
        border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: `0 10px 30px -5px ${alpha(theme.palette.primary.main, 0.1)}`,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main || theme.palette.primary.light})`,
          opacity: 0.7,
        },
        '&:hover': {
          boxShadow: `0 15px 35px -10px ${alpha(theme.palette.primary.main, 0.15)}`,
          transform: 'translateY(-5px)',
        }
      }}
    >
      {title && (
        <Typography
          variant="h6"
          sx={{
            mb: 2.5,
            fontWeight: 600,
            color: theme.palette.text.primary,
            fontSize: { xs: '1.1rem', sm: '1.2rem' },
            position: 'relative',
            display: 'inline-block',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -6,
              left: 0,
              width: '40px',
              height: '3px',
              borderRadius: '3px',
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${alpha(theme.palette.primary.main, 0.4)})`,
            }
          }}
        >
          {title}
        </Typography>
      )}
      <Box sx={{ 
        width: '100%', 
        height: { xs: 200, sm: typeof height === 'number' ? height : 300 },
        animation: 'fadeIn 0.6s ease-out',
        '@keyframes fadeIn': {
          '0%': { opacity: 0.7 },
          '100%': { opacity: 1 }
        }
      }}>
        {chart}
      </Box>
    </Paper>
  );
};

export default GraphCard;