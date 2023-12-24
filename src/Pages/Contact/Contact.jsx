import { FaAddressCard, FaElementor, FaPhoneAlt } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";
import useAuth from "../../Hook/useAuth";


const Contact = () => {
  const form = useRef();
  const { user } = useAuth();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_ServiceID,
        import.meta.env.VITE_TemplateID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          Swal.fire({
            title: "success!",
            text: "Email Send Successfully !!",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            title: "Error!",
            text: "Do you want to continue",
            icon: "error",
            confirmButtonText: "Cool",
          });
        }
      );
  };

  return (
    <div className="py-32 px-5 md:px-0" id="contact">
      <h1 className="text-5xl font-bold text-center  mb-10">
        Contact <span className="text-accent">Me</span>
      </h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="md:w-3/12">
          <p className="flex items-center gap-2 my-3">
            <span className="text-accent text-2xl">
              <FaAddressCard />
            </span>{" "}
            <span className="text-xl">Address: </span>{" "}
            <span className="text-gray-400">Mirpur-10, Dhaka</span>
          </p>
          <p className="flex items-center gap-2 my-3">
            <span className="text-accent text-2xl">
              <FaElementor />
            </span>{" "}
            <span className="text-xl">Email: </span>{" "}
            <span className="text-gray-400">{user?.email}</span>
          </p>
          <p className="flex items-center gap-2 my-3">
            <span className="text-accent text-2xl">
              <FaPhoneAlt />
            </span>{" "}
            <span className="text-xl">Phone: </span>{" "}
            <span className="text-gray-400"> +880 1628000#</span>
          </p>
        </div>
        <div className="md:w-3/6">
          <form ref={form} onSubmit={sendEmail}>
            <div className=" md:flex gap-6">
              <div className="form-control w-full ">
                <input
                  type="text"
                  placeholder="your name"
                  name="name"
                  className="input border-2 border-gray-700 w-full "
                  required
                />
              </div>
            </div>
            <div className="md:flex gap-6 mt-6">
              <div className="form-control w-full ">
                <input
                  type="email"
                  placeholder="your email"
                  name="user_email"
                  className="input  w-full border-2 border-gray-700 "
                  required
                />
              </div>
            </div>
            <textarea
              name="message"
              className="textarea textarea-ghost w-full mt-6 border-2 border-gray-700"
              placeholder="message"
              required
            ></textarea>
            <input
              type="submit"
              className="px-5 py-2 rounded-xl bg-gray-300 text-emerald-400  font-bold mt-5"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
