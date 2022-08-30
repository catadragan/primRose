import React from "react";
import Navbar from "../../components/Navbar";
import CarouselComp from "../../components/CarouselComp";
import Footer from "../../components/Footer";
import StaffCard from "../../components/StaffCard";
import { Typography, Box, Divider, Button, Grid } from "@mui/material";
import CountUp from "react-countup";
import TestimonialsCard from "../../components/TestimonialsCard";
import home1 from "../../images/home1.jpg";
import customBouquet from "../../images/customBouquet.jpg";
import preMadeBouquet from "../../images/preMadeBouquet.jpg";
import steps from "../../images/steps.jpg";
import step1 from "../../images/step1.png";
import step2 from "../../images/step2.png";
import step3 from "../../images/step3.png";
import step4 from "../../images/step4.png";
import staff1 from "../../images/staff1.jpg";
import staff2 from "../../images/staff2.jpg";
import staff3 from "../../images/staff3.png";
import Ale from "../../images/Ale.JPG";
import AleHerembas from "../../images/AleHerembas.JPG";
import Victor from "../../images/Victor.JPG";
import Alex from "../../images/Alex.JPG";
import { useHistory } from "react-router-dom";

const Home = ({ activeTab, setActiveTab }) => {
  const navigator = useHistory();
  return (
    <div className="page-content">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <CarouselComp />
      <Box
        bgcolor="#FFF7ED"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="90vh"
      >
        <Grid
          height="90%"
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          marginRight="5%"
          marginLeft="20%"
        >
          <Grid
            item
            alignItems="center"
            justifyContent="center"
            display="flex"
            xs={10}
            md={6}
            lg={6}
          >
            <Box
              width="500px"
              height="750%"
              component="img"
              alt="Flower picture."
              src={home1}
              
            />
          </Grid>
          <Grid
            item
            alignItems="center"
            justifyContent="center"
            display="flex"
            flexDirection="column"
            padding="5% 10% 5% 5%"
            xs={10}
            md={6}
            lg={6}
          >
            <Box>
              <Typography variant="h1" style={{ marginBottom: "5%" }}>
                Who we are?
              </Typography>
              <Typography variant="body1" style={{ fontSize: "1.2rem" }}>
                Spanning two generations of love for floristry, 85 Flowers is
                your friendly floral designer to create breathtaking décor
                within your budget, and make your big day worry free. Founded by
                Mrs Teo, a former bridal gown designer with an impeccable design
                sense, her love for colours, shapes and textures led her to
                bridal floristry over 20 years ago, decidedly planting 85
                Flowers’ roots in the famous heartlands of 85 Bedok North Road.
                With intuitive listening and nimble fingers, her bespoke
                creations brought clients back, event after event. Growing up as
                a young girl in her mother’s flower shop, Lindt, who now helms
                85 Flowers, exudes warmth and creates impactful designs. Wedding
                couples often effortlessly check off all things floral (church
                wedding styling, bridal bouquet, bridal car, bridal accessories,
                venue décor) after the first appointment.
              </Typography>
            </Box>
            <Button
              variant="contained"
              style={{ width: "fit-content", margin: "5%" }}
              onClick={(e, val) => {
                navigator.push(`/about`);
              }}
            >
              Read more
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        bgcolor="white" 
        height="90vh"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Typography variant="h1" style={{ marginBottom: "10px" }}>
            What we offer?
          </Typography>
        </Box>
        <Divider variant="middle" />
        <Typography
          variant="body1"
          style={{ margin: "0% 25%", fontSize: "1.2rem" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate.
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={1} md={2}></Grid>
          <Grid
            item
            xs={10}
            md={4}
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              marginRight: "0px",
            }}
          >
            <Box
              style={{ width: "22rem", height: "30rem", padding: "16px" }}
              component="img"
              alt="Custom Bouquet "
              src={customBouquet}
            />
            <Box
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography> Custom Bouquets</Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={(e, val) => {
                  navigator.push(`/Custom Bouquets`);
                }}
              >
                Custom Bouquets
              </Button>
            </Box>
          </Grid>

          <Grid
            item
            xs={10}
            md={4}
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              marginLeft: "0px",
            }}
          >
            <Box
              style={{ width: "22rem", height: "30rem", padding: "16px" }}
              component="img"
              alt="Pre-made Bouquet"
              src={preMadeBouquet}
            />
            <Box
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography> Pre-made Bouquets</Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={(e, val) => {
                  navigator.push(`/Pre-made Bouquets`);
                }}
              >
                Pre-made Bouquets
              </Button>
            </Box>
          </Grid>
          <Grid item xs={1} md={2}></Grid>
        </Grid>
      </Box>

      <Box bgcolor="#FFF7ED" height="100vh">
        <Typography
          variant="h1"
          flexGrow="1"
          textAlign="center"
          paddingTop="4%"
        >
          How to custom your bouquet?
        </Typography>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          <Grid
            item
            xs={8}
            md={4}
            justifyContent="center"
            alignItems="center"
            display="flex"
          >
            <Box>
              <Box display="flex" flexDirection="row" alignItems="center">
                <Box width="120px" margin="5%" component="img" src={step1} />
                <Typography fontSize="2rem">Choose size and color</Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
              >
                <Box width="110px" margin="5%" component="img" src={step2} />
                <Typography fontSize="2rem">
                  Choose event,shape and wrapping
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
              >
                <Box width="120px" margin="5%" component="img" src={step3} />
                <Typography fontSize="2rem">
                  Choose flowers and greenery
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
              >
                <Box width="110px" margin="5%" component="img" src={step4} />
                <Typography fontSize="2rem">
                  Show price and add to cart.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={8}
            md={4}
            justifyContent="center"
            alignItems="center"
            display="flex"
          >
            <Box
              sx={{ width: 500, height: 600, paddingLeft: 5, margin: 10 }}
              component="img"
              src={steps}
              alt="how to custom bouquet"
            />
          </Grid>
        </Grid>
      </Box>

      <Box
        bgcolor="white"
        height="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h1" margin="5% 2% 2%">
          Our Team
        </Typography>
        <Grid container alignItems="center" justifyContent="center">
          {[
            {
              img: staff1,
              name: "Olivia Peterson",
              job: "Manager",
            },
            {
              img: staff2,
              name: "Sophia",
              job: "Main florist",
            },
            {
              img: staff3,
              name: "Isabella",
              job: "Floral designer",
            },
          ].map((item) => (
            <Grid item xs={8} md={3} margin="0% 2% 2%">
              <StaffCard srcImg={item.img} name={item.name} job={item.job} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        bgcolor="white"
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box bgcolor="#F6C7A5" height="70vh" style={{ margin: "10%" }}>
          <Grid
            container
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            flexWrap="nowrap"
            style={{ margin: "8%" }}
          >
            <Grid item xs={8} md={6}>
              <Typography variant="h1">Why to choose us?</Typography>
              <Typography style={{ margin: "5%", fontSize: "1.5rem" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </Typography>
            </Grid>

            <Divider
              orientation="vertical"
              flexItem
              color="black"
              fontSize="4rem"
              style={{margin:"5px", marginRight:"20px"}}
            />
            {/* onFocus={} */}
            <Grid item xs={8} md={6} margin="1%">
              <Box display="flex" flexDirection="row">
                <CountUp
                  end={10}
                  duration={2}
                  style={{ color: "white",fontFamily: "Aboreto", fontSize: "6rem" }}
                />
                <Typography
                  style={{
                    color: "white",
                    fontSize: "2rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "1rem",
                  }}
                >
                  years of experiences
                </Typography>
              </Box>
              <Box display="flex" flexDirection="row">
                <CountUp
                  end={2000}
                  duration={2}
                  style={{ color: "white",fontFamily: "Aboreto", fontSize: "6rem" }}
                />
                <Typography
                  style={{
                    color: "white",
                    fontSize: "2rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "1rem",
                  }}
                >
                  satisfied customers
                </Typography>
              </Box>
              <Box display="flex" flexDirection="row">
                <CountUp
                  end={975}
                  duration={2}
                  style={{ color: "white",fontFamily: "Aboreto", fontSize: "6rem" }}
                />
                <Typography
                  style={{
                    color: "white",
                    fontSize: "2rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "1rem",
                  }}
                >
                  flower bouquets
                </Typography>
              </Box>
            </Grid>

          </Grid>
        </Box>
      </Box>

      <Box bgcolor="#FFF7ED" height="100vh">
        <Typography
          variant="h1"
          display="flex"
          justifyContent="center"
          padding="5%"
        >
          Testimonies
        </Typography>
        <Grid
          container
          display="flex"
          flexDirection="row"
          justifyContent="center"
          style={{ flexDirection: "row", display: "flex", flewWrap: "no-wrap" }}
        >
          {[
            {
              img: Ale,
              text: "Best flower shop.   I would kindly recommend this beautiful flower shop due to all the professional way of giving attention and high quality to the customers.",
              name: "Alexandra ",
              job: "customer",
            },
            {
              img: Victor,
              text: " I customized the desired flower bouquet, and they surprised me with the results, as no one else.I'll come back with the first occasion due to nice collaboration and quality of the services. ",
              name: "Victor ",
              job: "customer",
            },
            {
              img: AleHerembas,
              text: "I ordered online last time, and I was surprised by the fast delivery! The bouquet was even more beautiful than I expected!",
              name: "Rebeca",
              job: "VIP customer",
            },
            {
              img: Alex,
              text: "Great job guys, it’s a pleasure for me to navigate on this site to choose beautiful flowers. Your work is awesome!",
              name: "Alex",
              job: "customer",
            },
          ].map((item) => (
            <Grid
              item
              xs={8}
              md={2.5}
              display="flex"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              margin="0% 2% 2%"
            >
              <TestimonialsCard
                avatarImg={item.img}
                text={item.text}
                name={item.name}
                job={item.job}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </div>
  );
};
export default Home;

