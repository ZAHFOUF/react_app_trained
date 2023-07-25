import React, { useState } from 'react';

import data  from '../data/stagaires' 
import { useForm } from 'react-hook-form';
import Livres from './Livres';




function Stagaire () {

    const [stagaires , setStagaire] = useState(data)
    const [ms , setMs] = useState('')
    const { register, handleSubmit } = useForm();
    const pattern_1 ="\w"




    // le code nécessaire pour Ajouter un nouveau stagiaire selon le respect des contraintes 
    const handelFormAdd = (e)=>{


        var message = ''
       
        e.id = stagaires.slice(stagaires.length -1)[0].id + 1


        // check matricule if unique
        if (isunique(Number(e.matricule),stagaires.map((e2)=> e2.matricule))) {

            setStagaire([...stagaires,e])
        
        }else{ 
            message += ' ' + ' le matricule pas unique'
        }




 
        // si un message affiche
        if (message.length > 0) {
            setMs(message)
        }
        
        
           

       

    }

    const hadelDelete = (id)=>{

        const newData = stagaires.filter((e)=> e.id !== id)

        setStagaire([...newData])

    }



    function isunique(value, values) {
       return  ! values.includes(value)
    }
    

    return(
        <>
        <table>
            <tr>
                <th> id </th>
                <th> Nom </th>
                <th> Mat </th>
                <th> Ville </th>
                <th> Code Postal </th>
                <th> Moyenne </th>
                <th> Supprimer </th>
                <th> Editer </th>



            </tr>
            {stagaires.map((e)=>(
                <tr key={e.id}>
                    <td> {e.id} </td>
                    <td> {e.nom}</td>
                    <td> {e.matricule}</td>
                    <td> {e.ville}</td>
                    <td>{e.codepostal}</td>
                    <td> {e.moyenne}</td>
                    <td> <button onClick={()=> hadelDelete(e.id)}> Supprimer</button></td>
                    <td> <button>Editer</button></td>

                </tr>
            ))}
        </table>
        <form onSubmit={handleSubmit((e)=> handelFormAdd(e) )}>
            <input type="number" {...register("id")} required placeholder='id'  />
            <input type="text" {...register("matricule")} required placeholder='matricule'  />
            <input type="text" {...register("nom")} required placeholder='Nom'  />
            <input type="text" {...register("ville")} required placeholder='Ville'  />
            <input type="number"{...register("codepostal")} required placeholder='Code Postal'  />
            <input  pattern="^(0?[1-9]|1[0-9]|20)(\.\d+)?$"  {...register("moyenne")} required placeholder='moyenne'  />

            <div>
             <button type="submit"> ajouter </button> 
            <span> <button type="submit"> fitrer ville et nom </button></span>
            <span> <button > vider </button></span>
            <span> <button> initialiser recherche </button></span>
            </div>
            

        </form>

        <b> {ms} </b>


        
        </>
        
    )
}




export default Stagaire