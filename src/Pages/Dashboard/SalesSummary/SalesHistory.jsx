import { useState } from 'react';
import Paper from "@mui/material/Paper";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import Pagination from "@mui/material/Pagination"; // Import Pagination component from Material-UI

// import useAllSales from "../../../Hook/useAllSales";
import useSales from '../../../Hook/useSales';

const PAGE_SIZE = 5; // Number of items per page

const SalesHistory = () => {
  const [sale] = useSales();
  const [currentPage, setCurrentPage] = useState(1);

  const sortedSales = sale.slice().sort((a, b) => {
    const dateA = new Date(a.saleDate).getTime();
    const dateB = new Date(b.saleDate).getTime();
    return dateB - dateA;
  });

  const indexOfLastItem = currentPage * PAGE_SIZE;
  const indexOfFirstItem = indexOfLastItem - PAGE_SIZE;
  const currentSales = sortedSales.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(sortedSales.length / PAGE_SIZE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="overflow-x-auto mt-4 rounded-xl">
      <Paper>
        <Table className="table" sx={{ backgroundColor: "yellow.100" }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: "orange.300" }}>
              <TableCell></TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Selling Date</TableCell>
              <TableCell>Profit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentSales.map((item, index) => (
              <TableRow key={item._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.productName}</TableCell>
                <TableCell>{item.saleDate.substring(0, 10)}</TableCell>
                <TableCell>
                  $ {parseFloat(item.sellingPrice - item.production).toFixed(3)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(event, page) => handlePageChange(page)}
            color="primary"
          />
        </div>
      </Paper>
    </div>
  );
};

export default SalesHistory;

