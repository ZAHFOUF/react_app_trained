import { createSlice } from '@reduxjs/toolkit' ;


const users = createSlice({
    name:"stagaires" , 
    initialState : [ {
        id: 1,
        matricule: 1454,
        nom: 'Alaoui',
        codepostal: 20400,
        ville: 'casa',
        moyenne: 12.56
      },
      {
        id: 2,
        matricule: 1455,
        nom: 'Mansouri',
        codepostal: 20400,
        ville: 'casa',
        moyenne: 14.67
      } ] ,
    reducers : {}
})


export default users