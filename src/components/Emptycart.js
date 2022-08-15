import React from 'react'
import emptycart from '../public/image/empty_cart.png'
import styled, { keyframes } from 'styled-components'
const animation=keyframes`
0%{transform:translateY(50px)}
33%{transform:translatey(-50px)}
66%{transform:translateY(50px)}
100%{transform:translateY(-50px)}
`
const Img=styled.img`
width: 100%;
height: 70vh;
object-fit:contain;
animation-name: ${animation};
animation-duration: 3s;
animation-iteration-count: infinite;
`
const Emptycart = () => {
  return (
    <div>
        <Img src={emptycart}></Img>
      
    </div>
  )
}
export default Emptycart
