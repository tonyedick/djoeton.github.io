import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import axios from 'axios';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';

class TopBanner extends Component {

    constructor(){
        super();
        this.state={
            title:"",
            subtitle:""
        }
    }
    componentDidMount(){
        RestClient.GetRequest(AppUrl.HomepageTitle).then(result=>{
            this.setState({title:result[0]['home_title'],subtitle:result[0]['home_subtitle']});
        }).catch(error=>{
             this.setState({title:"???",subtitle:"???"})
        });


    }
  render() {
    return (
            <Fragment>
                <Container fluid={true} className="topFixedBanner p-0">
            <div className="topBannerOverlay" >
                <Container className="topContent">
                    <Row>
                        <Col className="text-center">
                            <h2 className="topTitle">{this.state.title}</h2>
                            <p className="topSubTitle">{this.state.subtitle}</p>
                            <Button className="button" type="button" variant="warning" size="md">Get Started</Button>
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
