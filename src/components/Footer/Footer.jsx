import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import RestClient from '../../RestAPI/RestClient'
import AppUrl from '../../RestAPI/AppUrl'
import ReactHtmlParser from 'react-html-parser'

class Footer extends Component {

  constructor(){
    super();
    this.state={
      footer_logo:"",
      footer_about_text:"",
      address:"",
      email:"",
      phone:"",
      facebook:"",
      youtube:"",
      twitter:"",
      footer_credit:"",
      about:"",
      career:"",
      contact:"",
      affiliate:""
    }
}

componentDidMount(){
    RestClient.GetRequest(AppUrl.FooterData).then(result=>{
        this.setState({
        footer_logo:result[0]['footer_logo'],
        footer_about_text:result[0]['footer_about_text'],
        address:result[0]['address'],
        email:result[0]['email'],
        phone:result[0]['phone'],
        facebook:result[0]['facebook'],
        youtube:result[0]['youtube'],
        twitter:result[0]['twitter'],
        footer_credit:result[0]['footer_credit'],
        about:result[0]['about'],
        career:result[0]['career'],
        contact:result[0]['contact'],
        affiliate:result[0]['affiliate']
            });
        })
      RestClient.GetRequest(AppUrl.FooterInformation).then(result=>{
          this.setState({
          about:result[0]['about'],
          career:result[0]['career'],
          contact:result[0]['contact'],
          affiliate:result[0]['affiliate']
            });
        })
    }

  render() {
    return (
      <Fragment>
          <Container fluid={true} className="footerSection">
              <Row>
                  <Col lg={4} md={6} sm={12} className="p-3 text-justify">
                      <img src={this.state.footer_logo} alt=""/>
                      <p className="footerDescription">{ReactHtmlParser(this.state.footer_about_text)}</p>
                  </Col>

                  <Col lg={2} md={3} sm={12} className="p-5 text-justify">
                  <h2 className="footerName">PROGRAMS</h2>
                  <Link className="footerLink" to="/">Enterprise </Link><br></br>
                  <Link className="footerLink" to="/">Be a Trainer </Link><br></br>
                  <Link className="footerLink" to="/">Scholarship </Link><br></br>
                  <Link className="footerLink" to="/">Business Network </Link><br></br>
                  </Col>

                  <Col lg={2} md={3} sm={12} className="p-5 text-justify">
                  <h2 className="footerName">COMPANY</h2>
                  <Link className="footerLink" to="/about">{this.state.about}</Link><br></br>
                  <Link className="footerLink" to="/careers">{this.state.career}</Link><br></br>
                  <Link className="footerLink" to="/contact">{this.state.contact}</Link><br></br>
                  <a className="footerLink" href="/">{this.state.affiliate}</a><br></br>
                  </Col>
                  
                  <Col lg={2} md={3} sm={12} className="p-5 text-justify">
                  <h2 className="footerName">RESOURCES</h2>
                  <Link className="footerLink" to="/">Blog</Link><br></br>
                  <Link className="footerLink" to="/">Events</Link><br></br>
                  <Link className="footerLink" to="/faq">FAQS</Link><br></br>
                  </Col>

                  <Col lg={2} md={3} sm={12} className="p-5 text-justify">
                  <h2 className="footerName">CONTACT</h2>
                  <p className="footerDescription">{this.state.address}<br></br>
                  <FontAwesomeIcon icon={faEnvelope} />{this.state.email}<br></br>
                  <FontAwesomeIcon icon={faPhone} />{this.state.phone}
                  </p>
                  </Col>
                  <hr className="divider"/>
              </Row>
              <Row>
                  <Col lg={3} md={6} sm={12} className="p-2 text-center">
                        <div className="social-container">
                          <a className="facebook social" href={this.state.facebook}>
                              <FontAwesomeIcon icon={faFacebook} size="2x" />
                          </a>
                          <a  className="youtube social" href={this.state.youtube}>
                              <FontAwesomeIcon icon={faYoutube} size="2x" /></a>
                          <a  className="twitter social" href={this.state.twitter}>
                              <FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                        </div>
                  </Col>
                  <Col lg={2} md={6} sm={12} className="p-4 text-center copyrightLink footerMore">
                    <Link className="footerMore" to="/refund">Refund Policy </Link>
                  </Col>
                  <Col lg={2} md={6} sm={12} className="p-4 text-center copyrightLink">
                    <Link className="footerMore" to="/termsandconditions">Terms and Condition </Link>
                  </Col>
                  <Col lg={2} md={6} sm={12} className="p-4 text-center copyrightLink">
                    <Link className="footerMore" to="/privacypolicy">Privacy Policy </Link>
                  </Col>
                  <Col lg={3} md={6} sm={12} className="p-4 text-center">
                    <a className="copyrightLink2" href="/">{this.state.footer_credit}</a>
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
