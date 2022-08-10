import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Shop2 from "./pages/Shop2";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cancelation from "./pages/Cancelation";
import Delivery from "./pages/Delivery";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ShoppingCart from "./pages/ShoppingCart";
import './App.css'



export const CartStore = React.createContext([]);
const theme = createTheme({
  palette: {
    primary: {
      light: "#F4EBC7",
      main: "#C0D7B0",
      dark: "#A0CAA2",
      contrastText: "#fff",
    },
    secondary: {
      light: "#F5D9B6",
      main: "#F6C7A5",
      dark: "#F89171",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "Handlee",
  },
});

const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  const addToCart = (bouquet, cartItems) => {
    console.log("random", cartItems);
    let newCartItems = cartItems;
    const exist = cartItems.find((x) => x.id === bouquet.id);

    if (exist) {
      console.log(exist);
      newCartItems = cartItems.map((x) => {
        return x.id === bouquet.id ? { ...exist, qty: exist.qty + 1 } : x; //change quantity (+)
      });
    } else {
      newCartItems = [...cartItems, { ...bouquet, qty: 1 }];
    }
    
    setCartStoreState((prevState) => ({
      ...prevState,
      cartItems: newCartItems,
    }));
  };

  const [cartStoreState, setCartStoreState] = useState({
    cartItems: [],
    addToCart: addToCart,
  });

  return (
    <CartStore.Provider value={cartStoreState}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
          <Route exact path="/">
              <Home activeTab={activeTab} setActiveTab={setActiveTab} />
            </Route>
            <Route  path="/home">
              <Home activeTab={activeTab} setActiveTab={setActiveTab} />
            </Route>
            <Route path="/shopping-cart">
              <ShoppingCart activeTab={activeTab} setActiveTab={setActiveTab} />
            </Route>
            <Route path="/shop">
              <Shop activeTab={activeTab} setActiveTab={setActiveTab} />
            </Route>
            <Route path="/shop2">
              <Shop2 activeTab={activeTab} setActiveTab={setActiveTab} />
            </Route>
            <Route path="/about">
              <About activeTab={activeTab} setActiveTab={setActiveTab} />
            </Route>
            <Route path="/contact">
              <Contact activeTab={activeTab} setActiveTab={setActiveTab} />
            </Route>
            <Route path="/cancelation">
              <Cancelation activeTab={activeTab} setActiveTab={setActiveTab} />
            </Route>
            <Route path="/delivery">
              <Delivery activeTab={activeTab} setActiveTab={setActiveTab} />
            </Route>
            <Route path="/privacy">
              <Privacy activeTab={activeTab} setActiveTab={setActiveTab} />
            </Route>
            <Route path="/terms">
              <Terms activeTab={activeTab} setActiveTab={setActiveTab} />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </CartStore.Provider>
  );
};

export default App;

