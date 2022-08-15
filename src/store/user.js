import {createSlice} from "@reduxjs/toolkit"
const userslice=createSlice({
    name:"user",
    initialState:{
        loginstate:false,
        user:null,
        isfetching:false,
        error:false,
        success:false,
        cartchange:true
    },
    reducers:{
        loginfetching(state,action){
            state.error=false
         state.isfetching=true
         state.loginstate=false
        },
    loginsucces(state,action){
        state.error=false
        state.isfetching=false
        state.user=action.payload
        state.loginstate=true
    },
    loginfailure(state,action){
        state.isfetching=false
        state.succes=false
        state.error=true
        state.loginstate=false;
    },
    logout(state,action){
        state.user=null
    },cartchanger(state){
        state.cartchange=!state.cartchange
    }
    }
})
export const useractions=userslice.actions
export const userreducer=userslice.reducer