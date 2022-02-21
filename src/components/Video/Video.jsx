import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap'
import {faVideoSlash} from '@fortawesome/free-solid-svg-icons'
import 'video-react/dist/video-react.css'
import { Player, BigPlayButton } from 'video-react'

class Video extends Component {

    constructor(){
        super();
        this.state={
            show:false
        }
    }

    modalClose=()=>this.setState({show:false})
    modalOpen=()=>this.setState({show:true})

  render() {
    return (
        <Fragment>
            <Container>
            <h1 className=" text-justify storiesMainTitle">OUR VIDEOS</h1>
                    <div className="bottom"></div>
                <Row>
                    <Col lg={6} md={6} sm={12} className="videoText">
                        <p className="storiesDescription">We are the leading TECH EDUCATION company in Sub-Saharan Africa that helps people learn premium technology skills virtually and helps get people off the street by providing access to training for in-demand tech opportunities.<br></br><br></br>
                            Our TECH training kiosts is all about getting young people in remote areas and cities off the streets, by engaging them in a 6 months intensive TECH bootcamp called CODE & EARN.<br></br>

                            We also organise onsite and virtual trainings, focused on building talents at the undergraduate level. This is aimed at fueling passion of young people to the right direction early enough before they get into the job market.<br></br><br></br>

                            Our TECH training hubs are aimed at combarting the rising issue of internet crimes, online betting and other vises that rubs young people of their creative niche. Our learning system will be flexible, built to run offline in our customized sojilearn tablets.</p>
                    </Col>

                    <Col lg={6} md={6} sm={12} className="text-center videoCard">
                    <FontAwesomeIcon onClick={this.modalOpen} className="iconProject" icon={faVideoSlash} />
                    </Col>
                </Row>
            </Container>
            
            <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                <Modal.Body>
                    <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                        <BigPlayButton position="center" />
                    </Player>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.modalClose}>
                    Close
                </Button>

                </Modal.Footer>
            </Modal>



        </Fragment>
        )
  }
}

export default Video
