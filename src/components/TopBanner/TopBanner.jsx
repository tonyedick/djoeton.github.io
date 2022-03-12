import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { init } from 'ityped'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

class TopBanner extends Component {
    componentDidMount(){
        const myElement = document.querySelector('#myTopBanner')
        init(myElement, { showCursor: false, strings: ['the Streets' ] })
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
                        <h2 className="topTitle">From <span id="myTopBanner"></span></h2>
                        <p className="topSubTitle">One Platform That Helps You Learn Tech<br /> 
                        and Helps Companies Hire You Fast</p>
                        <Link className="button" type="button" variant="warning" size="lg" onClick={(e) => {
                            e.preventDefault();
                            window.location.to="/coursepath";
                            }
                        }
                        >Get Started</Link>
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
