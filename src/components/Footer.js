import {
  AddLocationOutlined,
  CallOutlined,
  EmailOutlined,
  Facebook,
  Instagram,
  Map,
  Twitter,

} from "@material-ui/icons";
import { mobile } from "./responsive";
import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: row;
  ${mobile({  flexDirection:"column"})}
  padding: 10px;
  /* background-color: #fff5ee; */
  align-items: ba;
`;
const Left = styled.div`
  flex: 1;
`;
const Title = styled.h1`
  margin: 3px;
  font-size: ${(props) => props.font_size};
`;
const Desc = styled.div``;
const Socialicons = styled.div`
  display: flex;
  margin-top: 20px;
`;
const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: #${(props) => props.color};
`;
const Center = styled.div`
  flex: 1;
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0px;
  padding: 0px;
  list-style: none;
`;
const Li = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
`;
const Address = styled.div`
display: flex;
align-items: center;
margin-bottom: 5px;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Title>LAMA</Title>
        <Desc>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
         
        </Desc>
        <Socialicons>
          <Icons color="fccc63">
            <Instagram></Instagram>
          </Icons>
          <Icons color="4267B2">
            <Facebook></Facebook>
          </Icons>
          <Icons>
            <Twitter></Twitter>
          </Icons>
        </Socialicons>
      </Left>
      <Center>
        <Title font_size="20px">USEFUL LINKS</Title>
        <Ul>
          <Li>HOME</Li>
          <Li>CART </Li>
          <Li>MAN FASHION</Li>
          <Li>WOMANN FASHION</Li>
          <Li>ACCESSORIES</Li>
          <Li>MY ACCOUNT</Li>
          <Li>ORDER TRACKING</Li>
          <Li>WISH LIST</Li>
          <Li>WISH LISTS</Li>
          <Li>TERMS</Li>
        </Ul>
      </Center>
      <Right>
        <Title font_size="15px">Contact</Title>
        <Address>
          <AddLocationOutlined></AddLocationOutlined>
          <span>Hosmane, Kotikeri, Yeljith</span>
        </Address>
        <Address>
          <CallOutlined></CallOutlined>
          <span>+91 8310623228</span>
        </Address>
        <Address>
          <EmailOutlined></EmailOutlined>
          <span>kotarigowrish@gmail.com</span>
        </Address>
      </Right>
    </Container>
  );
};
export default Footer;
