import React  from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  "../index.css";
import tj from "../Images/favicon-16x16.png";


function NavBar(){
    return(
      <section id="home">
        <div className="navBg">
          <Navbar expand="lg" className="bg-body-light">
            <Container>
                <Navbar.Brand className="navbr" href="#home"><img width="20" height="22" src={tj} alt="portfolio"/> <strong>Toms John</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto ">
                    <Nav.Link href="#aboutId">ABOUT ME</Nav.Link>
                    <Nav.Link href="#resumeId">MY JOURNEY</Nav.Link>
                    <Nav.Link href="#projectId">PROJECT</Nav.Link>
                    <Nav.Link href="#contactId">CONTACT</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        </section>
   );
}

export default NavBar;