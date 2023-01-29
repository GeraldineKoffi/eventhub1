import React from 'react'
import { useEffect, useState } from 'react';
import Axios from 'axios';


function OrgBloquer() {
const [data, setDate] = useState([])
const [update,setUpdate]=useState(false)
   

 const change= async(id,index)=>{
     
    Axios.delete("http://localhost:4000/organisateur/"+id)
        .then(
            setUpdate(!update)
        )
 }
 
useEffect(() => {
    Axios.get("http://localhost:4000/organisateur")
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
        <tr key={index}>
            
        <td>{data.name}</td><td> {data.adresse} </td><td>{data.mail}</td><td> {data.gerant}</td><td>{data.tel}</td><td> {data.num_RCS}</td><td> {data.actif}</td><td><button onClick={()=>change(Id,index)} className='Editer' >Editer l'organisateur</button></td>
        </tr>
    )
})
return(
    <div className='orgBloquer'>
        <h2>Liste des organisateurs</h2>
                <table >
                   
            <tr><td>Name</td><td>Adress</td><td>Mail</td><td>Gerant</td><td>Telephone</td><td>Num Rcs</td><td>Statut</td><td>Edit</td></tr>
            <hr/>
        {arr}
        </table>

    </div>

)

}
export default OrgBloquer