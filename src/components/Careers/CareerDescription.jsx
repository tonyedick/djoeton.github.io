import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import bak from '../../asset/image/bak.webp'
import { init } from 'ityped'

class CareerDescription extends Component {
  componentDidMount(){
    const myHire = document.querySelector('#myHire')
    init(myHire, { showCursor: false, strings: ['Not Hiring Right Now!', 'Pls, Check Back Later!' ] })
  }

  render() {
    return (
      <Fragment>
             <Container>
                <Row>
                    <Col sm={12} lg={12} md={12}>
                          <div className="aboutMeBody text-center">
                                <h1 className="aboutMainPar">Welcome,</h1>
                                <h1 className="aboutMainPar">We are <span id="myHire"></span></h1>
                          </div>
                    </Col>
                </Row>
            </Container>
            
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
      </Fragment>
    )
  }
}

export default CareerDescription