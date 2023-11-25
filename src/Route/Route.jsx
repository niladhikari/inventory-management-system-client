import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from './../Pages/Login/Login';
import SignUp from './../Pages/SignUp/SignUp';
import CreateShop from "../Pages/CreateShop/CreateShop";
import PrivateRoute from './PrivateRoute';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/createStore",
        element: <PrivateRoute><CreateShop></CreateShop></PrivateRoute>
      },
      {
        path: "/",
        element: <Home></Home>,
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
]);

export default router;
