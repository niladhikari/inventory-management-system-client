import { FaHome, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import { Helmet } from "react-helmet-async";
import useShops from "../../Hook/useShops";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import useAuth from "../../Hook/useAuth";
import { MdStore } from "react-icons/md";
import { FcSalesPerformance } from "react-icons/fc";


const Dashboard = () => {
  const { isAdmin } = useAuth();
  const [shop] = useShops();

  return (
    <div>
      <div className="lg:flex bg-[#F6F6F6]">
        <Helmet>
          <title>V Inventory | Dashboard</title>
        </Helmet>
        {/* dashboard side bar */}
        <div className="lg:w-64 min-h-screen bg-blue-200 text-black">
          <h1 className="p-6">
            <img className="w-28 lg:w-full" src={shop.logo} alt="" />
          </h1>
          <ul className="menu p-4">
            {isAdmin == "admin" ? (
              <>
                <li>
                  <NavLink to="/dashboard/AdminHome">
                    <FaHome></FaHome>
                    Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageShop">
                    <MdStore />
                    Manage Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/adminSale">
                    <MdStore />
                    Sale Summary
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/managerHome">
                    <FaHome></FaHome>
                    Manager Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/productCollection">
                    <FaShoppingCart></FaShoppingCart>
                    Product Collection
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/salesCollection">
                    <FaMoneyCheckDollar />
                    Sales Collection
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/salesSummary">
                  <FcSalesPerformance />
                    Sales Summary
                  </NavLink>
                </li>
              </>
            )}
            <div className="divider font-bold text-black"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome>
                Home
              </NavLink>
            </li>
            <li>
              <button></button>
            </li>
          </ul>
        </div>
        {/* dashboard content */}
        <div className="flex-1 p-8">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
