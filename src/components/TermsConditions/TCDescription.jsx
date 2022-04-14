import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RestClient from '../../RestAPI/RestClient'
import AppUrl from '../../RestAPI/AppUrl'
import ReactHtmlParser from 'react-html-parser'

class TCDEscription extends Component {

  constructor(){
    super();
    this.state={
      terms_and_condition:""
    }
}

componentDidMount(){
    RestClient.GetRequest(AppUrl.FooterData).then(result=>{
        this.setState({
          terms_and_condition:result[0]['terms_and_condition']

            });
        })
    }
  render() {
    return (
      
      <Fragment>
          <Container className="mt-5 text-justify">
              <Row>
                <Col lg={12} md={12} sm={12}>{ReactHtmlParser(this.state.terms_and_condition)}</Col>
              </Row>
          </Container>
      </Fragment>
    )
  }
}

export default TCDEscription