import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { links } from "../../links/links";

export const signUpAction=createAsyncThunk(
    'signUpAction',
    async(param,{dispatch})=>{
        const response = await axios.post('https://fakestoreapi.com/auth/login',JSON.stringify(param))
        const data =  await response.data
        localStorage.setItem('token',JSON.stringify(data))
        JSON.parse(localStorage.getItem('token'))
    }
)
axios({
    method:'GET',
    url:'',
    headers:{
        Authorization:`Bearer ${JSON.parse('token').access}`
    }
})