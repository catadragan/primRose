import * as React from "react";
//import { useState } from "react";
import { Box, Container } from "@mui/system";
import { Typography, Grid, Stack, IconButton, Link } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { useHistory } from "react-router-dom";

const Footer = ({links}) => {
  /*  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
     setIsHover(true);
  };

  const handleMouseLeave = () => {
     setIsHover(false);
  };
*/

const navigator = useHistory();

  return (
    <div>
      <Box sx={{ bgcolor: "#F5D9B6", color: "black" }}>
        <Container links={links} maxWidth="lg" sx={{ py: 5 }}>
          <Grid container spacing={4} >
            <Grid item xs={6} md={3}>
              <Stack spacing={2} >
              <Typography>MENU</Typography>

             

                
                <Typography variant="body1" >
                  <Link
                    color="inherit"
                    style={{ textDecoration: "none" }}
                    href="#"
                  >
                    Cancellation policy
                  </Link>
                </Typography>
                <Typography variant="body1" >
                  <Link
                    color="inherit"
                    style={{ textDecoration: "none" }}
                    href="#"
                  >
                    Local delivery
                  </Link>
                </Typography>
                <Typography variant="body1" >
                  <Link
                    color="inherit"
                    style={{ textDecoration: "none" }}
                    href="#"
                  >
                    Privacy policy
                  </Link>
                </Typography>
                <Typography variant="body1" >
                  <Link
                    color="inherit"
                    style={{ textDecoration: "none" }}
                    href="#"
                  >
                    Terms and conditions
                  </Link>
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} md={3}>
              <Stack spacing={2}>
                <Typography>PAGES</Typography>
                <Typography variant="body1">
                  <Link
                    color="inherit"
                    style={{ textDecoration: "none" }}
                    href="#"
                    //onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
                  >
                    Home
                  </Link>
                </Typography>

                <Typography variant="body1">
                  <Link
                    color="inherit"
                    style={{ textDecoration: "none" }}
                    href="#"
                  >
                    Customable Bouquets
                  </Link>
                </Typography>

                <Typography variant="body1" >
                  <Link
                    color="inherit"
                    style={{ textDecoration: "none" }}
                    href="#"
                  >
                    Bouquets
                  </Link>
                </Typography>

                <Typography variant="body1">
                  <Link
                    color="inherit"
                    style={{ textDecoration: "none" }}
                    href="#"
                  >
                    About us
                  </Link>
                </Typography>

                <Typography variant="body1" >
                  <Link
                    color="inherit"
                    style={{ textDecoration: "none" }}
                    href="#"
                  >
                    Contact us
                  </Link>
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} md={3}>
              <Stack spacing={2}>
                <Typography>OPENING HOURS</Typography>
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
                <Typography>CONTACT US </Typography>
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

                <Typography>FOLLOW US</Typography>
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
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Container>
      </Box>
    </div>
  );
};

export default Footer;

//routin footer
/*{links.map((link, index) => (
  <Typography variant="body1" key={index} label={link} onClick={(e,bla)=> ( console.log(e))}>
    <Link
    color="inherit"
    style={{ textDecoration: "none" }}
    href="#"
  >
    Cancellation policy
  </Link>
</Typography>
))}*/
