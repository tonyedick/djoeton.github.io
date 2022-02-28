import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class TCDEscription extends Component {
  render() {
    return (
      
      <Fragment>
          <Container className="mt-5 text-justify">
              <Row>
                <Col lg={12} md={12} sm={12}>
                <h1 className="storiesName">Introduction</h1>
                    <p>This page is used to inform website visitors as well as prospective students about our payment policy, courses eligible, student eligibility, payment plans and others.</p>
                    <hr />
                    
                    <h2 className="storiesName">Payment Policy</h2>
                    <p>Unless otherwise agreed to in a private lending or financing agreement and as approved by SojiLearn, all students pay an upfront which is determined by the program lead of the student loan program.<br></br>

                      Students are required to pay the remaining balance in monthly instalments as stated by the chosen payment plan. For students based out of Nigeria, students are required to pay the remaining full balance within the specified agreed duration. Students are allowed to request a payment plan with the exception of 1-week courses. These payment plans must be approved during enrollment.<br></br>

                      If a student is partially paying for a course and a third-party is paying the remainder of the course, students can request to participate in a payment plan for their portion of course costs.</p>

                    <h2 className="storiesName">Courses Eligible</h2>
                    <p>SojiLearn Study Loan is currently available for the following learning programs Data School:</p>
                    <ul>
                        <li>UI/UX Design</li>
                        <li>Android Development</li>
                        <li>Software Development</li>
                        <li>Product Design</li>
                        <li>Content Writing</li>
                        <li>Digital Marketing</li>
                    </ul>
                    <p>Note: If you are learning with SojiLearn as a beneficiary of a scholarship, the SSL (SojiLearn Study Loan) is not available to you. You are expected to make full payment on enrollment.</p>

                    <h2 className="storiesName">Student Eligibility</h2>
                    <ul>
                        <li>Nigerian (17 - 37 years old)</li>
                        <li>Secured admission into any SojiLearn school</li>
                        <li>Have a low-income job of any sort</li>
                        <li>Reside in remote areas or low budget areas with evidence of residence, utility bills, etc.</li>
                    </ul>

                    <h2 className="storiesName">Payment Plans</h2>
                    <p>We have payment plan options available for students interested in paying for their program in multiple instalments. To aid in your decision-making, we created this guide to help you determine which of our options best meets your needs.

                    The standard loan comes with a 9% interest rate spread over 3 calendar month which MUST be paid within the last week of every month.</p>
                    <ul>
                        <li>A student who for some reason(s) is unable to begin a program as at when due and wants to defer to the next cohort can defer.</li>
                        <li>A student can only defer to the NEXT cohort e.g you sign up for the Product Management October cohort and can not take the program in October, you can only defer your training to the November cohort and not beyond November. Deferment to any other cohort beyond the next cohort is NOT allowed and refund WILL NOT be processed for such a situation and the student will forfeit the amount paid for that program.</li>
                    </ul>

                    <h2 className="storiesName">Due Diligence</h2>
                    <p>This contract is backed up with Legal Documents.
    	              You are granting the SSL committee the access to reach out to your organization/employer and confirm your employment status
                    Your enrollment is finalized ONLY if your application is successful..</p>
                    
                    <h2 className="storiesName">Default Sanction</h2>
                    <p>SojiLearn Inc. is liable to take up legal prosecution if you default on your repayment 3 consecutive months.</p>
  
                    <h2 className="storiesName">Loan Deferment/Forbearance</h2>
                    <p>Under certain conditions, you can receive a deferment or forbearance that allows you to temporarily postpone or reduce your study loan payments. You'll need to work with our SSL team to apply for deferment or forbearance; be sure to keep making payments on your loan until the deferment or forbearance is in place.
                    Note: If you don't qualify for a deferment but are temporarily unable to make loan payments for such reasons as illness or financial hardship, we may grant you loan forbearance. With forbearance, you may be able to stop making payments or reduce your monthly payment. Interest will continue to accrue on your subsidized and unsubsidized loans (including all PLUS loans.</p>
                    
                    <h2 className="storiesName">Loan Cancellation</h2>
                    <p>You may qualify to have some or all of your loan amount forgiven if you perform certain types of service (for example, teaching in a low-income school or working for certain types of public service organizations). In certain other circumstances, such as if you were unable to complete your program of study because the program was cancelled, if you become totally and permanently disabled (in accordance with our definition), or if you die, your obligation to repay your study loan may be discharged. Additional requirements apply to receive these benefits.</p>
                </Col>
              </Row>
          </Container>
      </Fragment>
    )
  }
}

export default TCDEscription