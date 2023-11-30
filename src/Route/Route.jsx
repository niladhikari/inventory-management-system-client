import {  createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "./../Pages/Login/Login";
import SignUp from "./../Pages/SignUp/SignUp";
import CreateShop from "../Pages/CreateShop/CreateShop";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import ManagerHome from './../Pages/Dashboard/ManagerHome/ManagerHome';
import AddProduct from './../Pages/Dashboard/AddProduct/AddProduct';
import ProductCollection from './../Pages/Dashboard/ProductCollection/ProductCollection';
import UpdateProduct from './../Pages/Dashboard/UpdateProduct/UpdateProduct';
import Subscription from './../Pages/Dashboard/Subscription/Subscription';
import Payment from './../Pages/Dashboard/Payment/Payment';
import SalesCollection from "../Pages/Dashboard/SalesCollection/SalesCollection";
import AdminHome from './../Pages/Dashboard/Admin/AdminHome/AdminHome';
import ManageShop from './../Pages/Dashboard/Admin/ManageShop/ManageShop';
import Checkout from "../Pages/Dashboard/Checkout/Checkout";
import AdminRoute from "./AdminRoute";
import Error from "../Pages/Error/Error";
import SalesSummary from "../Pages/Dashboard/SalesSummary/SalesSummary";
import SaleSummaryAdmin from "../Pages/Dashboard/Admin/SaleSummaryAdmin/SaleSummaryAdmin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/createStore",
        element: (
          <PrivateRoute>
            <CreateShop></CreateShop>
          </PrivateRoute>
        ),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        // manager routes
        path: "managerHome",
        element: <ManagerHome></ManagerHome>,
      },
      {
        path: "addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "productCollection",
        element: <ProductCollection></ProductCollection>,
      },
      {
        path: "updateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({params}) => fetch(`https://inventory-management-system-server-six.vercel.app/myProducts/${params.id}`)
      },
      {
        path: "subscription",
        element: <Subscription></Subscription>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "salesCollection",
        element: <SalesCollection></SalesCollection>,
      },
      {
        path: "checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "salesSummary",
        element: <SalesSummary></SalesSummary>,
      },



      // for admin route
      {
        path: "AdminHome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "manageShop",
        element: <AdminRoute><ManageShop></ManageShop></AdminRoute>,
      },
      {
        path: "adminSale",
        element: <AdminRoute><SaleSummaryAdmin></SaleSummaryAdmin></AdminRoute>,
      },
    ],
   
  },
]);

export default router;
