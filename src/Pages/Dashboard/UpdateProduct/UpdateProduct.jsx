import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMGBB_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateProduct = () => {
    const {_id,name,location,quantity,production,profit,discount,description} = useLoaderData();
    const { register, handleSubmit } = useForm();
    const axiosOpen = useAxiosPublic();
    const axiosPrivate = useAxiosSecure();
    const onSubmit = async (data) => {
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosOpen.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      // now send the menu item data to the server with the image url
      const productItem = {
        name: data.name,
        location: data.location,
        quantity: parseFloat(data.quantity),
        production: parseFloat(data.production),
        profit: parseFloat(data.profit),
        discount: parseFloat(data.discount),
        description: data.description,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosPrivate.patch(`/products/${_id}`, productItem);

      if (menuRes.data.modifiedCount > 0) {
        // show success popup
        // reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is updated to the menu.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };
    return (
        <div>
            <Helmet>
                <title>V Inventory | Update Product</title>
            </Helmet>
            <SectionTitle heading={'Update Product'} subHeading={'Wow Update'}></SectionTitle>
            <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Product Name*</span>
            </label>
            <input
              type="text"
              defaultValue={name}
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
                defaultValue={quantity}
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
                defaultValue={location}
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
                defaultValue={production}
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
                defaultValue={profit}
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
              defaultValue={discount}
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
              defaultValue={description}
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
            Update Product <FaUtensils className="ml-4"></FaUtensils>
          </button>
        </form>
      </div>
        </div>
    );
};

export default UpdateProduct;