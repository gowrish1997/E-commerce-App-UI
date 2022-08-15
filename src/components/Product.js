import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Products from "./Products";
import { Popular_products } from "./slider_data";
import axios from "axios";
const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
`;
const Product = ({ category, filters, sort }) => {
  const [products, setproducts] = useState([]);
  const [filteredproduct, setfilteredproduct] = useState([]);
  useEffect(() => {
    axios
      .get(
        category
          ? `http://localhost:3000/api/product?qcategory=${category}`
          : `http://localhost:3000/api/product`
      )
      .then((result) => {
        setproducts(result.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [category]);
  useEffect(() => {
    filters &&
      setfilteredproduct(
        products.filter((item) => {
          // return item.color.includes(filters.color)
          return Object.entries(filters).every(([key, value]) => {
            return item[key].includes(value);
          });
        })
      );
  }, [products, filters]);
  useEffect(()=>{
    console.log(sort)
           if(sort=='NEWEST'){
            setfilteredproduct((prev)=> [...prev].sort((a,b)=>b.createdAt-a.createdAt))
           }
           else if(sort=='ASCENDING'){
            setfilteredproduct((prev)=> [...prev].sort((a,b)=>a.Price-b.Price))
           }
           else {
            setfilteredproduct((prev)=> [...prev].sort((a,b)=>b.Price-a.Price))
           }
  },[sort])
  return (
    <Container>
      {
        filters ?filteredproduct.map((item) => {
          return <Products key={item._id} item={item}></Products>;
        }):products.map((item) => {
          return <Products key={item._id} item={item}></Products>;
        })
      }
      
    </Container>
  );
};
export default Product;
