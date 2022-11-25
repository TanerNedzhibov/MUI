import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const Documentation = () => {

  

  function createData(number, name1, name2, age, email) {
    return {number, name1, name2, age, email}
  }

  const rows = [
    createData(1, 'Taner', 'Nedzhibov', '28', 'taner@gmail.com'),
    createData(2, 'Sibel', 'Nedzhibova', '24', 'sibel@gmail.com'),
    createData(3, 'Ivan', 'Ivanov', '30', 'ivan@gmail.com'),
  ]

  return (
    <div>
      Documentation
      <TableContainer component={Paper} sx={{marginTop: "20px"}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
              <TableRow>
                <TableCell>Acount</TableCell>
                <TableCell align="right">First name</TableCell>
                <TableCell align="right">Last name</TableCell>
                <TableCell align="right">Age</TableCell>
                <TableCell align="right">Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
          {rows.map((row) => (
              <TableRow
                key={row.number}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.number}
                </TableCell>
                <TableCell align="right">{row.name1}</TableCell>
                <TableCell align="right">{row.name2}</TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                 </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
    </div>
  )
}

export default Documentation
