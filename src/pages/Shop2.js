import React, { useStyle } from "react";
import CardBouquet from "../components/CardBouquet";
import Navbar from "../components/Navbar";
import CarouselComp from "../components/CarouselComp";
import Footer from "../components/Footer";
import data from "../images/db.json";
import { Grid } from "@mui/material";
import { CartStore } from "../App";

const Shop2 = ({activeTab, setActiveTab}) => {
  console.log(data.bouquets);

  return (
    <CartStore.Consumer>
      {({ cartItems }) => {
        return (
          <div>
            <Navbar activeTab={activeTab}/>
            <CarouselComp />

            <Grid  justifyContent="center"  container spacing={20}>
              {data.bouquets.map((bouquet) => (
                <Grid item xs={12} md={4} key={bouquet.id}>
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
