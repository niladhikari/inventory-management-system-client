import { useForm } from "react-hook-form";
import useAxiosPublic from "./../../../Hook/useAxiosPublic";
import useAxiosSecure from "./../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useShops from "../../../Hook/useShops";
import { useNavigate } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMGBB_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosOpen = useAxiosPublic();
  const axiosPrivate = useAxiosSecure();
  const [shop] = useShops();
  const navigate = useNavigate()
 

  const onSubmit = async (data) => {
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosOpen.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);
    if (res.data.success) {
      // Calculating Selling Price
      const sellingPrice =parseFloat(data.production) + 1.075 + (parseFloat(data.profit) / 100).toFixed(2);

      const date = new Date();
     let currentDate = date.toLocaleDateString();
      // now send the menu item data to the server with the image url
      const productItem = {
        name: data.name,
        shopId: shop._id,
        shopName: shop.name,
        email: shop.email,
        location: data.location,
        quantity: parseFloat(data.quantity),
        production: parseFloat(data.production),
        profit: parseFloat(data.profit),
        discount: parseFloat(data.discount),
        description: data.description,
        image: res.data.data.display_url,
        sellingPrice,
        productAddedDate: currentDate,
        saleCount: 0,
      };
      console.log(productItem);
      const menuRes = await axiosPrivate.post("/products", productItem);
      if (menuRes.data.insertedId) {
        // show success popup
       
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added to the menu.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
      else{
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${data.name} can’t add more Product.`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/dashboard/subscription')
      }

    }
  };
  return (
    <div>
      <Helmet>
        <title>V Inventory | Add Product</title>
      </Helmet>
      <SectionTitle
        subHeading={"what's New ?"}
        heading={"ADD AN Product"}
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Product Name*</span>
            </label>
            <input
              type="text"
              placeholder="Product Name"
              {...register("name", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-6">
            {/* Quantity */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Product Quantity*</span>
              </label>
              <input
                type="number"
                placeholder="Product Quantity"
                {...register("quantity", { required: true })}
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Product Location*</span>
              </label>
              <input
                type="text"
                placeholder="Product Location"
                {...register("location", { required: true })}
                required
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="flex gap-6">
            {/* Quantity */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Production Cost*</span>
              </label>
              <input
                type="text"
                placeholder="Production Cost"
                {...register("production", { required: true })}
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Profit Margin*</span>
              </label>
              <input
                type="text"
                placeholder="Profit Margin"
                {...register("profit", { required: true })}
                required
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* product Discount */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Discount*</span>
            </label>
            <input
              type="text"
              placeholder="Discount"
              {...register("discount", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
          {/* Product Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Description</span>
            </label>
            <textarea
              {...register("description")}
              className="textarea textarea-bordered h-24"
              placeholder="Product Description"
            ></textarea>
          </div>

          <div className="form-control w-full my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <button className="btn bg-orange-700 text-white">
            Add Product <FaUtensils className="ml-4"></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
