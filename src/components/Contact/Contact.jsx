import React, { Component, Fragment } from 'react'
import { Col, Container, Form, Row,Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'

class Contact extends Component {
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
                            <Form.Control type="text" placeholder="Enter Your Name" />
                        </Form.Group>
    
                        <Form.Group className="mb-3">
                            <Form.Label>Your Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Your Email" />
                        </Form.Group>
    
                        <Form.Group className="mb-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
    
                        <Button variant="warning" type="submit">
                            Submit
                        </Button>
                        </Form>
                    </Col>
    
                    <Col lg={6} md={6} sm={12}>
                        <h1 className="storiesName">Discuss Now</h1>
                        <p className="analysisDescription">
                        Across 5 major cities: Enugu | Port Harcourt | Jos | Lagos | Abuja, Nigeria<br></br>
                      <FontAwesomeIcon icon={faEnvelope} /> info@sojilearn.com<br></br>
                      <FontAwesomeIcon icon={faPhone} /> 8137806643 | 8152742646
                      </p>
                    </Col>
                </Row>
            </Container>
    
          </Fragment>
        )
      }
    }
export default Contact