import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";



const useAllSales = () => {
    const axiosSecure = useAxiosSecure();
    const {data: allSales = [],isPending: loading,refetch, } = useQuery({
      queryKey: ["sales"],
      queryFn: async () => {
        const res = await axiosSecure.get(`/sales`);
        return res?.data;
      },
    });
  
    return [allSales, loading, refetch];
};

export default useAllSales;