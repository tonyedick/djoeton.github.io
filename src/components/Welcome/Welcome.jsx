import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class Welcome extends Component {
  render() {
    return (
      <Fragment>
          <div className="top-intro-area">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <div className="section-title text-center">
                            <div className="intro-area-inner">
                                <h6 className="sub-title double-line">Welcome</h6>
                                <h2 className="maintitle">
                                    A unique<br></br>
                                 learning community
                                    </h2>    
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