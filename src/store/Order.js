import { createSlice, current } from "@reduxjs/toolkit";
import { useEffect } from "react";
import axios from "axios";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
const Orderslice = createSlice({
  name: "Order",
  initialState: {
    Order_id: "",
    Order_product: [],
  },
  reducers: {
    addproduct(state, action) {
      console.log(action.payload);
      state.Order_id = action.payload.userId;
      state.Order_product = action.payload.products;
    },
    // addOrderProduct(state, action) {
    //   if (state.Order_product.length) {
    //     state.Order_product = [
    //       ...state.Order_product,
    //       ...action.payload.mapped_orderproduct,
    //     ];
    //     // console.log(action.payload)
    //   } else {
    //     state.Order_product = [...action.payload.mapped_orderproduct];
    //     state.Order_id = action.payload.id;

    //     //  console.log(action.payload)
    //   }
    // },
  },
});
export const Orderreducer = Orderslice.reducer;
export const Orderactions = Orderslice.actions;

export const Orderupdate_handler = (props) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3000/api/Order/Orderget/${props}`)
      .then((res) => {
        const { _id, createdAt, updatedAt, __v, ...order } = res.data[0];

        dispatch(Orderactions.addproduct(order));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};
