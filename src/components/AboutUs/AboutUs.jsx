import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import face from '../../asset/image/face.png'
import four from '../../asset/image/4.png';
import { init } from 'ityped'

class AboutUs extends Component {
    componentDidMount(){
        const myElement = document.querySelector('#myElement')
        init(myElement, { showCursor: false, strings: ['Web Developer!', 'Online Instructor!' ] })
      }


  render() {
    return (
            <Fragment>
                <Container fluid={true} className="aboutBanner p-0 text-center">
                 <div className="aboutBannerOverlay" >
                     <Container className="text=center">
                         <Row>
                             <Col lg={6} md={6} sm={12}>
                                     <div class="storiesDescriptio">
                                         <img classname="aboutMeImg" src={four} alt="img"/>
                                     </div>
                             </Col>

                             <Col lg={6} md={6} sm={12}>
                             <div class="about-inner-wrap">
                                 <div class="section-title mb-0">
                                     <h6 class="sub-title style-btn storiesMainTitle">ABOUT US</h6>
                                     <h2 class="storiesDescriptio">120+ Courses Online from Best Tutors</h2>
                                     <p class="content">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad</p>
                                 </div>
                             </div>
                             </Col>

                         </Row>
                      </Container>
                 </div>

                 </Container>
            </Fragment>
        )
  }
}

export default AboutUs
