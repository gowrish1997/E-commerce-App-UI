// import {createSlice} from "@reduxjs/toolkit"
// const cartslice=createSlice({
//     name:"cart",
//     initialState:{
//         product:[],
//         quantity:0,
//         price:0
//     },
//     reducers:{
//         addproduct(state,action){
//            state.product.push(action.payload)
//            state.quantity=state.quantity+1;
//            state.price=state.price+action.payload.quantity*action.payload.Price
//         }
//     }
// })
// export const cartactions=cartslice.actions
// export const cartreducer=cartslice.reducer
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const cartslice = createSlice({
  name: "cart",
  initialState: {
    product: [],
    quantity: 0,
    price: 0,
    cartactivator:false
  },
  reducers: {
    addproduct(state, action) {
      state.product = action.payload;
      state.quantity = action.payload.length;
      state.price =action.payload.reduce((total,item)=>{
        return total+item.Price*item.quantity
      },0)
    },
    Cartactivator_handler(state){
      state.cartactivator=!state.cartactivator
    }
  },
});
export const cartaddhanlder = (props) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3000/api/Cart/user/${props}`)
      .then((result) => {
        dispatch(cartslice.actions.addproduct(result.data[0].products));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};
// export const cartactions=cartslice.actions
export const cartreducer = cartslice.reducer;
export const cartactions=cartslice.actions;
