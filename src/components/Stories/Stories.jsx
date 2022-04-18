import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import codingIcon from '../../asset/image/coding.png';
import onlineIcon from '../../asset/image/online.png';
import professionalIcon from '../../asset/image/professional.png';
import RestClient from '../../RestAPI/RestClient'
import AppUrl from '../../RestAPI/AppUrl'
import Loading from '../Loading/Loading'
import Errorpage from '../404Page/Errorpage'

class Stories extends Component {

    constructor(){
        super();
        this.state={
            storiesData:[],
            loading:true,
            error:false
        }
    }
    componentDidMount(){
        RestClient.GetRequest(AppUrl.Stories).then(result=>{

            if(result === null){
                this.setState({error:true,loading:false})
            }else{

            this.setState({storiesData:result,loading:false});
            }
        }).catch(error=>{
            this.setState({error:true})
        })

        

    }

  render() {

    if(this.state.loading === true){
        return <Loading />
    }
    else if(this.state.loading === false){

    const MyList = this.state.storiesData;
    const MyView = MyList.map(MyList=>{

        return <Col lg={4} md={6} sm={12}>
        <div className="storiesCard text-center">
            <img className="codingIcon" src={MyList.stories_logo} alt="stories photos"/>
            <h2 className="storiesName">{MyList.stories_name}</h2>
            <p className="storiesDescription">{MyList.stories_description}</p>
        </div>
        </Col>
        
    })

    return (
        <Fragment>

            <Container>
                <h1 className="storiesMainTitle">SOJiLEARN TECHNOVATION</h1>
                    <div className="bottom"></div>
                    <p className="storiesMainPar">By engaging enough raw talents from the streets, we believe there will be an influx of new products and Tech solutions that will address the needs of remote areas, thus driving innovations from the graceroots.</p>
                <Row>
                        {MyView}
                </Row>
            </Container>
        </Fragment>
        )
    }// end else
    else if(this.state.error === true){
        return <Errorpage />
    }// end if for error
  }
}

export default Stories
