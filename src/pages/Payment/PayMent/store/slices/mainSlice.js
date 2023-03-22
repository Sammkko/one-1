import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name:'mainSlice',
    initialState:{
        menu:null
    },
    reducers:{
        setMenu:(state,action)=>{
            state.menu = action.payload
        },
        closeMenu:(state,action)=>{
            state.menu = null
        }
    }
})
export default mainSlice.reducer

export const {setMenu,closeMenu}= mainSlice.actions