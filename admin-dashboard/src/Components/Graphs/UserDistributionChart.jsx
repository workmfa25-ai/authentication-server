import { useTheme } from "@mui/material";
import { ResponsivePie } from '@nivo/pie';

const UserDistributionChart = ({ users }) => {
  const theme = useTheme();

  // Calculate user distribution
  const adminCount = users.filter(u => u.is_admin && !u.is_blocked).length;
  const activeUserCount = users.filter(u => !u.is_admin && !u.is_blocked).length;
  const blockedCount = users.filter(u => u.is_blocked).length;

  const data = [
    {
      id: 'Active Users',
      label: 'Active Users',
      value: activeUserCount,
      color: theme.palette.primary.main
    },
    {
      id: 'Admins',
      label: 'Admins', 
      value: adminCount,
      color: theme.palette.secondary.main
    },
    {
      id: 'Blocked',
      label: 'Blocked',
      value: blockedCount,
      color: theme.palette.error.main
    }
  ].filter(item => item.value > 0); // Only show categories with data

  return (
    <ResponsivePie
      data={data}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      innerRadius={0.4}
      padAngle={2}
      cornerRadius={3}
      activeOuterRadiusOffset={4}
      colors={({ data }) => data.color}
      borderWidth={1}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 0.2]]
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={theme.palette.text.primary}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [['darker', 2]]
      }}
      theme={{
        background: 'transparent',
        text: {
          fontSize: 11,
          fill: theme.palette.text.secondary,
        },
        labels: {
          text: {
            fontSize: 11,
            fill: theme.palette.text.primary,
            fontWeight: 600
          }
        }
      }}
      
    />
  );
};

export default UserDistributionChart;