import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import useAuth from "../../../Hook/useAuth";


const cartInfo = [
  {
    id: 1,
    price: 10,
    limit: 200,
  },
  {
    id: 1,
    price: 20,
    limit: 450,
  },
  {
    id: 1,
    price: 50,
    limit: 1500,
  },
];
const Subscription = () => {
  const { setUpdatePrice, setUpdateLimit } = useAuth();
  const handleButton = (price, limit) => {
    setUpdatePrice(price)
    setUpdateLimit(limit)
  };
  return (
    <div>
      <Helmet>
        <title>V Inventory | Subscription</title>
      </Helmet>
      <SectionTitle
        heading={"Subscription"}
        subHeading={"Get The More Shop"}
      ></SectionTitle>

      <div className="grid md:grid-cols-3 justify-center items-center gap-10">
        {cartInfo?.map((singleCart) => (
          <div key={singleCart.id} className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/q547G4V/Subscription-Customization.png"
                alt=""
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">$ {singleCart.price}</h2>
              <h2 className="card-title">Limit : {singleCart.limit}</h2>
              <div className="card-actions">
                <Link to={"/dashboard/payment"}>
                  <button
                    onClick={() =>
                      handleButton(singleCart.price, singleCart.limit)
                    }
                    className="btn btn-primary"
                  >
                    Purchase
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscription;
