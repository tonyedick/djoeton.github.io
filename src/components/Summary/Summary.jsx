import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import { Col, Container, Row} from 'react-bootstrap'
import {faGlobe} from '@fortawesome/free-solid-svg-icons'
import {faLaptop} from '@fortawesome/free-solid-svg-icons'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import CountUp  from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import left from '../../asset/image/left-bottom.png'

class Summary extends Component {
  render() {
    return (
        <Fragment>
               <Container fluid={true} className="summaryBanner p-0 text-center">
                <div className="summaryBannerOverlay" >
                    <Container className="text=center">
                        <Row>
                            <Col lg={12} md={6} sm={12}>
                                <Row className="countSection">
                                    <Col>
                                        <FontAwesomeIcon className="iconProject" icon={faGlobe} />
                                        <h1 className="countNumber">
                                        <CountUp start={0} end={1080}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                        </CountUp>
                                        </h1>
                                        <h4 className="countTitle">Students Worldwide</h4>
                                    </Col>

                                    <Col>
                                        <FontAwesomeIcon className="iconProject" icon={faLaptop} />
                                        <h1 className="countNumber">
                                        <CountUp start={0} end={82}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                        </CountUp>
                                        </h1>
                                        <h4 className="countTitle">Courses Published</h4>
                                    </Col>

                                    <Col>
                                        <FontAwesomeIcon className="iconProject" icon={faStar} />
                                        <h1 className="countNumber">
                                         <CountUp start={0} end={120}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                        </CountUp>
                                        </h1>
                                        <h4 className="countTitle">Student Reviews </h4>
                                    </Col>
                                </Row>
                            </Col>

                        </Row>
                        </Container>
                
                </div>

                </Container>
          
        </Fragment>

        )
  }
}

export default Summary
