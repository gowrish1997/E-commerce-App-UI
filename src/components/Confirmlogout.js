import React from 'react'
import styled from 'styled-components'
import { useractions } from '../store/user'
import { useDispatch } from 'react-redux'
import { mobile } from './responsive'
const Container=styled.div`
position: absolute;
top:0px;
left: 0px;
z-index: 1;
background-color: #ffffff;
    opacity: .6;


height: 100vh;
width: 100vw;
`
const Logoutcontainer=styled.div`
border: 1px solid black;
width: 30%;
position: relative;
top:200px;
left: 400px;
padding: 30px;
text-align: center;
background-color:#696969;
color: white;
${mobile({ top:"300px",left:"100px"})}

`
const Button=styled.button`
margin-top: 20px;
background-color: red;
`
const Confirmlogout = (props) => {
    const dispatch=useDispatch()
    const confirm_Logout=()=>{
        dispatch(useractions.logout())
    }
  return (
    <Container>
        <Logoutcontainer>
            <div>Are u confirm to logout</div>
            <Button onClick={confirm_Logout}>Logout</Button>
            <Button onClick={()=>props.handler()}>Cancel</Button>
        </Logoutcontainer>
      
    </Container>
  )
}

export default Confirmlogout
