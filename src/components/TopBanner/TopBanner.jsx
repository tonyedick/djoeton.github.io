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
                            <h2 className="topTitle">Building Tech Talents</h2>
                            <h2 className="topTitle">From the Streets</h2>
                            <p className="topSubTitle">One Platform That Helps You Learn Tech<br />
                            and Helps Companies Hire You Fast</p>
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
