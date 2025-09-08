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

import { Paper, Typography, useTheme, Box } from "@mui/material";

const GraphCard = ({ title, chart, height = 300 }) => {
  const theme = useTheme();

  return (
    <Paper
      elevation={3}
      sx={{
        p: { xs: 2, sm: 3 },
        borderRadius: 2,
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.divider}`,
        transition: 'box-shadow 0.2s, transform 0.2s',
        boxShadow: 3,
        '&:hover': {
          boxShadow: '0 6px 24px 0 rgba(0, 98, 255, 0.18)',
          backgroundColor: theme.palette.background.paper,
          transform: 'translateY(-3px) scale(1.02)'
        }
      }}
    >
      {title && (
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontWeight: 600,
            color: theme.palette.primary.main,
            fontSize: { xs: '1rem', sm: '1.15rem' },
          }}
        >
          {title}
        </Typography>
      )}
      <Box sx={{ width: '100%', height: { xs: 200, sm: typeof height === 'number' ? height : 300 } }}>
        {chart}
      </Box>
    </Paper>
  );
};

export default GraphCard;