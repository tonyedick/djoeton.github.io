import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import error from '../../asset/image/error.svg'

class Errorpage extends Component {
  render() {
    return (
        <Fragment>
            <Container className="text-center">
                <Row>
                    <Col>
                      <img className="errorImage" src={error} alt=""/>
                    </Col>
                </Row>
            </Container>
        </Fragment>

    )
  }
}

export default Errorpage
