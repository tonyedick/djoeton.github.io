import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RestClient from '../../RestAPI/RestClient'
import AppUrl from '../../RestAPI/AppUrl'
import ReactHtmlParser from 'react-html-parser'

class RefundDescription extends Component {

  constructor(){
    super();
    this.state={
      refund_policy:""
    }
}

componentDidMount(){
    RestClient.GetRequest(AppUrl.FooterData).then(result=>{
        this.setState({
          refund_policy:result[0]['refund_policy']

            });
        })
    }
  render() {
    return (
      <Fragment>
        <Container className="mt-5 text-justify">

            <Row>
                <Col lg={12} md={12} sm={12}>{ReactHtmlParser(this.state.refund_policy)}</Col>
            </Row>
        </Container>
      </Fragment>
        
    )
  }
}

export default RefundDescription