

import { Card, CardContent, Typography, useTheme } from "@mui/material";

const QuickViewCard = ({ Title, Value, color = "primary", compact, filterKey }) => {
  const theme = useTheme();
  

  return (
    <Card
     
      sx={{
        cursor: filterKey ? "pointer" : "default",
        bgcolor: theme.palette.background.default,
        borderLeft: `5px solid ${theme.palette[color]?.main}`,
        boxShadow: 1,
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: filterKey ? 4 : 1,
          transform: filterKey ? 'translateY(-2px)' : 'none',
        },
      }}
    >
      <CardContent sx={{ p: compact ? 1.5 : 2 }}>
        <Typography variant="subtitle2" color="textSecondary">{Title}</Typography>
        <Typography variant="h6" color="textPrimary" fontWeight={600}>
          {Value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default QuickViewCard;
