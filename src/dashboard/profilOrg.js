import utilisateur1 from './utilisateur1.png'
import axios from 'axios'
import React, {useEffect, useState,useRef} from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { Dialog } from 'primereact/dialog';
import  Avatar from 'react-avatar-edit'
import { InputText } from 'primereact/inputtext';

function ProfilOrg(){  
   const [image, setImage]=useState("")
   const [imageCrop, setImageCrop]=useState(false)
   const [src, setsrc]=useState(false);
   const [profile, setprofile]=useState([]);
   const [pview, setpview]=useState(false);
  
   const profileFinal=profile.map((item)=>item.pview);
  
   const onClose=()=>{
      setpview(null);
   };
  
   const onCrop=(view)=>{
      setpview(view);
   };
  
   const saveCropImage=()=>{
      setprofile([...profile, {pview}]);
      setImageCrop(false);
   }
 
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
               if(name && gerant && tel){
               localStorage.setItem('name', response.data.name)
               localStorage.setItem('tel', response.data.tel)
               localStorage.setItem('gerant', response.data.gerant)
               setShow3(!show3)
               setUpdate(!update)
               }
               else if(!name && !gerant && !tel){
                  setShow3(!show3)
                  setUpdate(!update)
               }
               else if(name && !gerant && !tel){
                  localStorage.setItem('name',response.data.name)
                  setShow3(!show3)
                  setUpdate(!update)
               }else if(!name && gerant && !tel){
                  localStorage.setItem('gerant',response.data.gerant)
                  setShow3(!show3)
                  setUpdate(!update)
               }else if(!name && !gerant && tel){
                  localStorage.setItem('tel',response.data.tel)
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
      <div className='profilOrg'>
        <img className="img"
            onClick={()=>setImageCrop(true)}
            src={profileFinal.length ? profileFinal: utilisateur1} alt=""/>

            <Dialog style={{position:"absolute",background:"white", top:"25px",left:"15%"}}
            visible={imageCrop}
          
            onHide={()=>setImageCrop(false)}
            >
                <div className="confirmation-content flex flex-column align-items-center">
                    <Avatar 
                    width={200}
                    heigth={200}
                    onCrop={onCrop}
                    onClose={onClose}
                    src={src}
                    shadingColor={'#474649'}
                    backgroundColor={"#474649"}
                />
       
            <Button variant="dark" onClick={saveCropImage} icon="pi pi-check">Appliquer</Button>
            </div>
            </Dialog>
        <InputText 
        type="file"
        accept='/image/*'
        style={{display:"none"}}

        onChange={(e)=>{
        const file=e.target.files[0];
        if(file && file.type.substring(0,5)==="image"){
            setImage(file);
        }else{
            setImage(null)
        }}}/>
        <div className='info'>
        <p>{ localStorage.getItem('name')}</p> 
        <p>{ localStorage.getItem('mail')}</p>
        <p>{ localStorage.getItem('tel')}</p>
        <p>{ localStorage.getItem('adresse')}</p>
        <p>{ localStorage.getItem('gerant')}</p>
        <p>{ localStorage.getItem('num_RCS')}</p>
        </div>
        <Button type="submit" variant="dark"  className="modifO" onClick={modif}>Editer votre profil</Button>
       {show3?  
        <Form className="formModifOrg">
        <h5>Modifier vos informations</h5>
         <Form.Group >
         <Form.Control 
            value={ localStorage.getItem('id')} ref={idInputRef} type="hidden"/>
         </Form.Group>
         <Form.Group>
         <Form.Label>Nom</Form.Label>
         <Form.Control placeholder={ localStorage.getItem('name')} ref={nameInputRef} />
         </Form.Group>
         <Form.Group>
         <Form.Label>Téléphone</Form.Label>
         <Form.Control placeholder={ localStorage.getItem('tel')} ref={telInputRef} />
         </Form.Group>
         <Form.Group>
         <Form.Label>Gérant</Form.Label>
         <Form.Control placeholder={ localStorage.getItem('gerant')} ref={gerantInputRef} />
         </Form.Group><br/>
         <Button type="submit" variant="dark" onClick={setUpdateOrg}>Modifier</Button>
         <Button type='reset'  className="valid"  variant="dark" onClick={modif} >Annuler</Button>

         </Form>
      :null}
      </div>
    )
}
export default ProfilOrg