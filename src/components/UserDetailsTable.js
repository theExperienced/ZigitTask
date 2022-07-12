import * as React from 'react';
import { useSelector } from 'react-redux';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const UserDetailsTable = () => {
  const personalDetails = useSelector((state) => state.user.personalDetails);

  return (
    <Paper sx={{ padding: 3 }} elevation={4}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='center'>Name</TableCell>
              <TableCell align='center'>Team</TableCell>
              <TableCell align='center'>Joined At</TableCell>
              <TableCell align='center'>Avatar</TableCell>
            </TableRow>
          </TableHead>
          {personalDetails && (
            <TableBody>
              {Object.keys(personalDetails).length && (
                <TableRow>
                  <TableCell align='center'>{personalDetails.name}</TableCell>
                  <TableCell align='center'>{personalDetails.Team}</TableCell>
                  <TableCell align='center'>
                    {personalDetails.joinedAt}
                  </TableCell>
                  <TableCell align='center'>
                    <img src={personalDetails.avatar} width='60px' />
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default UserDetailsTable;
