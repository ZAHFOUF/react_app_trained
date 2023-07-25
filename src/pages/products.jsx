import React,{ useEffect, useRef, useState} from 'react';
import products from '../products.json'
import { MDBContainer , MDBRow , MDBCol , MDBCard , MDBCardImage , MDBCardTitle , MDBCardText , MDBCardBody, MDBIcon , MDBInput  } from 'mdb-react-ui-kit';
import uuid from 'react-uuid';
import Swal from 'sweetalert2';
import axiosClient from '../api/axios';
import axios from 'axios';

var url


const Product = function (props) {
    const del = ()=>{
        var newItems = props.items.filter((e)=>e.id !== props.data.id)
        props.setItems([...newItems])
    }
     return(
        <>
        <MDBCol key={props.data.id} size='3'>
        <MDBCard>
        <MDBCardImage src={props.data.img} position='top' alt='...' />
        <MDBCardBody>
          <MDBCardTitle>{props.data.name}</MDBCardTitle>
          <MDBCardText>
            {props.data.price}
            <div>
            {props.data.description}
            </div>
          </MDBCardText>
          <button onClick={del} className='btn btn-danger' type='button'><MDBIcon fas icon="trash" /></button>
        </MDBCardBody>
      </MDBCard>
        </MDBCol>
     
        </>
        
     )
}


function Produts () {
    const [data,setData] = useState([])
    const inn2 = useRef()
    const inn1 = useRef()
    const inn0 = useRef() 

    const inn3 = useRef()


    useEffect(()=>{
       axiosClient.get("products").then((e)=>{
             setData(e.data)
       }).catch((e)=>{
          console.log(e);
       })
    },[data])


 

    /* convert the image to data url */
    const upload = ()=>{
            const read = new FileReader()
            read.addEventListener("load",()=>{
                    url = read.result
       
            })
            read.readAsDataURL(inn2.current.files[0])
       
    }

    const handelForm = (e) =>{
               e.preventDefault()
               let form_data = new FormData()
               var input_data ={id:String(uuid()),name:inn0.current.value,prix:inn1.current.value,description:inn3.current.value}

               form_data.append("img",e.target[3].files[0])
               form_data.append("id",input_data.id)
               form_data.append("name",input_data.name)
               form_data.append("price",input_data.prix)
               form_data.append("description",input_data.description)
             
               
              axiosClient.post("products",form_data).then((e)=>{
                console.log( ...data,input_data);

                input_data.img = e.data.path
                setData([...data,input_data])
                Swal.fire({title:"Product Added",icon:"success",timer:"1500"})
              }).catch((e)=>{
                console.log(e);
              })
               /* make aleart */
              
    }


    return(
        <MDBContainer style={{padding:'27px'}}>
            <MDBRow>
                 {data.map((e)=><Product items={data} setItems={setData} key={e.id} data={e}/>)}
            </MDBRow>



            <div>
                <h1 className='text-dark text-center add'> Add Your Product</h1>
                <form onSubmit={(e)=>handelForm(e)} encType='multipart/form-data'>
      <MDBInput ref={inn0} type='text' id='form4Example1' wrapperClass='mb-4' label='Name' />
      <MDBInput ref={inn1} type='number' id='form4Example2' wrapperClass='mb-4' label='price' />
      <MDBInput ref={inn3} type='text' id='form4Example3' wrapperClass='mb-4' label='discription' />
      <MDBInput ref={inn2} onChange={upload} type='file' wrapperClass='mb-4' id='img' />
      <button className='btn btn-info' type='submit'  >ADD PRODUCT</button>

    </form>
            </div>
        </MDBContainer>
    )
}


console.log(products);

export default Produts