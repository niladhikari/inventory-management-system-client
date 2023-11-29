/* eslint-disable react/prop-types */

import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const SalesHistory = ({ item }) => {
  const { productName, sellingPrice, production, saleDate } = item;
  const profit = (parseFloat(sellingPrice) - parseFloat(production)).toFixed(2);
  const timestamp = saleDate;
  const dateObject = new Date(timestamp);
  const formattedDate = dateObject.toISOString().split("T")[0];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell>Profit</TableCell>
            <TableCell>Sale Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{productName}</TableCell>
            <TableCell>{profit}</TableCell>
            <TableCell>{formattedDate}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SalesHistory;

