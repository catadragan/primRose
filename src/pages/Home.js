import React from "react";
import Navbar from "../components/Navbar";
import CarouselComp from "../components/CarouselComp";
import Footer from "../components/Footer";
import StaffCard from "../components/StaffCard";
import { Typography, Box, Divider, Button, Grid } from "@mui/material";
import CountUp from "react-countup";
import TestimonialsCard from "../components/TestimonialsCard";

const Home = ({ activeTab, setActiveTab }) => {
  return (
    <div className="page-content">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <CarouselComp />

      <Box
        bgcolor="#F5D9B6"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Typography variant="h1">Who we are?</Typography>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            sx={{
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
            object-fit="cover"
            alt="Flower picture."
            src="https://i.pinimg.com/564x/55/3a/06/553a06ca7631d2c0b4a3d65964dfd899.jpg"
          />
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate
          </Typography>
        </Box>
        <Button variant="contained">Read more</Button>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        bgcolor="#C0D7B0"
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Typography variant="h1">What we offer?</Typography>
        </Box>
        <Divider variant="middle" />
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate.
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={1} md={2}></Grid>
          <Grid item xs={10} md={4}>
            <Box
              sx={{ width: 400, height: 600, padding: 2 }}
              component="img"
              alt="Custom Bouquet "
              src="https://i.pinimg.com/564x/cf/cd/a3/cfcda3e5999bc356bc679d0bdda7bcd0.jpg"
            />
            <Box justifyContent="center" alignItems="center">
              <Typography> Custom Bouquets</Typography>
              <Button variant="contained" color="secondary">
                Custom Bouquets
              </Button>
            </Box>
          </Grid>

          <Grid item xs={10} md={4}>
            <Box
              sx={{ width: 400, height: 600, padding: 2 }}
              component="img"
              alt="Pre-made Bouquet"
              src="https://i.pinimg.com/564x/c8/43/3a/c8433a2eae5bf6c7ded1797dbcb7e11c.jpg"
            />
            <Box justifyContent="center" alignItems="center">
              <Typography> Pre-made Bouquets</Typography>
              <Button variant="contained" color="secondary">
                Pre-made Bouquets
              </Button>
            </Box>
          </Grid>
          <Grid item xs={1} md={2}></Grid>
        </Grid>
      </Box>

      <Box bgcolor="#F5D9B6" height="100vh">
        <Typography variant="h1" flexGrow="1" textAlign="center">
          How to custom your bouquet?
        </Typography>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={8} md={4}>
            <Box>
              <Box display="flex" flexDirection="row">
                <Box
                  width="100px"
                  heght="100px"
                  component="img"
                  src={"../images/step1.png"}
                />
                <Typography>Choose size and color</Typography>
              </Box>
              <Box display="flex" flexDirection="row">
                <Box
                  width="100px"
                  heght="100px"
                  component="img"
                  src="../images/step2.png"
                />
                <Typography>Choose event,shape and wrapping</Typography>
              </Box>
              <Box display="flex" flexDirection="row">
                <Box
                  width="100px"
                  heght="100px"
                  component="img"
                  src="../images/step3.png"
                />
                <Typography>Choose flowers and greenery</Typography>
              </Box>
              <Box display="flex" flexDirection="row">
                <Box
                  width="100px"
                  heght="100px"
                  component="img"
                  src="../images/step4.png"
                />
                <Typography>Show price and add to cart.</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={8} md={4}>
            <Box
              sx={{ width: 500, height: 600, paddingLeft: 5, margin: 10 }}
              component="img"
              src="https://i.pinimg.com/236x/73/a2/9d/73a29d6cffd1d2d5633a39540973ac9f.jpg"
              alt="how to custom bouquet"
            />
          </Grid>
        </Grid>
      </Box>

      <Box
        bgcolor="#F4EBC7"
        height="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h1">Our Team</Typography>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={8} md={3}>
            <StaffCard />
          </Grid>
          <Grid item xs={8} md={3}>
            <StaffCard />
          </Grid>
          <Grid item xs={8} md={3}>
            <StaffCard />
          </Grid>
        </Grid>
      </Box>

      <Box
        bgcolor="white"
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box bgcolor="#F6C7A5" height="70vh">
          <Grid container display="flex" flexDirection="row">
            <Grid item xs={8} md={6}>
              <Typography variant="h1">Why to choose us?</Typography>
              <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </Typography>
            </Grid>
            <Grid item xs={8} md={6}>
              <Typography>
                {" "}
                <CountUp end={10} duration={2} /> + years of experiences
              </Typography>
              <Typography>
                {" "}
                <CountUp end={2000} duration={2} /> + satisfied customers
              </Typography>
              <Typography>
                {" "}
                <CountUp end={975} duration={2} />+ flower bouquets
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box bgcolor="#F4EBC7" height="100vh">
        <Typography variant="h1">Testimonies</Typography>
        <Grid container display="flex" flexDirection="row" justifyContent="center"  >
          <Grid item>
            <TestimonialsCard />
          </Grid>
          <Grid item>
            <TestimonialsCard />
          </Grid>
          <Grid item>
            <TestimonialsCard />
          </Grid>
          <Grid item>
            <TestimonialsCard />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
//<Divider variant="middle" />

/*<Box
            component="img"
            src="https://i.pinimg.com/236x/73/a2/9d/73a29d6cffd1d2d5633a39540973ac9f.jpg"
            alt="how to custom bouquet"
          />
          <Box>
            <Box display="flex" flexDirection="row">
              <Box
                width="50px"
                heght="50px"
                component="img"
                src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/43675/white-circle-emoji-clipart-xl.png"
              />
              <Typography>Choose size and color</Typography>
            </Box>
            <Box display="flex" flexDirection="row">
              <Box
                width="50px"
                heght="50px"
                component="img"
                src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/43675/white-circle-emoji-clipart-xl.png"
              />
              <Typography>Choose event,shape and wrapping</Typography>
            </Box>
            <Box display="flex" flexDirection="row">
              <Box
                width="50px"
                heght="50px"
                component="img"
                src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/43675/white-circle-emoji-clipart-xl.png"
              />
              <Typography>Choose flowers and greenery</Typography>
            </Box>
            <Box display="flex" flexDirection="row">
              <Box
                width="50px"
                heght="50px"
                component="img"
                src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/43675/white-circle-emoji-clipart-xl.png"
              />
              <Typography>Show price and add to cart.</Typography>
            </Box>
          </Box> */
