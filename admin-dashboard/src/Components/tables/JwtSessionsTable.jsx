




// import {
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
//   CircularProgress,
//   Box,
  
// } from "@mui/material";


// function JwtSessionsTable({ title, jwtsessions, onRevokeSession, isLoading }) {
  
  
   

//   if (isLoading) {
//     return (
//       <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <div>
//       <Typography variant="h5" gutterBottom>
//         {title}
//       </Typography>
//       <TableContainer component={Paper} className="custom-table-container sessions-table" 
//       sx={{
//           maxHeight: "60vh", // Set your desired height
//           overflow: 'auto', // Enable scrolling
//           '&::-webkit-scrollbar': {
//             width: '8px',
//           },
//           '&::-webkit-scrollbar-track': {
//             backgroundColor: '#f1f1f1',
//             borderRadius: '4px',
//           },
//           '&::-webkit-scrollbar-thumb': {
//             backgroundColor: '#c1c1c1',
//             borderRadius: '4px',
//             '&:hover': {
//               backgroundColor: '#a8a8a8',
//             },
//           },
//         }}>
//        <Table stickyHeader>
//           <TableHead>
//             <TableRow  >
//               <TableCell>Sr No.</TableCell>
//               <TableCell>Username</TableCell>
//               <TableCell>Login Time</TableCell>
//               <TableCell>Active</TableCell>
//               <TableCell>Action</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {jwtsessions && jwtsessions.length > 0 ? (
//               jwtsessions.map((s, index) => (
//                 <TableRow key={s.id || index}>
//                   <TableCell>{index + 1}</TableCell>
//                   <TableCell>{s.username || 'N/A'}</TableCell>
//                   <TableCell>
//   			{s.created_at
//     				? new Date(s.created_at).toLocaleString("en-IN", {
//         				timeZone: "Asia/Kolkata",
//         				dateStyle: "short",
//         				timeStyle: "medium",
//      				 })
//     				: "N/A"}
// 		</TableCell>

//                   <TableCell className={s.is_active ? "active-status" : "inactive-status"}>
//                     {s.is_active ? "Yes" : "No"}
//                   </TableCell>
//                   <TableCell>
//                     {s.is_active && onRevokeSession && (
//                       <Button
//                         variant="contained"
//                         color="error"
//                         onClick={() => onRevokeSession(s.id)}
//                         className="table-action-button"
//                       >
//                         Revoke
//                       </Button>
//                     )}
//                   </TableCell>
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell colSpan={5} align="center">
//                   No JWT sessions found
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>
      
      
//     </div>
//   );
// }

// export default JwtSessionsTable;
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  CircularProgress,
  Box,
  TablePagination
} from "@mui/material";
import { useState, useEffect } from "react";

function JwtSessionsTable({ title, jwtsessions, onRevokeSession, isLoading, total, fetchpage, jwtLoading }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // FIXED: Use jwtLoading if available, otherwise fall back to isLoading
  const loading = jwtLoading !== undefined ? jwtLoading : isLoading;

  // FIXED: Only call fetchpage when pagination changes and fetchpage exists
  useEffect(() => {
    if (fetchpage) {
      console.log(`JwtSessionsTable: Fetching page ${page} with ${rowsPerPage} rows`);
      fetchpage(page, rowsPerPage);
    }
  }, [page, rowsPerPage]); // Removed fetchpage from dependencies

  const handleChangePage = (event, newPage) => {
    console.log(`JwtSessionsTable: Changing to page ${newPage}`);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    console.log(`JwtSessionsTable: Changing rows per page to ${newRowsPerPage}`);
    setRowsPerPage(newRowsPerPage);
    setPage(0); // Reset to first page
  };

  // Show loading spinner
  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CircularProgress />
        <Typography sx={{ ml: 2 }}>Loading JWT sessions...</Typography>
      </Box>
    );
  }

  console.log("JwtSessionsTable rendering with:", {
    title,
    sessionsCount: jwtsessions?.length || 0,
    total,
    page,
    rowsPerPage,
    hasFetchpage: !!fetchpage
  });

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        {title} {total !== undefined && `(${total} total)`}
      </Typography>

      <TableContainer
        component={Paper}
        className="custom-table-container sessions-table"
        sx={{
          maxHeight: "60vh",
          overflow: 'auto',
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
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Sr No.</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Login Time</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jwtsessions && jwtsessions.length > 0 ? (
              jwtsessions.map((s, index) => (
                <TableRow key={s.id || index}>
                  <TableCell>
                    {/* FIXED: Calculate correct serial number based on pagination */}
                    {fetchpage ? (page * rowsPerPage + index + 1) : (index + 1)}
                  </TableCell>
                  <TableCell>{s.username || 'N/A'}</TableCell>
                  <TableCell>
    			{new Date(s.created_at).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
		  </TableCell>


                  <TableCell className={s.is_active ? "active-status" : "inactive-status"}>
                    {s.is_active ? "Yes" : "No"}
                  </TableCell>
                  <TableCell>
                    {s.is_active && onRevokeSession && (
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => onRevokeSession(s.id)}
                        className="table-action-button"
                        size="small"
                      >
                        Revoke
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  {loading ? "Loading..." : "No JWT sessions found"}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Show pagination only if fetchpage function exists and we have total count */}
      {fetchpage && total !== undefined && total > 0 && (
        <TablePagination
          component="div"
          count={total}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25, 50]}
          labelRowsPerPage="Rows per page:"
          showFirstButton
          showLastButton
          sx={{ mt: 2 }}
        />
      )}
    </div>
  );
}

export default JwtSessionsTable;
