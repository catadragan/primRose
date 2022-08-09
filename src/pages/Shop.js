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
} from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import { styled } from "@mui/system";
import { CirclePicker } from "react-color";

const colorsList = [
  "#e91e63",
  "#9c27b0",
  "#F6CB16",
  "#ff5722",
  "#ED0000",
  "#890620",

  "#F1EBDE",
  "#EAD2AC",
  "#F4A47D",
  "#f44336",
  "#C65B7C",
  "#A4778B",
];

//import { makeStyles } from "@mui/material/styles";
//import { makeSyles } from "@mui/material";
//import { makeStyles } from "@mui/styles";

/*
const useStyles = makeStyles({
    btn: {
        fontSize: 30,
        backgroundColor: 'violet',
        '&:hover': {
            backgroundColor:  'red'
        }
    },
    title:{
        textDecoration: 'underline',
        marginBottom: 20 

    }
})
*/
/*const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});
*/

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

function Shop({ activeTab, setActiveTab, bouquet}) {
  //const classes = useStyles();
  const [details, setDetails] = useState("");
  const [detailsError, setDetailsError] = useState(false);
  const [eventt, setEventt] = useState("");
  const [shape, setShape] = useState("");
  const [flowers, setFlowers] = useState([]);
  const [greenery, setGreenery] = useState("");
  const [wrapping, setWrapping] = useState("");
  const [selectedColor, setSelectedColor] = useState("#e91e63");

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
    console.log(setEventt, eventt);
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

  
  return (
    <div className="page-content">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <Container>
        <Typography variant="h2" color="primary" align="center">
          Customise your bouquet
        </Typography>
        <Stack direction="row">
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
            alt="Your bouquet might look like this one."
            src="https://i.pinimg.com/564x/31/b0/35/31b035232998b0cf4f34feea416db211.jpg"
          />

          <br></br>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Container>
              <ButtonGroup
                color="primary"
                variant="contained"
                style={{ alignItems: "center" }}
              >
                <Button>Small</Button>
                <Button>Medium</Button>
                <Button>Large</Button>
              </ButtonGroup>

              <br></br>
              <Typography align="center">
                Choose the color for your bouquet.
              </Typography>

              <CirclePicker
                width={"300px"}
                circleSize={40}
                circleSpacing={10}
                colors={colorsList}
                color={selectedColor}
                //onChange={(updatedColor) => setColor(updatedColor)}
                onChangeComplete={changeColor}
              />

              <br></br>
              <StyledTextField
                label="Choose event"
                select
                value={eventt}
                onChange={handleChangeEventt}
                fullWidth
              >
                <MenuItem value="Wedding">Wedding</MenuItem>
                <MenuItem value="Engagement">Engagement</MenuItem>
                <MenuItem value="Christmas">Christmas</MenuItem>
                <MenuItem value="New Eve">New Eve</MenuItem>
                <MenuItem value="Easter">Easter</MenuItem>
                <MenuItem value="Valentine">Valentine's day</MenuItem>
                <MenuItem value="Mother's day">Mother's day</MenuItem>
                <MenuItem value="Graduation">Graduation</MenuItem>
              </StyledTextField>

              <br></br>
              <StyledTextField
                label="Choose shape"
                select
                value={shape}
                onChange={handleChangeShape}
                fullWidth
              >
                <MenuItem value="Asymmetric">Asymmetric</MenuItem>
                <MenuItem value="Heart">Heart</MenuItem>
                <MenuItem value="Pyramidal">Pyramidal</MenuItem>
                <MenuItem value="Round">Round</MenuItem>
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
                <MenuItem value="Alstroemeria">Alstroemeria</MenuItem>
                <MenuItem value="Amaryllis">Amaryllis</MenuItem>
                <MenuItem value="Anemone">Anemone</MenuItem>
                <MenuItem value="Carnation">Carnation</MenuItem>
                <MenuItem value="Calla">Calla Lily</MenuItem>
                <MenuItem value="Carnations">Carnations</MenuItem>
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
                <MenuItem value="Wax">Wax</MenuItem>
              </StyledTextField>

              <br></br>
              <StyledTextField
                label="Choose greenery"
                select
                value={greenery}
                onChange={handleChangeGreenery}
                fullWidth
              >
                <MenuItem value="Aspidistra">Aspidistra</MenuItem>
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
                <MenuItem value="No">No greenery</MenuItem>
              </StyledTextField>

              <br></br>
              <StyledTextField
                label="Choose wrapping"
                select
                value={wrapping}
                onChange={handleChangeWrapping}
                fullWidth
              >
                <MenuItem value="Basket"></MenuItem>
                <MenuItem value="Box">Box</MenuItem>
                <MenuItem value="Ribbon">Ribbon</MenuItem>
                <MenuItem value="Vase">Vase</MenuItem>
                <MenuItem value="Wrapping">Wrapping</MenuItem>
                <MenuItem value="Wood box"></MenuItem>
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

              <br></br>
              <StyledButton
                color="primary"
                variant="contained"
                endIcon={<AttachMoneyOutlinedIcon />}
              >
                Show Price
              </StyledButton>
              <StyledTextField>Price</StyledTextField>

              <StyledButton
                type="submit"
                color="secondary"
                variant="contained"
                endIcon={<AddShoppingCartOutlinedIcon />}
              >
                Add to cart
              </StyledButton>
            </Container>
          </form>
        </Stack>
      </Container>
      <Footer />
    </div>
  );
}

export default Shop;

