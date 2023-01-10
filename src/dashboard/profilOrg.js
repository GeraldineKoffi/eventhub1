import React, { useEffect, useState,useRef} from 'react'
import axios from 'axios'
import utilisateur1 from './utilisateur1.png'


function ProfilOrg(){   
   const idInputRef=useRef();
   const nameInputRef=useRef();
   const telInputRef=useRef();
   const gerantInputRef=useRef();
   const [update,setUpdate]=useState(false)

   useEffect(()=>{
  
   },[update])
   
   const setUpdateOrg = async()=>{
      const name= nameInputRef.current.value;
      const tel=telInputRef.current.value
      const gerant= gerantInputRef.current.value; 
      const id = idInputRef.current.value;
     
      try{
         axios.patch(`http://localhost:4000/organisateur/`+ id, {name, gerant, tel})
         .then((response)=>{
            if(response.data.access_token){
               localStorage.setItem('name', response.data.organisteur.name)
               localStorage.setItem('tel', response.data.organisteur.tel)
               localStorage.setItem('gerant', response.data.organisteur.gerant)
            }})
            
   
   }
   catch (err) {
      console.log("l'erreur est :", err);
   }
}

    const [show3, setShow3] = React.useState(false)
 
 function modif(){
    setShow3(!show3)
    
 }
 
    return(
      <div className='profilOrg'>
        <img src={utilisateur1} alt='' className='imgProfil'/>  
        <input type="file" className='img' accept='image/*'/>
        <div className='info'>
        <p>{ localStorage.getItem('name')}</p> 
        <p>{ localStorage.getItem('email')}</p>
        <p>{ localStorage.getItem('tel')}</p>
        <p>{ localStorage.getItem('adresse')}</p>
        <p>{ localStorage.getItem('gerant')}</p>
        <p>{ localStorage.getItem('num_RCS')}</p>
        </div>
        <button className='valid' onClick={modif}>Modifier</button>
       {show3? <div className='modifProfil'>
        <h3 >Modifier vos informations</h3>
        <div className='infoModif'>

         <input   value={ localStorage.getItem('id')} ref={idInputRef} type="hidden" /><br/>
         <label>Nom Entreprise</label><br/>
         <input placeholder={ localStorage.getItem('name')} ref={nameInputRef} /><br/>
        <label>Numéro</label><br/>
        <input placeholder={ localStorage.getItem('tel')}ref={telInputRef} /><br/>
         <label>gerant</label><br/>
         <input placeholder={localStorage.getItem('gerant')} ref={gerantInputRef} /><br/>
         <button className='valid' onClick={setUpdateOrg}>Valider</button>
         </div>
      </div>:null}
      </div>
    )
}
export default ProfilOrg