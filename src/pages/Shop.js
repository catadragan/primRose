import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CarouselComp from "../components/CarouselComp";
import Footer from "../components/Footer";
import {
  Typography,
  Button,
  ButtonGroup,
  Container,
  Box,
  Stack,
  TextField,
  MenuItem,
  Grid,
} from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import { styled } from "@mui/system";
import { CirclePicker } from "react-color";
import elements from "../components/Prices.json";
import shop1 from "../images/shop1.jpg";

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
  };
  const handleChangeShape = (event) => {
    setShape(event.target.value);
  };
  const handleChangeFlowers = (event) => {
    const value = event.target.value;
    setFlowers(typeof value === "string" ? value.split(",") : value);
  };
  const handleChangeGreenery = (event) => {
    setGreenery(event.target.value);
  };
  const handleChangeWrapping = (event) => {
    setWrapping(event.target.value);
  };
  function changeColor(color) {
    setSelectedColor(color.hex);
  }

  const computeTotal = () => {
    const values = [...selected.values()];
    const sum = values.reduce(
      (partialSum, a) => parseInt(partialSum) + parseInt(a),
      0
    );
    return sum;
  };
  const setSelectedHandler = (category, id) => {
    setSelected((prev) => new Map([...prev, [category, id]]));
  };

  return (
    <div className="page-content">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <Container>
        <Typography variant="h2" color="primary" align="center" padding="3%">
          Customise your bouquet
        </Typography>
        <Grid container marginBottom="10%">
          <Grid item xs={12} md={6}>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <Container>
                <Box alignItems="center" justifyContent="center" display="flex">
                  {elements.prices.map((element) => {
                    if (element.category === "size") {
                      return (
                        <Button
                          color="primary"
                          variant="contained"
                          style={{ margin: "10px", padding: "10px 50px" }}
                          key={element.id}
                          onClick={() => {
                            setSelectedHandler(element.category, element.id);
                          }}
                        >
                          {element.name}
                        </Button>
                      );
                    }
                  })}
                </Box>

                <br></br>
                <Typography align="center" variant="body1">
                  Choose the color for your bouquet.
                </Typography>

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
                    marginLeft="30pxs"
                    //onChange={(updatedColor) => setColor(updatedColor)}
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
                          value={element.id}
                          name={element.name}
                        >
                          {element.name}
                        </MenuItem>
                      );
                    }
                  })}

                  {/* <MenuItem value="Wedding">Wedding</MenuItem>
                  <MenuItem value="Engagement">Engagement</MenuItem>
                  <MenuItem value="Christmas">Christmas</MenuItem>
                  <MenuItem value="New Eve">New Eve</MenuItem>
                  <MenuItem value="Easter">Easter</MenuItem>
                  <MenuItem value="Valentine">Valentine's day</MenuItem>
                  <MenuItem value="Mother's day">Mother's day</MenuItem>
                  <MenuItem value="Graduation">Graduation</MenuItem> */}
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
                          value={element.id}
                          name={element.name}
                        >
                          {element.name}
                        </MenuItem>
                      );
                    }
                  })}

                  {/* <MenuItem value="Asymmetric">Asymmetric</MenuItem>
                  <MenuItem value="Heart">Heart</MenuItem>
                  <MenuItem value="Pyramidal">Pyramidal</MenuItem>
                  <MenuItem value="Round">Round</MenuItem> */}
                </StyledTextField>

                <br></br>
                <StyledTextField
                  label="Choose flowers"
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
                    }
                  })}

                  {/* {elements.prices.map(element => {
                    if (element.category === "flowers") {
                      <MenuItem
                        key={element.id}
                        value={element.id}
                        name={element.name}
                      >
                        {element.name}
                      </MenuItem>;
                    }
                  })} */}

                  {/* <MenuItem value="Alstroemeria">Alstroemeria</MenuItem>
                  <MenuItem value="Amaryllis">Amaryllis</MenuItem>
                  <MenuItem value="Anemone">Anemone</MenuItem>
                  <MenuItem value="Calla">Calla Lily</MenuItem>
                  <MenuItem value="Carnation">Carnations</MenuItem>
                  <MenuItem value="Chrysanthemum">Chrysanthemum</MenuItem>
                  <MenuItem value="Cymbidium">Cymbidium</MenuItem>
                  <MenuItem value="Daffodils">Daffodils</MenuItem>
                  <MenuItem value="Dahlia">Dahlia</MenuItem>
                  <MenuItem value="Delphinium">Delphinium</MenuItem>
                  <MenuItem value="Eustoma">Eustoma</MenuItem>
                  <MenuItem value="Freesia">Freesia</MenuItem>
                  <MenuItem value="Gerbera">Gerbera</MenuItem>
                  <MenuItem value="Gladiolus">Gladiolus</MenuItem>
                  <MenuItem value="Hyacinth">Hyacinth</MenuItem>
                  <MenuItem value="Hydrangea">Hydrangea</MenuItem>
                  <MenuItem value="Hypericum">Hypericum</MenuItem>
                  <MenuItem value="Iris">Iris</MenuItem>
                  <MenuItem value="Lavender">Lavender</MenuItem>
                  <MenuItem value="Lilac">Lilac</MenuItem>
                  <MenuItem value="Miniroses">Miniroses</MenuItem>
                  <MenuItem value="Ornithogalum">Ornithogalum</MenuItem>
                  <MenuItem value="Peony">Peony</MenuItem>
                  <MenuItem value="Phalaenopsis">Phalaenopsis</MenuItem>
                  <MenuItem value="Ranunculus">Ranunculus</MenuItem>
                  <MenuItem value="Stock">Stock</MenuItem>
                  <MenuItem value="Garden">Rose garden</MenuItem>
                  <MenuItem value="Roses">Roses</MenuItem>
                  <MenuItem value="Tulips">Tulips</MenuItem>
                  <MenuItem value="Wax">Wax</MenuItem> */}
                </StyledTextField>

                <br></br>
                <StyledTextField
                  label="Choose greenery"
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

                  {/* <MenuItem value="Aspidistra">Aspidistra</MenuItem>
                  <MenuItem value="Cinereea">Eucalyptus Cinereea</MenuItem>
                  <MenuItem value="Populus">Eucalyptus Populus</MenuItem>
                  <MenuItem value="Dusty">Dusty Miller</MenuItem>
                  <MenuItem value="Italian">Italian Ruscus</MenuItem>
                  <MenuItem value="Magnolia">Magnolia Leaf</MenuItem>
                  <MenuItem value="Monstera">Monstera</MenuItem>
                  <MenuItem value="Olive">Olive</MenuItem>
                  <MenuItem value="Pistachia">Pistachia</MenuItem>
                  <MenuItem value="Ruscus">Ruscus</MenuItem>
                  <MenuItem value="Salal">Salal</MenuItem>
                  <MenuItem value="No">No greenery</MenuItem> */}
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

                  {/* <MenuItem value="Box">Box</MenuItem>
                  <MenuItem value="Ribbon">Ribbon</MenuItem>
                  <MenuItem value="Vase">Vase</MenuItem>
                  <MenuItem value="Wrapping">Wrapping</MenuItem> */}
                </StyledTextField>

                <br></br>
                <StyledTextField
                  onChange={(e) => setDetails(e.target.value)}
                  //  className={classes.field}
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
              style={{ marginLeft: "16%" }}
            >
              Add to cart
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default Shop;
/* sx={{
  //   backgroundColor: "secondary",
  //   height: "500px",
  //   width: "500px",
  //   padding: "16px",
  // }}
  
  // lx={{
  //   height: 233,
  //   width: 350,
  //   // maxHeight: { xs: 233, md: 167 },
  //   // maxWidth: { xs: 350, md: 250 },
  // }}*/
