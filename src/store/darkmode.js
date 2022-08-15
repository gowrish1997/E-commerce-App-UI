import {createSlice} from '@reduxjs/toolkit'
const dark_mode=createSlice({
name:"darkmode",
initialState:{
    mode:false
},
reducers:{
    modehandler(state,action){
        state.mode=!state.mode
    }
}
})
export const modeaction=dark_mode.actions
export const modereducer=dark_mode.reducer