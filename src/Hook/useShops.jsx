import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useShops = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {data: shop = [],isPending: loading,refetch, } = useQuery({
      queryKey: ["shop"],
      queryFn: async () => {
        const res = await axiosSecure.get(`/shops/${user?.email}`);
        return res?.data;
      },
    });
  
    return [shop, loading, refetch];
};

export default useShops;

