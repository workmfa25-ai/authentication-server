import { useTheme } from "@mui/material";
import { ResponsiveBar } from '@nivo/bar';

const SessionsHealthChart = ({ sessions }) => {
  const theme = useTheme();

  // Calculate session health data
  const activeCount = sessions.filter(s => s.is_active).length;
  const inactiveCount = sessions.filter(s => !s.is_active).length;
  const expiredCount = sessions.filter(s => s.expired).length;

  const data = [
    {
      status: 'Active',
      count: activeCount,
      color: theme.palette.success?.main || '#4caf50'
    },
    {
      status: 'Inactive',
      count: inactiveCount,
      color: theme.palette.warning?.main || '#ff9800'
    },
    {
      status: 'Expired',
      count: expiredCount,
      color: theme.palette.error.main
    }
  ];

  return (
    <ResponsiveBar
      data={data}
      keys={['count']}
      indexBy="status"
      margin={{ top: 10, right: 20, bottom: 40, left: 40 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={({ data }) => data.color}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 1.6]]
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Session Status',
        legendPosition: 'middle',
        legendOffset: 32
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Count',
        legendPosition: 'middle',
        legendOffset: -30
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: 'color',
        modifiers: [['darker', 1.6]]
      }}
      theme={{
        background: 'transparent',
        text: {
          fontSize: 11,
          fill: theme.palette.text.secondary,
        },
        axis: {
          domain: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 1
            }
          },
          legend: {
            text: {
              fontSize: 12,
              fill: theme.palette.text.primary,
              fontWeight: 600
            }
          },
          ticks: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 1
            },
            text: {
              fontSize: 10,
              fill: theme.palette.text.secondary
            }
          }
        }
      }}
    />
  );
};

export default SessionsHealthChart;