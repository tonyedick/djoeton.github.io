import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

class AllCourses extends Component {
  render() {
    return (
        <Fragment>

<Container>
            <h1 className="coursesMainTitle">CHOOSE A PATH</h1>
            <div className="coursesBottom"></div>
                <Row>
                    <Col lg={4} md={6} sm={12}>
                        <Card className="coursesCard">
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dWklMjB1eHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                        <Card.Body>
                            <Card.Title>Become a UI/UX Designer</Card.Title>
                            <Card.Text>
                            Our instructor-led and hands-on training model helps you learn a combination of the 
                            art and science of tech product design with emphasis on solving business cases.
                            </Card.Text>
                            <p className="coursesReadMore"><Link to="/coursepathui">Read more..</Link></p>
                        </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} md={6} sm={12}>
                        <Card className="coursesCard">

                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5kcm9pZCUyMGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                        <Card.Body>
                            <Card.Title>Android Development</Card.Title>
                            <Card.Text>
                            This course helps you accelerate your career into Mobile Application Development and gives you
                            handson experience in solving business needs. Demo Content!
                            </Card.Text>
                            <p className="coursesReadMore"><Link to="/coursepathandroid">Read more..</Link></p>
                        </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} md={6} sm={12}>
                        <Card className="coursesCard">
                        <Card.Img variant="top" src="https://media.istockphoto.com/photos/programmer-working-with-program-code-picture-id1075599562?k=20&m=1075599562&s=612x612&w=0&h=cDFY2kKyhFzSNNlDQsaxoekIW0v7iyaMBkxp11Fz33U=" />
                        <Card.Body>
                            <Card.Title>Software Development</Card.Title>
                            <Card.Text>
                            Let us help you kick start your Tech career from the basics of programming with a focus on
                            Advanced Data Structures and Algorithm with emphasis on solving business cases.
                            </Card.Text>
                            <p className="coursesReadMore"><Link to="/coursepathdev">Read more..</Link></p>
                        </Card.Body>
                        </Card>
                
                    </Col>
                    
                    <Col lg={4} md={6} sm={12}>
                        <Card className="coursesCard">
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1599110906447-f38264a9c345?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdCUyMGRlc2lnbmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                        <Card.Body>
                            <Card.Title>Become a Product Designer</Card.Title>
                            <Card.Text>
                            Our instructor-led and hands-on training model helps you learn a combination of the 
                            art and science of tech product design with emphasis on solving business cases.
                            </Card.Text>
                            <p className="coursesReadMore"><Link to="/coursepathprod">Read more..</Link></p>
                        </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} md={6} sm={12}>
                        <Card className="coursesCard">
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1504691342899-4d92b50853e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGVudCUyMHdyaXRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                        <Card.Body>
                            <Card.Title>Become a Content Writer</Card.Title>
                            <Card.Text>
                            Learn to developer your vocabulary and writing skills. Get trained by experts
                            and leverage on new skills to become a skilled problem solver. Demo Content! Demo Content!
                            </Card.Text>
                            <p className="coursesReadMore"><Link to="/coursepathcontent">Read more..</Link></p>
                        </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} md={6} sm={12}>
                        <Card className="coursesCard">
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGlnaXRhbCUyMG1hcmtldGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                        <Card.Body>
                            <Card.Title>Become a Digital Marketer</Card.Title>
                            <Card.Text>
                            Develop skills to create, manage advertising campaigns in social media & evaluate results.
                            Learn how to build a strong social media presence for companies.
                            </Card.Text>
                            <p className="coursesReadMore"><Link to="/coursepathdigital">Read more..</Link></p>
                        </Card.Body>
                        </Card>
                
                    </Col>
                </Row>
            </Container>

            <Container className="text center">
            <h1 className="storiesMainTitle">START LEARNING</h1>
                    <div className="bottom"></div>
                <Row>
                    <Col lg={6} md={12} sm={12}>
                        <Row>
                            <Col lg={6} md={6} sm={12} className="p-2">
                                <img className="modulesImg" src="https://img.freepik.com/free-vector/digital-marketing-landing-page_33099-1726.jpg?w=740" alt=""/>
                            </Col>

                            <Col lg={6} md={6} sm={12}>
                                <h5 className="text-justify storiesName">Digital Marketing</h5>
                                <p className="text-justify storiesDescription">With this starter course, you will learn the foundational concepts
                                    used to build simple static websites.</p>
                                    <Link className="modulesViewMore float-left" to="#" >View Details</Link>
                              </Col>

                            <Col lg={6} md={6} sm={12} className="p-2">
                                <img className="modulesImg" src="https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?w=740" alt=""/>
                            </Col>

                            <Col lg={6} md={6} sm={12}>
                                <h5 className="text-justify storiesName">UI/UX</h5>
                                <p className="text-justify storiesDescription">With this starter course, you will learn the foundational concepts
                                    used to build simple static websites.</p>
                                    <Link className="modulesViewMore float-left" to="#" >View Details</Link>
                                </Col>
                        </Row>
                    </Col>

                    <Col lg={6} md={12} sm={12}>
                        <Row>
                            <Col lg={6} md={6} sm={12} className="p-2">
                                <img className="modulesImg" src= "https://img.freepik.com/free-photo/shot-serious-african-american-student-makes-notes-making-research_273609-44493.jpg?w=740" alt=""/>
                            </Col>

                            <Col lg={6} md={6} sm={12}>
                                <h5 className="text-justify storiesName">Content Writing</h5>
                                <p className="text-justify storiesDescription">With this starter course, you will learn the foundational concepts
                                    used to build simple static websites.</p>
                                    <Link className="modulesViewMore float-left" to="#" >View Details</Link>
                              </Col>

                            <Col lg={6} md={6} sm={12} className="p-2">
                                <img className="modulesImg" src="https://img.freepik.com/free-photo/mobile-application-design-illustrator-creativity-concept_53876-124070.jpg?w=740" alt=""/>
                            </Col>

                            <Col lg={6} md={6} sm={12}>
                                <h5 className="text-justify storiesName">Mobile Dev.</h5>
                                <p className="text-justify storiesDescription">With this starter course, you will learn the foundational concepts
                                    used to build simple static websites.</p>
                                    <Link className="modulesViewMore float-left" to="#" >View Details</Link>
                                </Col>
                        </Row>
                    </Col>

                    <Col lg={6} md={12} sm={12}>
                        <Row>
                            <Col lg={6} md={6} sm={12} className="p-2">
                                <img className="modulesImg" src= "https://img.freepik.com/free-photo/fashion-graphic-interior-exterior-design-concept_53876-123743.jpg?w=826" alt=""/>
                            </Col>

                            <Col lg={6} md={6} sm={12}>
                                <h5 className="text-justify storiesName">Product Design</h5>
                                <p className="text-justify storiesDescription">With this starter course, you will learn the foundational concepts
                                    used to build simple static websites.</p>
                                    <Link className="modulesViewMore float-left" to="#" >View Details</Link>
                              </Col>

                            <Col lg={6} md={6} sm={12} className="p-2">
                                <img className="modulesImg" src="https://img.freepik.com/free-photo/coding-man_1098-18084.jpg?w=740" alt=""/>
                            </Col>

                            <Col lg={6} md={6} sm={12}>
                                <h5 className="text-justify storiesName">Software Dev.</h5>
                                <p className="text-justify storiesDescription">With this starter course, you will learn the foundational concepts
                                    used to build simple static websites.</p>
                                    <Link className="modulesViewMore float-left" to="#" >View Details</Link>
                                </Col>
                        </Row>
                    </Col>

                    <Col lg={6} md={12} sm={12}>
                        <Row>
                            <Col lg={6} md={6} sm={12} className="p-2">
                                <img className="modulesImg" src= "https://img.freepik.com/free-photo/businesspeople-working-finance-accounting-analyze-financi_74952-1411.jpg?w=740" alt=""/>
                            </Col>

                            <Col lg={6} md={6} sm={12}>
                                <h5 className="text-justify storiesName">MS Excel</h5>
                                <p className="text-justify storiesDescription">With this starter course, you will learn the foundational concepts
                                    used to build simple static websites.</p>
                                    <Link className="modulesViewMore float-left" to="#" >View Details</Link>
                              </Col>

                            <Col lg={6} md={6} sm={12} className="p-2">
                                <img className="modulesImg" src="https://img.freepik.com/free-vector/graphic-design-geometric-wallpaper_52683-34399.jpg?w=740" alt=""/>
                            </Col>

                            <Col lg={6} md={6} sm={12}>
                                <h5 className="text-justify storiesName">Graphic Design</h5>
                                <p className="text-justify storiesDescription">With this starter course, you will learn the foundational concepts
                                    used to build simple static websites.</p>
                                    <Link className="modulesViewMore float-left" to="#" >View Details</Link>
                                </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </Fragment>
    );
  }
}

export default AllCourses
