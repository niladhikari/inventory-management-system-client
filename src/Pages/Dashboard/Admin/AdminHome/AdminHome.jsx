import { Helmet } from "react-helmet-async";
import useAuth from "../../../../Hook/useAuth";

const AdminHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <Helmet>
      <title>V Inventory | Admin Home</title>
      </Helmet>
      <h2 className="text-3xl">
        <span>Hi, Welcome </span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>
    </div>
  );
};

export default AdminHome;
