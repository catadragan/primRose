import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Typography } from "@mui/material";



const Terms = ({activeTab, setActiveTab}) => {
  return (
    <div>
      <Navbar  />

      <Typography variant="h1">VARIATION IN PRODUCT</Typography>
      <Typography variant="body1">
        Created from natural products, stems and flowers can differ, so no two
        products are exactly the same. Flower availability is also dependent on
        season and market availability. As a result, not all goods are exactly
        as pictured on our website, By accepting these terms and conditions you
        are acknowledging there may be some material differences between images
        and the goods produced. Therefore May’s Fresh Flowers cannot guarantee
        the exact color or variations of any of the plants or flowers used, but
        we will always strive to get exactly right for you.
      </Typography>

      <Typography variant="h1">DELIVERIES</Typography>
      <Typography variant="body1">
        Orders must be received before 12:00 p.m (NSW Time) to assure same-day
        delivery. Orders received after that time will be delivered the
        following day.
      </Typography>
      <Typography variant="subtitle1">Courier</Typography>
      <Typography variant="body1">
        If the recipient is not at the delivery address when our courier
        arrives, we will leave the flowers at the delivery address in a safe and
        undercover position. If necessary, we will contact the recipient or
        sender to let them know where we left the flowers. If the recipient
        lives in a unit or apartment and are not there to receive the flowers
        and there is not a safe place to leave the flowers, we will attempt to
        contact the recipient or re-arrange the delivery which will incur an
        extra cost to the sender. If the wrong delivery address is given, we
        will re-deliver the order, however there will be an additional delivery
        cost. All deliveries are wet-packed to ensure they stay hydrated and
        protected during the delivery process.
      </Typography>

      <Typography variant="h1">PRICES AND PAYMENT</Typography>
      <Typography variant="body1">
        sAll our bouquets are individually gift wrapped and will include a card
        with your personal message. All prices exclude delivery and delivery
        will be charged according to the recipients location. All prices include
        GST. All payments are processed securely via Stripe or PayPal. Credit
        card payments (Visa, MasterCard, American Express)are made directly to
        May’s Fresh Flowers, and are processed by Stripe. Payments can also be
        processed by Pay via PayPal. We accept bank transfers for services that
        are not through our online shops such as weddings and special events.
        Phone orders can be paid by Eftpos. We never store or have access to
        your credit or debit card details. We do not accept cash payments.
      </Typography>

      <Typography variant="subtitle1">RETURNS & REFUNDs</Typography>
      <Typography variant="body1">
        May’s Fresh Flowers always source the best quality flowers and products
        for our customers. Flowers sold online are perishable and a flowers life
        span is dependent on the variety, season, environment and care, thus
        ending in varied life spans for different flowers. Due to our products
        being made from nature, we do not offer returns or refunds. However, if
        you are not satisfied with an arrangement, please call us or email us
        ASAP at info@maysfreshflowers.com.au and we will endeavor to immediately
        rectify the situation.
      </Typography>

      <Typography variant="subtitle1">CHANGES TO YOUR ORDER</Typography>
      <Typography variant="body1">
        If you wish to amend your order or subscription, please contact us as
        soon as you can. We’ll always do our best to make last-minute changes
        for you, but we can only guarantee changes (including to the delivery
        address and in relation to card messages) where we receive at least 24
        hours notice.
      </Typography>

      <Footer />
    </div>
  );
};

export default Terms;
