import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import RestClient from '../../RestAPI/RestClient'
import AppUrl from '../../RestAPI/AppUrl'
import ReactHtmlParser from 'react-html-parser'


class PrivacyDescription extends Component {

  constructor(){
    super();
    this.state={
      privacy_policy:""
    }
}

componentDidMount(){
    RestClient.GetRequest(AppUrl.FooterData).then(result=>{
        this.setState({
          privacy_policy:result[0]['privacy_policy']

            });
        })
    }

  render() {
    return (
      
      <Fragment>
          <Container className="mt-5">
              <Row>
              <Col lg={12} md={12} sm={12}>{ReactHtmlParser(this.state.privacy_policy)}</Col>
              </Row>
          </Container>
      </Fragment>
    )
  }
}

export default PrivacyDescription