import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class RefundDescription extends Component {
  render() {
    return (
      <Fragment>
        <Container className="mt-5 text-justify">

            <Row>
                <Col lg={12} md={12} sm={12}>
                    <h1 className="storiesName">Introduction</h1>
                    <p>This page is used to inform website visitors as well as prospective students about our refund, cancellation and deferment policy.</p>
                    <hr />
                    
                    <h2 className="storiesName">Program Cancellation</h2>
                    <p>By completing your registration for a course and making a payment of full or instalment fee, you agree to the following Terms and Conditions:
                    You have the right to cancel your class at any time on the following terms:</p>
                    <ul>
                        <li>Any course cancelled after registration - You need to request the course cancellation 5 working days before the course starting date.</li>
                        <li>If you make a request for course cancellation less than 3 working days before the course starting date, an admin fee of 15% of the total course fee applies (which will not be refunded), the remaining deposit will be refunded.</li>
                        <li>SojiLearn reserves the right to reschedule a course but any rescheduling will be duly communicated within 2 working days of the scheduled commencement of the class.</li>
                        <li>Cancellation of a course AFTER the program has started is NOT allowed and as such any kind of refund(full or partial) or transfer to another individual will not be permitted.</li>
                    </ul>

                    <h2 className="storiesName">Refund Procedure</h2>
                    <ul>
                        <li>n order to obtain a refund, learners must request for a refund in writing via email.</li>
                        <li>After a request for a refund has been made (with reasons), the learner will receive an email with a refund form included where they will be required to fill in a few details for their refund to be processed.</li>
                        <li>Any refund will take 10 working days to process.</li>
                        <li>You'd need to send your payment information to academy@sojilearn.io</li>
                    </ul>

                    <h2 className="storiesName">Program Deferment</h2>
                    <ul>
                        <li>A student who for some reason(s) is unable to begin a program as at when due and wants to defer to the next cohort can defer.</li>
                        <li>A student can only defer to the NEXT cohort e.g you sign up for the Product Management October cohort and can not take the program in October, you can only defer your training to the November cohort and not beyond November. Deferment to any other cohort beyond the next cohort is NOT allowed and refund WILL NOT be processed for such a situation and the student will forfeit the amount paid for that program.</li>
                    </ul>
                </Col>
            </Row>
        </Container>
      </Fragment>
        
    )
  }
}

export default RefundDescription