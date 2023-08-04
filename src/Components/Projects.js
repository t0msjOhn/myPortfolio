import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../index.css";

function Projects(){
    return(
        <section id="projectId">
            <div className="projectDiv">
            <Row className="row-sm-12 alignCl">
                        <Col>
                            <h1 style={{textAlign:"center", marginBottom:"25px"}}>
                                <strong>Projects</strong>
                            </h1>
                        </Col>
            </Row>
            <Container>
            <Card className="proCard1">
            
            <Card.Title>Photonic Crystal based Prediction of Cervical and Breast Cancer using ML Model.</Card.Title>
            <Card.Text>
            This project aims to design an optimized photonic crystal structure and 
            develop an ML model for accurate prediction of cervical and 
            breast cancer.
            Technologies used MEEP Software, Google Colab(Python),Android Studio, PyCharm(API), & Android Studio.
            <br/><Button className="moreInfoBtn" href="" >More Info</Button>
            </Card.Text>
           
            </Card>
            <Card className="proCard1">

            <Card.Title>Vehicle Booking System</Card.Title>
            <Card.Text>
            Developed a software using NetBeans for vehicle booking. Used Java
            for frontend and MySQL for database.
            <br/><Button className="moreInfoBtn" href="" >More Info</Button>
            </Card.Text>
           
            </Card>
            <Card className="proCard1">
            
            <Card.Title>Music App</Card.Title>
            <Card.Text>
            Developed a useful android app for listening music stored 
            in the internal storage of the android phone. Tool used is Android 
             Studio.
             <br/><Button className="moreInfoBtn" href="" >More Info</Button>
            </Card.Text>
           
            </Card>
            </Container>
            </div>
        </section>
    );
}

export default Projects;