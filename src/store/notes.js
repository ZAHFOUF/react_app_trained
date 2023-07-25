import { createSlice } from '@reduxjs/toolkit' ;


const notes = createSlice({
    name:"notes" , 
    initialState : [ {mat:1,note:17} , {mat:1,note:18} , {mat:2,note:18} , {mat:3,note:18} , {mat:2,note:18}] ,
    reducers : {
        filterNote (notes,action) {
            const filter = notes.filter((e)=> e.id !== action.payload.id)
            return [...filter]
         }
    }
})


export default notes