import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useSales = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {data: sale = [],isPending: loading,refetch, } = useQuery({
      queryKey: ["sale"],
      queryFn: async () => {
        const res = await axiosSecure.get(`/sale/${user?.email}`);
        return res?.data;
      },
    });
  
    return [sale, loading, refetch];
};

export default useSales;