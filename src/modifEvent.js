import React, {useEffect,useRef,useState} from 'react'
import axios from 'axios'
import Axios from 'axios'

function ModifEvent(){
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
              setUpdate(!update)
           }) 
  }   
  catch (err) {
   console.log("l'erreur est :", err);
}
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
const arr = data 
.map((data, index) => {
return(
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
    </div>
)})
    }
    export default ModifEvent