import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


class PrivacyDescription extends Component {
  render() {
    return (
      
      <Fragment>
          <Container className="mt-5">
              <Row>
              <Col lg={12} md={12} sm={12}>
                <h1 className="storiesName">Introduction</h1>
                    <p>SojiLearn operates the app.sojilearn.io application, which provides the SERVICE. This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service, the Sojilearn website<br></br>
                    If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. The Personal Information that we collect are used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.<br></br>
                    The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at app.sojilearn.io, inless otherwise stated in this Privacy Policy.
                    </p>
                    <hr />
                    
                    <h2 className="storiesName">Information Collection and Use</h2>
                    <p>For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, phone number, and postal address. The information that we collect will be used to contact or identify you.</p>

                    <h2 className="storiesName">Log Data</h2>
                    <p>We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer’s Internet Protocol ("IP") address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.</p>
                 
                    <h2 className="storiesName">Cookies</h2>
                    <p>Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer’s hard drive.

Our website uses these "cookies" to collection information and to improve our Service. You have the option to either accept or refuse these cookies, and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service.

For more general information on cookies, please read <a href="https://www.cookieconsent.com/what-are-cookies/" target="_blank">What Are Cookies"</a></p>
                 

                    <h2 className="storiesName">Service Providers</h2>
                    <p>We may employ third-party companies and individuals due to the following reasons:</p>
                    <ul>
                        <li>To facilitate our Service;</li>
                        <li>To provide the Service on our behalf;</li>
                        <li>To perform Service-related services.</li>
                    </ul>
                    <p>We want to inform our Service users that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</p>

                    <h2 className="storiesName">Security</h2>
                    <p>We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>
                    
                    <h2 className="storiesName">Changes to This Privacy</h2>
                    <p>SojiLearn Inc. may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.</p>
  
                    <h2 className="storiesName">Contact Us</h2>
                    <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to <Link to="/contact">Contact Us</Link></p>
                    
                   </Col>
              </Row>
          </Container>
      </Fragment>
    )
  }
}

export default PrivacyDescription