import { Box, Typography, useTheme } from "@mui/material";
import { ResponsiveHeatMap } from "@nivo/heatmap";

const HourlyActivityHeatMap = ({ allsessions = [] }) => {
    const theme = useTheme();

    const processHeatmapData = () => {
        // Initialize data structure: 7 days x 24 hours
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        const hours = Array.from({ length: 24 }, (_, i) => i);

        // Create matrix to count logins
        const activityMatrix = {};
        days.forEach(day => {
            activityMatrix[day] = {};
            hours.forEach(hour => {
                activityMatrix[day][hour] = 0;
            });
        });

        // Process sessions data
        if (Array.isArray(allsessions)) {
            allsessions.forEach(session => {
                if (!session?.created_at) return;

                const date = new Date(session.created_at);
                const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, etc.
                const hour = date.getHours();

                // Convert to our day format (Monday = 0, Sunday = 6)
                const dayIndex = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
                const dayName = days[dayIndex];

                activityMatrix[dayName][hour]++;
            });
        }

        // Convert to Nivo heatmap format
        return days.map(day => ({
            id: day,
            data: hours.map(hour => ({
                x: `${hour}:00`,
                y: activityMatrix[day][hour]
            }))
        }));
    };

    const heatmapData = processHeatmapData();

    // Calculate max value for color scale
    const maxValue = Math.max(
        ...heatmapData.flatMap(day =>
            day.data.map(hour => hour.y)
        )
    );

    return (
        <Box sx={{ height: '100%', width: '100%' }}>
            <ResponsiveHeatMap
                data={heatmapData}
                margin={{ top: 60, right: 40, bottom: 80, left: 140 }}
                valueFormat=">-.0f"
                axisTop={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: -45,
                    legend: '',
                    legendOffset: 36,
                    tickValues: [
                        '0:00', '2:00', '4:00', '6:00', '8:00', '10:00',
                        '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'
                    ]
                }}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: -45,
                    legend: 'Hours of Day',
                    legendPosition: 'middle',
                    legendOffset: 50,
                    tickValues: [
                        '0:00', '2:00', '4:00', '6:00', '8:00', '10:00',
                        '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'
                    ]
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 15,
                    tickRotation: 0,
                    legend: 'Days of Week',
                    legendPosition: 'middle',
                    legendOffset: -100
                }}
                colors={{
  type: 'sequential',
  colors: [
    '#f7fbff', // very pale blue (almost white)
    '#e3f2fd', // soft blue background
    '#bbdefb', // light blue
    '#90caf9', // medium-light
    '#64b5f6', // medium
    '#42a5f5', // medium-bold
    '#1e88e5'   
  ],
  minValue: 0,
  maxValue: maxValue || 15
}}

                emptyColor={theme.palette.grey[100]}
                borderColor={theme.palette.background.paper}
                borderWidth={2}
                borderRadius={4}
                enableLabels={true}
                labelTextColor={theme.palette.text.primary}
                cellOpacity={0.85}
                cellHoverOpacity={1}
                tooltip={({ cell }) => (
                    <Box sx={{
                        background: theme.palette.background.paper,
                        p: "10px 14px",
                        border: `1px solid ${theme.palette.divider}`,
                        borderRadius: 1,
                        boxShadow: theme.shadows[4]
                    }}>
                        <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
                            {cell.serieId} at {cell.data.x}
                        </Typography>
                        <Typography variant="body2" sx={{ color: theme.palette.primary.main }}>
                            {cell.formattedValue} logins
                        </Typography>
                    </Box>
                )}
                theme={{
                    background: "transparent",
                    text: {
                        fontSize: 11,
                        fill: theme.palette.text.secondary,
                        fontWeight: 500
                    },
                    axis: {
                        domain: { line: { stroke: theme.palette.divider } },
                        legend: {
                            text: {
                                fontSize: 13,
                                fill: theme.palette.text.primary,
                                fontWeight: 600
                            }
                        },
                        ticks: {
                            line: { stroke: theme.palette.divider },
                            text: {
                                fontSize: 10,
                                fill: theme.palette.text.secondary,
                                fontWeight: 500
                            }
                        }
                    },
                    tooltip: {
                        container: {
                            background: theme.palette.background.paper,
                            color: theme.palette.text.primary,
                            fontSize: 12,
                            borderRadius: theme.shape.borderRadius,
                            boxShadow: theme.shadows[4],
                            border: `1px solid ${theme.palette.divider}`
                        }
                    }
                }}
            />
        </Box>
    );
};

export default HourlyActivityHeatMap;
