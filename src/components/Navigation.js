import { Badge } from "@material-ui/core";
import { Search, ShoppingCart } from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "./responsive";
import Menubutton from "./menubutton";
import Dark_mode from "../Material_UI/Dark_mode";
const Container = styled.div`
  height: 60px;

  overflow: hidden;
`;
const Wrapper = styled.div`
overflow: hidden;


  padding: 10px;
  ${mobile({ padding: "10px" })}
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${mobile({ justifyContent: "Center" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Language = styled.span`
  ${mobile({ display: "none" })}
`;
const Searchcontainer = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  margin-left: 20px;
  ${mobile({ marginLeft: "0px" })}
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Input = styled.input`
  border: none;
  background-color: transparent;
  ${mobile({ width: "50px" })}
  &:focus {
    outline: none;
  }
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({ textAlign: "start" })}
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${mobile({marginLeft: "20px" })}
  ${mobile({flex: "2" })}
  ${mobile({ justifyContent:"space-around" })}

`;
const Logo = styled.h1`
  ${mobile({ fontSize: "15px" })}
  font-weight: bold;
  margin: 2px;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  ${mobile({ flex: "1" })}
  ${mobile({ justifyContent: "flex-end" })}
  align-items: center;

`;
const Menuitem = styled.div`
  margin-right: 15px;
`;
const Navigation = () => {
  const url=useRouteMatch()
  
  const cartstate = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const quantity = cartstate.quantity;
  return (

   
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <Searchcontainer>
            <Input></Input>
            <Search></Search>
          </Searchcontainer>
        </Left>
        <Center>
          <Logo>GOWRISH </Logo>
          <Menubutton></Menubutton>
        </Center>
        <Right>
         
          {url.url!='/cart' &&  <Badge
            style={{ cursor: "pointer" }}
            badgeContent={quantity}
            color="primary"
          >
            <Link to="/cart">
              <ShoppingCart style={{color:"teal"}}></ShoppingCart>
            </Link>
          </Badge> }
          <Dark_mode></Dark_mode>
        </Right>
      </Wrapper>
    </Container>
    
  );
};
export default Navigation;
