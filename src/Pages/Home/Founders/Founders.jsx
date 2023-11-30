import  { useEffect, useState } from "react";
import { Grid, Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Founders = () => {
  const [founders, setFounders] = useState([]);

  useEffect(() => {
    fetch("/founders.json")
      .then((res) => res.json())
      .then((data) => setFounders(data))
      .catch((error) => console.error("Error fetching features:", error));

    AOS.init({
      duration: 800,
      delay: 100,
    });
  }, []);

  return (
    <div className="my-20">
      <SectionTitle subHeading={"Meet Our Honorable"} heading={"Founders"} />

      <Grid my={10} container spacing={3} justifyContent="center">
        {founders.map((feature) => (
          <Grid key={feature._id} item xs={12} sm={6} md={4} data-aos="fade-up">
            <Card sx={{ position: 'relative', overflow: 'hidden', borderRadius: '16px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <CardMedia
                component="img"
                height="200"
                image={feature.image}
                alt={feature.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ position: 'absolute', bottom: 0, width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.7)', color: '#fff', padding: '16px' }}>
                <Typography variant="h6" gutterBottom>
                  {feature.name}
                </Typography>
                <Typography variant="body2">
                  {feature.position}
                </Typography>
                <Box mt={2}>
                  <Typography variant="body2">
                    {feature.description}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Founders;
