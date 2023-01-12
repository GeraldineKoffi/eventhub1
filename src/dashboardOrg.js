import React, {useState,useRef} from "react";
import { useEffect } from 'react';
import Axios from 'axios';
import axios from 'axios'
import {Link} from 'react-router-dom'
import ProfilOrg from './dashboard/profilOrg'
import  './dashboard/style.css'

function dashboardOrg(){
    const [show2,setShow2]=useState(false);
    const org=localStorage.getItem('id')
    function open(){
        setShow2(!show2)
    }
  
    const logout=()=>{
        localStorage.removeItem('access_token')
        localStorage.removeItem("name")
        localStorage.removeItem("tel")
        localStorage.removeItem("adresse")
        localStorage.removeItem("mail")
        localStorage.removeItem("id")
        localStorage.removeItem("gerant")
        localStorage.removeItem("num_RCS")
    }
      const [data, setDate] = useState([])
   
  useEffect(() => {
      Axios.get("http://localhost:4000/event")
          .then(res => {
              setDate(res.data)
          }
          ).catch(err => console.log(err))
  },[] 
  );
   
  const idInputRef=useRef();
  const titleInputRef=useRef();
  const descripInputRef=useRef();
  const dateInputRef=useRef();
  const prixInputRef=useRef();
  const statutInputRef=useRef();
  const [update,setUpdate]=useState(false)
 
  useEffect(()=>{
   
  },[update])

  const setUpdateEvent = async()=>{
     const title= titleInputRef.current.value;
     const description= descripInputRef.current.value;
     const date=dateInputRef.current.value;
     const prix=prixInputRef.current.value;
     const statut=statutInputRef.current.value;
     const id = idInputRef.current.value;
    
     try{
        axios.patch(`http://localhost:4000/event/`+ id, {title, description,date,statut,prix})
        .then((response)=>{
           console.log(response)
              localStorage.setItem('title', response.data.title)
              localStorage.setItem('description', response.data.description)
              localStorage.setItem('date', response.data.date)
              localStorage.setItem('prix', response.data.prix)
              localStorage.setItem('statut', response.data.statut)
              localStorage.setItem('id', response.data.id)
              setShow2(!show2)
              setUpdate(!update)
           }) 
  }
  catch (err) {
     console.log("l'erreur est :", err);
  }
  
}
    const arr = data 
    
    
  .map((data, index) => {
 
    
        return (
            <div className='listEvent' key={index}>
                <h5>{data.title} {data.description} {data.date} {data.prix}</h5>      
                <button className="event1" onClick={open}>Modifier un évènement</button> 
                {show2? 
       <div className='modifEvent'>
        <h2>Modification Evènement</h2>
          <input   value={ data.id} ref={idInputRef} type=""/><br/>
          <label>Titre</label><br/>
          <input placeholder={ data.title} ref={titleInputRef} /><br/>
          <label>Description</label><br/>
          <input placeholder={ data.description} ref={descripInputRef} /><br/>
          <label>Date</label><br/>
          <input placeholder={ data.date} ref={dateInputRef} /><br/>
          <label>Prix</label><br/>
          <input placeholder={ data.prix} ref={prixInputRef} /><br/>
          <label>statut</label><br/>
          <input placeholder={ data.statut} ref={statutInputRef} /><br/>
          <button className='valid' onClick={setUpdateEvent}>Valider</button>
          </div>:null}
            </div>
            
            
        )
    })
            

    return(
        <div className="dashboard">
             <ProfilOrg/>
              <h1>Liste de vos évènements</h1>
               {arr}
             <Link to={'./'}><button className="deconnect" onClickCapture={logout}>Déconnexion</button></Link> 
             <Link to={'./events'}><button className="event">Créer un nouvel évènement</button></Link> 
             <Link to={'./inscritEvent'}><div className="event2">Personnes inscrites à votre évènement</div></Link>
             </div>
    )

}
export default dashboardOrg