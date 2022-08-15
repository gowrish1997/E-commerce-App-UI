import {
  FavoriteOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Outofstock from "./Outofstock";
import { wishlistaction } from "../store/Wishlist";
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  &:hover {
    background-color: rgba(255, 0, 0, 0.3);
  }
`;
const Container = styled.div`
  flex: 1;
  position: relative;
  border-radius: 10px;
  min-width: 280px;
  height: 300px;
  box-sizing: border-box;
  margin: 10px;
  &:hover ${Info} {
    opacity: 1;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;
const Circle = styled.div``;
const Icon = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
  transition: all 0.5s ease-in;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
  &:active {
    background-color: red;
  }
`;
const Products = ({ item }) => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const addwishlist = () => {
    dispatch(wishlistaction.wishlistadding(item));
  };
  return (
    <Container>
      {!item.instock && <Outofstock></Outofstock>}
      <Image src={item.img}></Image>
      <Info>
        <Icon>
          <ShoppingCartOutlined style={{color:"black"}}></ShoppingCartOutlined>
        </Icon>
        <Link to={`/Product/${item._id}`}>
          <Icon>
            <SearchOutlined></SearchOutlined>
          </Icon>
        </Link>
        <Icon onClick={addwishlist}>
          <FavoriteOutlined style={{color:"black"}}></FavoriteOutlined>
        </Icon>
      </Info>
    </Container>
  );
};
export default Products;
