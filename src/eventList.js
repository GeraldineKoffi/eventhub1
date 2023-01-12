import React from 'react'
import { useEffect, useState, reverse } from 'react';
import Axios from 'axios';
import utilisateur1 from './dashboard/utilisateur1.png'
import rech from './mesImages/rech.jpg'
import axios from 'axios'



function EventList() {
    const [data, setDate] = useState([])
    const [search, setSearch]=useState([])

     
    useEffect(() => {
        Axios.get("http://localhost:4000/event")
            .then(res => {
                setDate(res.data)
            }
            ).catch(err => console.log(err))
    },[] 
    );

    var buytick = async (id) => {

        const event = id
        const user = parseInt(localStorage.getItem('id'))
        const userLastName = localStorage.getItem('lastName')
        const idUser = Axios.get("http://localhost:4000/user/" + user)

        if ((await idUser).data.lastName == userLastName){

            axios.post("http://localhost:4000/ticket/buy", {
                event,
                user,
            }).then(res => {
                alert(res.data);
            })
        }
    }

   const handleSearch=(e)=>{
    let value = e.target.value;
    setSearch(value)
   }
    const arr = data
     
    .filter((val)=>{
            return val.title.includes(search)
    })
    
  .map((data, index) => {
    const statut= "payant"
    if(data.statut===statut){
        return (
            <div className='eventList' key={index}>
                <h5 className='title'>{data.title} </h5>
                <img src={utilisateur1} className="imag" alt=''/>
                <h5 className='descrp'>{data.description}</h5>
                <h5 className='date'> {data.date}</h5>  
                <h5 className='prix'>Prix: {data.prix}FCFA</h5>  
                <button className='valid'  onClick={()=>buytick(data.id)}>Achat de ticket</button>
            </div>
            
        )
        }else{
            return(
                <div className='eventList' key={index}>
                <h5 className='title'>{data.title} </h5>
                <img src={utilisateur1} className="imag" alt=''/>
                <h5 className='descrp'>{data.description}</h5>
                <h5 className='date'> {data.date}</h5>  
                <h5 className='prix'> {data.statut}</h5>  
                <button className='valid' onClick={()=>buytick(data.id)}>Intéresser</button>
                </div>
            )
        }
    })
    return (
        <div className='eventL'>
            <div className='recherche'>
            <img src={rech} alt="" className='img'/>
            <input type="text" name="search" id="search" placeholder=" un événement ici en entrant son titre" onChange={handleSearch} />
            </div>
            <h1>Events List</h1>
            <hr/>
            {arr}
            
        </div>
    )
}
export default EventList