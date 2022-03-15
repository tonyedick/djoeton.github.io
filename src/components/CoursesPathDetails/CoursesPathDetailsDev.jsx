/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faClock} from '@fortawesome/free-solid-svg-icons'
import {faClipboard} from '@fortawesome/free-solid-svg-icons'
import {faClone} from '@fortawesome/free-solid-svg-icons'
import {faTags} from '@fortawesome/free-solid-svg-icons'
import 'video-react/dist/video-react.css'
import { Player, BigPlayButton } from 'video-react'

class CoursesPathDetailsDeve extends Component {
        render() {
            return(
                <Fragment>
                   <Container className="mt-5">
                   <Row>
                                <Col lg={8} md={6} sm={12}>     
                                    <h1 className="coursePathsText">Become a Professional Software Developer.</h1>
                                    <img className="androidDetaisImg" src="https://solverwp.com/demo/html/edumint/assets/img/course/9.png" alt=""/>
                                    <br></br> <br></br>
                                    <p className="CoruseallDescription">This is your first step to becoming a professional Software Developer. Get industry experience when you learn from Top Developers in the industry alongside students from over 150 countries.</p>
                                </Col>

                                <Col lg={4} md={6} sm={12}>
                                        <div className="widget_feature">
                                        <h4 className="widget-title text-center">Features</h4>
                                                <hr />
                                                    <ul>
                                                    <li><FontAwesomeIcon className="iconBullent" icon={faUser} /> <span> Enrolled :</span> 1200 students</li>

                                                    <li><FontAwesomeIcon className="iconBullent" icon={faClock} /> <span>Duration :</span> 2 hours</li>

                                                    <li><FontAwesomeIcon className="iconBullent" icon={faClipboard} /> <span>Lectures :</span> 8</li>

                                                    <li><FontAwesomeIcon className="iconBullent" icon={faClone} /> <span>Categories:</span> Technology</li>

                                                    <li><FontAwesomeIcon className="iconBullent" icon={faTags} /> <span>Tags:</span> Android, JavaScript, Programming, Kotlin</li>

                                                    <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> <span>Instructor:</span> Kazi Ariyan</li>

                                                    </ul>
                                            <div class="price-wrap text-center">
                                            <h5>Price:<span>$54.00</span></h5>
                                            <Button variant="primary">ENROLL COURSE</Button>
                                            </div>
                                            </div> 
                              
                                </Col>
                        </Row>
                        
                        <Row>
                            <Col className="mt-5 requirements" lg={8} md={6} sm={12}>
                                <div>
                                    <h1 className="androidDetailsText">Requirements</h1>
                                    <p className="pathName">This is your first step to becoming a professional COntent Writer. Get industry experience when you learn from Top Professionals in the industry alongside students from over 150 countries.</p>
                                    <hr />
                                    <ul>
                                        <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Metus interdum metus</li>
                                        
                                        <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Ligula cur maecenas</li>

                                        <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Metus interdum metus</li>

                                        <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Ligula cur maecenass</li>

                                        <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Metus interdum metus</li>

                                    </ul>
                                    <p className="pathName">Lesson Modules Includes:</p>
                                    <ul>
                                        <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Introduction to Programming</li>
                                        
                                        <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Getting the Right Tools</li>

                                        <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Software Development Life Cyle</li>

                                        <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Frontend Development</li>

                                        <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Backend Development</li>

                                        <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Introduction to Git</li>

                                        <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Assessment</li>

                                    </ul>

                                </div>
                            </Col>

                            <Col lg={4} md={6} sm={12}>
                                    <h4 className="widget-title text-center">Watch a Demo</h4>
                                            <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                                            <BigPlayButton position="center" />
                                            </Player>
                            </Col>

                           
                        </Row>

                   </Container>
                </Fragment>
            )
        }
}

export default CoursesPathDetailsDeve