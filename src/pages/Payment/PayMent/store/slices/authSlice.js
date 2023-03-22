import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:'authSlice',
    initialState:{
        modal1:false,
        modal2:false,
        modalPrice:'',
    },
    reducers:{
        setModal:(state,action)=>{
            state.modal1 = true
            state.modalPrice= action.payload
        },
        closeModal:(state,action)=>{
            state.modal1 = false
        },
        setModal2:(state,action)=>{
            state.modal2 = true
        },
        closeModal2:(state,action)=>{
            state.modal2 = false
        },
    }
})
export default authSlice.reducer

export const {setModal,closeModal,setModal2,closeModal2}= authSlice.actions