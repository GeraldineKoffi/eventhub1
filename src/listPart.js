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
            <tr>
               <th>{data.lastName}</th>
               <th>{data.firstName}</th>
               <th>{data.mail}</th>
               <th>{data.phone}</th>
            </tr>
         )
      })
   return (
      <div className="listPart">
         <h2>Liste des Inscrits</h2>
         <table>
                <tr>
                    <th style={{fontWeight:"bold"}}>Nom</th>
                    <th style={{fontWeight:"bold"}}>Prénom</th>
                    <th style={{fontWeight:"bold"}}>Email</th>
                    <th style={{fontWeight:"bold"}}>Téléphone</th>
                </tr>
               
                {arr}
               
            </table>
      </div>
   )
}
export default ListPart