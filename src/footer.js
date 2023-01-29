import React from 'react';
import {Link} from 'react-router-dom';
import { CDBBox} from 'cdbreact';

function Footer(){
  return (
    <footer className="footer" id="contact">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-decoration-none text-white">
              <span className="ml-3 h5 font-weight-bold">EventHub</span>  
            </a>
            <p className="my-3" style={{ width: '250px'}}> 
               Un site pour la promotion des évènements. 
                Elle permet aux organisateurs d'évènements de pouvoir facilement 
                faire connaitre leurs évènements au grand public
            </p>
          
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Nos Contacts
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' , color:"white"}}>
              <Link to={"/"} className="text-decoration-none text-white">eventhub@gmail.com</Link>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
            Nos services
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0', color:"white"}}>
              <Link to={"/role"} className="text-decoration-none text-white">S'inscrire</Link><br/>
              <Link to={"/roleCnnect"}  className="text-decoration-none text-white">Se connecter</Link><br/>
              <Link to={"/#event"}  className="text-decoration-none text-white">Voir les évènements</Link><br/>
            </CDBBox>
          </CDBBox>
          </CDBBox>
        <small className="text-center mt-5">&copy; EventHub, 2023. Tous les droits sont réservés.</small>
      </CDBBox>
    </footer>
  );
};
export default Footer