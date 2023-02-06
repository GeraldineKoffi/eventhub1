import React, { useState } from "react"
import { Dialog } from 'primereact/dialog';
import  Avatar from 'react-avatar-edit'
import { InputText } from 'primereact/inputtext';
import Button from "react-bootstrap/Button"
import utilisateur1 from './utilisateur1.png'

function ProfilAS(){
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
       return(
           <div className="profilAS">
               <img className="img"
               onClick={()=>setImageCrop(true)}
               src={profileFinal.length ? profileFinal: utilisateur1} alt=""/>
   
               <Dialog style={{position:"absolute", top:"20px",left:"35%"}}
               visible={imageCrop}
               header={()=>(
                   <p htmlFor="" className="text-2xl font-semiblod textcolor">
                      Mise à jour de votre photo de profil
                   </p>
               )}
               onHide={()=>setImageCrop(false)}
               >
                   <div className="confirmation-content flex flex-column align-items-center">
                       <Avatar 
                       width={500}
                       heigth={400}
                       onCrop={onCrop}
                       onClose={onClose}
                       src={src}
                       shadingColor={'#474649'}
                       backgroundColor={"#474649"}
                   />
          
               <Button variant="dark" onClick={saveCropImage} icon="pi pi-check">Changer</Button>
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
           <p>{ localStorage.getItem('lastName')} { localStorage.getItem('firstName')}</p>
           <p>{ localStorage.getItem('mail')}</p>
           <p>{ localStorage.getItem('telephone')}</p>
           </div>
      </div>
    )
}
export default ProfilAS