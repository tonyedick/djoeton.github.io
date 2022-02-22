import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import whiteLogo from '../../asset/image/logo_white.png'

class Footer extends Component {
  render() {
    return (
      <Fragment>
          <Container fluid={true} className="footerSection">
              <Row>
                  <Col lg={4} md={6} sm={12} className="p-3 text-justify">
                      <img src={whiteLogo} />
                      <p className="footerDescription">We are the leading TECH Education<br></br>
                      company in Sub-Saharan Africa that helps<br></br>
                      people learn premium technology skills<br></br>
                      virtually and help companies hire the best<br></br> 
                      talents.</p>
                  </Col>

                  <Col lg={2} md={3} sm={12} className="p-5 text-justify">
                  <h2 className="footerName">PROGRAMS</h2>
                  <a className="footerLink" href="#">Enterprise </a><br></br>
                  <a className="footerLink" href="#">Be A Trainer </a><br></br>
                  <a className="footerLink" href="#">Scholarship </a><br></br>
                  <a className="footerLink" href="#">Business Network </a><br></br>
                  </Col>

                  <Col lg={2} md={3} sm={12} className="p-5 text-justify">
                  <h2 className="footerName">COMPANY</h2>
                  <a className="footerLink" href="#">About Us </a><br></br>
                  <a className="footerLink" href="#">Career </a><br></br>
                  <a className="footerLink" href="#">Contact Us </a><br></br>
                  <a className="footerLink" href="#">Affiliate </a><br></br>
                  </Col>
                  
                  <Col lg={2} md={3} sm={12} className="p-5 text-justify">
                  <h2 className="footerName">RESOURCES</h2>
                  <a className="footerLink" href="#">Blog </a><br></br>
                  <a className="footerLink" href="#">Events </a><br></br>
                  <a className="footerLink" href="#">FAQs </a><br></br>
                  </Col>

                  <Col lg={2} md={3} sm={12} className="p-5 text-justify">
                  <h2 className="footerName">CONTACT</h2>
                  <p className="footerDescription">
                  <FontAwesomeIcon icon={faEnvelope} /> info@sojilearn<br></br>
                  <FontAwesomeIcon icon={faPhone} /> 8137806643
                  </p>
                  </Col>
                  <hr className="divider"/>
              </Row>
              <Row>
                  <Col lg={3} md={6} sm={12} className="p-2 text-center">
                        <div className="social-container">
                          <a className="facebook social" href="#">
                              <FontAwesomeIcon icon={faFacebook} size="2x" />
                          </a>
                          <a  className="youtube social" href="#">
                              <FontAwesomeIcon icon={faYoutube} size="2x" /></a>
                          <a  className="twitter social" href="#">
                              <FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                        </div>
                  </Col>
                  <Col lg={2} md={6} sm={12} className="p-4 text-center copyrightLink footerMore">
                    <a className="footerMore" href="#">Refund Policy </a>
                  </Col>
                  <Col lg={2} md={6} sm={12} className="p-4 text-center copyrightLink">
                    <a className="footerMore" href="#">Terms and Condition </a>
                  </Col>
                  <Col lg={2} md={6} sm={12} className="p-4 text-center copyrightLink">
                    <a className="footerMore" href="#">Privacy Policy </a>
                  </Col>
                  <Col lg={3} md={6} sm={12} className="p-4 text-center">
                    <a className="copyrightLink2" href="#"> (c) 2022 SojiLearn. All right Reserved</a>
                  </Col>
                <hr className="divider"/>
              </Row>

              <Row>
                <h5 className="text-center footerMore2">SojiLearn - Taking Learning to the Streets</h5>
              </Row>

          </Container>
      </Fragment>
    )
  }
}

export default Footer
