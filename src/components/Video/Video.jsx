import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap'
import {faVideoSlash} from '@fortawesome/free-solid-svg-icons'
import 'video-react/dist/video-react.css'
import { Player, BigPlayButton } from 'video-react'
import RestClient from '../../RestAPI/RestClient'
import AppUrl from '../../RestAPI/AppUrl'
import ReactHtmlParser from 'react-html-parser'
import Jump from 'react-reveal/Jump'

class Video extends Component {

    constructor(){
        super();
        this.state={
            show:false,
            video_description:"",
            video_url:""
        }
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.HomeVideo).then(result=>{
        this.setState({
            video_description:result[0]['video_description'],
            video_url:result[0]['video_url']
                });
            })
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
                        <Jump>
                        <p className="storiesDescription">
                        {ReactHtmlParser(this.state.video_description)}
                        </p>
                        </Jump>
                    </Col>                    
                    
                    <Col lg={6} md={6} sm={12} className="text-center videoCard">
                    <Jump>
                    <FontAwesomeIcon onClick={this.modalOpen} className="iconProject" icon={faVideoSlash} />
                    </Jump>
                    </Col>

                </Row>
            </Container>
            
            <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                <Modal.Body>
                    <Player src={this.state.video_url}>
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
