import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import pathDetails from '../../asset/image/cpath.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons'

class CoursesPathDetails extends Component {
        render() {
            return(
                <Fragment>
                   <Container className="mt-5">
                        <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <div className="about-thumb-wrap after-shape">
                                        <img className="aboutPathImg" src={pathDetails} alt="Students in school"/>
                                    </div>
                                </Col>


                                <Col lg={6} md={6} sm={12} className="mt-5">
                                    <div className="course-paths">
                                        <h1 className="coursePathsText">Become a Professional Data Analyst.</h1>  
                                        <p className="pathName">This is your first step to becoming a professional Data Analyst. Get industry experience when you learn from Top Data Analysts Professionals in the industry alongside students from over 150 countries.</p> 
                                        <p className="pathName">Join fellow students like you and kick start your career in the Top 10% Career Jobs of the Future, when you register with SojiLearn. Course Modules:</p>

                                        <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Introduction to Data Analysis </p>

                                        <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Getting the Right Tools</p>

                                        <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Why Should You Care About Data</p>

                                        <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Data Analysis with Python </p>

                                        <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Data Analysis with R </p>

                                        <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Assessment </p>



                                    </div>

                                </Col>


                        </Row>
                        
                        <Row>
                                <Col lg={8} md={6} sm={12}>
                                    <h1>Course Details</h1>
                                </Col>

                                <Col lg={4} md={6} sm={12}>
                                    <h1>Course Details</h1>
                                </Col>
                        </Row>
                   </Container>
                </Fragment>
            )
        }
}

export default CoursesPathDetails