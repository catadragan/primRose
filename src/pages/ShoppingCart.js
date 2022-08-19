import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Button,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { CartStore } from "../App";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";

const deleteCartItems = () => {};
const deleteBouquetType = () => {};

const ShoppingCart = ({ activeTab, setActiveTab }) => {
  return (
    <CartStore.Consumer>
      {({ cartItems, addToCart, removeFromCart }) => {
        return (
          <div>
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="page-content" style={{ padding: "10%" }}>
              <Card
                style={{
                  background: "#C0D7B0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "5%"
                }}
                height="64vh"
                
              >
                {cartItems.length === 0 && <div>Shopping Cart is empty!</div>}
              </Card>

              {cartItems.length !== 0 && (
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={1} md={1} />
                    <Grid item xs={3} md={3} />
                    <Grid item xs={2} md={2} textAlign="center">
                      <Typography>NAME</Typography>
                    </Grid>
                    <Grid item xs={2} md={2} textAlign="center">
                      <Typography>BOUQUET PRICE</Typography>
                    </Grid>
                    <Grid item xs={2} md={2} textAlign="center">
                      <Typography>QUANTITY</Typography>
                    </Grid>
                    <Grid item xs={2} md={2} textAlign="center">
                      <Typography>TOTAL</Typography>
                    </Grid>
                  </Grid>
                </Box>
              )}

              {cartItems.map((item) => (
                <Card
                  justify-content="center"
                  alignitems="center"
                  sx={{
                    display: "flex",
                    background: "#C0D7B0",
                    margin: "10px",
                  }}
                  key={item.id}
                >
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                      <Grid
                        item
                        xs={1}
                        md={1}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Box>
                          <IconButton sx={{ padding: 2 }}>
                            <CloseIcon
                              onClick={() => deleteBouquetType(item, cartItems)}
                            />
                          </IconButton>
                        </Box>
                      </Grid>
                      <Grid item xs={3} md={3}>
                        <CardMedia
                          component="img"
                          sx={{ width: 151, height: 151, padding: 2 }}
                          image={require(`../images/${item.src}`)}
                          alt="flower bouquet"
                        />
                      </Grid>
                      <Grid
                        item
                        xs={2}
                        md={2}
                        textAlign="center"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Box sx={{ padding: 2 }}>
                          <Typography>{item.title} </Typography>
                        </Box>
                      </Grid>
                      <Grid
                        item
                        xs={2}
                        md={2}
                        textAlign="center"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Box sx={{ padding: 2 }}>
                          <Typography> {item.price} $</Typography>
                        </Box>
                      </Grid>
                      <Grid
                        item
                        xs={2}
                        md={2}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Box
                          sx={{ padding: 2 }}
                          display="flex"
                          justifyContent="center"
                        >
                          <IconButton
                            onClick={() => removeFromCart(item, cartItems)}
                          >
                            <RemoveCircleOutlineOutlinedIcon />
                          </IconButton>
                          <Typography sx={{ padding: 2 }}>
                            {item.qty}
                          </Typography>
                          <IconButton
                            onClick={() => addToCart(item, cartItems)}
                          >
                            <AddCircleOutlineIcon />
                          </IconButton>
                        </Box>
                      </Grid>
                      <Grid
                        item
                        xs={2}
                        md={2}
                        textAlign="center"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Box>
                          <CardContent sx={{ padding: 2 }}>
                            <Typography>
                              ${item.qty * Number(item.price).toFixed(2)}
                            </Typography>
                          </CardContent>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Card>
              ))}
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                style={{
                  margin: "10%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  marginLeft: "50%",
                }}
              >
                Place order
              </Button>
            </div>
            <Footer />
          </div>
        );
      }}
    </CartStore.Consumer>
  );
};

export default ShoppingCart;
