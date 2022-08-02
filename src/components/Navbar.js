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
  useMediaQuery
} from "@mui/material";
import LocalFloristTwoToneIcon from "@mui/icons-material/LocalFloristTwoTone";
import DrawerComp from "./DrawerComp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {useHistory} from 'react-router-dom'

const Navbar = ({ links }) => {
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  const [value, setValue] = useState(0);
  const navigator = useHistory();

  return (
    <AppBar>
      <Toolbar>
        {isMatch ? (
          <>
            <Typography>
              <LocalFloristTwoToneIcon fontSize="large" />
            </Typography>
            <DrawerComp links={links} />
          </>
        ) : (
          <Grid sx={{ placeItems: "center" }} container>
            <Grid item xs={2}>
              <Typography>
                <LocalFloristTwoToneIcon fontSize="large" />
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Tabs
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, val) => {setValue(val); navigator.push(`/${links[val]}`)}}
                
              >
                {links.map((link, index) => (
                  <Tab key={index} label={link} onClick={(e,bla)=> ( console.log(e))}/>
                ))}
              </Tabs>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={3}>
              <Box display="flex">
                <FavoriteBorderIcon
                  lg={{ marginLeft: "auto", background: "#FAAD89" }}
                  
                />
                <ShoppingCartIcon
                  lg={{ marginLeft: "auto", background: "#FAAD89" }}
                  variant="contained"
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
