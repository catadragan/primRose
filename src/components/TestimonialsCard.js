import React from "react";
import { Card, CardContent, Typography, Avatar } from "@mui/material";

const TestimonialsCard = ({avatarImg, text, name, job}) => {
  return (
    <Card >
      <CardContent >
        <Avatar
        
          sx={{ width: 56, height: 56, marginLeft:"40%"}}
          //src="http://i.pravatar.cc/300?img=4"
          //image={srcImg}
          src={avatarImg}
        />
        <Typography variant="h4" gutterBottom>
        {text}
        </Typography>

        <Typography variant="body1">{name}</Typography>
        <Typography variant="caption">{job}</Typography>
      </CardContent>
    </Card>
  );
};

export default TestimonialsCard;
{/* <Card >
<CardContent >
  <Avatar
  
    sx={{ width: 56, height: 56, marginLeft:"40%"}}
    src="http://i.pravatar.cc/300?img=4"
    //image={srcImg}
    // src={avatarImg}
  />
  <Typography variant="h4" gutterBottom>
    djkfglajsdflsdifhkdslfkjdshj
  </Typography>

  <Typography variant="body1">name</Typography>
  <Typography variant="caption">job</Typography>
</CardContent>
</Card> */}