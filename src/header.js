import {useEffect} from 'react'
import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {BiUserCircle} from 'react-icons/bi';
import {FiLogOut} from 'react-icons/fi';




function Header( { update, setUpdate } ){
    
    useEffect(()=>{

     },[update])
    
     function logout(){
        localStorage.removeItem("access_token")
        localStorage.removeItem("lastName")
        localStorage.removeItem("firstName")
        localStorage.removeItem("phone")
        localStorage.removeItem("mail")
        localStorage.removeItem("id")
        localStorage.removeItem("telephone")
        localStorage.removeItem("adresse")
        localStorage.removeItem("gerant")
        localStorage.removeItem("num_RCS")
        setUpdate(true)
    }
  
    return(
      <div className="Navbar">
      {['md'].map((expand) => (
        <Navbar key={expand} bg="dark" variant='dark' expand={expand} className="mb-3">
          <Container fluid >
            <Navbar.Brand href="/">Eventhub</Navbar.Brand>
            
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
              </Offcanvas.Header>
               <Offcanvas.Body>
          {!localStorage.getItem('id')?
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Acceuil</Nav.Link>
                  <Nav.Link href="/#event">Evènements</Nav.Link>
                  <Nav.Link href="/#contact">Contacts</Nav.Link>
                  <Nav.Link href="/roleConnect" className='connect'>Connexion<BiUserCircle className='icon'/></Nav.Link>
                </Nav>:
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Acceuil</Nav.Link>
                <Nav.Link href="/#event">Evènements</Nav.Link>
                <Nav.Link href="/#contact">Contacts</Nav.Link>
                {(localStorage.getItem("role")==="user")?
                <Nav.Link href="./dashboard">Profil</Nav.Link>:
                (localStorage.getItem("role")==="organisateur")?
                <Nav.Link href="./dashboardOrg">Profil</Nav.Link>:
                (localStorage.getItem("role")==="admin")?
                <Nav.Link href="./dashboardAd">Profil</Nav.Link>:
                <Nav.Link href="./dashboardSup">Profil</Nav.Link>
      }
                <Nav.Link href={"/"} onClick={logout} className='deconnect'>Déconnexion<FiLogOut className='icon'/></Nav.Link>
              </Nav>}

                </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

      </div>
  
    )
}
export default Header;