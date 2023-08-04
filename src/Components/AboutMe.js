import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import myImg from "../Images/mySelf-removebg-preview.jpg";
import  "../index.css";

function AboutMe(props){

    return(
        <section id="aboutId">
        <Container>
            <Row >
            <Col lg={8} className="colAbtMe">
                <h1>I am Toms John, Computer Science graduate,<br/> 
                I am a person who is always ready to learn new things and explore it. Always update your knowlegde to survey in this race.</h1>
            </Col>
            <Col lg={4}><Image className="colMyImg" alt="myImage"  src={myImg} fluid/></Col>
        </Row>
    </Container>
    </section>
 );

}

export default AboutMe;