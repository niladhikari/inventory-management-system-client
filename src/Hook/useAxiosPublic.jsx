

import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://inventory-management-system-server-six.vercel.app'
})

const useAxiosPublic = () => {
    return axiosSecure;
};

export default useAxiosPublic;