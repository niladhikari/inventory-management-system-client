import  { useEffect, useState } from "react";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import SectionTitle from "./../../../Components/SectionTitle/SectionTitle";
import { motion } from "framer-motion";

const Features = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("/public/featcher.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data))
      .catch((error) => console.error("Error fetching features:", error));
  }, []);

  return (
    <div className="my-20">
      <SectionTitle subHeading={"check it out"} heading={"FEATURED System"} />

      <Grid container my={10} spacing={2} justifyContent="center">
        {features.map((feature) => (
          <Grid key={feature._id} item xs={12} sm={6} md={4}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={feature.image}
                  alt={feature.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {feature.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Features;
