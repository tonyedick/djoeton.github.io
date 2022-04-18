import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RestClient from '../../RestAPI/RestClient'
import AppUrl from '../../RestAPI/AppUrl'
import ReactHtmlParser from 'react-html-parser'

class AboutDescription extends Component {

    constructor(){
        super();
        this.state={
            intro:"",
            sub_title:"",
            long_description:"",
            small_img:"",
            who_we_are:"",
            our_mission:"",
            our_vision:""
        }
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.AboutData).then(result=>{
            this.setState({
            intro:result[0]['intro'],
            sub_title:result[0]['sub_title'],
            long_description:result[0]['long_description'],
            small_img:result[0]['small_img'],
            who_we_are:result[0]['who_we_are'],
            our_mission:result[0]['our_mission'],
            our_vision:result[0]['our_vision']});
            })
        }

  render() {

    return (
        <Fragment>
              <Container className="text-center">
       
                <p className="aboutMainPar">{ReactHtmlParser(this.state.intro)}</p>
     
            </Container>

            <Container>
                <Row>
                    <Col lg={6} md={12} sm={12}>
            
                        <h1 className="aboutSignTitle">{this.state.sub_title}</h1>
                   
       
                        <p className="storiesDescription text-justify">{ReactHtmlParser(this.state.long_description)}</p>
           
                    </Col>

                    <Col lg={6} md={12} sm={12}>
            
                        <img className="aboutCard" src={this.state.small_img} alt="" />

                    </Col>
                </Row>
            </Container>
            <Container className="mt-5">
                <Row>
                    <Col sm={12} lg={12} md={12}>
                        
                        <h1 className="storiesName">Who We Are</h1>
                        <hr />
                
                        <p className="storiesDescription">{ReactHtmlParser(this.state.who_we_are)}</p>
                    

                        <h1 className="storiesName">Our Mission</h1>
                        <hr />
                    
                        <p className="storiesDescription">{ReactHtmlParser(this.state.our_mission)}</p>
                        
                        
                        <h1 className="storiesName">Our Vision</h1>
                        <hr />
                    
                        <p className="storiesDescription">{ReactHtmlParser(this.state.our_vision)}</p>
                        
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
  }
}

export default AboutDescription
