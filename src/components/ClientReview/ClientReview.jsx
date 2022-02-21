import React, { Component, Fragment } from 'react'
import { Container, Row , Col} from 'react-bootstrap'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

class ClientReview extends Component {
  render() {
    var settings = {
        autoPlaySpeed:3000,
        autoplay:true,
        dots: true,
        infinite: false,
        speed: 3000,
        arrows:false,
        vertical:true,
        verticalSwiping:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <Fragment>
            <Container fluid={true} className="siderBack text-center justify-content-center">

            <h1 className="reviewMainTitle p-3">TESTIMONIAL</h1>
                    <div className="reviewbottom"></div>

                <Slider {...settings}>
                <div>

                <Row className="text-center justify-content-center">
                    <Col lg={6} md={6} sm={12}>
                        <img className="circleImg" src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?t=st=1645293381~exp=1645293981~hmac=35cdfaa99b044c3eb7b5561ed355725a2544c58f9f236104e9104a42b9037c75&w=740" />
                        <h2 className="reviewName">Joyce Daniel</h2>
                        <p className="reviewDescription">I was looking for something a little more than a training, a school I could count on for my continuous skill and development. SojiLearn kept coming up, so I jumped in. I've had no cause to regret my decision till date.</p>
                    </Col>
                </Row>

                </div>
                <div>

                <Row className="text-center justify-content-center">
                    <Col lg={6} md={6} sm={12}>
                        <img className="circleImg" src="https://img.freepik.com/free-photo/joyful-man-with-broad-smile-has-funny-expression-indicates-aside-advertises-something-amazing_273609-17042.jpg?t=st=1645293402~exp=1645294002~hmac=ace4af336abfbc7919e7415fb8522a6ddeecb66779ce1f712dd87a134c834a5a&w=740" />
                        <h2 className="reviewName">Edwin Peters</h2>
                        <p className="reviewDescription">I was looking for something a little more than a training, a school I could count on for my continuous skill and development. SojiLearn kept coming up, so I jumped in. I've had no cause to regret my decision till date.</p>
                    </Col>
                </Row>

                </div>
                <div>

                <Row className="text-center justify-content-center">
                    <Col lg={6} md={6} sm={12}>
                        <img className="circleImg" src="https://img.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19637.jpg?t=st=1645293384~exp=1645293984~hmac=ac81cbd729689b7071cd19102040dd1e1143fdf2e463328a8356cd8289f88446&w=740" />
                        <h2 className="reviewName">Aderigbibe Emmanuel</h2>
                        <p className="reviewDescription">I was looking for something a little more than a training, a school I could count on for my continuous skill and development. SojiLearn kept coming up, so I jumped in. I've had no cause to regret my decision till date.</p>
                    </Col>
                </Row>

                </div>
                </Slider>
            </Container>
        </Fragment>

        )
  }
}

export default ClientReview
