import { Add, Remove } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import Emptycart from "../components/Emptycart";
import axios from "axios";
import { cartaddhanlder } from "../store/cart";
import { useractions } from "../store/user";
import { cartactions } from "../store/cart";
import { mobile } from "../components/responsive";
const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
 
`;
const Title = styled.h1`
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px ;
`;
const Topbutton = styled.button`
  padding: 10px;
  background-color: ${(props) => (props.type === "filled" ? "black" : "none")};
  color: ${(props) => (props.type === "filled" ? "white" : "black")};
  ${mobile({ padding:"5px",fontSize:"10px"})}
`;
const Toptexts = styled.div`
 ${mobile({  fontSize:"12px"})}
`;
const Toptext = styled.span`
  margin-right: 10px;
`;
const Bottom = styled.div`
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
  ${mobile({  flexDirection:"column"})}
  ${mobile({  padding:"5px"})}
`;
const Info = styled.div`
  flex: 3;
  border: 1px solid;
  border-color: ${(props)=>(props.data.mode?"white":"black")};
  box-sizing: border-box;
  margin-right: 10px;
  /* background-color: rgb(245,245,245);  */
  background-color:${(props)=>(props.data.mode?"":"rgb(245,245,245)")} ; 
 ${mobile({ width:"100%",borderRadius:"20px"})}
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({  flexDirection:"column"})}
`;
const Productdetal = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  flex: 3;
  ${mobile({padding:"10px"})}
  
`;
const Pricedetail = styled.div`
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Img = styled.img`
margin:0px 0px 0px 10px;
  width: 30%;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  justify-content: space-around;
`;
const Productname = styled.span``;
const Productid = styled.span``;
const Productcolor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const Productsize = styled.span``;
const ProductAmountdetail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ProductPricedetail = styled.h1``;
const Amount = styled.span`
  margin: 0px 10px;
`;
const Summary = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0px 40px;
  box-sizing: border-box;
  border: 1px solid ;
    
  border-radius: 10px;
  height: 50vh;
`;
const Summarytitle = styled.h2``;
const Summarytext = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: ${(props) => props.type === "text" && 700};
  font-size: ${(props) => props.type === "text" && "24px"};
  padding: 10px 0px;
`;
const Summartytextdetail = styled.div``;
const Summarytextprice = styled.div``;
const Button = styled.button`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 0px;
  background-color: teal;
  font-size: 20px;
  color: white;
`;
const Proctremoval=styled.button`
cursor: pointer;
color: white;
border-radius:10px;
background-color: teal;
`
const Ordermenu=styled.div`
position: sticky;
bottom: 0px;
border-top: 1px solid ;
border-color: ${(props)=>(props.data.mode?"white":"black")};
/* background-color: white; */
display: flex;
justify-content: flex-end;
padding: 10px;
margin-top: 20px;
box-sizing: border-box;
`
const Orderbutton=styled.button`
border: none;
background-color: #FF6347;
padding: 20px 40px;
color: white;
font-size: 25px;
${mobile({ padding:"10px",fontSize:"10px"})}

`
const Cart = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.cart);
  const wishlist=useSelector((state)=>state.wishlist)
  const cartproducts = selector.product;
  const user = useSelector((state) => state.user);
 const data=useSelector((state)=>state.mode)
  useEffect(() => {
    console.log("use effect running")
    user.user && dispatch(cartaddhanlder(user.user._id));
  }, [selector.cartactivator]);
  const quantity_handler = (props) => {
  
    axios
      .put(`http://localhost:3000/api/Cart/${user.user._id}`, props)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err.message);
      });
      setTimeout(()=>{
        dispatch(cartactions.Cartactivator_handler())
      },[1000])
     
  };
  const removecartproduct=(props)=>{
  
    console.log(props)
    axios
    .put(`http://localhost:3000/api/Cart/cartupdate/${user.user._id}`,props)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err.message);
    });
    setTimeout(()=>{
      dispatch(cartactions.Cartactivator_handler())
    },[1000])
   
  }
  return (
    <Container>
      <Navigation></Navigation>
      <Announcement></Announcement>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Link to="/">
            <Topbutton style={{cursor:"pointer"}}>CONTINUE SHOPPING</Topbutton>
          </Link>
          <Toptexts>
            <Toptext>Shopping bag({selector.quantity})</Toptext>
            <Toptext>Your Wishlist ({wishlist.wishlist.length})</Toptext>
          </Toptexts>
          {/* <Topbutton style={{cursor:"pointer"}} type="filled">CHECK OUT NOW</Topbutton> */}
        </Top>
        <Bottom>
          <Info data={data}>
            {cartproducts.length <= 0 ? (
              <Emptycart> </Emptycart>
            ) : (
              cartproducts.map((item) => {
                return (
                  <Product key={item._id}>
                    <Productdetal>
                      <Img src={item.img}></Img>
                      <Details>
                        <Productname>
                          <b>Product:</b>
                          {item.title}
                        </Productname>
                        <Productid>
                          <b>Product Id:</b>
                          {item._id}
                        </Productid>
                        <Productcolor color={item.color}></Productcolor>
                        <Productsize>
                          <b>Product Size: </b>
                          {item.size}
                        </Productsize>
                      </Details>
                    </Productdetal>
                    <Pricedetail>
                      <ProductAmountdetail>
                        <Add style={{cursor:"pointer"}} onClick={() => quantity_handler({
                              quantity: 1,
                              productobjectid: item._id,
                            })}></Add>
                        <Amount>{item.quantity}</Amount>
                        <Remove style={{cursor:"pointer"}}
                          onClick={() =>
                            quantity_handler({
                              quantity:-1,
                              productobjectid: item._id,
                            })
                          }
                        ></Remove>
                      </ProductAmountdetail>
                      <ProductPricedetail>
                        {item.quantity * item.Price}
                      </ProductPricedetail>
                      <Proctremoval onClick={()=>removecartproduct({productobjectid:item._id})}>REMOVE</Proctremoval>
                    </Pricedetail>
                  </Product>
                );
              })
            )}
            <Link style={{ textDecoration: 'none'}} to='Cart/MyOrder'><Ordermenu data={data}><Orderbutton >PLACE ORDER</Orderbutton></Ordermenu></Link>
          </Info>
          {cartproducts.length>0 &&
          <Summary data={data}>
            <Summarytitle>ORDER SUMMARY</Summarytitle>
            <Summarytext>
              <Summartytextdetail>Sub total</Summartytextdetail>
              <Summarytextprice>$ {selector.price}</Summarytextprice>
            </Summarytext>
            <Summarytext>
              <Summartytextdetail>Estimated shipping</Summartytextdetail>
              <Summarytextprice> $ 5</Summarytextprice>
            </Summarytext>
            <Summarytext>
              <Summartytextdetail> shipping discount</Summartytextdetail>
              <Summarytextprice>-$ 5</Summarytextprice>
            </Summarytext>
            <Summarytext type="text">
              <Summartytextdetail> Total</Summartytextdetail>
              <Summarytextprice>$ {selector.price}</Summarytextprice>
            </Summarytext>
            {/* <Button>ORDER SUMMARY</Button> */}
          </Summary>}
        </Bottom>
      </Wrapper>
      <Footer></Footer>
    </Container>
  );
};
export default Cart;
