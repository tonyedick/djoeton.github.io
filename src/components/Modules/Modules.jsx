import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import RestClient from '../../RestAPI/RestClient'
import AppUrl from '../../RestAPI/AppUrl'
import Loading from '../Loading/Loading'
import Errorpage from '../404Page/Errorpage'

class Modules extends Component {
    
    constructor(){
        super();
        this.state={
            modulesData:[],
            loading:true,
            error:false
        }
    }
    componentDidMount(){
        RestClient.GetRequest(AppUrl.AllModules).then(result=>{

            if(result === null){
                this.setState({error:true,loading:false})
            }else{

            this.setState({modulesData:result,loading:false});
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


    const MyList = this.state.modulesData;
    const MyView = MyList.map(MyList=>{

           return <Col lg={6} md={12} sm={12}>
                <Row>
                    <Col lg={6} md={6} sm={12} className="p-2">
                        <img className="modulesImg" src={MyList.small_img} alt=""/>
                    </Col>

                    <Col lg={6} md={6} sm={12}>
                        <h5 className="text-justify storiesName">{MyList.short_title}</h5>
                        <p className="text-justify storiesDescription">{MyList.short_description}</p>
                            <Link className="modulesViewMore float-left" to="#" >View Details</Link>
                    </Col>
                </Row>
            </Col>
    
  })
    return (

        <Fragment>
            <Container className="text center">
            <h1 className="storiesMainTitle">START LEARNING</h1>
                    <div className="bottom"></div>
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

export default Modules
