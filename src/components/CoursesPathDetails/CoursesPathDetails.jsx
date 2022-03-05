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
                                    <img src={pathDetails} />
                                </div>
                                </Col>


                                <Col lg={6} md={6} sm={12} className="mt-5">
                                    <div className="course-paths">
                                        <h1 className="projectPathsText">Become a Professional UI/UX Designer.</h1>  
                                        <p className="pathName">This is your first step to becoming a professional ui/ux designer. Get industry experience when you learn alongside students from over 150 countries from Top UI/UX Professionals in the industry. Kick start your career in the Top 10% Career Jobs of the Future, when you register with SojiLearn. Course Modules:</p>

                                        <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Introduction to UI/UX Design </p>

                                        <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Getting the Right Tools</p>

                                        <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Design Thinking</p>

                                        <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Ligula cur maecenasLigula cur maecenasLigula </p>

                                        <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Ligula cur maecenasLigula cur maecenasLigula cur maecenas </p>

                                        <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Ligula cur maecenasLigula cur maecenas</p>



                                    </div>

                                </Col>


                        </Row>
                   </Container>
                </Fragment>
            )
        }
}

export default CoursesPathDetails