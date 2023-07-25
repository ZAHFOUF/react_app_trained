import { configureStore } from '@reduxjs/toolkit' ;
import users from './users';
import notes from './notes';






export const store = configureStore ({
    reducer : {
      users : users.reducer ,
      notes : notes.reducer,
       
    }
})

export default store

export const actionsNote = notes.actions