import React from 'react'
import { useEffect, useState } from 'react';
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
    function  ticket(id){
    
        const eventId = id
        const usersId=localStorage.getItem('id')
        console.log(eventId,"",usersId);
       
         axios.post("http://localhost:4000/ticket/buy",{
             eventId,
             usersId,
         })
         }
    /*
    const affich=(e)=>{
        if(id===localStorage.getItem('id', user)){
            <div className='eventList' key={index}>
            <h5 className='title'>{data.title} </h5>
            <img src={utilisateur1} className="imag" alt=''/>
            <h5 className='descrp'>{data.description}</h5>
            <h5 className='date'> {data.date}</h5>           
            <button className='valid' onClick={ticket}>Achat de ticket</button>
        </div>
        }
        else{
            <div className='eventList' key={index}>
            <h5 className='title'>{data.title} </h5>
            <img src={utilisateur1} className="imag" alt=''/>
            <h5 className='descrp'>{data.description}</h5>
            <h5 className='date'> {data.date}</h5>           
            <button className='valid' onClick={ticket}>Modifier</button>
        </div>
        }
    }*/

   const handleSearch=(e)=>{
    let value = e.target.value;
    setSearch(value)
   }
    const arr = data 
    .filter((val)=>{
            return val.title.includes(search)
    })
    
  .map((data, index) => {
    
        return (
            <div className='eventList' key={index}>
                <h5 className='title'>{data.title} </h5>
                <img src={utilisateur1} className="imag" alt=''/>
                <h5 className='descrp'>{data.description}</h5>
                <h5 className='date'> {data.date}</h5>        
                <button className='valid'  onClick={ticket(data.id)}>Achat de ticket</button>
            </div>
            
        )
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