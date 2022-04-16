import React, { Component, Fragment } from 'react'
import { Col, Container, Form, Row,Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faExternalLink} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import RestClient from '../../RestAPI/RestClient'
import AppUrl from '../../RestAPI/AppUrl'

class Contact extends Component {

    constructor(){
        super();
        this.state={
          address:"",
          email:"",
          phone:""
        }
    }
    
    componentDidMount(){
        RestClient.GetRequest(AppUrl.FooterData).then(result=>{
            this.setState({
            address:result[0]['address'],
            email:result[0]['email'],
            phone:result[0]['phone']
                });
            })
    }

    sendContact(){
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
    
        let jsonObject = {name:name,email:email,message:message}
        RestClient.PostRequest(AppUrl.ContactUs,JSON.stringify(jsonObject)
            ).then(result=>{
                alert(result);
            }).catch(error=>{
                alert("Error");
            })
    }

    render() {
        return (
          
          <Fragment>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <h1 className="storiesName">Connect With Us</h1>
                        <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control id="name" type="text" placeholder="Enter Your Name" />
                        </Form.Group>
    
                        <Form.Group className="mb-3">
                            <Form.Label>Your Email</Form.Label>
                            <Form.Control id="email" type="email" placeholder="Enter Your Email" />
                        </Form.Group>
    
                        <Form.Group className="mb-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control id="message" as="textarea" rows={3} />
                        </Form.Group>
    
                        <Button onClick={this.sendContact} variant="warning">
                            Submit
                        </Button>
                        </Form>
                    </Col>
    
                    <Col lg={6} md={6} sm={12}>
                        <h1 className="storiesName">Discuss Now</h1>
                        <p className="analysisDescription">{this.state.address}<br></br>
                      <FontAwesomeIcon icon={faEnvelope} /> {this.state.email}<br></br>
                      <FontAwesomeIcon icon={faPhone} /> {this.state.phone}
                      </p>
                    </Col>
                </Row>
            </Container>
    
          </Fragment>
        )
      }
    }
export default Contact