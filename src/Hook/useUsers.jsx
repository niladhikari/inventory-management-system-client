import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {data: allUser = [],isPending: loading,refetch, } = useQuery({
      queryKey: ["shop"],
      queryFn: async () => {
        const res = await axiosSecure.get(`/shops/${user?.email}`);
        return res?.data;
      },
    });
  
    return [allUser, loading, refetch];
};

export default useUsers;