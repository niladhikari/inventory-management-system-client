import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";

const useAuth = () => {
    const all = useContext(AuthContext)
    return all;
};

export default useAuth;