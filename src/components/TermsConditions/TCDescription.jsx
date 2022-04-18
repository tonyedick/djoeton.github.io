import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RestClient from '../../RestAPI/RestClient'
import AppUrl from '../../RestAPI/AppUrl'
import ReactHtmlParser from 'react-html-parser'
import Loading from '../Loading/Loading'

class TCDEscription extends Component {

  constructor(){
    super();
    this.state={
      terms_and_condition:"",
      loading:true
    }
}

componentDidMount(){
    RestClient.GetRequest(AppUrl.FooterData).then(result=>{
        this.setState({
          terms_and_condition:result[0]['terms_and_condition'],loading:false

            });
        })
    }
  render() {

    if(this.state.loading === true){
      return <Loading />
  }
  else{


    return (
      
      <Fragment>
          <Container className="mt-5 text-justify">
              <Row>
                <Col lg={12} md={12} sm={12}>{ReactHtmlParser(this.state.terms_and_condition)}</Col>
              </Row>
          </Container>
      </Fragment>
    )
  }//end else
  }
}

export default TCDEscription