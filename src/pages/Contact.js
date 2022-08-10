import React, { useState, useEffect, useRef } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import { Box, Stack, IconButton, TextField } from "@mui/material";

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
import emailjs from "@emailjs/browser";

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

const Contact = ({ activeTab, setActiveTab }) => {
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState(false);
  const form = useRef();

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

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "catad9532@gmail.com",
        "template_pwe2nmm",
        form.current,
        "nkN2ZAuzPCV5xm02z"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="page-content">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
   
      <Container>
        <Typography variant="h2" color="primary" align="center">
          Contact us
        </Typography>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
          
        >
          <br></br>
          <form noValidate autoComplete="off" onSubmit={sendEmail} ref={form}>
            <Container>
              <StyledTextField label="Your Name" name="name">
                Name
              </StyledTextField>
              <br></br>
              <StyledTextField label="Your Email" name="email">
                Email
              </StyledTextField>
              <br></br>
              <StyledTextField label="Your Phone" name="phone">
                Phone
              </StyledTextField>
              <br></br>
              <br></br>
              <StyledTextField
                onChange={(e) => setMessage(e.target.value)}
                label="Message"
                name="message"
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
            alt="envelope picture"
            src="https://i.pinimg.com/564x/38/32/f0/3832f08f00fed68408190054492de2ef.jpg"
          />
        </Stack>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
/*
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
        
*/
