import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";



const useCarts = () => {
    const axios = useAxiosSecure();
    const {user} = useAuth();
    const { refetch,data : cart = [] } = useQuery({
        queryKey: ['cart',user?.email], 
        queryFn: async()=>{
            const res = await axios.get(`/carts?email=${user.email}`)
            return res.data;
        }
    })

    return [cart,refetch]
};

export default useCarts;