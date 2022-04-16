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
import RestClient from '../../RestAPI/RestClient'
import AppUrl from '../../RestAPI/AppUrl'
import ReactHtmlParser from 'react-html-parser'

class CoursesDetails extends Component {

        constructor({match}){
            super();
            this.state={
                MyCourseId:match.params.courseID,
                CourseData:[]
            }
        }

        componentDidMount(){
            RestClient.GetRequest(AppUrl.CourseDetails+this.state.CoursePassedID).then(result=>{
                this.setState({
                    CourseData:result
               /* img_two:result[0]['img_two'],
                module_features:result[0]['module_features'],
                long_title:result[0]['long_title'],
                long_description:result[0]['long_description'],
                all_skills:result[0]['all_skills'],
                total_students:result[0]['total_students'],
                total_duration:result[0]['total_duration'],
                total_lectures:result[0]['total_lectures'],
                category:result[0]['category'],
                tags:result[0]['tags'],
                instructor:result[0]['instructor'],
                course_price:result[0]['course_price'],
                video_url:result[0]['video_url']*/
    
                    });
                })
        }
        render() {
            return(
                <Fragment>
                   <Container className="mt-5">                        
                        <Row>
                                <Col lg={8} md={6} sm={12}>     
                                    <h1 className="coursePathsText">{this.state.long_title}</h1>
                                    <img className="androidDetaisImg" src={this.state.img_two} alt=""/>
                                    <br></br> <br></br>
                                    <p className="CoruseallDescription">{this.state.long_description}</p>
                                </Col>
                                
                                <Col lg={4} md={6} sm={12}>
                                        <div className="widget_feature">
                                        <h4 className="widget-title text-center">Features</h4>
                                                <hr />
                                                    <ul>
                                                    <li><FontAwesomeIcon className="iconBullent" icon={faUser} /> <span> Enrolled :</span> {this.state.total_students}</li>

                                                    <li><FontAwesomeIcon className="iconBullent" icon={faClock} /> <span>Duration :</span> {this.state.total_duration}</li>

                                                    <li><FontAwesomeIcon className="iconBullent" icon={faClipboard} /> <span>Lectures :</span> {this.state.total_lectures}</li>

                                                    <li><FontAwesomeIcon className="iconBullent" icon={faClone} /> <span>Categories:</span>  {this.state.category}</li>

                                                    <li><FontAwesomeIcon className="iconBullent" icon={faTags} /> <span>Tags:</span> {this.state.tags}</li>

                                                    <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> <span>Instructor:</span> {this.state.instructor}</li>

                                                    </ul>
                                            <div class="price-wrap text-center">
                                            <h5>Price:<span>{this.state.course_price}</span></h5>
                                            <Button variant="primary">ENROLL COURSE</Button>
                                            </div>
                                            </div> 
                              
                                </Col>
                        </Row>
                        
                        <Row>
                            <Col className="mt-5 requirements" lg={8} md={6} sm={12}>
                                <div>
                                    <h1 className="androidDetailsText">Requirements</h1>
                                    <p className="pathName">This is your first step to becoming a professional UI/UX designer. Get industry experience when you learn from Top Professionals in the industry alongside students from over 150 countries.</p>
                                    <hr />
                                    <ul>
                                        <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Metus interdum metus</li>
                                        
                                        <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Ligula cur maecenas</li>

                                        <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Metus interdum metus</li>

                                        <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Ligula cur maecenass</li>

                                        <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Metus interdum metus</li>

                                    </ul>
                                    <p className="pathName">Lesson Modules Includes:</p>{ReactHtmlParser(this.state.module_features)}

                                </div>
                            </Col>

                            <Col lg={4} md={6} sm={12}>
                                    <h4 className="widget-title text-center">Watch a Demo</h4>
                                            <Player src={this.state.video_url}>
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