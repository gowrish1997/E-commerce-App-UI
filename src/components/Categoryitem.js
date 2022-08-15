import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  position: relative;
  height: 70vh;
  padding: 10px;
  flex: 1;
  box-sizing: border-box;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
`;
const Info = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: absolute;
top:0px;
  
`;
const Title = styled.h1`
color: white;
`;
const Button = styled.button`
cursor: pointer;
padding: 10px;
border-radius: 10px;
`;
const Categoryitem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}> <Image src={item.img}></Image>
      <Info>
        <Title>{item.title}</Title>
       <Button>SHOP NOW</Button>
      </Info></Link>
     
    </Container>
  );
};
export default Categoryitem;
