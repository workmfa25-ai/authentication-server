


// import SessionsTable from '../Components/tables/SessionsTable'
// import { Container, Box, Typography, Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';

// const SessionsPage = ({ allsessions, title, isLoading }) => {
//   const navigate = useNavigate();

//   console.log('SessionsPage props:', { allsessions, title, isLoading }); // Debug log

//   const handleBackNavigation = () => {
//     console.log('Navigating back to dashboard');
//     navigate('/', { replace: true });
//   };

//   return (
//     <Container maxWidth="xl" sx={{ px: { xs: 1, sm: 3 } }}>
      
//       <Button
//         startIcon={<ArrowBackIcon />}
//         onClick={handleBackNavigation}
//         sx={{ mb: 2 }}
//       >
//         Back to Dashboard
//       </Button>

//       <Box
//         sx={{
//           bgcolor: 'background.paper',
//           borderRadius: '12px',
//           boxShadow: 3,
//           p: { xs: 1.5, sm: 3 },
//         }}
//       >
//         <SessionsTable
//           sessions={allsessions}
//           title={title}
//           isLoading={isLoading}
//         />
//       </Box>
//     </Container>
//   );
// }

// export default SessionsPage;

import SessionsTable from '../Components/tables/SessionsTable'
import { Container, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';

const SessionsPage = ({ allsessions, title, isLoading, sessionTotal, fetchSessionsPage, sessionLoading }) => {
  const navigate = useNavigate();

  console.log('SessionsPage props:', { allsessions, title, isLoading }); // Debug log

  const handleBackNavigation = () => {
    console.log('Navigating back to dashboard');
    navigate('/', { replace: true });
  };

  return (
    <Container maxWidth="xl" sx={{ px: { xs: 1, sm: 3 } }}>

      <Button
        startIcon={<ArrowBackIcon />}
        onClick={handleBackNavigation}
        sx={{ mb: 2 }}
      >
        Back to Dashboard
      </Button>

      <Box
        sx={{
          bgcolor: 'background.paper',
          borderRadius: '12px',
          boxShadow: 3,
          p: { xs: 1.5, sm: 3 },
        }}
      >
        <SessionsTable
          sessions={allsessions}
          title={title}
          isLoading={isLoading}
          total={sessionTotal}                // <-- Pass total count for pagination
          fetchpage={fetchSessionsPage}       // <-- Pass fetch function for pagination
          sessionLoading={sessionLoading}     // <-- Pass loading state for pagination
        />
      </Box>
    </Container>
  );
}

export default SessionsPage;