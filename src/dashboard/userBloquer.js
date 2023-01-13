import React from 'react'
import { useEffect, useState } from 'react';
import Axios from 'axios';


function UserBloquer() {
const [data, setDate] = useState([])

  


 const change= async(id,index)=>{
     useEffect(()=>{
    Axios.delete("http://localhost:4000/user/"+id)
    .then(
        res=>{
            data[index]=res.data
                setDate(data)
                
            }
            )
        },[] )
 }

useEffect(() => {
    Axios.get("http://localhost:4000/user")
        .then(res => {
            setDate(res.data)
        }
        ).catch(err => console.log(err))
},[] 
); 

const arr = data
.map((data, index) => {
    return(
        <tr key={index}>
            <td>{data.id}</td>
        <td>{data.lastName}</td><td> {data.firstName}</td><td> {data.phone}</td><td> {data.mail}</td><td>{data.actif}</td><td>
        <button onClick={()=>change(data.id,index)} >Editer l'utilisateur</button>
        </td>
        </tr>
    )
})
return(
    <div className='userBloquer'>
        <h2>Liste des utilisateurs</h2>
                <table border={1}>
<tr><td>Id</td><td>Lastname</td><td>Firstname</td><td>Telephone</td><td>Mail</td><td>Statut</td><td>Edit</td></tr>

        {arr}
        </table>

    </div>

)

}
export default UserBloquer