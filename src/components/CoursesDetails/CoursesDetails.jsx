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

class CoursesDetails extends Component {

        constructor(props){
            super();
        }

        render() {

            let ImgTwo ="";
            let ModuleFeatures ="";
            let LongTitle ="";
            let LongDescription ="";
            let AllSkills ="";
            let TotalStudents ="";
            let TotalDuration ="";
            let TotalLectures ="";
            let Category ="";
            let Tags ="";
            let Instructor ="";
            let CoursePrice ="";
            let VideoUrl ="";

            let CourseDetailsArray = this.props.courseallData;
            // eslint-disable-next-line eqeqeq
            if(CourseDetailsArray.length == 1){
                ImgTwo = CourseDetailsArray[0]['img_two'];
                ModuleFeatures = CourseDetailsArray[0]['module_features'];
                LongTitle = CourseDetailsArray[0]['long_title'];
                LongDescription = CourseDetailsArray[0]['long_description'];
                AllSkills = CourseDetailsArray[0]['all_skills'];
                TotalStudents = CourseDetailsArray[0]['total_students'];
                TotalDuration = CourseDetailsArray[0]['total_duration'];
                TotalLectures = CourseDetailsArray[0]['total_lectures'];
                Category = CourseDetailsArray[0]['category'];
                Tags = CourseDetailsArray[0]['tags'];
                Instructor = CourseDetailsArray[0]['instructor'];
                CoursePrice = CourseDetailsArray[0]['course_price'];
                VideoUrl = CourseDetailsArray[0]['video_url'];
            }

            return(
                <Fragment>
                   <Container className="mt-5">
                        <Row>
                                <Col lg={8} md={6} sm={12}>
                                    <h1 className="coursePathsText">{LongTitle}</h1>
                                    <img className="androidDetaisImg" src={ImgTwo} alt=""/>
                                    <br></br> <br></br>
                                    <p className="CourseallDescription">
                                    Join fellow students like you and kick start your career in the Top 10% Career Jobs of the Future, when you register with SojiLearn. Course Modules.
                                    </p>
                                </Col>

                                <Col lg={4} md={6} sm={12}>
                                        <div className="widget_feature">
                                        <h4 className="widget-title text-center">Features</h4>
                                                <hr />
                                                    <ul>
                                                    <li><FontAwesomeIcon className="iconBullent" icon={faUser} /> <span> Enrolled :</span> {TotalStudents}</li>

                                                    <li><FontAwesomeIcon className="iconBullent" icon={faClock} /> <span>Duration :</span> {TotalDuration}</li>

                                                    <li><FontAwesomeIcon className="iconBullent" icon={faClipboard} /> <span>Lectures :</span> {TotalLectures}</li>

                                                    <li><FontAwesomeIcon className="iconBullent" icon={faClone} /> <span>Categories:</span> {Category}</li>

                                                    <li><FontAwesomeIcon className="iconBullent" icon={faTags} /> <span>Tags:</span> {Tags}</li>

                                                    <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> <span>Instructor:</span> {Instructor}</li>

                                                    </ul>
                                            <div class="price-wrap text-center">
                                            <h5>Price:<span>{CoursePrice}</span></h5>
                                            <Button variant="primary">ENROLL COURSE</Button>
                                            </div>
                                            </div>

                                </Col>
                        </Row>

                        <Row>
                            <Col className="mt-5 requirements" lg={8} md={6} sm={12}>
                                <div>
                                    <p className="pathName">{LongDescription}</p>
                                    <h1 className="androidDetailsText">Skills Required</h1>
                                    <hr />
                                    <ul>
                                        <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> {AllSkills}</li>
                                    </ul>
                                    <p className="pathName">Lesson Modules Includes:</p>
                                    {ModuleFeatures}

                                </div>
                            </Col>

                            <Col lg={4} md={6} sm={12}>
                                    <h4 className="widget-title text-center">Watch a Demo</h4>
                                            <Player src={VideoUrl}>
                                            <BigPlayButton position="center" />
                                            </Player>
                            </Col>


                        </Row>

                    </Container>

                </Fragment>
            )
        }
}

export default CoursesDetails
