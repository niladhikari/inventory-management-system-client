/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";




const AdminRoute = ({ children }) => {
    const { user, loading, isAdmin } = useAuth();

    const location = useLocation();

    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>

};

export default AdminRoute;