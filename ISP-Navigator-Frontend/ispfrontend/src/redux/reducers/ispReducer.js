import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const initialState={
    isp:[],
    ispDetails:[]
}

//CAT to get ISP from API.
export const getInitialStateAsync=createAsyncThunk(
    'isp/getIntialState',
    (arg,thunkAPI)=>{
        axios.get("http://localhost:8000/api/getISP")
            .then((res)=>{
             //   console.log("response:",res.data);
                thunkAPI.dispatch(ispActions.setInitialState(res.data))
            })
    }
)

//CAT to get details for specific ISP.
export const getInitialStateAsyncDetails=createAsyncThunk(
    'isp/getIntialStateDetails',
    async (payload)=>{
        try{
         //   console.log("Payload:",payload);
            return await axios.get(`http://localhost:8000/api/getISPDetails/${payload}`)
        }catch(error){
            console.log(error,"Error in getting ISP details");
        }
    }
)


//Reduces using redux toolkit.
const ispSlice=createSlice({
    name:'isp',
    initialState:initialState,
    reducers:{
        //action to update state with api data.
        setInitialState:(state,action)=>{
           
            state.isp=[...action.payload.message]
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getInitialStateAsyncDetails.fulfilled,(state,action)=>{
        //    console.log("payload:",action.payload)
            state.ispDetails=[action.payload.data]
        })
    }
})

//exporting ispReducers to use it in store.
export const ispReducer=ispSlice.reducer;

//exporting ispActions
export const ispActions=ispSlice.actions;

//using selector here and then exporting it.
export const ispSelector=(state)=>state.ispReducer.isp
export const ispSelectorDetails=(state)=>state.ispReducer.ispDetails

