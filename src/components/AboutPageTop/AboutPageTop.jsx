import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap'

class AboutPageTop extends Component {
  render() {
    return (
        <Fragment>
        <Container fluid={true} className="topAboutPage p-0">
            <div className="topAboutPageOverlay" >
            <Container className="topAboutContentPage">
            <Row>
                <Col className="text-center">
                <h4 className="topAboutPageTitle">{this.props.aboutpagetitle}</h4>
                </Col>
            </Row>

            </Container>


            </div>
            
        </Container>

        </Fragment>
      
    )
  }
}

export default AboutPageTop
