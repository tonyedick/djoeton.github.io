import React, { Component, Fragment } from 'react'
import { Container, Row , Col} from 'react-bootstrap'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import RestClient from '../../RestAPI/RestClient'
import AppUrl from '../../RestAPI/AppUrl'
import ReactHtmlParser from 'react-html-parser'

class ClientReview extends Component {

  constructor(){
    super();
    this.state={
        reviewData:[]
    }
}
componentDidMount(){
    RestClient.GetRequest(AppUrl.ClientReview).then(result=>{
        this.setState({reviewData:result});
    })

}

  render() {


    var settings = {
        autoPlaySpeed:2000,
        autoplay:true,
        dots: true,
        infinite: false,
        speed: 1700,
        arrows:false,
        horizontal:true,
        horizontalSwiping:false,
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


    const MyList = this.state.reviewData;
    const MyView = MyList.map(MyList=>{

        return <div>

              <Row className="justify-content-center">
                  <Col lg={4} md={6} sm={12}>
                      <img className="reviewIco" src={MyList.icon_img} alt=""/>
                      <h2 className="reviewName">{MyList.client_title}</h2>
                      <p className="reviewDescription">{MyList.client_description}</p>
                      <p className="reviewGetStarted">{ReactHtmlParser(MyList.get_started)}</p>
                  </Col>
                  <Col lg={8} md={6} sm={12}>
                      <img className="reviewsCard" src={MyList.client_img} alt=""/>
                      <p className="reviewCardBack">
                        <h2 className="subtextDescription">Learn seemlessly | Build projects | Get Hired</h2>
                      </p>
                  </Col>
              </Row>

              </div>

    })

    return (
        <Fragment>
            <Container fluid={true} className="sliderBack text-center justify-content-center">

                <Slider {...settings}>
                  {MyView}

                </Slider>
            </Container>
        </Fragment>

        )
  }
}

export default ClientReview
