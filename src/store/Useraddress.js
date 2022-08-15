import { createSlice } from "@reduxjs/toolkit";
const Useraddressslice = createSlice({
  name: "address",
  initialState: {
    addresses: [
      {
        id: Math.random().toString(),
        name: "monisha",
        last: "nongbet",
        phone: 8310623228,
        firstaddres: "kotitleti hosmane yeljih",
        district: "udupi",
        state: "karnataka",
        pincode: "576214",
      },
      {
        id: Math.random().toString(),
        name: "anjana",
        last: "nongbet",
        phone: 8310623228,
        firstaddres: "kotitleti hosmane yeljih",
        district: "udupi",
        state: "karnataka",
        pincode: "576214",
      },
    ],
    deliveryaddres: {},
  },
  reducers: {
    setaddress(state, action) {
        const newstate=state.addresses;
      newstate.push(action.payload);
      state.addresses=newstate;
    },
    setdeliveryaddres(state, action) {
      state.deliveryaddres = action.payload;
    },
  },
});
export const useraddressactions = Useraddressslice.actions;
export const useraddressreducer = Useraddressslice.reducer;
