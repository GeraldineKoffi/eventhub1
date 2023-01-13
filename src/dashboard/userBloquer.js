import React from 'react'
import { useEffect, useState } from 'react';
import Axios from 'axios';


function UserBloquer() {
const [data, setDate] = useState([])
const [update,setUpdate]=useState(false)
   

 const change= async(id,index)=>{
     
    Axios.delete("http://localhost:4000/user/"+id)
        .then(
            setUpdate(!update)
        )
 }

useEffect(() => {
    Axios.get("http://localhost:4000/user")
        .then(res => {
            setDate(res.data)
        }
        ).catch(err => console.log(err))
},[update] 
); 

const arr = data
.map((data, index) => {
    var Id=data.id
    return(
        <tr key={index} >
            <td>{data.id}</td>
        <td>{data.lastName}</td><td> {data.firstName}</td><td> {data.phone}</td><td> {data.mail}</td><td>{data.actif}</td><td>
        <button onClick={()=>change(Id,index)} >Editer l'utilisateur</button>
        </td>
        </tr>
    )
})
return(
    <div className='userBloquer'>
        <h2>Liste des utilisateurs</h2>
                <table border={1} width="100%">
<tr><td>Id</td><td>Lastname</td><td>Firstname</td><td>Telephone</td><td>Mail</td><td>Statut</td><td>Edit</td></tr>
        {arr}
        </table>

    </div>

)

}
export default UserBloquer