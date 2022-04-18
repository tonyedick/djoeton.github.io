import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LoadingIcon from '../../asset/image/loader.svg'

class Loading extends Component {
  render() {
    return (
      <Fragment>
          <Container className="text-center">

              <Row>

                  <Col>
                    <img className="loaderanimate" src={LoadingIcon} alt=""/>
                  </Col>
              </Row>
          </Container>
        </Fragment>
      
    )
  }
}

export default Loading
