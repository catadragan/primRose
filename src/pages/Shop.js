import React, { useState } from "react";
import { CirclePicker } from "react-color";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import elements from "../components/Prices.json";
import {
  Typography,
  Button,
  ButtonGroup,
  Container,
  Box,
  TextField,
  MenuItem,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import shop1 from "../images/shop1.jpg";
import { CartStore } from "../App";

const colorsListHash = {
  pink: "#e91e63",
  purple: "#9c27b0",
  yellow: "#F6CB16",
  orange: "#ff5722",
  red: "#ED0000",
  burgundy: "#890620",

  white: "#F1EBDE",
  cream: "#EAD2AC",
  peach: "#F4A47D",
  salmon: "#f44336",
  dustyPink: "#C65B7C",
  dustyPurple: "#A4778B",
};

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
const StyledButtonGroup = styled(ButtonGroup)({
  "&.MuiButtonGroup-root": {
    margin: "20px",
  },
});

function Shop({ activeTab, setActiveTab, bouquet }) {
  const [details, setDetails] = useState("");
  const [detailsError, setDetailsError] = useState(false);
  const [eventt, setEventt] = useState("");
  const [shape, setShape] = useState("");
  const [flowers, setFlowers] = useState([]);
  const [greenery, setGreenery] = useState("");
  const [wrapping, setWrapping] = useState("");
  const [selectedColor, setSelectedColor] = useState("#e91e63");
  const [total, setTotal] = useState(0);
  const [selected, setSelected] = useState(new Map());

  const handleSubmit = (e) => {
    e.preventDefault();
    setDetailsError(false);
    if (details == "") {
      setDetailsError(true);
    }
    if (details) {
      console.log(details);
    }
  };
  const handleChangeEventt = (event) => {
    setEventt(event.target.value);
    setSelectedHandler("event", event.target.value);
  };
  const handleChangeShape = (event) => {
    setShape(event.target.value);
    setSelectedHandler("shape", event.target.value);
  };
  const handleChangeFlowers = (event) => {
    const value = event.target.value;
    setFlowers(typeof value === "string" ? value.split(",") : value);
    setSelectedHandler("flowers", event.target.value);
  };
  const handleChangeGreenery = (event) => {
    setGreenery(event.target.value);
    setSelectedHandler("greenery", event.target.value);
  };
  const handleChangeWrapping = (event) => {
    setWrapping(event.target.value);
    setSelectedHandler("wrapping", event.target.value);
  };
  function changeColor(color) {
    setSelectedColor(color.hex);
    setSelectedHandler("color", color.target.value);
  }

  const computeTotal = () => {
    const values = [...selected.values()];
    let totalSum = 0;
    [...selected.keys()].forEach((objectKey) => {
      console.log(objectKey);
      if (objectKey === "flowers") {
        totalSum += selected
          .get(objectKey)
          .reduce((partialSum, a) => parseInt(partialSum) + parseInt(a), 0);
      } else {
        totalSum += parseInt(selected.get(objectKey));
      }
    });
    console.log(totalSum);
    return totalSum;
  };
  const setSelectedHandler = (category, id) => {
    setSelected((prev) => new Map([...prev, [category, id]]));
  };

  return (
    <CartStore.Consumer>
      {(contextState) => {
        console.log(contextState);
        let cartItems = contextState.cartItems;
        let addToCart = contextState.addToCart;

        return (
          <div className="page-content">
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

            <Container>
              <Typography
                variant="h2"
                color="primary"
                align="center"
                padding="3%"
              >
                Customise your bouquet
              </Typography>
              <Grid container marginBottom="10%">
                <Grid item xs={12} md={6}>
                  <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <Container>
                      <Box
                        alignItems="center"
                        justifyContent="center"
                        display="flex"
                      >
                        {elements.prices.map((element) => {
                          if (element.category === "size") {
                            return (
                              <Button
                                color="primary"
                                variant="contained"
                                style={{
                                  margin: "10px",
                                  padding: "10px 50px",
                                  fontSize: "1.2rem",
                                }}
                                key={element.id}
                                onClick={() => {
                                  setSelectedHandler(
                                    element.category,
                                    element.price
                                  );
                                }}
                              >
                                {element.name}
                              </Button>
                            );
                          }
                        })}
                      </Box>

                      <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        padding="5%"
                      >
                        <CirclePicker
                          width={"500px"}
                          circleSize={60}
                          circleSpacing={10}
                          colors={colorsListHash}
                          color={selectedColor}
                          alignItems="center"
                          justifyItems="center"
                          style={{ marginLeft: "40px" }}
                          onChangeComplete={changeColor}
                        />
                      </Box>

                      <br></br>
                      <StyledTextField
                        label="Choose event"
                        select
                        value={eventt}
                        onChange={handleChangeEventt}
                        fullWidth
                      >
                        {elements.prices.map((element) => {
                          if (element.category === "event") {
                            return (
                              <MenuItem
                                key={element.id}
                                value={element.price}
                                name={element.name}
                              >
                                {element.name}
                              </MenuItem>
                            );
                          }
                        })}
                      </StyledTextField>

                      <br></br>
                      <StyledTextField
                        label="Choose shape"
                        select
                        value={shape}
                        onChange={handleChangeShape}
                        fullWidth
                      >
                        {elements.prices.map((element) => {
                          if (element.category === "shape") {
                            return (
                              <MenuItem
                                key={element.id}
                                value={element.price}
                                name={element.name}
                              >
                                {element.name}
                              </MenuItem>
                            );
                          }
                        })}
                      </StyledTextField>

                      <br></br>
                      <StyledTextField label="Choose flowers"
                        select
                        value={flowers}
                        onChange={handleChangeFlowers}
                        fullWidth
                        SelectProps={{
                          multiple: true,
                        }}
                      >
                        {elements.prices.map((element) => {
                          if (element.category === "flowers") {
                            return (
                              <MenuItem
                                key={element.id}
                                value={element.id}
                                name={element.name}
                              >
                                {element.name}
                              </MenuItem>
                            );
                          }
                        })}
                      </StyledTextField>

                      <br></br>
                      <StyledTextField label="Choose greenery"
                        select
                        value={greenery}
                        onChange={handleChangeGreenery}
                        fullWidth
                      >
                        {elements.prices.map((element) => {
                          if (element.category === "greenery") {
                            return (
                              <MenuItem
                                key={element.id}
                                value={element.id}
                                name={element.name}
                              >
                                {element.name}
                              </MenuItem>
                            );
                          }
                        })}
                      </StyledTextField>

                      <br></br>
                      <StyledTextField
                        label="Choose wrapping"
                        select
                        value={wrapping}
                        onChange={handleChangeWrapping}
                        fullWidth
                      >
                        {elements.prices.map((element) => {
                          if (element.category === "wrapping") {
                            return (
                              <MenuItem
                                key={element.id}
                                value={element.id}
                                name={element.name}
                              >
                                {element.name}
                              </MenuItem>
                            );
                          }
                        })}
                      </StyledTextField>

                      <br></br>
                      <StyledTextField
                        onChange={(e) => setDetails(e.target.value)}
                        label="Details"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        multiline
                        rows={4}
                        error={detailsError}
                      ></StyledTextField>
                    </Container>
                  </form>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box
                    height="700px"
                    width="600px"
                    padding="16px"
                    component="img"
                    alignItems="center"
                    justifyContent="center"
                    display="block"
                    margin="auto"
                    style={{ objectFit: "none" }}
                    alt="Your bouquet might look like this one."
                    src={shop1}
                  />

                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <StyledButton
                      color="primary"
                      variant="contained"
                      style={{ fontSize: "1.2rem" }}
                      endIcon={<AttachMoneyOutlinedIcon />}
                      onClick={() => {
                        setTotal(computeTotal());
                      }}
                    >
                      Show Price
                    </StyledButton>
                    <StyledTextField value={total}>{total}</StyledTextField>
                  </Box>

                  <Button
                    type="submit"
                    color="secondary"
                    variant="contained"
                    endIcon={<AddShoppingCartOutlinedIcon />}
                    display="flex"
                    style={{ marginLeft: "18%", fontSize: "1.1rem" }}
                    onClick={() => addToCart(bouquet, cartItems)}
                  >
                    Add to cart
                  </Button>
                </Grid>
              </Grid>
            </Container>
            
            <Footer />
          </div>
        );
      }}
    </CartStore.Consumer>
  );
}

export default Shop;
