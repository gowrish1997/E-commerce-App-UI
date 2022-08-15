import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import image from "../public/image/gowrish.jpg";
import { slider_data } from "./slider_data";
import { Link } from "react-router-dom";
import { mobile } from "./responsive";
import { useSelector } from "react-redux";
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;
const Arrow = styled.div`
  z-index: 4;
  width: 50px;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: fixed;
  top: 0px;
  bottom: 0px;
  margin: auto;
  left: ${(props) => props.direction == "left" && "10px"};
  right: ${(props) => props.direction == "right" && "10px"};
  box-sizing: border-box;
`;
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  transition: transform 1s ease;
  transform: translateX(-${(props) => props.index * 100}vw);
`;
const Slide = styled.div`
  height: 100%;
  box-sizing: border-box;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #${(props) => props.backgroundcolor}; */
  border: 1px solid white;
  box-sizing: border-box;
`;
const Imgcontainer = styled.div`
box-sizing: border-box;
  height: 100%;
  ${mobile({ display: "none" })}
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
`;
const Infocontainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 50px;
  justify-content: center;
  height: 100%;
  flex: 1;
`;
const Title = styled.h1`
  margin-bottom: 40px;
`;
const Desc = styled.p`
  letter-spacing: 3px;
  margin-bottom: 40px;
  z-index: 3;
`;
const Button = styled.button`
  cursor: pointer;
  padding: 10px;
  width: 20%;
`;
const Slider = () => {
  const data = useSelector((state) => state.mode);

  const length = slider_data.length;
  const [index, setIndex] = useState(0);
  function slider_handler(direction) {
    if (direction == "left") {
      index == 0 ? setIndex(length - 1) : setIndex(index - 1);
    }
    if (direction == "right") {
      index == length - 1 ? setIndex(0) : setIndex(index + 1);
    }
  }
  return (
    <Container>
      <Arrow
        direction="left"
        style={{
          color: !data.mode ? "white" : "black",
          backgroundColor: !data.mode ? "black" : "white",
        }}
        onClick={() => slider_handler("left")}
      >
        <ArrowLeftOutlined></ArrowLeftOutlined>
      </Arrow>

      <Wrapper index={index}>
        {slider_data.map((item) => {
          return (
            <Slide key={item.title} backgroundcolor={item.bg}>
              <Imgcontainer>
                <Img src={item.img}></Img>
              </Imgcontainer>
              <Infocontainer>
                <Title>{item.title}</Title>
                <Desc>{item.DESC}</Desc>
                <Link to="/Products">
                  {" "}
                  <Button>SHOP NOW</Button>
                </Link>
              </Infocontainer>
            </Slide>
          );
        })}
      </Wrapper>
      <Arrow
        direction="right"
        style={{
          color: !data.mode ? "white" : "black",
          backgroundColor: !data.mode ? "black" : "white",
        }}
        onClick={() => slider_handler("right")}
      >
        <ArrowRightOutlined></ArrowRightOutlined>
      </Arrow>
    </Container>
  );
};
export default Slider;
