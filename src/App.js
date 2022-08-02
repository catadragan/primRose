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
//import theme from "./theme";

//const primary = "#C0D7B0";
//const accent = "#A0CAA2";

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
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Shop2 />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/shop2">
            <Shop2 />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
