import React from "react";
import { Card, CardContent, Typography, Avatar } from "@mui/material";

const TestimonialsCard = ({ avatarImg, text, name, job }) => {
  return (
    <Card>
      <CardContent>
        <Avatar
          sx={{ width: 56, height: 56, marginLeft: "40%" }}
          src={avatarImg}
        />
        <Typography variant="h4" gutterBottom style={{margin: "2rem"}}>
          {text}
        </Typography>
        <Typography variant="body1" fontSize="1.5rem" fontFamily="Pacifico" fontWeight="1rem">
          {name}</Typography>
        <Typography variant="caption" fontSize="1rem" fontFamily="Aboreto">{job}</Typography> 
      </CardContent>
    </Card>
  );
};
export default TestimonialsCard;
