import { style } from "@mui/system";
import React from "react";
import styled from "styled-components";
import LamaNavigation from "../components/LamaNavigation";
import Accordian from "../Material_UI/Accordian";
import { useSelector } from "react-redux";
import { mobile } from "../components/responsive";

const Container = styled.div`
  /* background-color: #f5f5f5; */
  height: 100vh;
  overflow: auto;
`;
const Wrapper = styled.div`
  padding: 10px;
  /* background-color: #f5f5f5; */
  display: flex;
  flex-direction: row;
  ${mobile({flexDirection:"column-reverse"})}
`;
const Info = styled.div`
  flex: 2;
`;
const PriceDetail = styled.div`
height: 50vh;
border: 1px solid ;
border-color: ${(props)=>props.data.mode?'white':"black"};
justify-content: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
 margin: 10px;
 margin-top: 20px;
 box-sizing: border-box;
`;
const PriceStructure=styled.div`
padding: 10px;
display: flex;
flex-direction: column;
border-bottom: 1px solid black;
`
const Detail=styled.div`

font-size: 20px;
font-weight: bold;
padding: 10px;
border-bottom: 1px solid black;
`
 const Details=styled.div`
 padding: 10px;
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 `
 const Total=styled.div`
 font-size: 20px;
 font-weight: bold;
 `
const MyOrder = () => {
  const selector = useSelector((state) => state.cart);
  const user=useSelector((state)=>state.user)
  const data=useSelector((state)=>state.mode)
  console.log(selector.price)
  console.log(user)
  return (
    <Container>
      <LamaNavigation></LamaNavigation>
      <Wrapper>
        <Info>
          <Accordian></Accordian>
        </Info>
        <PriceDetail data={data}>
          <Detail>PRICE DETAIL</Detail>
          <PriceStructure>
            <Details>
              <div>Price</div>
              <div> $ {selector.price}</div>
            </Details>
            <Details>
              <div>Shipping charges</div>
              <div>$5</div>
            </Details>
            <Details>
              <div>Shippign discount</div>
              <div>-$5</div>
            </Details>
          </PriceStructure>
          <Total>
          <Details>
          <div>Total payable</div>
            <div>$ {selector.price}</div>
            </Details>
            
          </Total>
        </PriceDetail>
      </Wrapper>
    </Container>
  );
};

export default MyOrder;
