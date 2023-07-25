import { legacy_createStore } from "redux";



const initialState = {
    stg:[{id:1,nom:"Younes"}]
}


 function reducer (state = initialState , action ) {
    switch (action.type) {

        case "addstg" :
            return {...state , stg:[...state.stg , action.payload]}
        
        case "filterstg" :
            
            
            return {...state , stg:[...state.stg,{id:2,nom:"Anas"}]}
    
        default:
            return state;
    }




}

const store = legacy_createStore(reducer)

export default store



