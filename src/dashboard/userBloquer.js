import React from 'react'
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Button from 'react-bootstrap/Button'


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
        <td>{data.lastName}</td><td>{data.firstName}</td><td>{data.phone}</td><td>{data.mail}</td><td>{data.actif}</td>  
       <td> <Button variant="dark" onClick={()=>change(Id,index)} >Editer l'utilisateur</Button></td>
        
        </tr>
    )
})
return(
    <div className='userBloquer'>
        <h2>Liste des utilisateurs</h2>
            <table>
                <tr>
                     <td>Lastname</td>
                     <td>Firstname</td>
                     <td>Telephone</td>
                     <td>Mail</td>
                     <td>Statut</td>
                     <td>Edit</td>
                 </tr>
                 <tr><hr width="100%"/></tr>
            {arr}
        </table>

    </div>

)

}
export default UserBloquer