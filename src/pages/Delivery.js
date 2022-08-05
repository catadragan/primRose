import React from "react";
import Navbar from "../components/Navbar";
import CarouselComp from "../components/CarouselComp";
import Footer from "../components/Footer";
import { Typography } from "@mui/material";

const Delivery = ({activeTab, setActiveTab}) => {
  return (
    <div>
      <Navbar />
      <Typography>
        Our standard delivery fees apply to orders for addresses anywhere in the
        U.S. or Canada. Please note that there may be additional charges for
        special time requests or rush deliveries. Also, for specific time
        requests, we will do our best to accommodate, but cannot guarantee exact
        times. Orders for delivery anywhere in the U.S. or Canada must be
        received before 3PM in the recipient's time zone to ensure same day
        deliveries. Orders received after 3PM will be delivered the following
        day. International orders (except to Canada) must be placed
        telephonically and generally require 48 hours for delivery. Please note
        that we cannot accept international orders online (except to Canada).
        Refund/Cancellation Policy To provide you with the best possible
        service, you can cancel your order at any time prior to delivery.
        However, if your order is en route or delivered, we will be unable to
        cancel the order. You can call us at 281-337-4222 anytime to cancel an
        order. We will try our best to accommodate your request as long as your
        request meets our cancellation policy.
      </Typography>
      <Footer />
    </div>
  );
};

export default Delivery;
