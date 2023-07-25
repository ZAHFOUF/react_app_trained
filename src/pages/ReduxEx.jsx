import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionsNote } from '../store/store';



function ReduxEx (){

    const localNotes = useSelector((state)=> state.stg)
    const dispatch = useDispatch()

    const addstg = ()=>{
        dispatch({type:"addstg" , payload : {id:2,nom:"Anas"} })

    }


    const filterstg = ()=>{
        dispatch({type:"filterstg" , payload : {id:2} })

    }

  


    return(
        <>

        {
            localNotes.map((e)=>(

                JSON.stringify(e)


            ))
        }


<label>
      Pick a fruit:
      <select  onChange={(e)=> console.log(e.target.value)} name="selectedFruit">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select>
    </label>

       
     

        <button onClick={addstg}> ajouter</button>

        <button onClick={filterstg}> filtrer</button>

        
        
        
        </>
    )



}


export default ReduxEx


