import { Helmet } from "react-helmet-async";

import useAllShop from "../../../../Hook/useAllShop";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";

const ManageShop = () => {
    const [allShop] = useAllShop();
    console.log(allShop);
  return (
    <div>
      <Helmet>
        <title>V Inventory | Manage Shop</title>
      </Helmet>
      <SectionTitle heading={'Manage Shop'} subHeading={'Know  about shop'}></SectionTitle>
      <div className="overflow-x-auto mt-4 rounded-xl ">
          <table className="table bg-yellow-100">
            {/* head */}
            <thead>
              <tr className="bg-orange-300 m-10"> 
                <th></th>
                <th>Shop Name</th>
                <th>Shop logo</th>
                <th>Product Limit</th>
                <th>Shop Description</th>
                <th>Notice</th>
              </tr>
            </thead>
            <tbody>
              {allShop &&
              allShop?.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>{item.shopName}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{item.limit}</td>
                  <td>{item.description}</td>
                  <td>
                    <button
                        // onClick={() => handleDelete(item)}
                      className="btn btn-ghost  bg-red-600"
                    >
                        Notice
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default ManageShop;
