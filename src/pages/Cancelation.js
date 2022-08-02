import React from "react";
import {
  responsiveFontSizes,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
//import theme from "../theme";

const linksArray = ["Home", "Shop", "About", "Contact"];

const Cancelation = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  

  return (
    <div>
      <Navbar links={linksArray} />
      <ThemeProvider theme={theme}>
        <Typography variant="subtitle">Cancelation policy</Typography>
        <Typography variant="body1">
          To provide you with the best possible service, you can cancel your
          order at anytime prior to delivery. However, if your order is en route
          or delivered, we will be unable to cancel the order.
        </Typography>

        <Typography variant="body1">
          You can call us at 281-337-4222 anytime to cancel an order. We will
          try our best to accommodate your request as long as your request meets
          our cancellation policy.
        </Typography>

        <Typography variant="subtitle">Returns</Typography>

        <Typography variant="body1">
          To provide you with the best possible service, you can return your
          order for replacement or refund. Flowers & Perishable Products
        </Typography>

        <Typography variant="subtitle">Flowers & Perishable Products</Typography>

        <Typography variant="body1">
          If you are not fully satisfied with your gift, we will replace that
          product to your satisfaction. To receive the replacement product,
          please call us at 281-337-4222.
        </Typography>

        <Typography variant="subtitle">Speciality Gifts</Typography>

        <Typography variant="body1">
          Speciality gift items that are non-perishable may be returned for any
          reason, for a full refund (within 7 days of receipt of the item)
          provided the items are returned unopened with the original packing
          materials and documentation.
        </Typography>

        <Typography variant="body1">
          Please note that we can refund shipping fees only if the return is a
          result of our error. Otherwise, you will receive a full refund for the
          cost of the speciality gift item, but the original and return shipping
          fee will not be refunded. To return an item, please call us at
          281-337-4222.
        </Typography>

        <Typography variant="body1">
          We'll notify you via e-mail of your refund once we have received and
          processed the returned gift item. You can expect a refund, in the same
          form of payment originally used for the purchase, within seven to
          fourteen days of our receiving your return.
        </Typography>
      </ThemeProvider>
      <Footer/>
    </div>
  );
};

export default Cancelation;
