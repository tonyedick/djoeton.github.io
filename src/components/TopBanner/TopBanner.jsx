import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap'
import { init } from 'ityped'

class TopBanner extends Component {
    componentDidMount(){
        const myElement = document.querySelector('#myTopBanner')
        init(myElement, { showCursor: false, strings: ['From the Streets', 'To Silicon Valley' ] })
      }
  render() {
    return (
            <Fragment>
                <Container fluid={true} className="topFixedBanner p-0">
            <div className="topBannerOverlay" >
                <Container className="topContent">
                    <Row>
                        <Col className="text-center">
                        <h2 className="topTitle">Building Tech Talents</h2>
                        <h2 className="topTitle"><span id="myTopBanner"></span></h2>
                        <p className="topSubTitle">One Platform That Helps You Learn Tech<br /> 
                        and Helps Companies Hire You Fast</p>
                        <Button variant="warning" size="lg">Get Started</Button>
                        </Col>
                    </Row>

                </Container>


            </div>
                    
                </Container>

            </Fragment>
        )
  }
}

export default TopBanner
