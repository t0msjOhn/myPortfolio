import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import  "../index.css";
import Container from 'react-bootstrap/esm/Container';

function Resume(){
    return(
        <section id="resumeId">
            <div className="resumeDiv">
                
                    <Row className="row-sm-12 alignCl">
                        <Col>
                            <h1 style={{textAlign:"center", marginBottom:"25px"}}>
                                <strong>My Journey</strong>
                            </h1>
                        </Col>
                    </Row>
                    

                            <Card className='cardRes1'>
                                <Card.Body>
                                <Card.Title style={{textAlign:"center",paddingBottom:"15px"}}>INTERNSHIP</Card.Title>
                                <Card.Text>
                                <Container>
                                <Row style={{textAlign:"center"}}>
                                <Col sm={12} className='eduCard'>
                                <h6>Defence Research and Development Organization(DRDO), CABS,</h6>
                                <p>08/2022–10/2022 |Bangalore, India
                                <br/>Worked on project “Study and demonstration on Image Enhancement 
                                and Compression.”</p>
                                </Col>
                                </Row>
                                </Container>
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        
                            <Card className='cardRes2 '>
                                <Card.Body>
                                <Card.Title style={{textAlign:"center" ,paddingBottom:"10px"}}>
                                EDUCATION
                                </Card.Title>
                                <Card.Text>
                                <Container >
                                <Row  style={{textAlign:"center"}}>
                                <Col sm={4} className='eduCard'>
                                <h6>The Oxford College of Engineering,</h6>
                                <p>B.E in Computer Science and Engineering
                                <br/>2019-2023 |Bangalore, India
                                <br/>CGPA: 9.13
                                </p>
                                </Col>
                                <Col sm={4} className='eduCard'>
                                <h6>Army Public School ASC C & C,</h6>
                                <p>Higher Secondary Education
                                <br/>2017-2019 |Bangalore, India
                                <br/>12th Percentage: 85.2%
                                </p>
                                </Col>
                                <Col sm={4} className='eduCard'> 
                                <h6>Army Public School ASC C & C,</h6>
                                <p>Secondary Education
                                <br/>2016-2017 |Bangalore, India
                                <br/>10th CGPA: 9.6
                                </p>
                                </Col>
                                </Row>
                                </Container>
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        
                            <Card className='cardRes3 '>
                                <Card.Body>
                                <Card.Title style={{textAlign:"center", paddingBottom:"10px"}}>SKILLS</Card.Title>
                                <Card.Text>
                                <Container>
                                <Row>
                                <Col style={{textAlign:"center"}}>
                                <Row >
                                    
                                        <Col className="skillCol">C </Col>
                                        <Col className="skillCol">Java </Col>
                                        <Col className="skillCol">Python </Col>
                                        <Col className="skillCol">MySQL </Col>
                                        <Col className="skillCol">HTML </Col>
                                        <Col className="skillCol">CSS </Col>
                                        <Col className="skillCol">Bootstrap </Col>
                                        <Col className="skillCol">JavaScript </Col>
                                        <Col className="skillCol">React </Col>
                                        <Col className="skillCol">Android Studio </Col>
                                    
                                         
                                </Row>
                                
                                </Col>
                                </Row>
                                </Container>
                                </Card.Text>
                                </Card.Body>
                            </Card>
                           
                
            </div>
        </section>
    );
}

export default Resume;