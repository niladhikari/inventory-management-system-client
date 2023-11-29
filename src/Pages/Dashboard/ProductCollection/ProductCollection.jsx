import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import useProduct from "../../../Hook/useProduct";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";

const ProductCollection = () => {
  const [product, , refetch] = useProduct();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/products/${item._id}`);
        // console.log(res.data);
        if (res.data.deletedCount > 0) {
          // refetch to update the ui
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>V Inventory | product Collection</title>
      </Helmet>
      <SectionTitle
        heading={"product Collection"}
        subHeading={"Manager It"}
      ></SectionTitle>
      <div className="bg-white p-12">
        <div className="overflow-x-auto mt-4 rounded-xl ">
          <table className="table bg-yellow-100">
            {/* head */}
            <thead>
              <tr className="bg-orange-300 m-10"> 
                <th></th>
                <th>Product Name</th>
                <th>Product Image</th>
                <th>Product Quantity</th>
                <th>Sale Count</th>
                <th>UPDATE</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {product.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  
                  <td>{item.quantity}</td>
                  <td>{item.saleCount}</td>
                  <td>
                    <Link to={`/dashboard/updateProduct/${item._id}`}>
                      <button
                        // onClick={() => handleDelete(item._id)}
                        className="btn btn-ghost  bg-orange-300"
                      >
                        <FaRegEdit className="text-white text-2xl" />
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                        onClick={() => handleDelete(item)}
                      className="btn btn-ghost  bg-red-600"
                    >
                      <RiDeleteBin5Line className="text-white text-2xl"></RiDeleteBin5Line>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductCollection;
