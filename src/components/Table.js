import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import MoreVertIcon from "@mui/icons-material/MoreVert";


export default function CustomTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>  
            {props.columns.map((col, i) => {
               return (
                <TableCell 
                align={i === props.columns.length - 1 ? "right" : "left"}
                >
                {col}
                </TableCell>
               )
               })} 
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row, index) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row[props.columns.at(0)]}
              </TableCell>
              <TableCell>{row[props.columns.at(1)]}</TableCell>
              <TableCell align="right">
                <button onClick={() => {
                  console.log("clicked", row.MakeId);
                  props.removeMake(index)}
                  }
                  >X</button>
               
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}