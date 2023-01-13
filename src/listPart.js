import React, { useEffect,useState } from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom'

function ListPart() {

   const [data, setDate] = useState([])
   let { event } = useParams();
   useEffect(() => {
      Axios.post("http://localhost:4000/ticket/event/", { event })
         .then(res => {
            if (res.data != null) {

               setDate(res.data)
            }
            console.log(res.data);
         }
         ).catch(err => console.log(err))
   }, []
   );
   const arr = data
      .map((data, index) => {
         return (
            <div className='modifEvent'>
               <h2>{data.lastName} {data.firstName} {data.mail} {data.phone}</h2>
            </div>
         )
      })
   return (
      <div >
         <h2>Liste des Inscrits</h2>
         {arr}
      </div>
   )
}
export default ListPart