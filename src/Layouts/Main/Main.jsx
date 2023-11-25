import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navber/Navbar";
import Footer from "../../Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
        <div className="min-h-[calc(100vh-320px)]">
          <Outlet></Outlet>
        </div>
        
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
