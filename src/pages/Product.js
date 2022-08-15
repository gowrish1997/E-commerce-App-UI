import { Add, Remove } from "@material-ui/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Newsletter from "../components/Newsletter";
import { useractions } from "../store/user";
import { cartactions } from "../store/cart";
import { mobile } from "../components/responsive";
const Container = styled.div``;
const Wrappercontainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  ${mobile({flexDirection: "column" })}
`;
const Imagecontainer = styled.div`
  padding: 40px;
  box-sizing: border-box;
  flex: 1;
`;
const Image = styled.img`
  height: 90vh;
  width: 100%;
  border-radius: 10px;
  ${mobile({height: "50vh" })}
`;
const Infocontainer = styled.div`
  padding: 40px;
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;
const Title = styled.div`
  font-size: 40px;
  margin-bottom: 10px;
`;
const Desc = styled.div`
  margin-bottom: 10px;
`;
const Price = styled.div`
  font-size: 40px;
  margin-bottom: 10px;
`;
const FilterContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 60%;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const Filtertext = styled.div``;
const Filtercolor = styled.div`
cursor: pointer;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-left: 10px;
  &:hover {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;
const Select = styled.select`
cursor: pointer;
  padding: 7px;
  margin-left: 10px;
`;
const Option = styled.option`
cursor: pointer;
`;
const Addcontainer = styled.div`
  margin-top: 40px;
  display: flex;
  width: 60%;
  justify-content: space-between;
`;
const Amountcontainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Amount = styled.span`
  font-weight: 700;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 10px;
  border: 1px solid teal;
`;
const Buttoncontainer = styled.div``;
const Button = styled.button`
cursor: pointer;
  border: 3px solid teal;
  padding: 15px;
`;
const Product = () => {
  const [Product, setProduct] = useState([]);
  const [quantity, setquantity] = useState(1);
  const [color, setcolor] = useState("");
  const [size, setsize] = useState("");
  const ProducId = useParams().id;
  const dispatch = useDispatch();
  
  const user = useSelector((state) => state.user);
  const quantity_handler = (props) => {
    if (props == "add") {
      setquantity((prev) => {
        return prev + 1;
      });
    } else {
      setquantity((prev) => {
        if (prev == 1) {
          return prev;
        } else {
          return prev - 1;
        }
      });
    }
  };
  const cartadder = () => {
    dispatch(cartactions.Cartactivator_handler());
    const cartproduct = {
      userId: user.user._id,
      products: [
        {
          productId: Product._id,
          quantity: quantity,
          color: color,
          size: size,
          title: Product.title,
          desc: Product.desc,
          Price: Product.Price,
          img: Product.img,
          instock: Product.instock,
        },
      ],
    };
    if (user.user && color && size) {
      axios
        .post(
          `http://localhost:3000/api/Cart/postcart/${user.user._id}`,
          cartproduct,
          {
            headers: { token: user.user.accestoken },
          }
        )
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
    else{
      console.log("please select color and size")
    }
  };
  useEffect(() => {
    const getproduct = async () => {
      try {
        const result = await axios.get(
          `http://localhost:3000/api/product/find/${ProducId}`
        );
        setProduct(result.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getproduct();
    return () => {};
  }, [ProducId]);
  return (
    <Container>
      <Navigation></Navigation>
      <Announcement></Announcement>
      <Wrappercontainer>
        <Imagecontainer>
          {" "}
          <Image src={Product.img}></Image>
        </Imagecontainer>
        <Infocontainer>
          <Title>{Product.title}</Title>
          <Desc>{Product.desc}</Desc>
          <Price>{`$ ${Product.Price}`}</Price>
          <FilterContainer>
            <Filter>
              <Filtertext>COLOR:</Filtertext>
              {Product.color?.map((item) => {
                return (
                  <Filtercolor
                    key={item}
                    color={item}
                    onClick={() => setcolor(item)}
                  ></Filtercolor>
                );
              })}
              {/* <Filtercolor color="red"></Filtercolor>
              <Filtercolor color="yellow"></Filtercolor> */}
            </Filter>
            <Filter>
              <Filtertext>SIZE:</Filtertext>
              <Select onChange={(e) => setsize(e.target.value)}>
                {Product.size?.map((item) => {
                  return <Option key={item}>{item}</Option>;
                })}
                {/* <Option>SMALL</Option>
                <Option>MEDIUM</Option>
                <Option>LARGE</Option>
                <Option>EXTRA LARGE</Option> */}
              </Select>
            </Filter>
          </FilterContainer>
          <Addcontainer>
            <Amountcontainer>
              <Add style={{cursor:"pointer"}} onClick={() => quantity_handler("add")}></Add>
              <Amount>{quantity}</Amount>
              <Remove style={{cursor:"pointer"}} onClick={() => quantity_handler("remove")}></Remove>
            </Amountcontainer>
            <Buttoncontainer>
              <Button onClick={cartadder}>ADD TO CART</Button>
            </Buttoncontainer>
          </Addcontainer>
        </Infocontainer>
      </Wrappercontainer>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </Container>
  );
};
export default Product;
