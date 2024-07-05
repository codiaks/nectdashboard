import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import dayjs from 'dayjs';
import { NavLink } from 'react-router-dom';

export default function OrdersList({data, showMore}) {
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Total Items</TableCell>
            <TableCell align="right">Order Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.Order_ID}>
              <TableCell>{dayjs(row.datetime).format("DD MMM YYYY")}</TableCell>
              <TableCell>{row.Customer_Name}</TableCell>
              <TableCell>{row.Items.map((x) => x.Quantity).reduce(
          (acc, curr) => acc + curr,
          0
        )}</TableCell>
              <TableCell align="right">{`$${parseFloat(row.Total_Amount).toFixed(2)}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {showMore && <NavLink color="primary" to="/orders" sx={{ mt: 3 }}>
        See more orders
      </NavLink>}
    </React.Fragment>
  );
}