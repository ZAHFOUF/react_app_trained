import React,{useState} from 'react';
import data  from '../data/stagaires' 
import Nav from '../Nav';
import ReduxEx from './ReduxEx';

window.st = [1,1,1,1,1,1,1]




// state 

function Livres (){

    // les donnes
    const [stagaires,setStagaires] = useState(data)


    const [stagaire,setStagaire] = useState( {
        id: '',
        matricule: '',
        nom: '',
        codepostal: '',
        ville: '',
        moyenne: ''
      })

      const [message,setMessage] = useState("")

      // ajouter
    const handleadd = (e)=>{
        e.preventDefault()
        setMessage("")
        var message = ""
        console.log(stagaire);
        
        // tout champs sont requis
           if (Object.values(stagaire).includes('',null,undefined)) {
            console.log(Object.values(stagaire));
            message += " tout champs sont requis \n "
        }

        console.log(Number(stagaire.moyenne));

        // la moyenne entre 0 et 20 
        if (Number(stagaire.moyenne) > 20 || Number(stagaire.moyenne) < 0 || isNaN(stagaire.moyenne)       ) {
            message += " la moyenne doit etre entre 0 et 20 \n "
        }

        // le matricule est unique 
        if (stagaires.map((e)=> e.matricule).includes(Number(stagaire.matricule))) {
            message += " le matricule doit etre unique  \n "
        }

        const new_stagaires = [...stagaires,{...stagaire , id: Math.max(...stagaires.map((e)=> e.id)) + 1}]


        message.length > 0 ? setMessage(message)  : setStagaires(new_stagaires)

       



       

       
    }

    // delete
    const hadelDelete = (e)=>{
        const new_stagaires = stagaires.filter((e1)=> e1.id !== e)
        setStagaires(new_stagaires)
    }

    // edit 

    const hadeledit = (stagaire)=>{

        const id = Number(stagaire.id)

        const element = stagaires.filter((e)=> e.id === id) 

        const elements = stagaires.filter((e)=> e.id !== id)

      
            if (element.length  === 0) {
                console.log(element);
                console.log("inavlid id");
            }else{
                console.log(element);
                setStagaires([...elements , stagaire])
            }


    }

    const vider = ()=>{
        setStagaires([])
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

            {


            stagaires.map((item)=>(
                <>
                
                    <tr key={item.id}>
                    <td> {item.id} </td>
                    <td> {item.nom} </td>
                    <td> {item.matricule}</td>
                    <td> {item.ville}</td>
                    <td>{item.codepostal}</td>
                    <td> {item.moyenne}</td>
                    <td> <button onClick={()=> hadelDelete(item.id)}> Supprimer</button></td>

                </tr>
                </>
             
            ))
            
            
            }

        </table>


        <form onSubmit={handleadd}>
            <input type="number" onChange={(e)=>{stagaire.id = e.target.value ; setStagaire(stagaire)}} placeholder='id'  />
            <input type="text" onChange={(e)=>{stagaire.matricule = e.target.value ; setStagaire(stagaire)}}   placeholder='matricule'  />
            <input type="text"  onChange={(e)=>{stagaire.nom = e.target.value ; setStagaire(stagaire)}}  placeholder='Nom'  />
            <input type="text"  onChange={(e)=>{stagaire.ville = e.target.value ; setStagaire(stagaire)}} placeholder='Ville'  />
            <input type="number" onChange={(e)=>{stagaire.codepostal = e.target.value ; setStagaire(stagaire)}} placeholder='Code Postal'  />
            <input onChange={(e)=>{stagaire.moyenne = e.target.value ; setStagaire(stagaire)}}    placeholder='moyenne'  />

            <div>
             <button type="submit"> ajouter </button> 
           
            </div>

            <span style={{color:"red"}}>{message}</span>
        
            

        </form>

            <span> <button> fitrer ville et nom </button></span>
            <span> <button onClick={vider}> vider </button></span>
            <span> <button> initialiser recherche </button></span>
            <span> <button onClick={()=> hadeledit(stagaire) }> editer </button> </span>


        <Nav id="1"  />
        <ReduxEx />
        
        
        </>
      
    )



}


export default Livres


