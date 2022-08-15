import React from "react";
import styled from "styled-components";
import Categoryitem from "./Categoryitem";
import { categories } from "./slider_data";
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
`;
const Categories = () => {
  return (<Container>{
      categories.map((item)=>{
          return (
              <Categoryitem key={item.cat} item={item}></Categoryitem>
          )
      })}</Container>)
};
export default Categories;
