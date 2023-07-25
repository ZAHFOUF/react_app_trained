import React,{useState , useRef} from 'react';
import { MDBContainer , MDBInput , MDBInputGroup , MDBIcon } from 'mdb-react-ui-kit';
import uuid from 'react-uuid';
import { useSelector } from 'react-redux';
const data =[{id:uuid(),value:"Ofppt"}]

function Project (props) {

   const stagaires = useSelector((state)=> state.users)

   console.log(stagaires , "redux");

    const [term,setTerm] = useState('')
   
    const [output,setOutput] = useState(data)

    const input_value = useRef()

    console.log(props.id);

    const Handelform = (e)=>{ e.preventDefault(); console.log(); setOutput([...output,{id:uuid(),value:input_value.current.value}]) ; setTerm('')}

    const Deleteitem =(id) => {var newData = output.filter((e)=> e.id !== id) ; setOutput([...newData])}
     return (
        <>
           <MDBContainer style={{paddingBottom:'11%'}}>
            <form onSubmit={Handelform}> 
            <MDBInputGroup className='p-5 mt-2'>
                 <MDBInput ref={input_value} value={term} onChange={(e)=> setTerm(e.target.value)} label='Enter A term' required />
                 <button type='submit' className='btn btn-info' > <MDBIcon iconType='plus' /> </button>
                 </MDBInputGroup>
            </form>
            {output.map((e)=> <div key={e.id} style={{padding:'20px'}}> <p>{e.id}</p><p>{e.value}</p>  <button className='btn btn-danger' onClick={()=> Deleteitem(e.id)}>delete item</button> </div>)}
            </MDBContainer>

           


        
        </>
            


     )
}


export default Project