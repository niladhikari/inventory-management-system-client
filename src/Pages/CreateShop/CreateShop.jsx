
import Swal from "sweetalert2";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "./../../Hook/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaLaptopHouse } from "react-icons/fa";
import useAuth from "../../Hook/useAuth";
const CreateShop = () => {
    const { register, handleSubmit ,reset} = useForm();
  const axiosPrivate = useAxiosSecure();
  const {user} = useAuth();

  const onSubmit = async (data) => {
    console.log(data);

    const menuItem = {
      shopName: data.shopName,
      name: user?.displayName,
      email: user?.email,
      logo: data.logo,
      location: data.location,
      description: data.description,
    };

    console.log(menuItem);

    const menuRes = await axiosPrivate.post("/shops", menuItem);
    console.log(menuRes.data);
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
  };
    return (
        <div className="mb-10">
      <Helmet>
        <title>V Inventory | Create Store</title>
      </Helmet>
      <SectionTitle
        subHeading={"what's New ?"}
        heading={"Create Your Store"}
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Shop Name*</span>
            </label>
            <input
              type="text"
              placeholder="Shop Name"
              {...register("shopName", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
          </div>
          <div className=" lg:flex gap-6">
            {/* Shop Logo */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Shop Logo*</span>
              </label>
              <input
                type="url"
                placeholder="Shop Logo url"
                {...register("logo", { required: true })}
                required
                className="input input-bordered w-full"
              />
            </div>

            {/* location */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Shop LOcation*</span>
              </label>
              <input
                type="location"
                placeholder="Location"
                {...register("location", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
           
            {/* Shop owner info */}
          <div className="lg:flex gap-6">
            {/* Shop owner name */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Owner Name*</span>
              </label>
              <input
                type="text"
                placeholder="Shop Owner Name"
                {...register("name", { required: true })}
                value={user?.displayName} 
                readOnly 
                className="input input-bordered w-full"
              />
            </div>

            {/* Shop owner email */}
             <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Owner Email*</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
                value={user?.email} // Set value to logged-in user's email
                readOnly // Make it non-editable
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* Shop details */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Shop Info</span>
            </label>
            <textarea
              {...register("description")}
              className="textarea textarea-bordered h-24"
              placeholder="Shop Info"
            ></textarea>
          </div>

          <button className="btn bg-orange-700 text-white">
            Create Store <FaLaptopHouse className="ml-4"></FaLaptopHouse>
          </button>
        </form>
      </div>
    </div>
    );
};

export default CreateShop;