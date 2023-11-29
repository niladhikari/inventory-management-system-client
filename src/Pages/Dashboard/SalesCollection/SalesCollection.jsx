import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useProduct from "../../../Hook/useProduct";
// import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";



const SalesCollection = () => {
  const [product] = useProduct();
  console.log(product);
  const axiosSecure = useAxiosSecure();

  const date = new Date();
let currentDate = date.toLocaleDateString();

  console.log(currentDate);
  const handleAddToCart = (item) => {
    const allInformation ={
      description:item.description,
      discount:item.discount,
      email:item.email,
      image:item.image,
      location:item.location,
      name:item.name,
      productAddedDate:item.productAddedDate,
      production:item.production,
      profit:item.profit,
      quantity:item.quantity,
      saleCount:item.saleCount,
      sellingPrice:item.sellingPrice,
      shopId:item.shopId,
      shopName:item.shopName,
      id:item._id,
      currentAddDate : currentDate
      }
  
    axiosSecure.post("/carts", allInformation).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} added to your cart`,
          showConfirmButton: false,
          timer: 1500,
        });
        // refetch cart to update the cart items count
      }
      else{
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `Product Quantity is finish!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = product.filter((item) =>
    item._id.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div>
      <Helmet>
        <title>V Inventory | Sales Collection</title>
      </Helmet>
      <SectionTitle
        heading={"Sales Collection"}
        subHeading={"All the Sales"}
      ></SectionTitle>
      <div className="flex  items-center gap-20">
        <input
          type="text"
          placeholder="Search by Product ID"
          value={searchQuery}
          onChange={handleSearchChange}
          className="border border-gray-300 px-3 py-2 rounded-md mb-4"
        />
         <Link to={'/dashboard/checkout'}>
         <button className="btn mb-3">checkout</button>
      </Link>
      </div>
     
      <div className="bg-white p-12">
        <div className="overflow-x-auto mt-4 rounded-xl ">
          <table className="table bg-yellow-100">
            {/* head */}
            <thead>
              <tr className="bg-orange-300 m-10">
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Product Image</th>
                <th>Product Quantity</th>
                <th>Discount</th>
                <th>SellingPrice</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((item) => (
                <tr key={item._id}>
                  <th>{item._id}</th>
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
                  <td>{item.discount}</td>
                  <td>{item.sellingPrice}</td>
                  <td>
                    <button
                      onClick={()=>handleAddToCart(item)}
                      className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4"
                    >
                      Add to Cart
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

export default SalesCollection;
