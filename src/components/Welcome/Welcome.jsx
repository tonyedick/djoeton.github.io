import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import pageOne from '../../asset/image/page1.png'
import pageTwo from '../../asset/image/page2.png'
import pageThree from '../../asset/image/page3.png'
import imgone from '../../asset/image/19.png'
import imgtwo from '../../asset/image/20.png'
import imgthree from '../../asset/image/21.png'
import RestClient from '../../RestAPI/RestClient'
import AppUrl from '../../RestAPI/AppUrl'
import ReactHtmlParser from 'react-html-parser'
import Loading from '../Loading/Loading'

class Welcome extends Component {

    constructor(){
        super();
        this.state={
            welcome_msg:"",
            first_img:"",
            first_title:"",
            first_subtitle:"",
            second_img:"",
            second_title:"",
            second_subtitle:"",
            third_img:"",
            third_title:"",
            third_subtitle:"",
            first_icon:"",
            first_icon_title:"",
            first_icon_description:"",
            second_icon:"",
            second_icon_title:"",
            second_icon_description:"",
            third_icon:"",
            third_icon_title:"",
            third_icon_description:"",
            loading:true
        }
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.HomepageWelcome).then(result=>{
            this.setState({
                welcome_msg:result[0]['welcome_msg'],loading:false
                });
            })
        RestClient.GetRequest(AppUrl.HomeFirstImg).then(result=>{
            this.setState({
                first_img:result[0]['first_img'],
                first_title:result[0]['first_title'],
                first_subtitle:result[0]['first_subtitle'],
                loading:false
                });
            })
        RestClient.GetRequest(AppUrl.HomeSecondImg).then(result=>{
            this.setState({
                second_img:result[0]['second_img'],
                second_title:result[0]['second_title'],
                second_subtitle:result[0]['second_subtitle'],
                loading:false
                });
            })
        RestClient.GetRequest(AppUrl.HomeThirdImg).then(result=>{
            this.setState({
                third_img:result[0]['third_img'],
                third_title:result[0]['third_title'],
                third_subtitle:result[0]['third_subtitle'],
                loading:false
                });
            })
        RestClient.GetRequest(AppUrl.HomeFirstIcon).then(result=>{
            this.setState({
                first_icon:result[0]['first_icon'],
                first_icon_title:result[0]['first_icon_title'],
                first_icon_description:result[0]['first_icon_description'],
                loading:false
                });
            })
        RestClient.GetRequest(AppUrl.HomeSecondIcon).then(result=>{
            this.setState({
                second_icon:result[0]['second_icon'],
                second_icon_title:result[0]['second_icon_title'],
                second_icon_description:result[0]['second_icon_description'],
                loading:false
                });
            })
        RestClient.GetRequest(AppUrl.HomeThirdIcon).then(result=>{
            this.setState({
                third_icon:result[0]['third_icon'],
                third_icon_title:result[0]['third_icon_title'],
                third_icon_description:result[0]['third_icon_description'],
                loading:false
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
          <div className="top-intro--area">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <div className="section-title text-center">
                            <div className="intro-area-inner">
                                <h2 className="maintitle">
                                    {ReactHtmlParser(this.state.welcome_msg)}
                                    </h2> 

                            
                                    <Container className="text-center mt-5">
                                        <Row>
                                            <Col lg={4} md={6} sm={12}>
                                                <img src={this.state.first_img} alt=""/>
                                                <h1 className="introName">{this.state.first_title}</h1>
                                                <p className="storiesDescription">{this.state.first_subtitle}</p>
                                            </Col>

                                            <Col lg={4} md={6} sm={12}>
                                            <img src={this.state.second_img} alt=""/>
                                            <h1 className="introName">{this.state.second_title}</h1>
                                            <p className="storiesDescription">{this.state.third_title}</p>
                                            </Col>

                                            <Col lg={4} md={6} sm={12}>
                                            <img src={pageThree} alt=""/>
                                            <h1 className="introName">Globally Recognized</h1>
                                            <p className="storiesDescription">Our partners are majorly from the US and United Kingdom</p>
                                            </Col>
                                        </Row>

                                        
                                    <Row className="intro-footer bg-base text-center mt-5">
                                        <Col lg={4} md={6} sm={12}>
                                            <Row>
                                                <Col lg={6} md={6} sm={12}>
                                                <img className="sideImg" src={imgone} alt=""/>
                                                </Col>

                                                <Col lg={6} md={6} sm={12}>
                                                <h5 className="text-justify homeIntro">Introduction</h5>
                                                <p className="text-justify">You can count on us to be your guide into a rewarding career in TECH.</p>
                                                </Col>
                                            </Row>
                                        </Col>

                                        <Col lg={4} md={6} sm={12}>
                                            <Row>
                                                <Col lg={6} md={6} sm={12}>
                                                <img className="sideImg" src={imgtwo} alt=""/>
                                                </Col>

                                                <Col lg={6} md={6} sm={12}>
                                                <h5 className="text-justify homeIntro">Certificate</h5>
                                                <p className="text-justify">Ace your assessment and gain a globally recognised certificate.</p>
                                                </Col>
                                            </Row>
                                        </Col>

                                        <Col lg={4} md={6} sm={12}>
                                            <Row>
                                                <Col lg={6} md={6} sm={12}>
                                                <img className="sideImg" src={imgthree} alt=""/>
                                                </Col>

                                                <Col lg={6} md={6} sm={12}>
                                                <h5 className="text-justify homeIntro">Deep Dive</h5>
                                                <p className="text-justify">Start creating solutions for complex business needs and problems.</p>
                                                </Col>
                                            </Row>
                                        </Col>

                                    </Row>
                                </Container>

                            </div>
                        </div>
                    </Col>
                </Row>

               

            </Container>
          </div>
      </Fragment>
    )
    }//end else
  }
}

export default Welcome