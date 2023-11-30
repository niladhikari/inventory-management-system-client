import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCarts = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {
    data: cart = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["carts"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts/${user?.email}`);
      return res?.data;
    },
  });

  return [cart, loading, refetch];
};

export default useCarts;
