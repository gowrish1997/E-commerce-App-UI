import {createSlice} from "@reduxjs/toolkit"
const wishlistslice=createSlice({
    name:"wishlist",
    initialState:{
       wishlist:[]
    },
    reducers:{
        wishlistadding(state,action){
           state.wishlist.push(action.payload)
        },
    wishlistremoving(state,action){
        const filtered=state.wishlist.filter((item)=>{
            return item._id!==action.payload
        })
        state.wishlist=[...filtered]
    
    },
   
    }
})
export const wishlistaction=wishlistslice.actions
export const wishlistreducer=wishlistslice.reducer