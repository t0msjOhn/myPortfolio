import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import ContactImg from '../Images/contactImg.png';
 
function Contact(){

   return(
        <section id="contactId">
            <div className="contactDiv">
                <Row>
                    <Col>
                        <h1  style={{textAlign:"center", marginTop:"35px"}}>Feel Free to contact Me<span/>🤗</h1>
                    </Col>
                </Row>
                <Container>
                <Row>
                
                 <Col lg={8}>
                    <Image src={ContactImg} alt="contactImage" fluid></Image>
                </Col>
                <Col lg={4}>
                    <Form action="mailto:tomsjohnse@gmail.com" method="post" enctype="text/plain" style={{paddingTop:"50px"}}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                        <Form.Label>Message Me</Form.Label>
                        <Form.Control style={{marginBottom:"10px"}} as="textarea" placeholder="Enter message here"/>
                        <Button variant="primary" type="submit" size="lg">
                        Submit
                        </Button>
                        </Form.Group>
                    </Form>
                    <a href="https://www.instagram.com/its_t0ms/"><img className="smImg" width="40" height="40" src="https://img.icons8.com/ios/50/instagram-new--v1.png" alt="instagram-new--v1"/></a>
                    <a href="https://www.linkedin.com/in/toms-john-b8429221b"><img className="smImg" width="40" height="40" src="https://img.icons8.com/ios/50/linkedin.png" alt="linkedin"/></a>
                </Col>
               
               
                </Row>
                </Container>
            </div>
        </section>
    );
}

export default Contact;