import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

class NotFound extends Component {
  render() {
    return (
        <Fragment>
            <Container className="text-center">
                <Row>
                    <Col>
                        <h1 className="storiesName">Page is Not Found</h1>
                        <h2 className="notfound">404</h2>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
  }
}

export default NotFound
