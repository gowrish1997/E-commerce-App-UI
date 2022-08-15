import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useractions } from "../store/user";
import { Link } from "react-router-dom";
const Container = styled.div`
  background-image: linear-gradient(
      rgb(225, 225, 225, 0.5),
      rgb(225, 225, 225, 0.5)
    ),
    url("https://cdn.jivox.com/files/55004/shoppingcart/registerbackground.jpg");
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid black;
  padding: 10px;
  justify-content: flex-start;
`;
const Form = styled.form`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px 0px;
`;
const Privacy = styled.div`
  margin-bottom: 10px;
`;
const Button = styled.button`
  width: 30%;
  padding: 10px 0px;
  background-color: teal;
  &:disabled{
    cursor: pointer;
  }
`;
const Title = styled.h1``;
const Login = () => {
  const dispatch = useDispatch();
  const history=useHistory()
  const selector=useSelector((state)=>state.user)
  const [username, setusername] = useState("");
  const [password, setuserpassword] = useState("");
  
  const loginhandler = (e) => {
    e.preventDefault();
    dispatch(useractions.loginfetching());
    axios
      .post("http://localhost:3000/api/auth/login", { username, password })
      .then((result) => {
        dispatch(useractions.loginsucces(result.data));
         history.push('/')
        //  localStorage.setItem("username",result.data.accestoken)
        
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(useractions.loginfailure("something went wrong"));
      });
  };
  return (
    <Container style={{ marignTop: "-23px" }}>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            type="text"
            placeholder="User name"
            onChange={(e) => setusername(e.target.value)}
          ></Input>
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setuserpassword(e.target.value)}
          ></Input>
          <Button type="submit" disabled={selector.isfetching} onClick={loginhandler}>
            SIGN IN
          </Button>
          {selector.error && <div>something went wrong</div> }
          <Link>Do not you remember the password</Link>
              <Link to='/register'>Create a new accounnt</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};
export default Login;
