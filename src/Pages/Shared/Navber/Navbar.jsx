import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../../../Hook/useAuth";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const router = useNavigate();
  const { user, logOut, tirger, setTriger,changeDashboardAndShop } = useAuth();


 

  // useEffect(() => {
  //   async function fetchDataFromServer() {
  //     try {
  //       const response = await fetch(
  //         `http://localhost:5000/singleUser/${user?.email}`
  //       );
  //       const data = await response.json();
  //       setChangeDashboardAndShop(data.crateShop);
  //       setIsAdmin(data.roll);
  //     } catch (error) {
  //       console.log("Error fetching data:", error);
  //     }
  //   }
  //   fetchDataFromServer();
  // }, [setIsAdmin, user]);


 

  useEffect(() => {
    if (tirger) {
      router("/dashboard");
      setTriger(false);
    }
  }, [tirger]);

  const links = (
    <>
      <>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/signup"}>SignUp</NavLink>
        </li>
        <li>
          <NavLink to={"/createStore"}>Create-Store</NavLink>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=sL15VM-xN60"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch Demo
          </a>
        </li>
      </>
    </>
  );

  const loggedInLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      {user && (
        <li>
          {changeDashboardAndShop ? (
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          ) : (
            <NavLink to={"/createStore"}>Create-Store</NavLink>
          )}
        </li>
      )}
      <li>
        <a
          href="https://www.youtube.com/watch?v=sL15VM-xN60"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch Demo
        </a>
      </li>
    </>
  );

  const handleTheme = (event) => {
    if (event.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleLogout = () => {
    logOut()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="navbar fixed z-20 opacity-60 bg-[#15151580] max-w-7xl mx-auto">
        <div className="navbar justify-between  ">
          <div className="navbar-start mt-3">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content  font-bold mt-3 z-[300] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {user ? loggedInLinks : links}
              </ul>
            </div>
            <div className="grid space-y-0">
              <img
                className="w-36"
                src="https://i.ibb.co/5vQFvYb/inventroy-removebg-preview.png"
                alt=""
              />
            </div>
          </div>
          <div className="navbar-center hidden md:flex">
            <ul className="menu font-bold menu-horizontal px-1">
              {user ? loggedInLinks : links}
            </ul>
          </div>

          {/* navbar light  */}
          <div className="navbar-end">
            <div className="flex items-center gap-3">
              <div className="pt-2">
                <label className="swap swap-rotate">
                  {/* this hidden checkbox controls the state */}
                  <input
                    type="checkbox"
                    checked={theme === "light" ? false : true}
                    onChange={handleTheme}
                  />

                  {/* sun icon */}
                  <svg
                    className="swap-on fill-current w-10 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  {/* moon icon */}
                  <svg
                    className="swap-off fill-current w-10 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              </div>

              <div>
                {user?.email ? (
                  <div className="dropdown dropdown-end">
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img
                          className="bg-slate-500 "
                          src={user.photoURL}
                          alt={user.displayName}
                        />
                      </div>
                    </label>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <button className="btn btn-sm ">
                          {user.displayName}
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={handleLogout}
                          className="btn btn-sm  btn-ghost font-bold text-red-500"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <Link to="/login">
                    <button className="btn  p-2 bg-gray-300 text-center font-bold text-green-800">
                      Login
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
