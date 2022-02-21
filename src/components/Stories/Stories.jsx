import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import codingIcon from '../../asset/image/coding.png';
import onlineIcon from '../../asset/image/online.png';
import professionalIcon from '../../asset/image/professional.png';


class Stories extends Component {
  render() {
    return (
        <Fragment>
            <Container>
                <h1 className="storiesMainTitle">SOJiLEARN TECHNOVATION</h1>
                    <div className="bottom"></div>
                    <p className="storiesMainPar">By engaging enough raw talents from the streets, we believe there will be an influx of new products and Tech solutions that will address the needs of remote areas, thus driving innovations from the graceroots.</p>
                <Row>
                    <Col lg={4} md={6} sm={12}>
                    <div className="storiesCard text-center">
                        <img className="codingIcon" src={codingIcon} />
                        <h2 className="storiesName">Virtual Learning</h2>
                        <p className="storiesDescription">With access to over 150 courses in Tech, start learning from the convenience of your living room.</p>
                    </div>
                    </Col>

                    <Col lg={4} md={6} sm={12}>
                    <div className="storiesCard text-center">
                    <img className="onlineIcon" src={onlineIcon} />
                        <h2 className="storiesName">Tech Training Kiosks</h2>
                        <p className="storiesDescription">Easily Accessible Centres/Hubs for Tech Training and Pratical Coding Classes.</p>
                    </div>
                    </Col>

                    <Col lg={4} md={6} sm={12}>
                    <div className="storiesCard text-center">
                    <img className="professionalIcon" src={professionalIcon} />
                        <h2 className="storiesName">From Professionals</h2>
                        <p className="storiesDescription">Learn with divers network of technology professionals and see how to make a difference through Tech.</p>
                    </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
        )
  }
}

export default Stories
