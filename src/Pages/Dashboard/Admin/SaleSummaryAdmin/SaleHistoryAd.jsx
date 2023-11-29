import { useState } from "react";
import Paper from "@mui/material/Paper";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import useUsers from "../../../../Hook/useUsers";
const PAGE_SIZE = 5;

const SaleHistoryAd = () => {
  const [allUser] = useUsers();
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * PAGE_SIZE;
  const indexOfFirstItem = indexOfLastItem - PAGE_SIZE;
  const currentSales = allUser.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(allUser.length / PAGE_SIZE);

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
              <TableCell>User Name</TableCell>
              <TableCell>User Email</TableCell>
              <TableCell>Shop Name</TableCell>
              <TableCell>Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentSales.map((item, index) => (
              <TableRow key={item._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.shopName}</TableCell>
                <TableCell>{item.roll}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
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

export default SaleHistoryAd;
