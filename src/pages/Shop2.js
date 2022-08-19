import React, { useStyle } from "react";
import CardBouquet from "../components/CardBouquet";
import Navbar from "../components/Navbar";
import CarouselComp from "../components/CarouselComp";
import Footer from "../components/Footer";
import data from "../images/db.json";
import { Grid, Typography } from "@mui/material";
import { CartStore } from "../App";

const Shop2 = ({ activeTab, setActiveTab }) => {
  

  return (
    <CartStore.Consumer>
      {({ cartItems }) => {
        return (
          <div className="page-content">
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

            <Typography
              variant="h1"
              display="flex"
              justifyContent="center"
              padding="5%"
            >
              Buy a pre-made bouquet
            </Typography>
            <Grid
              justifyContent="center"
              container
              marginTop="5px"
              marginBottom="10%"
              spacing={20}
            >
              {data.bouquets.map((bouquet) => (
                <Grid item xs={12} md={3.5} key={bouquet.id}>
                  <CardBouquet bouquet={bouquet} />
                </Grid>
              ))}
            </Grid>
            <Footer />
          </div>
        );
      }}
    </CartStore.Consumer>
  );
};

export default Shop2;
