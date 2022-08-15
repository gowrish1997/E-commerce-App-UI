import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import Productlist from "./pages/Productlist";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import { Redirect, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useractions } from "./store/user";
import { useEffect, useState } from "react";
import { cartaddhanlder } from "./store/cart";
import Paybutton from "./Stripe/Paybutton";
import MyOrder from "./pages/MyOrder";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Navigation from "./components/Navigation";

function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.user);
  const mode = useSelector((state) => state.mode);

  const theme = createMuiTheme({
    palette: {
      type: mode.mode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Switch>
          <Route path="/" exact>
            {selector.user ? <Home></Home> : <Register></Register>}
          </Route>
          <Route path="/Products" exact>
            {selector.user ? (
              <Productlist></Productlist>
            ) : (
              <Register></Register>
            )}
          </Route>
          <Route path="/Products/:category">
            {selector.user ? (
              <Productlist></Productlist>
            ) : (
              <Register></Register>
            )}
          </Route>
          <Route path="/Product/:id">
            {selector.user ? <Product></Product> : <Register></Register>}
          </Route>
          <Route path="/cart" exact>
            {selector.user ? <Cart></Cart> : <Register></Register>}
          </Route>
          <Route path="/account/Order" exact>
            {selector.user ? <Order></Order> : <Register></Register>}
          </Route>
          <Route path="/Cart/MyOrder">
            {selector.user ? <MyOrder></MyOrder> : <Register></Register>}
          </Route>
          <Route path="/account/wishlist" exact>
            {selector.user ? <Wishlist></Wishlist> : <Register></Register>}
          </Route>
          <Route path="/account/userprofile">
            {selector.user ? <Profile></Profile> : <Register></Register>}
          </Route>
          <Route path="/register">
            {!selector.user ? (
              <Register></Register>
            ) : (
              <Redirect to="/"></Redirect>
            )}
          </Route>
          <Route path="/login">
            {!selector.user ? <Login></Login> : <Redirect to="/"></Redirect>}
          </Route>

          <Route path="/pay">
            {selector.user ? <Paybutton></Paybutton> : <Register></Register>}
          </Route>
        </Switch>
       </Paper>
     </ThemeProvider>
  );
}
export default App;
