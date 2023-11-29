import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hook/useAuth";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  const { updatePrice, updateLimit } = useAuth();
  console.log(7, { updatePrice }, { updateLimit });
  return (
    <div>
      <Helmet>
        <title>V Inventory | Payment</title>
      </Helmet>
      <SectionTitle
        heading={"Payment"}
        subHeading={"Now pay The payment"}
      ></SectionTitle>
      <div className="flex justify-around items-center">
        <div>Price:{updatePrice}</div>
        <div>Limit:{updateLimit}</div>
      </div>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
