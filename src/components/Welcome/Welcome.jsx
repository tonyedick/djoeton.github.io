import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import pageOne from '../../asset/image/page1.png'
import pageTwo from '../../asset/image/page2.png'
import pageThree from '../../asset/image/page3.png'

import imgone from '../../asset/image/19.png'
import imgtwo from '../../asset/image/20.png'
import imgthree from '../../asset/image/21.png'

class Welcome extends Component {
  render() {
    return (
      <Fragment>
          <div className="top-intro--area">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <div className="section-title text-center">
                            <div className="intro-area-inner">
                                <h2 className="maintitle">
                                    A unique<br></br>
                                 learning community
                                    </h2> 


                                    <Container className="text-center mt-5">
                                        <Row>
                                            <Col lg={4} md={6} sm={12}>
                                                <img src={pageOne} />
                                                <h1 className="introName">Flexible Payment</h1>
                                                <p className="storiesDescription">You can choose from multiple payment plans</p>
                                            </Col>

                                            <Col lg={4} md={6} sm={12}>
                                            <img src={pageTwo} />
                                            <h1 className="introName">Learn on-the-go</h1>
                                            <p className="storiesDescription">Switch between device and continue learning</p>
                                            </Col>

                                            <Col lg={4} md={6} sm={12}>
                                            <img src={pageThree} />
                                            <h1 className="introName">Globally Recognized</h1>
                                            <p className="storiesDescription">Our partners are majorly from the US and United Kingdom</p>
                                            </Col>
                                        </Row>

                                        
                                    <Row className="intro-footer bg-base text-center mt-5">
                                        <Col lg={4} md={6} sm={12}>
                                            <Row>
                                                <Col lg={6} md={6} sm={12}>
                                                <img className="sideImg" src={imgone} />
                                                </Col>

                                                <Col lg={6} md={6} sm={12}>
                                                <h5 className="text-justify homeIntro">Introduction</h5>
                                                <p className="text-justify">You can count on us to be your guide into a rewarding career in TECH.</p>
                                                </Col>
                                            </Row>
                                        </Col>

                                        <Col lg={4} md={6} sm={12}>
                                            <Row>
                                                <Col lg={6} md={6} sm={12}>
                                                <img className="sideImg" src={imgtwo} />
                                                </Col>

                                                <Col lg={6} md={6} sm={12}>
                                                <h5 className="text-justify homeIntro">Certificate</h5>
                                                <p className="text-justify">Ace your assessment and gain a globally recognised certificate.</p>
                                                </Col>
                                            </Row>
                                        </Col>

                                        <Col lg={4} md={6} sm={12}>
                                            <Row>
                                                <Col lg={6} md={6} sm={12}>
                                                <img className="sideImg" src={imgthree} />
                                                </Col>

                                                <Col lg={6} md={6} sm={12}>
                                                <h5 className="text-justify homeIntro">Deep Dive</h5>
                                                <p className="text-justify">Start creating solutions for complex business needs and problems.</p>
                                                </Col>
                                            </Row>
                                        </Col>

                                    </Row>
                                </Container>

                            </div>
                        </div>
                    </Col>
                </Row>

               

            </Container>
          </div>
      </Fragment>
    )
  }
}

export default Welcome