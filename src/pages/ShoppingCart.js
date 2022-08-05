import React from "react";
import Navbar from "../components/Navbar";
import CarouselComp from "../components/CarouselComp";
import Footer from "../components/Footer";
import { Button } from "@mui/material";
import { useContext } from "react";
import { CartStore } from "../App";


const ShoppingCart = ({ cartItems, activeTab, setActiveTab}) => {
  
  
  return (
    <CartStore.Consumer>
      {({cartItems, addToCart}) => {
        console.log(cartItems);
        return (
          <div>
            <Navbar activeTab={activeTab}  />
            <CarouselComp/>
            <div>
              {cartItems.length === 0 && <div>Shopping Cart is empty</div>}
            </div>
            {cartItems.map((item) => (
              <div key={item.id}>
                <div>{item.name}</div>
                <div>
                  <Button onClick={() => addToCart(item)}>+</Button>
                  <Button onClick={() => removeFromCart(item)}>-</Button>
                </div>
                <div>
                  {item.qty} x ${Number(item.price).toFixed(2)}
                </div>
              </div>
            ))}
            <Footer />
          </div>
        );
      }}
    </CartStore.Consumer> 
  );
};

export default ShoppingCart;
/*<CartStore.Consumer>
      {({cartItems, addToCart}) => {
        console.log(cartItems);
        return (
          <div>
            <Navbar  />
            <CarouselComp/>
            <div>
              {cartItems.length === 0 && <div>Shopping Cart is empty</div>}
            </div>
            {cartItems.map((item) => (
              <div key={item.id}>
                <div>{item.name}</div>
                <div>
                  <Button onClick={() => addToCart(item)}>+</Button>
                  <Button onClick={() => removeFromCart(item)}>-</Button>
                </div>
                <div>
                  {item.qty} x ${Number(item.price).toFixed(2)}
                </div>
              </div>
            ))}
            <Footer />
          </div>
        );
      }}
    </CartStore.Consumer> */