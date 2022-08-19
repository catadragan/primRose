import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const StaffCard = ({ srcImg, name, job }) => {
  return (
    <Card >
      <CardMedia component="img" image={srcImg} style={{width: "30rem", height: "35rem", margin: 0}}/>

      <CardContent>
        <Typography variant="h4" gutterBottom textAlign="center">
          {name}
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {job}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StaffCard;

//https://i.pinimg.com/564x/c8/21/cb/c821cb0f264850f83638a2640a39856f.jpg
