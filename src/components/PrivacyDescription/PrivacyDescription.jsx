import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import RestClient from '../../RestAPI/RestClient'
import AppUrl from '../../RestAPI/AppUrl'
import ReactHtmlParser from 'react-html-parser'
import Loading from '../Loading/Loading'
import Errorpage from '../404Page/Errorpage'


class PrivacyDescription extends Component {

  constructor(){
    super();
    this.state={
      privacy_policy:"",
      loading:true,
      error:false
    }
}

componentDidMount(){
    RestClient.GetRequest(AppUrl.FooterData).then(result=>{

      if(result === null){
        this.setState({error:true,loading:false})
    }else{

        this.setState({
          privacy_policy:result[0]['privacy_policy'],loading:false
            });
          }
        }).catch(error=>{
          this.setState({error:true})
    })
}

  render() {
    if(this.state.loading === true){
      return <Loading />
  }
  else if(this.state.loading === false){

    return (
      
      <Fragment>
          <Container className="mt-5">
              <Row>
              <Col lg={12} md={12} sm={12}>{ReactHtmlParser(this.state.privacy_policy)}</Col>
              </Row>
          </Container>
      </Fragment>
    )
  }//end else
  else if(this.state.error === true){
    return <Errorpage />
}// end if for error
}
}

export default PrivacyDescription