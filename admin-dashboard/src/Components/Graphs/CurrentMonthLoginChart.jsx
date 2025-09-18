// import { Box, Typography, useTheme } from "@mui/material";
// import { ResponsiveLine } from "@nivo/line";
// import { prepareCurrentMonthData } from "../../utils/chartUtils";

// const CurrentMonthLoginChart = ({ data, monthTitle }) => {
//     const theme = useTheme();
//     const daysInMonth = data.length;

//     // Use chart utility function 
//     const nivoData = prepareCurrentMonthData(data, theme);

//     /* Original code - commented out in favor of the utility function
//     // Build Nivo series
//     // Clone data objects to avoid mutation by Nivo
//     const nivoData = [
//         {
//             id: "logins",
//             color: theme.palette.primary.main,
//             data: data.map((d) => ({
//                 x: d.dayNumber,
//                 y: d.logins,
//                 label: d.dateLabel
//             })).map(obj => ({ ...obj }))
//         }
//     ];
//     */

//     // Keep ticks readable (≈7–8 ticks max)
   
//     const tickValues = Array.from({ length: daysInMonth }, (_, i) => i + 1);
       

//     const today = new Date().getDate();

//     return (
//         <ResponsiveLine
//             data={nivoData}
//             margin={{ top: 20, right: 30, bottom: 60, left: 60 }}
//             xScale={{ type: "linear", min: 1, max: daysInMonth }}
//             yScale={{ type: "linear", min: "auto", max: "auto" }}
//             curve="monotoneX"
//             axisTop={null}
//             axisRight={null}
//             axisBottom={{
//                 tickSize: 5,
//                 tickPadding: 10,
//                 legend: `Days in ${monthTitle}`,
//                 legendOffset: 46,
//                 legendPosition: "middle",
//                 tickValues,
//                 format: (v) => `${v}`
//             }}
//             axisLeft={{
//                 tickSize: 5,
//                 tickPadding: 10,
//                 legend: "User Logins",
//                 legendOffset: -50,
//                 legendPosition: "middle"
//             }}
//             pointSize={8}
//             pointColor={theme.palette.background.paper}
//             pointBorderWidth={3}
//             pointBorderColor={theme.palette.primary.main}
//             lineWidth={3}
//             enableArea={false}
//             enablePoints={true}
//             enableGridX={true}
//             enableGridY={true}
//             useMesh={true}
//             colors={[theme.palette.primary.main]}
//             gridXValues={tickValues}
//             theme={{
//                 background: "transparent",
//                 text: { fontSize: 12, fill: theme.palette.text.secondary },
//                 axis: {
//                     domain: { line: { stroke: theme.palette.divider } },
//                     legend: { text: { fontSize: 14, fill: theme.palette.text.primary, fontWeight: 600 } },
//                     ticks: {
//                         line: { stroke: theme.palette.divider },
//                         text: { fontSize: 11, fill: theme.palette.text.secondary }
//                     }
//                 },
//                 grid: { line: { stroke: theme.palette.divider, strokeDasharray: "4 4" } },
//                 tooltip: {
//                     container: {
//                         background: theme.palette.background.paper,
//                         color: theme.palette.text.primary,
//                         fontSize: 12,
//                         borderRadius: theme.shape.borderRadius,
//                         boxShadow: theme.shadows[4],
//                         border: `1px solid ${theme.palette.divider}`
//                     }
//                 }
//             }}
//             markers={[
//                 {
//                     axis: "x",
//                     value: today,
//                     lineStyle: { stroke: theme.palette.primary.light, strokeWidth: 2, strokeDasharray: "6 6" }
//                 }
//             ]}
//             tooltip={({ point }) => (
//                 <Box sx={{ background: theme.palette.background.paper, p: "9px 12px", border: `1px solid ${theme.palette.divider}`, borderRadius: 1, boxShadow: theme.shadows[4] }}>
//                     <Typography variant="body2" sx={{ fontWeight: 600 }}>
//                         {point.data.label}
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: theme.palette.primary.main }}>
//                         Logins: {point.data.y}
//                     </Typography>
//                 </Box>
//             )}
//         />
//     );
// };

// export default CurrentMonthLoginChart;


import { Box, Typography, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";

const CurrentMonthLoginChart = ({ data, monthTitle }) => {
    const theme = useTheme();
    const daysInMonth = data.length;

    // Build Nivo series
    const nivoData = [
        {
            id: "logins",
            color: theme.palette.primary.main,
            data: data.map((d) => ({
                x: d.dayNumber, // 1..daysInMonth
                y: d.logins,
                label: d.dateLabel
            }))
        }
    ];

    // Keep ticks readable (≈7–8 ticks max)
   
    const tickValues = Array.from({ length: daysInMonth }, (_, i) => i + 1);
       

    const today = new Date().getDate();

    return (
        <ResponsiveLine
            data={nivoData}
            margin={{ top: 20, right: 30, bottom: 60, left: 60 }}
            xScale={{ type: "linear", min: 1, max: daysInMonth }}
            yScale={{ type: "linear", min: "auto", max: "auto" }}
            curve="monotoneX"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 10,
                legend: `Days in ${monthTitle}`,
                legendOffset: 46,
                legendPosition: "middle",
                tickValues,
                format: (v) => `${v}`
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 10,
                legend: "User Logins",
                legendOffset: -50,
                legendPosition: "middle"
            }}
            pointSize={8}
            pointColor={theme.palette.background.paper}
            pointBorderWidth={3}
            pointBorderColor={theme.palette.primary.main}
            lineWidth={3}
            enableArea={false}
            enablePoints={true}
            enableGridX={true}
            enableGridY={true}
            useMesh={true}
            colors={[theme.palette.primary.main]}
            gridXValues={tickValues}
            theme={{
                background: "transparent",
                text: { fontSize: 12, fill: theme.palette.text.secondary },
                axis: {
                    domain: { line: { stroke: theme.palette.divider } },
                    legend: { text: { fontSize: 14, fill: theme.palette.text.primary, fontWeight: 600 } },
                    ticks: {
                        line: { stroke: theme.palette.divider },
                        text: { fontSize: 11, fill: theme.palette.text.secondary }
                    }
                },
                grid: { line: { stroke: theme.palette.divider, strokeDasharray: "4 4" } },
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
            markers={[
                {
                    axis: "x",
                    value: today,
                    lineStyle: { stroke: theme.palette.primary.light, strokeWidth: 2, strokeDasharray: "6 6" }
                }
            ]}
            tooltip={({ point }) => (
                <Box sx={{ background: theme.palette.background.paper, p: "9px 12px", border: `1px solid ${theme.palette.divider}`, borderRadius: 1, boxShadow: theme.shadows[4] }}>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {point.data.label}
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.primary.main }}>
                        Logins: {point.data.y}
                    </Typography>
                </Box>
            )}
        />
    );
};

export default CurrentMonthLoginChart;
