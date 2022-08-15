import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  background-image: 
  linear-gradient(
      rgb(225, 225, 225, 0.5),
      rgb(225, 225, 225, 0.5)
    ),url("https://cdn.jivox.com/files/55004/shoppingcart/registerbackground.jpg");
      
  background-size: cover;
  height: 103.8vh;
  display: flex;
  justify-content:center ;
  align-items:center;
`;
const Wrapper = styled.div`
width: 40%;
display: flex;
flex-direction: column;
background-color: white;
border: 1px solid black;
padding:10px;
justify-content:flex-start;
`;
const Form = styled.form`
margin-bottom:10px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
`;
const Input = styled.input`
flex: 1;
min-width: 40%;
margin:10px 0px;
padding:10px 0px
`;
const Privacy = styled.div`
margin-bottom: 10px;
`;
const Button = styled.button`
width: 20%;
padding: 10px 0px;
background-color:teal
`;
const Title = styled.h1``;
const Register = () => {
  return (
    <Container style={{marignTop:"-23px"}}>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name"></Input>
          <Input placeholder="first name"></Input>
          <Input placeholder="user name"></Input>
          <Input placeholder="email"></Input>
          <Input placeholder="password"></Input>
          <Input placeholder="confrimpassword"></Input>
        </Form>
        <Privacy>
          By creating accoutn there is chance leak of data <b>PRIVACY POLICY</b>
        </Privacy>
        <Link ><Button>REGISTER</Button></Link>
        <div>If already registered please  <Link to='/login'>SIGN IN</Link>  here</div>
      </Wrapper>
    </Container>
  );
};
export default Register;
