import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";



const useAllShop = () => {
    const axiosSecure = useAxiosSecure();
    const {data: allShop = [],isPending: loading,refetch, } = useQuery({
      queryKey: ["shop"],
      queryFn: async () => {
        const res = await axiosSecure.get(`/shops`);
        return res?.data;
      },
    });
  
    return [allShop, loading, refetch];
};

export default useAllShop;