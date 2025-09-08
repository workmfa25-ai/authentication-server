import { Container, Box, Typography, Button } from "@mui/material";
import { useSearchParams, useNavigate } from "react-router-dom";
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import UsersTable from '../Components/tables/UsersTable';

const UsersPage = ({ users, toggleBlock }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate()
  const filter = searchParams.get("filter") || 'all';

  const filteredUsers = users.filter(user => {
    if (filter === "active") return !user.is_blocked;
    if (filter === "blocked") return user.is_blocked;
    if (filter === "admin") return user.is_admin;



    return true; // No filter or unknown filter, show all
  });
  const handleBackNavigation = () => {
    // Navigate back to dashboard or main page
    // You can adjust this path based on your app structure
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
        <Typography variant="h5" gutterBottom>

          {filter !== "undefined" ? `${filter.charAt(0).toUpperCase() + filter.slice(1)}` : ''} Users
        </Typography>
        <UsersTable users={filteredUsers} toggleBlock={toggleBlock} filter={filter} />
      </Box>
    </Container>
  );
};

export default UsersPage;

