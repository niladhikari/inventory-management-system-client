import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useProduct = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {
      data: product = [],
      isPending: loading,
      refetch,
    } = useQuery({
      queryKey: ["products"],
      queryFn: async () => {
        const res = await axiosSecure.get(`/products/${user?.email}`);
        return res.data;
      },
    });
  
    return [product, loading, refetch];
};

export default useProduct;