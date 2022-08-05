import React from "react";
import Navbar from "../components/Navbar";
import CarouselComp from "../components/CarouselComp";
import Footer from "../components/Footer";
import { Typography, Paper } from "@mui/material";



const About = ({activeTab, setActiveTab}) => {
  return (
    <div>
      <Navbar activeTab={activeTab}  />
      <CarouselComp />
      <Paper
        component="p"
        sx={{ background: "#F6C7A5", padding: 5 }}
        elevation={5}
        style={{ height: 200, width: 500, marginLeft: 100, marginTop: 100 }}
      >
        <Typography variant="subtitle1">HOW IT'S BEGINS</Typography>
      </Paper>
      <Typography variant="subtitle1">WHO WE ARE:</Typography>
      <Typography variant="subtitle1">WHAT WE OFFER:</Typography>
      <Typography variant="body1">good quality flower, arrangements</Typography>
      <Typography variant="subtitle1">DESCRIPTION:</Typography>
      <Typography variant="subtitle1">OUR MAIN GOALS:</Typography>
      <Typography variant="subtitle1">OUR BENEFITS?</Typography>
      <Typography variant="body1">
        free shipping, over 50£ shipping in several hours in our town,secure
        payment 1000+
      </Typography>
      <Typography variant="body1"> sattisfied customers </Typography>
      <Typography variant="subtitle1">
        STAFF PICTURES : owner manager and floral designer
      </Typography>
      <Footer />
    </div>
  );
};

export default About;
