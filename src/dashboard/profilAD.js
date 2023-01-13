import utilisateur1 from './utilisateur1.png'
import axios from 'axios'
import React, {useEffect, useState,useRef} from 'react'

function profilAD(){
     
 const idInputRef=useRef();
 const nameInputRef=useRef();
 const prenomInputRef=useRef();
 const telInputRef=useRef();
const emailInputRef=useRef();
 const [update,setUpdate]=useState(false)
 useEffect(()=>{
 
 },[update])
 
 const setUpdateAd = async()=>{
    const lastName= nameInputRef.current.value;
    const firstName= prenomInputRef.current.value;
    const telephone=telInputRef.current.value;
    const id = idInputRef.current.value;
   
    try{
       axios.patch(`http://localhost:4000/admin/`+ id,{lastName,firstName,telephone})
       .then((response)=>{
          if(lastName && firstName && telephone ){
             localStorage.setItem('lastName', response.data.lastName)
             localStorage.setItem('firstName', response.data.firstName)
             localStorage.setItem('telephone', response.data.telephone)
             localStorage.setItem('id', response.data.id)
             setShow3(!show3)
             setUpdate(!update)
          }
             else if(!lastName && !firstName && !telephone){
               setShow3(!show3)
               setUpdate(!update)
            }
            else if(lastName && !firstName && !telephone){
               localStorage.setItem('lastName',response.data.lastName)
               setShow3(!show3)
               setUpdate(!update)
            }else if(!lastName && firstName && !telephone){
               localStorage.setItem('firstName',response.data.firstName)
               setShow3(!show3)
               setUpdate(!update)
            }else if(!lastName && !firstName && telephone){
               localStorage.setItem('telephone',response.data.telephone)
               setShow3(!show3)
               setUpdate(!update)
            }
          })
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
      <div className='profil'>
        <img src={utilisateur1} alt='' className='imgProfil'/>  
        <input type="file" className='img' accept='image/*'/>
        <div className='info'>
        <p>{ localStorage.getItem('lastName')} { localStorage.getItem('firstName')}</p>

        <p>{ localStorage.getItem('mail')}</p>
        <p>{ localStorage.getItem('telephone')}</p>
        </div>
        <button className='valid' onClick={modif}>Modifier</button>
       {show3? <div className='modifProfil'>
        <h3 >Modifier vos informations</h3>
        <div className='infoModif'>
        
         <input value={ localStorage.getItem('id')}  ref={idInputRef} type="hidden"/><br/>
         <label>Nom</label><br/>
         <input placeholder={ localStorage.getItem('lasttName')} ref={nameInputRef} /><br/>
         <label>Prénom</label><br/>
         <input placeholder={ localStorage.getItem('firstName')} ref={prenomInputRef} /><br/>
        <label>Numéro</label><br/>
        <input placeholder={ localStorage.getItem('telephone')} ref={telInputRef} /><br/>
         <label>Email</label><br/>
         <input placeholder={ localStorage.getItem('mail')} ref={emailInputRef} /><br/>
         <button className='valid' onclick={setUpdateAd}>Valider</button>
         </div>
      </div>:null}
      </div>
    )
}
export default profilAD