import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

class Modules extends Component {
  render() {
    return (
        <Fragment>
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
                                    <Link className="modulesViewMore float-left" to="/coursepathdigital" >View Details</Link>
                              </Col>

                            <Col lg={6} md={6} sm={12} className="p-2">
                                <img className="modulesImg" src="https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?w=740"  alt=""/>
                            </Col>

                            <Col lg={6} md={6} sm={12}>
                                <h5 className="text-justify storiesName">UI/UX</h5>
                                <p className="text-justify storiesDescription">With this starter course, you will learn the foundational concepts
                                    used to build simple static websites.</p>
                                    <Link className="modulesViewMore float-left" to="/coursepathui" >View Details</Link>
                                </Col>
                        </Row>
                    </Col>

                    <Col lg={6} md={12} sm={12}>
                        <Row>
                            <Col lg={6} md={6} sm={12} className="p-2">
                                <img className="modulesImg" src= "https://img.freepik.com/free-photo/shot-serious-african-american-student-makes-notes-making-research_273609-44493.jpg?w=740"  alt=""/>
                            </Col>

                            <Col lg={6} md={6} sm={12}>
                                <h5 className="text-justify storiesName">Content Writing</h5>
                                <p className="text-justify storiesDescription">With this starter course, you will learn the foundational concepts
                                    used to build simple static websites.</p>
                                    <Link className="modulesViewMore float-left" to="/coursepathcontent" >View Details</Link>
                            </Col>

                            <Col lg={6} md={6} sm={12} className="p-2">
                                <img className="modulesImg" src="https://img.freepik.com/free-photo/mobile-application-design-illustrator-creativity-concept_53876-124070.jpg?w=740" alt=""/>
                            </Col>

                            <Col lg={6} md={6} sm={12}>
                                <h5 className="text-justify storiesName">Mobile Dev.</h5>
                                <p className="text-justify storiesDescription">With this starter course, you will learn the foundational concepts
                                    used to build simple static websites.</p>
                                    <Link className="modulesViewMore float-left" to="/coursepathandroid" >View Details</Link>
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
                                    <Link className="modulesViewMore float-left" to="/coursepathprod" >View Details</Link>
                              </Col>

                            <Col lg={6} md={6} sm={12} className="p-2">
                                <img className="modulesImg" src="https://img.freepik.com/free-photo/coding-man_1098-18084.jpg?w=740" alt=""/>
                            </Col>

                            <Col lg={6} md={6} sm={12}>
                                <h5 className="text-justify storiesName">Software Dev.</h5>
                                <p className="text-justify storiesDescription">With this starter course, you will learn the foundational concepts
                                    used to build simple static websites.</p>
                                    <Link className="modulesViewMore float-left" to="/coursepathdev" >View Details</Link>
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
                                    <Link className="modulesViewMore float-left" to="/coursepath" >View Details</Link>
                              </Col>

                            <Col lg={6} md={6} sm={12} className="p-2">
                                <img className="modulesImg" src="https://img.freepik.com/free-vector/graphic-design-geometric-wallpaper_52683-34399.jpg?w=740" alt=""/>
                            </Col>

                            <Col lg={6} md={6} sm={12}>
                                <h5 className="text-justify storiesName">Graphic Design</h5>
                                <p className="text-justify storiesDescription">With this starter course, you will learn the foundational concepts
                                    used to build simple static websites.</p>
                                    <Link className="modulesViewMore float-left" to="/coursepathui" >View Details</Link>
                                </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </Fragment>
        )
  }
}

export default Modules
