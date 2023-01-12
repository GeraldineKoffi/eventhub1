import React,{useState,useEffect} from 'react'
import Axios from 'axios';
import {Link} from 'react-router-dom'
import ProfilOrg from './dashboard/profilOrg'
import  './dashboard/style.css'
import axios from 'axios';

function dashboardOrg(){

      const [data, setDate] = useState([])
      useEffect(() => {
        Axios.get("http://localhost:4000/organisateur/" + localStorage.getItem('id'))
            .then(res => {
                console.log(res.data.Events);
                setDate(res.data.Events)
            }
            ).catch(err => console.log(err))
    }, []
    );
    axios.get("http://localhost:4000/ticket/event/"+ data.id)
            .then(res=>{
              console.log(res.data)
            })
    const arr = data 
  .map((data, index) => {

        return (
            <div className='listEvent' key={index}>
                <h5>{data.title} {data.description} {data.date} {data.prix}</h5>      
               <Link to={"./modifEvent"}><button className="event1">Modifier un évènement</button> </Link> 
         </div> 
        )
    })
    return(
        <div className="dashboard">
             <ProfilOrg/>
              <h1>Liste de vos évènements</h1>
               {arr}
             <Link to={'./events'}><button className="event">Créer un nouvel évènement</button></Link> 
             <Link to={'./inscritEvent'}><div className="event2">Personnes inscrites à votre évènement</div></Link>
             </div>
    )

}
export default dashboardOrg