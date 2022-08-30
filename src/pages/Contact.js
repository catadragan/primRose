import React, { useState, useRef } from "react";
import { styled } from "@mui/system";
import {
  Box,
  TextField,
  Grid,
  Button,
  Typography,
  Container,
} from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
        <Typography variant="h2" color="primary" align="center" padding="10px">
          Contact us
        </Typography>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={3}
          marginBottom="10%"
        >
          <Grid item xs={8} md={6}>
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
          </Grid>

          <Grid item xs={8} md={6}>
            <br></br>
            <form noValidate autoComplete="off" onSubmit={sendEmail} ref={form}>
              <Container>
                <StyledTextField label="Your Name" name="name" fullWidth>
                  Name
                </StyledTextField>
                <br></br>
                <StyledTextField label="Your Email" name="email" fullWidth>
                  Email
                </StyledTextField>
                <br></br>
                <StyledTextField label="Your Phone" name="phone" fullWidth>
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
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </div>
  );
};
export default Contact;


