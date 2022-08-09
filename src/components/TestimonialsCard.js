import React from "react";
import { Card, CardContent, Typography, Avatar } from "@mui/material";

const TestimonialsCard = () => {
  return (
    <Card>
      <CardContent >
        <Avatar
          sx={{ width: 56, height: 56 }}
          src="http://i.pravatar.cc/300?img=4"
        />
        <Typography variant="h4" gutterBottom>
          "We are going to learn different kinds of species in nature that live
          together to form amazing environment."
        </Typography>
        <Typography variant="body1">Name of the customer</Typography>
        <Typography variant="caption">Job of the customer</Typography>
      </CardContent>
    </Card>
  );
};

export default TestimonialsCard;
