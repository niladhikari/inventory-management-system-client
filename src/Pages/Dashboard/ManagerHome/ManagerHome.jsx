import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { NavLink } from "react-router-dom";
import useProduct from './../../../Hook/useProduct';
import { Button, Typography, Grid } from "@mui/material";

const ManagerHome = () => {
  const [products] = useProduct();
  const totalProducts = products.length;

  return (
    <div>
      <Helmet>
        <title>V Inventory | Manager Home</title>
      </Helmet>
      <SectionTitle
        heading={"Manager Home"}
        subHeading={"Some new"}
      ></SectionTitle>

      {totalProducts > 0 ? (
        <Grid container justifyContent="space-around" alignItems="center">
          <Typography variant="h6" className="text-2xl font-semibold">
            Total {totalProducts} Product{totalProducts !== 1 ? 's' : ''} Added
          </Typography>
          <NavLink to={'/dashboard/addProduct'}>
            <Button variant="contained" color="primary">
              Add Product
            </Button>
          </NavLink>
        </Grid>
      ) : (
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item>
            <NavLink to={'/dashboard/addProduct'}>
              <Button variant="contained" color="primary">
                Add Product
              </Button>
            </NavLink>
          </Grid>
          <Grid item>
            <Typography variant="h6" className="text-2xl font-semibold">
              No products added yet.
            </Typography>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default ManagerHome;
