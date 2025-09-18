// import { useTheme } from "@mui/material";
// import { ResponsiveBar } from '@nivo/bar';
// import { prepareSessionsHealthData } from "../../utils/chartUtils";

// const SessionsHealthChart = ({ sessions }) => {
//   const theme = useTheme();

//   // Use chart utility function
//   const data = prepareSessionsHealthData(sessions, theme);

//   /* Original code - commented out in favor of the utility function
//   // Calculate session health data
//   const activeCount = sessions.filter(s => s.is_active).length;
//   const inactiveCount = sessions.filter(s => !s.is_active).length;
//   const expiredCount = sessions.filter(s => s.expired).length;

//   // Clone data objects to avoid mutation by Nivo
//   const data = [
//     {
//       status: 'Active',
//       count: activeCount,
//       color: theme.palette.success?.main || '#4caf50'
//     },
//     {
//       status: 'Inactive',
//       count: inactiveCount,
//       color: theme.palette.warning?.main || '#ff9800'
//     },
//     {
//       status: 'Expired',
//       count: expiredCount,
//       color: theme.palette.error.main
//     }
//   ].map(obj => ({ ...obj }));
//   */

//   return (
//     <ResponsiveBar
//       data={data}
//       keys={['count']}
//       indexBy="status"
//       margin={{ top: 10, right: 20, bottom: 40, left: 40 }}
//       padding={0.3}
//       valueScale={{ type: 'linear' }}
//       indexScale={{ type: 'band', round: true }}
//       colors={({ data }) => data.color}
//       borderColor={{
//         from: 'color',
//         modifiers: [['darker', 1.6]]
//       }}
//       axisTop={null}
//       axisRight={null}
//       axisBottom={{
//         tickSize: 5,
//         tickPadding: 5,
//         tickRotation: 0,
//         legend: 'Session Status',
//         legendPosition: 'middle',
//         legendOffset: 32
//       }}
//       axisLeft={{
//         tickSize: 5,
//         tickPadding: 5,
//         tickRotation: 0,
//         legend: 'Count',
//         legendPosition: 'middle',
//         legendOffset: -30
//       }}
//       labelSkipWidth={12}
//       labelSkipHeight={12}
//       labelTextColor={{
//         from: 'color',
//         modifiers: [['darker', 1.6]]
//       }}
//       theme={{
//         background: 'transparent',
//         text: {
//           fontSize: 11,
//           fill: theme.palette.text.secondary,
//         },
//         axis: {
//           domain: {
//             line: {
//               stroke: theme.palette.divider,
//               strokeWidth: 1
//             }
//           },
//           legend: {
//             text: {
//               fontSize: 12,
//               fill: theme.palette.text.primary,
//               fontWeight: 600
//             }
//           },
//           ticks: {
//             line: {
//               stroke: theme.palette.divider,
//               strokeWidth: 1
//             },
//             text: {
//               fontSize: 10,
//               fill: theme.palette.text.secondary
//             }
//           }
//         }
//       }}
//     />
//   );
// };

// export default SessionsHealthChart;


import { Box, Typography, useTheme } from "@mui/material";
import { ResponsiveBar } from '@nivo/bar';
import { memo, useMemo } from 'react';

const SessionsHealthChartBase = ({ sessions }) => {
  const theme = useTheme();

  // Memoize session status calculations
  const sessionCounts = useMemo(() => {
    if (!Array.isArray(sessions) || sessions.length === 0) {
      return { active: 0, inactive: 0, expired: 0 };
    }

    const now = new Date();
    const fifteenMinutesAgo = new Date(now - 15 * 60 * 1000);

    return sessions.reduce((acc, session) => {
      if (!session.is_active) {
        acc.inactive++;
      } else {
        const sessionDate = new Date(session.created_at);
        acc[sessionDate > fifteenMinutesAgo ? 'active' : 'expired']++;
      }
      return acc;
    }, { active: 0, inactive: 0, expired: 0 });
  }, [sessions]);

  if (!Array.isArray(sessions) || sessions.length === 0) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height={400}>
        <Typography variant="body1" color="text.secondary">
          No session data available
        </Typography>
      </Box>
    );
  }

  const activeCount = sessionCounts.active;
  const expiredCount = sessionCounts.expired;
  const inactiveCount = sessionCounts.inactive;

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

const SessionsHealthChart = memo(SessionsHealthChartBase);
SessionsHealthChart.displayName = 'SessionsHealthChart';

export default SessionsHealthChart;