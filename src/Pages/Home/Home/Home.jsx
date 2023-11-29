import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CustomerReview from "../CustomerReview/CustomerReview";
import Features from "../Features/Features";
import Founders from "../Founders/Founders";
import FaqSection from "../FAQ/FaqSection";



const Home = () => {
  return (
    <div>
      <Helmet>
        <title>V Inventory | Home</title>
      </Helmet>
      <Banner></Banner>
      <Features></Features>
      <CustomerReview></CustomerReview>
      <Founders></Founders>
      <FaqSection></FaqSection>
    </div>
  );
};

export default Home;
