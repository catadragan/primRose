import * as React from "react";
import { Box, Container } from "@mui/system";
import { Typography, Grid, Stack, IconButton, Link } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { useHistory } from "react-router-dom";

const Footer = ({ links }) => {
  const navigator = useHistory();
  return (
    <div className="footer">
      <Box sx={{ bgcolor: "#F5D9B6", color: "black" }}>
        <Container links={links} maxWidth="lg" sx={{ py: 2 }}>
          <Grid container justifyContent="center" spacing={4}>
            <Grid item xs={6} md={3}>
              <Stack spacing={2}>
                <Typography fontWeight="bold">MENU</Typography>

                <Typography variant="body1">
                  <Link
                    color="inherit"
                    style={{ textDecoration: "none" }}
                    href="#"
                    onClick={(e, val) => {
                      navigator.push(`/cancelation`);
                    }}
                  >
                    Cancellation policy
                  </Link>
                </Typography>
                <Typography variant="body1">
                  <Link
                    color="inherit"
                    style={{ textDecoration: "none" }}
                    href="#"
                    onClick={(e, val) => {
                      navigator.push(`/delivery`);
                    }}
                  >
                    Local delivery
                  </Link>
                </Typography>
                <Typography variant="body1">
                  <Link
                    color="inherit"
                    style={{ textDecoration: "none" }}
                    href="#"
                    onClick={(e, val) => {
                      navigator.push(`/privacy`);
                    }}
                  >
                    Privacy policy
                  </Link>
                </Typography>
                <Typography variant="body1">
                  <Link
                    color="inherit"
                    style={{ textDecoration: "none" }}
                    href="#"
                    onClick={(e, val) => {
                      navigator.push(`/terms`);
                    }}
                  >
                    Terms and conditions
                  </Link>
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} md={3}>
              <Stack spacing={0.5}>
                <Typography fontWeight="bold">PAGES</Typography>
                <Typography variant="body1">
                  <Link
                    color="inherit"
                    style={{ textDecoration: "none" }}
                    href="#"
                    onClick={(e, val) => {
                      navigator.push(`/home`);
                    }}
                  >
                    Home
                  </Link>
                </Typography>

                <Typography variant="body1">
                  <Link
                    color="inherit"
                    style={{ textDecoration: "none" }}
                    href="#"
                    onClick={(e, val) => {
                      navigator.push(`/Custom Bouquets`);
                    }}
                  >
                    Customable Bouquets
                  </Link>
                </Typography>

                <Typography variant="body1">
                  <Link
                    color="inherit"
                    style={{ textDecoration: "none" }}
                    href="#"
                    onClick={(e, val) => {
                      navigator.push(`/Pre-made Bouquets`);
                    }}
                  >
                    Bouquets
                  </Link>
                </Typography>

                <Typography variant="body1">
                  <Link
                    color="inherit"
                    style={{ textDecoration: "none" }}
                    href="#"
                    onClick={(e, val) => {
                      navigator.push(`/about`);
                    }}
                  >
                    About us
                  </Link>
                </Typography>

                <Typography variant="body1">
                  <Link
                    color="inherit"
                    style={{ textDecoration: "none" }}
                    href="#"
                    onClick={(e, val) => {
                      navigator.push(`/contact`);
                    }}
                  >
                    Contact us
                  </Link>
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} md={3}>
              <Stack spacing={2}>
                <Typography fontWeight="bold">OPENING HOURS</Typography>
                <Typography variant="body1">
                  Monday - Friday : 08:00 - 18:00
                </Typography>
                <Typography variant="body1">
                  Saturday : 08:00 - 14:00
                </Typography>
                <Typography variant="body1">Sunday : Closed</Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} md={3}>
              <Stack spacing={2}>
                <Typography fontWeight="bold">CONTACT US </Typography>
                <Typography variant="body1">
                  <LocationOnOutlinedIcon />
                  Str. Rosseti nr. 25
                </Typography>
                <Typography variant="body1">
                  <EmailIcon />
                  contact@primrose.com
                </Typography>
                <Typography variant="body1">
                  <LocalPhoneIcon />
                  0742058648
                </Typography>

                <Typography fontWeight="bold">FOLLOW US</Typography>
                <Typography variant="body1">
                  <Link
                    color="inherit"
                    style={{ textDecoration: "none" }}
                    href="https://www.facebook.com/Magnolia.ro/"
                  >
                    <IconButton aria-label="facebook">
                      <FacebookOutlinedIcon />
                    </IconButton>
                  </Link>

                  <Link
                    color="inherit"
                    style={{ textDecoration: "none" }}
                    href="https://www.https://www.instagram.com/florarialavieenrose/.com/Magnolia.ro/"
                  >
                    <IconButton aria-label="instagram">
                      <InstagramIcon />
                    </IconButton>
                  </Link>

                  <Link
                    color="inherit"
                    style={{ textDecoration: "none" }}
                    href="https://ro.pinterest.com/catadragan/flowers-bouquet/"
                  >
                    <IconButton aria-label="pinterest">
                      <PinterestIcon />
                    </IconButton>
                  </Link>
                </Typography>
              </Stack>
            </Grid>
          </Grid>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="#">
              Primrose floral design
            </Link>
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Container>
      </Box>
    </div>
  );
};
export default Footer;
