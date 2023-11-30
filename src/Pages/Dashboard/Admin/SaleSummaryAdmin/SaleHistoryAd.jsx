import { useState } from "react";
import Paper from "@mui/material/Paper";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Modal,
  Button,
  TextField,
} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import useUsers from "../../../../Hook/useUsers";

const PAGE_SIZE = 5;

// ... (previous code remains unchanged)

const SaleHistoryAd = () => {
  const [allUser] = useUsers();
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * PAGE_SIZE;
  const indexOfFirstItem = indexOfLastItem - PAGE_SIZE;
  const currentSales = allUser.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(allUser.length / PAGE_SIZE);

  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSend = () => {
    // Implement functionality to handle sending the input value
    // For example, you can add logic to create a shop with the inputValue
    // and update the user's shopName field
    // Here, you can simulate updating the shopName for the first user in currentSales array
    if (currentSales.length > 0) {
      const updatedUser = { ...currentSales[0], shopName: inputValue };
      // Update the user in the currentSales array or make an API call to update the user
      console.log("Creating shop for user:", updatedUser);
    }

    setInputValue(""); // Clear input after sending
    toggleModal(); // Close the modal after sending
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
              {currentSales.some(
                (user) =>
                  !user.shopName &&
                  user.roll !== "admin" &&
                  user.roll !== "manager"
              ) && <TableCell>Create</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {currentSales.map((item, index) => (
              <TableRow key={item._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.shopName || "-"}</TableCell>
                <TableCell>{item.roll}</TableCell>
                {!item.shopName &&
                  item.roll !== "admin" &&
                  item.roll !== "manager" && (
                    <TableCell>
                      <Button onClick={toggleModal}>Create</Button>
                    </TableCell>
                  )}
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

      {/* Modal for creating shop */}
      <Modal open={showModal} onClose={toggleModal}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "2rem",
          }}
        >
          <TextField
            label="Shop Name"
            variant="outlined"
            value={inputValue}
            onChange={handleInputChange}
          />
          <Button variant="contained" onClick={handleSend}>
            Send
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default SaleHistoryAd;
