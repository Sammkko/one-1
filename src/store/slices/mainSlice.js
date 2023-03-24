import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name:'mainSlice',
    initialState:{
        menu:null,
        favCards:localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []
    },
    reducers:{
        setMenu:(state,action)=>{
            state.menu = action.payload
        },
        closeMenu:(state,action)=>{
            state.menu = null
        },
        setCard:(state,action)=>{
            state.favCards.push(action.payload)
            localStorage.setItem('favorites',JSON.stringify([...state.favCards,action.payload]))
        },
        deleteCard:(state,action)=>{
            state.favCards = state.favCards.filter((item,i)=>item.id!==action.payload)
            localStorage.setItem('favorites',JSON.stringify(state.favCards.filter((item,i)=>item.id!==action.payload)))
        }
    }
})
export default mainSlice.reducer

export const {setMenu,closeMenu,setCard,deleteCard}= mainSlice.actions