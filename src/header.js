import {useEffect} from 'react'
import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';



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
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Acceuil</Nav.Link>
                  <Nav.Link href="#event">Evènements</Nav.Link>
                  <Nav.Link href="#contact">Contacts</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

      </div>
  
    )
}
export default Header;