import {
  
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';

const UsersTable = ({ users, toggleBlock, filter }) => {
  const navigate = useNavigate();

  const handleBlockClick = (event, username, isBlocked) => {
    event.stopPropagation(); 
    toggleBlock(username, !isBlocked);
  };

  const handleUserClick = (userId) => {
    // Use replace: false to maintain proper navigation history
    navigate(`/users/${userId}?filter=${filter}` , {replace: true});
  };

  return (
    <div>
     <TableContainer component={Paper} className="custom-table-container users-table" sx={{
          maxHeight:"60vh", // Set your desired height
          overflow: 'auto', // Enable scrolling
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#f1f1f1',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#c1c1c1',
            borderRadius: '4px',
            '&:hover': {
              backgroundColor: '#a8a8a8',
            },
          },
        }}>
       <Table stickyHeader>
                 <TableHead>
                   <TableRow  >
              <TableCell>Sr No.</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell>Blocked</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users && users.length > 0 ? (
              users.map((u , index) => (
                <TableRow 
                  key={u.id} 
                  onClick={() => handleUserClick(u.id)} 
                  sx={{ 
                    cursor: 'pointer',
                    '&:hover': { backgroundColor: 'action.hover' } 
                  }}
                >
                  <TableCell component="th" scope="row">{index+1}</TableCell>
                  <TableCell>{u.username}</TableCell>
                  <TableCell>{u.is_admin ? "Yes" : "No"}</TableCell>
                  <TableCell className={u.is_blocked ? "inactive-status" : "active-status"}>
                    {u.is_blocked ? "Yes" : "No"}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color={u.is_blocked ? "success" : "error"}
                      onClick={(event) => handleBlockClick(event, u.username, u.is_blocked)}
                      className="table-action-button"
                    >
                      {u.is_blocked ? "Unblock" : "Block"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No users found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UsersTable;