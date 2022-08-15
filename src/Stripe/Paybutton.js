import React, { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Orderactions } from "../store/Order";
const Button_Contaier = styled.button`
  padding: 10px 20px;
  background-color: teal;
`;
const Paybutton = () => {
  const dispatch = useDispatch();

  const Cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const addres = useSelector((state) => state.address);

  const [stripetoken, setstripetoken] = useState(null);
  const ontoken = (token) => {
    setstripetoken(token);
    console.log(token);
  };

  useEffect(() => {
    const stripe_handler = async () => {
      try {
        const result = await axios.post(
          "http://localhost:3000/api/Checkout/Postslice",
          { tokenId: stripetoken.id, amount: 2000 }
        );
        console.log(result);
      } catch (err) {
        console.log(err.message);
      }
    };
    stripetoken && stripe_handler();
  }, [stripetoken]);
  useEffect(() => {
    const cartproduct = Cart.product;
    const mapped_orderproduct = cartproduct.map((item) => {
      return {
        ...item,
        Addres: addres.deliveryaddres,
        status: "Order confirmed",
      };
    });

    const Order_handler = async () => {
      try {
        const result = await axios.post(
          `http://localhost:3000/api/Order/postOrder/${user.user._id}`,
          {
            userId: user.user._id,
            products: [...mapped_orderproduct],
          }
        );
        console.log(result);
      } catch (err) {
        console.log(err.message);
      }
    };

    stripetoken && Order_handler();
  }, [stripetoken]);

  var stripe =
    "pk_test_51LE8oXSJEIkP6usFeWExX2pOhBq5EB1OgeKnEux5I5xwgg95u7jqnFxXDo5ZLx9BxdTmJBZBZ8b2URZFBJqATOoV00q8rxkhNL";
  return (
    <StripeCheckout
      name="Gowrish shopoping cart"
      Email="kotarigowrish@gmail.com"
      amount={2000}
      currency="usd"
      shippingAddress
      billingAddress
      stripeKey={stripe}
      token={ontoken}
    >
      <Button_Contaier>pay</Button_Contaier>
    </StripeCheckout>
  );
};

export default Paybutton;
