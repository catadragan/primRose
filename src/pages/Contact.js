import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import {
  Box,
  Stack,
  IconButton,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
  MenuItem,
} from "@mui/material";

import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import Navbar from "../components/Navbar";
import CarouselComp from "../components/CarouselComp";
import Footer from "../components/Footer";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const linksArray = ["Home", "Shop", "About", "Contact"];

const StyledTextField = styled(TextField)({
  "&.MuiTextField-root": {
    margin: "10px",
  },
});
const StyledButton = styled(Button)({
  "&.MuiButton-root": {
    margin: "20px",
  },
});

const Contact = () => {
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageError(false);
    if (message == "") {
      setMessageError(true);
    }
    if (message) {
      console.log(message);
    }
  };

  return (
    <div>
      <Navbar links={linksArray} />
      <CarouselComp />
      <Container>
        <Typography variant="h2" color="primary" align="center">
          Contact us
        </Typography>
        <Stack sx={{ border: "1px solid" }} direction="row">
          <br></br>
          <form noValidate autoComplete="off">
            <Container>
              <StyledTextField label="Your Name">Name</StyledTextField>
              <br></br>
              <StyledTextField label="Your Email">Email</StyledTextField>
              <br></br>
              <StyledTextField label="Your Phone">Phone</StyledTextField>
              <br></br>
              <br></br>
              <StyledTextField
                onChange={(e) => setMessage(e.target.value)}
                label="Message"
                variant="outlined"
                color="secondary"
                fullWidth
                multiline
                rows={4}
                error={messageError}
              ></StyledTextField>
              <br></br>
              <StyledButton
                type="submit"
                color="secondary"
                variant="contained"
                endIcon={<SendOutlinedIcon />}
              >
                Send
              </StyledButton>
              <br></br>
              <IconButton aria-label="location">
                <LocationOnOutlinedIcon />
              </IconButton>
              Str. Rosseti nr. 25<br></br>
              <IconButton aria-label="phone">
                <LocalPhoneIcon />
              </IconButton>
              0742058648
              <br></br>
              <IconButton aria-label="email">
                <EmailIcon />
              </IconButton>
              contact@primrose.coms
              <br></br>
              <IconButton aria-label="email">
                <AccessTimeIcon />
              </IconButton>
              <p> Monday-Friday: 8:00-18:00 </p>
              <p>Saturday: 8:00-14:00 </p>
              <p> Sunday: closed</p>
              <br></br>
              <IconButton aria-label="facebook">
                <FacebookOutlinedIcon />
              </IconButton>
              <IconButton aria-label="instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton aria-label="pinterest">
                <PinterestIcon />
              </IconButton>
            </Container>
          </form>

          <Box
            sx={{
              backgroundColor: "secondary",
              height: "500px",
              width: "500px",
              padding: "16px",
            }}
            component="img"
            lx={{
              height: 233,
              width: 350,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt="Your bouquet might look like this one."
            src="https://i.pinimg.com/564x/31/b0/35/31b035232998b0cf4f34feea416db211.jpg"
          />
        </Stack>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
