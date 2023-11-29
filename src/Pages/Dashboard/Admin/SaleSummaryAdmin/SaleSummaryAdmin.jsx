import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import useAllProducts from './../../../../Hook/useAllProducts';
import useAllSales from "../../../../Hook/useAllSales";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { GiReceiveMoney } from "react-icons/gi";
import { FaMoneyBillAlt, FaWallet } from "react-icons/fa";
// import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

const SaleSummaryAdmin = () => {
    const [allProducts] = useAllProducts();
    console.log(allProducts);
    const [allSales] = useAllSales();

    const totalSales = allSales.reduce((total, item) => total + item.sellingPrice,0);

  return (
    <div>
      <Helmet>
        <title>V Inventory | Sales Summary</title>
      </Helmet>
      <SectionTitle
        heading={"Sales Summary"}
        subHeading={"All the Sales Summary"}
      />

<h2 className="text-center text-2xl font-bold my-10">Sales View</h2>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        mt={6}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            sx={{
              background: "linear-gradient(to right, #8A2BE2, #FF69B4)",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.1)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <GiReceiveMoney className="text-4xl text-white" />
            <div>
              <div className="text-3xl font-bold">
                {parseFloat(totalSales).toFixed(2)}
              </div>
              <div className="text-2xl text-black">Total Sale</div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            sx={{
              background: "linear-gradient(to right, #D3A256, #FDE8C0)",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.1)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FaWallet className="text-4xl text-white" />
            <div>
              <div className="text-3xl font-bold">{allProducts.length}</div>
              <div className="text-2xl text-black">Total Product</div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            sx={{
              background: "linear-gradient(to right, #FE4880, #FECDE9)",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.1)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FaMoneyBillAlt className="text-4xl text-white" />
            <div>
              <div className="text-3xl font-bold">{'totalProfit'}</div>
              <div className="text-2xl text-black">Total Profit</div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default SaleSummaryAdmin;
