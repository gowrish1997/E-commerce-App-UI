import React from "react";
import { SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import wishlist from '../public/image/wishlist.png'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navigation from "../components/Navigation";
import Announcement from "../components/Announcement";
import styled from "styled-components";
import { wishlistaction } from "../store/Wishlist";
const Container = styled.div`
height: 100vh;
overflow: auto;
`;
const Wishlist_container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
  box-sizing: border-box;
`;
const Info_container = styled.div`
  width: 95%;
  height: 93%;
  position: absolute;
  border-radius: 10px;
  top: 10px;
  left: 10px;
  z-index: 2;
  background-color: rgba(54, 25, 25, 0.6);

  display: none;
  padding: 10px;
  box-sizing: border-box;
  color: white;
  font-weight: bold;
`;
const Product_container = styled.div`
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  flex: 1;
  min-width: 330px;
  max-width: 420px;
  height: 40vh;
  position: relative;
  &:hover ${Info_container} {
    display: block;
  }
`;
const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
const Info = styled.div`
  margin-top: 70px;
  margin-left: 10px;
`;
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
const Info_icon = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
`;
const Emptyimage=styled.img`
height: 100px;
width: 100px;
`
const Empty_container=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 30px;
`
const Wishlist = () => {
    const dispatch=useDispatch();
  const selector = useSelector((state) => state.wishlist);
  const delete_wishlist=(props)=>{
    console.log(props)
dispatch(wishlistaction.wishlistremoving(props))
  }
  return (
    <Container>
      <Navigation></Navigation>
      <Announcement></Announcement>
    
        {selector.wishlist.length
          ?  <Wishlist_container>{selector.wishlist.map((item) => {
              return (
            
                <Product_container>
                  <Image src={item.img}></Image>
                  <Info_container>
                    <Info>
                      <div style={{ fontSize: "20px" }}>{item.title}</div>
                      <div style={{ fontSize: "15px", marginTop: "10px" }}>
                        {item.desc}
                      </div>
                      <Info_icon>
                        <Link to={`/Product/${item._id}`}>
                          <Icon>
                            <SearchOutlined></SearchOutlined>
                          </Icon>
                        </Link>
                        <Icon>
                          <DeleteIcon style={{ color: "black" }} onClick={()=>delete_wishlist(item._id)}></DeleteIcon>
                        </Icon>
                      </Info_icon>
                    </Info>
                  </Info_container>
                </Product_container>
               
              );
            })}
            </Wishlist_container>
          :<Empty_container>
            <Emptyimage src={wishlist}></Emptyimage>
            <div style={{"fontSize":"25px","marginTop":"15px"}}>YOUR WISHLIST IS EMPTY</div>
          </Empty_container> }
     
    </Container>
  );
};

export default Wishlist;
