import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { cartreducer } from "./cart";
import { userreducer } from "./user";
import { useraddressreducer } from "./Useraddress";
import { Orderreducer } from "./Order";
import { persistReducer } from "redux-persist";
import { wishlistreducer } from "./Wishlist";
// import { profilereducer } from "./Userprofile";
import { modereducer } from "./darkmode";
const persistConfig = {
  key: "root",
  storage,
};
const persistConfig1 = {
  key: "root1",
  storage,
};
const persistConfig2 = {
  key: "root2",
  storage,
};
// const persistConfig3 = {
//   key: "root5",
//   storage,
//   whitelist: ["User_profile"],
// };

const persisteduserReducer = persistReducer(persistConfig, userreducer);
const persisteduseraddressreducer = persistReducer(
  persistConfig1,
  useraddressreducer
);
const persistedwishlistReducer = persistReducer(
  persistConfig2,
  wishlistreducer
);
// const persistedprofile = persistReducer(persistConfig3, profilereducer);

export const store = configureStore({
  reducer: {
    cart: cartreducer,
    user: persisteduserReducer,
    address: persisteduseraddressreducer,
    order: Orderreducer,
    wishlist: persistedwishlistReducer,
    // userprofile: persistedprofile,
    mode:modereducer
  },
});
