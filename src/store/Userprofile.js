import { createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
const profileslice = createSlice({
  name: "profile",
  initialState: {
    User_profile: {
      image:
        "http://cdn.jivox.com/files/55004/shoppingcart/image/Browngown.jpg",
      name: "Gowrish",
      Age: "24",
      DOB: Date("1997-09-04"),
      phone: "8310623228",
      email: "kotarigowrish@gmail.com",
    },
  },
  reducers: {
    addprofile(state, action) {
      state.User_profile = action.payload;
    },
    editprofile(state, action) {
      state.User_profile = {
        ...state.User_profile,
      };
    },
  },
});
export const profilereducer = profileslice.reducer;
export const profileactions = profileslice.actions;
