import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
height: 100%;
width:100%;
position: absolute;
top: 0px;
left: 0px;
display: flex;
align-items: center;
justify-content: center;
color:red;
font-size: 25px;
z-index: 1;
background-color: #ffffff;
    opacity: .6;

`

const Outofstock = () => {
  return (
    <Container>
Out of stock
      
    </Container>
  )
}

export default Outofstock
