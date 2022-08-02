import React from "react";
import CardBouquet from "../components/CardBouquet";
import Navbar from "../components/Navbar";
import CarouselComp from "../components/CarouselComp";
import Footer from "../components/Footer";
import { Box, Container, Grid, Typography } from "@mui/material";

const db = require("../images/db.json");
const linksArray = ["Home", "Shop", "About", "Contact"];

const Shop2 = () => {
  return (
    <div>
      <Navbar links={linksArray} />
      <CarouselComp />
      <Grid container spacing={2}>
        <Grid item xs={3} md={2.4}>
          <CardBouquet />
        </Grid>
        <Grid item xs={3} md={2.4}>
          <CardBouquet />
        </Grid>
        <Grid item xs={3} md={2.4}>
          <CardBouquet />
        </Grid>
        <Grid item xs={3} md={2.4}>
          <CardBouquet />
        </Grid>
        <Grid item xs={3} md={2.4}>
          <CardBouquet />
        </Grid>
        <Grid item xs={3} md={2.4}>
          <CardBouquet />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default Shop2;
