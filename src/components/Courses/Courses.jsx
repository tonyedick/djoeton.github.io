import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import RestClient from '../../RestAPI/RestClient'
import AppUrl from '../../RestAPI/AppUrl'
import Loading from '../Loading/Loading'
import Errorpage from '../404Page/Errorpage'

class Courses extends Component {

    constructor(){
        super();
        this.state={
            coursesData:[],
            loading:true,
            error:false
        }
    }
    componentDidMount(){
        RestClient.GetRequest(AppUrl.AllCourses).then(result=>{

            if(result === null){
                this.setState({error:true,loading:false})
            }else{

            this.setState({coursesData:result,loading:false});
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



    const MyList = this.state.coursesData;
    const MyView = MyList.map(MyList=>{

        return  <Col lg={4} md={6} sm={12}>
                    <Card className="coursesCard">
                    <Card.Img variant="top" src={MyList.img_one} />
                    <Card.Body>
                        <Card.Title>{MyList.course_name}</Card.Title>
                        <Card.Text>
                        {MyList.course_description}
                        </Card.Text>
                        <p className="coursesReadMore"><Link to={"/coursedetails/"+MyList.id}>Read more..</Link></p>
                    </Card.Body>
                    </Card>
                </Col>

    })
    return (
        <Fragment>
            <Container>
            <h1 className="coursesMainTitle">CHOOSE A PATH</h1>
            <div className="coursesBottom"></div>
                
                <Row>
                   {MyView}
                </Row>
            </Container>
        </Fragment>    
    )
    }//end else
     else if(this.state.error === true){
        return <Errorpage />
    }// end if for error
  }
}

export default Courses
