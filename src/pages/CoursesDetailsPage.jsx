import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import CoursesDetails from '../components/CoursesDetails/CoursesDetails'
import RestClient from '../RestAPI/RestClient'
import AppUrl from '../RestAPI/AppUrl'

class CoursesDetailsPage extends Component {
  
  constructor({match}){
    super();
    this.state={
        MyCourseId:match.params.courseID,
        CourseData:[]
    }
}
  componentDidMount(){
    window.scroll(0,0)
  
        RestClient.GetRequest(AppUrl.CourseDetails+this.state.MyCourseId).then(result=>{
            this.setState({CourseData:result});
            })
}
  render() {
    return (
        
        <Fragment>
            <TopNavigation title="Enroll" />
            <PageTop pagetitle="Course Details"/>
            <CoursesDetails courseallData={this.state.CourseData} />
            <Footer />
        </Fragment>
    )
  }
}

export default CoursesDetailsPage