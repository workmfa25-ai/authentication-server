

// import { Container, Box } from "@mui/material";

// import SessionsTable from "../Components/tables/SessionsTable";
// import JwtSessionsTable from "../Components/tables/JwtSessionsTable";
// import SessionsHealthChart from '../Components/Graphs/SessionsHealthChart';
// import UserDistributionChart from '../Components/Graphs/UserDistributionChart';
// import GraphCard from '../Components/global/GraphCard';
// import WeeklyLoginChart from '../Components/Graphs/WeeklyLoginChart';
// import QuickViewCard from '../Components/global/QuickViewCard';
// import CurrentMonthLoginChart from "../Components/Graphs/CurrentMonthLoginChart";

// // This component now receives all its data and functions via props
// const DashboardPage = ({
//   users = [],
//   recentsessions = [],
//   allsessions = [],
//   recentJwtSessions = [],
//   allJwtSessions = [],
//   handleRevokeSession,
//   isLoading,
//   weeklyLogindata,
//   currentMonthLogindata
// }) => {
//   // Properly destructure the currentMonthLogindata object
//   const { data: monthlyData, monthTitle } = currentMonthLogindata || { data: [], monthTitle: 'Current Month' };

//   return (
//     <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
//       <Box
//         sx={{
//           bgcolor: 'background.paper',
//           borderRadius: '16px',
//           boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
//           p: { xs: 2, sm: 3, md: 4 },
//           border: '1px solid',
//           borderColor: 'divider',
//         }}
//       >
//         {/* Top Metrics Row */}
//         <Box
//           display="grid"
//           gridTemplateColumns={{
//             xs: 'repeat(2, 1fr)',
//             sm: 'repeat(3, 1fr)',
//             lg: 'repeat(6, 1fr)'
//           }}
//           gap={{ xs: 2, sm: 3 }}
//           mb={4}
//         >
//           <QuickViewCard Title="Total Users" Value={users?.length || 0} compact={true} filterKey="all" />
//           <QuickViewCard Title="Active Users" Value={users?.filter(u => !u.is_blocked)?.length || 0} compact={true} filterKey="active" />
//           <QuickViewCard Title="Active Sessions" Value={allsessions?.filter(s => s.is_active)?.length || 0} compact={true} filterKey="sessions" />
//           <QuickViewCard Title="Blocked Users" Value={users?.filter(u => u.is_blocked)?.length || 0} compact={true} color="error" filterKey="blocked" />
//           <QuickViewCard Title="Admin Users" Value={users?.filter(u => u.is_admin)?.length || 0} compact={true} color="secondary" filterKey="admin" />
//           <QuickViewCard Title="JWT Sessions" Value={allJwtSessions?.length || 0} compact={true} color="info" filterKey="jwt" />
//         </Box>

//         {/* Monthly Login Chart - Full Width */}
//         <Box sx={{ mb: 4 }}>
//           <GraphCard
//             title="Monthly Login Trends"
//             chart={<CurrentMonthLoginChart data={monthlyData} monthTitle={monthTitle} />}
//             height={320}
//           />
//         </Box>

//         {/* Weekly Charts Row */}
//         <Box
//           display="grid"
//           gridTemplateColumns={{ xs: '1fr', lg: '2fr 1fr' }}
//           gap={{ xs: 3, sm: 4 }}
//           mb={4}
//         >
//           {/* Weekly Login Chart - Takes 2/3 space on large screens */}
//           <GraphCard
//             title='Weekly User Logins'
//             chart={<WeeklyLoginChart data={weeklyLogindata} />}
//             height={300}
//           />

//           {/* Right Column - Stacked Charts */}
//           <Box display="grid" gridTemplateRows="1fr 1fr" gap={{ xs: 2, sm: 3 }}>
//             <GraphCard
//               title='Session Health'
//               chart={<SessionsHealthChart sessions={allsessions} />}
//               height={140}
//             />
//             <GraphCard
//               title='User Distribution'
//               chart={<UserDistributionChart users={users} />}
//               height={140}
//             />
//           </Box>
//         </Box>

//         {/* Tables Section */}
//         <Box
//           display="grid"
//           gridTemplateColumns={{ xs: '1fr', xl: '1fr 1fr' }}
//           gap={{ xs: 3, sm: 4 }}
//         >
//           <SessionsTable
//             sessions={recentsessions}
//             title="Recent Sessions"
//             isLoading={isLoading}
//           />
//           <JwtSessionsTable
//             title="Recent JWT Sessions"
//             jwtsessions={recentJwtSessions}
//             onRevokeSession={handleRevokeSession}
//             isLoading={isLoading}
//           />
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default DashboardPage;




import { Container, Box } from "@mui/material";

import SessionsTable from "../Components/tables/SessionsTable";
import JwtSessionsTable from "../Components/tables/JwtSessionsTable";
import SessionsHealthChart from '../Components/Graphs/SessionsHealthChart';
import UserDistributionChart from '../Components/Graphs/UserDistributionChart';
import GraphCard from '../Components/global/GraphCard';
import WeeklyLoginChart from '../Components/Graphs/WeeklyLoginChart';
import QuickViewCard from '../Components/global/QuickViewCard';
import CurrentMonthLoginChart from "../Components/Graphs/CurrentMonthLoginChart";

// This component now receives all its data and functions via props
const DashboardPage = ({
  users = [],
  recentsessions = [],
  allsessions = [],
  recentJwtSessions = [],
  allJwtSessions = [],
  handleRevokeSession,
  isLoading,
  weeklyLogindata,
  fetchJwtSessions,
  fetchSessions,
  jwtSessiontotal,
  currentMonthLogindata
  





}) => {
  // Use currentMonthLogindata prop directly
  const monthlyData = currentMonthLogindata?.data || [];
  const monthTitle = currentMonthLogindata?.monthTitle || 'Current Month';

  return (
    <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
      <Box
        sx={{
          bgcolor: 'background.paper',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          p: { xs: 2, sm: 3, md: 4 },
          border: '1px solid',
          borderColor: 'divider',
        }}
      >
        {/* Top Metrics Row */}
        <Box
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(2, 1fr)',
            sm: 'repeat(3, 1fr)',
            lg: 'repeat(6, 1fr)'
          }}
          gap={{ xs: 2, sm: 3 }}
          mb={4}
        >
          <QuickViewCard Title="Total Users" Value={users?.length || 0} compact={true} filterKey="all" />
          <QuickViewCard Title="Active Users" Value={users?.filter(u => !u.is_blocked)?.length || 0} compact={true} filterKey="active" />
          <QuickViewCard Title="Active Sessions" Value={allsessions?.filter(s => s.is_active)?.length || 0} compact={true} filterKey="sessions" />
          <QuickViewCard Title="Blocked Users" Value={users?.filter(u => u.is_blocked)?.length || 0} compact={true} color="error" filterKey="blocked" />
          <QuickViewCard Title="Admin Users" Value={users?.filter(u => u.is_admin)?.length || 0} compact={true} color="secondary" filterKey="admin" />
          <QuickViewCard Title="JWT Sessions" Value={jwtSessiontotal || 0} compact={true} color="info" filterKey="jwt" />
        </Box>

        {/* Monthly Login Chart - Full Width */}
        <Box sx={{ mb: 4 }}>
          <GraphCard
            title="Monthly JWT Login Trends"
            chart={<CurrentMonthLoginChart
              data={monthlyData}
              monthTitle={monthTitle}
            
              source="jwt"
            />}
            height={320}
          />
        </Box>

        {/* Weekly Charts Row */}
        <Box
          display="grid"
          gridTemplateColumns={{ xs: '1fr', lg: '2fr 1fr' }}
          gap={{ xs: 3, sm: 4 }}
          mb={4}
        >
          {/* Weekly Login Chart - Takes 2/3 space on large screens */}
          <GraphCard
            title='Weekly User Logins'
            chart={<WeeklyLoginChart data={weeklyLogindata} />}
            height={300}
          />

          {/* Right Column - Stacked Charts */}
          <Box display="grid" gridTemplateRows="1fr 1fr" gap={{ xs: 2, sm: 3 }}>
            <GraphCard
              title='Session Health'
              chart={<SessionsHealthChart sessions={allsessions} />}
              height={140}
            />
            <GraphCard
              title='User Distribution'
              chart={<UserDistributionChart users={users} />}
              height={140}
            />
          </Box>
        </Box>

        {/* Tables Section */}
        <Box
          display="grid"
          gridTemplateColumns={{ xs: '1fr', xl: '1fr 1fr' }}
          gap={{ xs: 3, sm: 4 }}
        >
          <SessionsTable
            sessions={recentsessions}
            title="Recent Sessions"
            isLoading={isLoading}
            total={recentsessions?.length || 0}
            fetchpage={fetchSessions}


          />
          <JwtSessionsTable
            title="Recent JWT Sessions"
            jwtsessions={recentJwtSessions}
            onRevokeSession={handleRevokeSession}
            isLoading={isLoading}
            total={recentJwtSessions?.length || 0}
            fetchpage={fetchJwtSessions}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default DashboardPage;