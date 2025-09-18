

import { Card, CardContent, Typography, useTheme, Box, alpha } from "@mui/material";

const QuickViewCard = ({ Title, Value, color = "primary", compact, filterKey }) => {
  const theme = useTheme();
  
  return (
    <Card
      sx={{
        cursor: filterKey ? "pointer" : "default",
        bgcolor: theme.palette.background.paper,
        position: 'relative',
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: `0 8px 24px ${alpha(theme.palette[color]?.main || theme.palette.primary.main, 0.08)}`,
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: filterKey ? `0 12px 28px ${alpha(theme.palette[color]?.main || theme.palette.primary.main, 0.15)}` : 
            `0 8px 24px ${alpha(theme.palette[color]?.main || theme.palette.primary.main, 0.08)}`,
          transform: filterKey ? 'translateY(-4px)' : 'translateY(-2px)',
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '4px',
          background: `linear-gradient(to bottom, ${theme.palette[color]?.main || theme.palette.primary.main}, 
            ${alpha(theme.palette[color]?.main || theme.palette.primary.main, 0.6)})`,
        }
      }}
    >
      <CardContent sx={{ 
        p: compact ? 2 : 2.5,
        pl: compact ? 2.5 : 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 0.5
      }}>
        <Typography 
          variant="subtitle2" 
          sx={{
            color: alpha(theme.palette.text.secondary, 1),
            fontSize: '0.85rem',
            fontWeight: 800,
            letterSpacing: '0.3px',
            textTransform: 'uppercase'
          }}
        >
          {Title}
        </Typography>
        
        <Typography 
          variant="h6" 
          sx={{
            color: theme.palette.text.primary,
            fontWeight: 700,
            fontSize: compact ? '1.3rem' : '1.5rem',
            mt: 0.5,
            background: `linear-gradient(135deg, ${theme.palette[color]?.main || theme.palette.primary.main}, 
              ${theme.palette[color]?.dark || theme.palette.primary.dark})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          {Value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default QuickViewCard;
