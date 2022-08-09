import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const StaffCard = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        image="https://i.pinimg.com/564x/c8/21/cb/c821cb0f264850f83638a2640a39856f.jpg"
      />

      <CardContent >
        <Typography variant="h6" gutterBottom textAlign="center">
          Name
        </Typography>
        <Typography variant="caption"  textAlign="center">Job</Typography>
      </CardContent>
    </Card>
  );
};

export default StaffCard;

