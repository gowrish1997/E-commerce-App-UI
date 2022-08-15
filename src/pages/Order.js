import React, { useEffect } from "react";
import Announcement from "../components/Announcement";
import Navigation from "../components/Navigation";
import { Orderactions } from "../store/Order";
import { useDispatch } from "react-redux";
import { Orderupdate_handler } from "../store/Order";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { mobile } from "../components/responsive";
import { useSlider } from "@mui/base";
const Products_container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 60%;
  margin-left: auto;
margin-right: auto;

  background-color:${(props)=>props.data.mode?'':"#f5f5f5"} ;
  margin-top: 10px;
  box-sizing: border-box;
  ${mobile({ width:"100%"})}
`;
const Product_container = styled.div`
  display: flex;
  flex-direction: row;
  height: 20vh;
  border:1px solid ;
  border-color: ${(props)=>props.data.mode?'white':"transparent"};
  background-color:${(props)=>props.data.mode?'':"white"} ;
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  margin-top: 10px;
  ${mobile({  height:"15vh"})}
`;
const Product_imagecontainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const Product_detail = styled.div`
  flex: 2;
  font-size: 13px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
align-items: flex-start;
  width: 100%;
  height: 100%;
  box-shadow: none;
border: none;
  font-size: 14px;
  text-decoration: none;
color:${(props)=>props.data.mode?'':"#696969"} ;
  margin-bottom: 10px;
`;
const Product_price = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;

  align-items: center;
`;
const Product_confirmation = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
height: 100vh;
overflow: auto;
`;
const Statua_contaierr = styled.div`
  display: flex;
  align-items: center;
`;
const Color_code = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: green;
`;
const Status = styled.div`
  font-weight: bold;
  margin-left: 5px;
`;
const Ordered_date = styled.div`
  margin-top: 10px;
`;
const Order = () => {
  const product = useSelector((state) => state.order);
 const user = useSelector((state) => state.user);
 const data=useSelector((state)=>state.mode)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Orderupdate_handler(user.user._id));
  }, []);

  return (
    <Container>
      <Navigation></Navigation>
      <Announcement></Announcement>
      {product ? (
        
        <Products_container data={data}>
          {product.Order_product.map((item) => {
            return (
              <Product_container data={data}>
                <Product_imagecontainer>
                  <Image src={item.img}></Image>
                </Product_imagecontainer>
                <Product_detail data={data}>
                  <div style={{ fontSize: "20px", fontWweight: "bold" }}>
                    {item.title}
                  </div>
                  <div>{item.desc}</div>
                  <div>{`color:${item.color}`}</div>
                  <div>{`size:${item.size}`}</div>
                </Product_detail>
                <Product_price>{` $ ${item.Price} `}</Product_price>
                <Product_confirmation>
                  <Statua_contaierr>
                    <Color_code></Color_code>
                    <Status>{`${item.status}`}</Status>
                  </Statua_contaierr>

                  <Ordered_date>{`Ordered date ${
                    item.date.split("T")[0]
                  }`}</Ordered_date>
                </Product_confirmation>
              </Product_container>
            );
          })}
          
        </Products_container>
       
      ) : (
        "Nothing to show here please do shopping"
      )}
    </Container>
  );
};

export default Order;
