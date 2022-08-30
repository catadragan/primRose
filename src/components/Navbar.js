import React, { useState } from "react";
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import LocalFloristTwoToneIcon from "@mui/icons-material/LocalFloristTwoTone";
import DrawerComp from "./DrawerComp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useHistory } from "react-router-dom";

const linksArray = [  "Home",  "Custom Bouquets",  "Pre-made Bouquets",  "About",  "Contact",];

const Navbar = ({ activeTab, setActiveTab }) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const navigator = useHistory();

  return (
    <AppBar>
      <Toolbar>
        {isMatch ? (
          <>
            <Typography>
              <LocalFloristTwoToneIcon fontSize="large" />
            </Typography>
            <DrawerComp links={linksArray} />
          </>
        ) : (
          <Grid sx={{ placeItems: "center" }} container>
            <Grid item xs={2}>
              <Typography>
                <LocalFloristTwoToneIcon
                  fontSize="large"
                  onClick={(e, val) => {
                    navigator.push(`/home`);
                  }}
                />
              </Typography>
            </Grid>
            <Grid item xs={8} justifyContent="center" alignItems="center">
              <Tabs
                textColor="inherit"
                padding="10px"
                value={activeTab}
                onChange={(e, val) => {
                  setActiveTab(val);
                  navigator.push(`/${linksArray[val]}`);
                }}
              >
                {linksArray.map((link, index) => (
                  <Tab
                    style={{
                      padding: "0px  ",
                      margin: "0px 40px 0px 40px",
                      color: "white",
                      fontSize: "30px",
                    }}
                    key={index}
                    label={link}
                  />
                ))}
              </Tabs>
            </Grid>
            <Grid item xs={2} justifyContent="center" alignItems="center">
              <Box display="flex">
                <FavoriteBorderIcon
                  lg={{ marginLeft: "auto", background: "#FAAD89" }}
                />
                <ShoppingCartIcon
                  lg={{ marginLeft: "auto", background: "#FAAD89" }}
                  variant="contained"
                  onClick={(e, val) => {
                    navigator.push(`/shopping-cart`);
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
