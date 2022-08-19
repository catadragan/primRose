import React from "react";
import Navbar from "../components/Navbar";
import CarouselComp from "../components/CarouselComp";
import Footer from "../components/Footer";
import { Typography, Grid, Box } from "@mui/material";
import StaffCard from "../components/StaffCard";
import home1 from "../images/home1.jpg";
import staff1 from "../images/staff1.jpg";
import staff2 from "../images/staff2.jpg";
import staff3 from "../images/staff3.png";
import CountUp from "react-countup";

const About = ({ activeTab, setActiveTab }) => {
  return (
    <div className="page-content">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

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
              //src="https://i.pinimg.com/564x/55/3a/06/553a06ca7631d2c0b4a3d65964dfd899.jpg"
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
                venue décor) after the first appointment.Spanning two
                generations of love for floristry, 85 Flowers is your friendly
                floral designer to create breathtaking décor within your budget,
                and make your big day worry free.
              </Typography>
              <Typography variant="body1" style={{ fontSize: "1.2rem" }}>
                Founded by Mrs Teo, a former bridal gown designer with an
                impeccable design sense, her love for colours, shapes and
                textures led her to bridal floristry over 20 years ago,
                decidedly planting 85 Flowers’ roots in the famous heartlands of
                85 Bedok North Road. With intuitive listening and nimble
                fingers, her bespoke creations brought clients back, event after
                event. Growing up as a young girl in her mother’s flower shop,
                Lindt, who now helms 85 Flowers, exudes warmth and creates
                impactful designs. Wedding couples often effortlessly check off
                all things floral (church wedding styling, bridal bouquet,
                bridal car, bridal accessories, venue décor) after the first
                appointment.
              </Typography>
            </Box>
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
            style={{ margin: "10%" }}
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
         
            {/* onFocus={} */}
            <Grid item xs={8} md={6} margin="1%">
              <Box display="flex" flexDirection="row">
                <CountUp
                  end={10}
                  duration={2}
                  style={{ color: "white", fontSize: "5rem" }}
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
                  style={{ color: "white", fontSize: "5rem" }}
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
                  style={{ color: "white", fontSize: "5rem" }}
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

      <Footer />
    </div>
  );
};

export default About;
/* <Paper
        component="p"
        sx={{ background: "#F6C7A5", padding: 5 }}
        elevation={5}
        style={{ height: 200, width: 500, marginLeft: 100, marginTop: 100 }}
      >
        <Typography variant="subtitle1">HOW IT'S BEGINS</Typography>
      </Paper>
      <Typography variant="subtitle1">WHO WE ARE:</Typography>
      <Typography variant="subtitle1">WHAT WE OFFER:</Typography>
      <Typography variant="body1">good quality flower, arrangements</Typography>
      <Typography variant="subtitle1">DESCRIPTION:</Typography>
      <Typography variant="subtitle1">OUR MAIN GOALS:</Typography>
      <Typography variant="subtitle1">OUR BENEFITS?</Typography>
      <Typography variant="body1">
        free shipping, over 50£ shipping in several hours in our town,secure
        payment 1000+
      </Typography>
      <Typography variant="body1"> sattisfied customers </Typography>
      <Typography variant="subtitle1">
        STAFF PICTURES : owner manager and floral designer
      </Typography> */
