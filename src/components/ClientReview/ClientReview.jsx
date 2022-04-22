import React, { Component, Fragment } from 'react'
import { Container, Row , Col} from 'react-bootstrap'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import RestClient from '../../RestAPI/RestClient'
import AppUrl from '../../RestAPI/AppUrl'

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

      
    const MyList = this.state.reviewData;
    const MyView = MyList.map(MyList=>{

        return <div>

              <Row className="text-center justify-content-center">
                  <Col lg={6} md={6} sm={12}>
                      <img className="circleImg" src={MyList.client_img} alt=""/>
                      <h2 className="reviewName">{MyList.client_title}</h2>
                      <p className="reviewDescription">{MyList.client_description}</p>
                  </Col>
              </Row>

              </div>

    })

    return (
        <Fragment>
            <Container fluid={true} className="siderBack text-center justify-content-center">

            <h1 className="reviewMainTitle p-3">TESTIMONIAL</h1>
                    <div className="reviewbottom"></div>

                <Slider {...settings}>
                  {MyView}  

                </Slider>
            </Container>
        </Fragment>

        )
  }
}

export default ClientReview
