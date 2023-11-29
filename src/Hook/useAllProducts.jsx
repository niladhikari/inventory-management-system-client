import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";



const useAllProducts = () => {
    const axiosSecure = useAxiosSecure();
    const {data: allProducts = [],isPending: loading,refetch, } = useQuery({
      queryKey: ["productSale"],
      queryFn: async () => {
        const res = await axiosSecure.get(`/productSale`);
        return res?.data;
      },
    });
  
    return [allProducts, loading, refetch];
};

export default useAllProducts;