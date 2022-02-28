import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import bak from '../../asset/image/bak.webp'

class AboutDescription extends Component {
  render() {
    return (
        <Fragment>
              <Container className="text-center">
                <p className="aboutMainPar">We are a Technology Workforce Development company that helps people learn premium<br></br> 
                technology skills virtually and partners with companies to hire the best talents and invest in<br></br> 
                workforce development. Currently with learners from 19 countries.</p>
            </Container>

            <Container>
                <Row>
                    <Col lg={6} md={12} sm={12}>
                        <h1 className="aboutSignTitle">SojiLearn is more than a<br></br> 
                        company!</h1>
                        <p className="storiesDescription text-justify">Since 2018, we have helped professionals from over 1000 leading<br></br> 
                        companies learn skills and develop capabilities to thrive in their
                        workplaces and also stay relevant for the Future of Work.<br></br><br></br>

                        Today we have people (especially Blacks and Minorities) join our
                        virtual learning programs from all over 15 countries.<br></br><br></br> 

                        With an ecosystem of over 9000 talents, access to a 200+ faculty network,
                        and robust curricula co-designed with business leaders, we are 
                        the leading tech-ed company for emerging economies.</p>
                    </Col>

                    <Col lg={6} md={12} sm={12}>
                        <img className="aboutCard" src={bak} />
                    </Col>
                </Row>
            </Container>
            <Container className="mt-5">
                <Row>
                    <Col sm={12} lg={12} md={12}>

                        <h1 className="storiesName">Who We Are</h1>
                        <hr />
                        <p className="storiesDescription">
                        Since 2020, we have helped young people from over 100 remote 
                        communities learn skills and develop capabilities to thrive in 
                        their workplaces and also stay relevant for the Future of Work.<br></br><br></br>

                        Today we have people (especially youths and undergrads) join our 
                        virtual learning programs from all over 15 countries. .<br></br><br></br>

                        With an ecosystem of over 9000 talents, access to a 200+ 
                        faculty network, and robust curricula co-designed with business 
                        leaders, we are the leading tech-ed company for emerging economies..<br></br>
                        </p>

                        <h1 className="storiesName">Our Mission</h1>
                        <hr />
                        <p className="storiesDescription">
                        Our Mission is to help you get started on the career you want. <br></br><br></br>

                        Whether you are fresh out of high school, seeking extra education, 
                        or want to transition to a career in tech, We will give you the skills
                         and insight to achieve the success you desire...<br></br>
                        </p>

                        <h1 className="storiesName">Our Vision</h1>
                        <hr />

                        <p className="storiesDescription">
                        SojiLearn's vision is to empower one hundred thousand youths with
                        digital skills training by the year 2025..<br></br><br></br>

                        To do that, we need the help of people like you: passionate, 
                        talented individuals who want to change the way education works.<br></br><br></br>
                        
                        If you have big ideas, and the drive
                        to make them a reality, we want to hear from you.<br></br>
                        </p>
                    </Col>
                </Row>
            </Container>
        </Fragment>
      
    )
  }
}

export default AboutDescription
