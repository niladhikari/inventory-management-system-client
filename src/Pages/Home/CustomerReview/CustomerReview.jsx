import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import SectionTitle from "./../../../Components/SectionTitle/SectionTitle";
import { Rating, Typography, Box, Container } from "@mui/material";


const CustomerReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);

  return (
    <Container>
      <SectionTitle
        heading={"Customer Review"}
        subHeading={"What Our Client Say"}
      />
      <Swiper navigation={true} modules={[Navigation]}>
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                my: 4,
                mx: "auto",
                maxWidth: 400,
              }}
            >
              <Rating value={review.rating} readOnly />
              <Typography variant="body1" align="center" paragraph>
                {review.details}
              </Typography>
              <Typography variant="h6" color="primary">
                {review.name}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default CustomerReviews;
