import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    currentUser:null,
    loading:false,
    error:null
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
         signStart:(state)=>{
            state.loading = true;

         },
         signSuccess:(state,action)=>{
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;

         },
         signFailure:(state,action)=>{
            state.loading = false;
            state.error = action.payload;

         },
         signOutStart:(state)=>{
            state.loading = true;

         },
         signOutSuccess:(state,action)=>{
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;

         },
         signOutFailure:(state,action)=>{
            state.loading = false;
            state.error = action.payload;

         },
         updateUserStart:(state)=>{
            state.loading = true;

         },
         updateUserSuccess:(state,action)=>{
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;

         },
         updateUserFailure:(state,action)=>{
            state.loading = false;
            state.error = action.payload;

         },
    } 
})

export const {signStart,signSuccess,signFailure,signOutStart,signOutSuccess,signOutFailure,updateUserFailure,updateUserStart,updateUserSuccess} = userSlice.actions

export default userSlice.reducer