import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import CoursesDetails from '../components/CoursesDetails/CoursesDetails'
import RestClient from '../RestAPI/RestClient'
import AppUrl from '../RestAPI/AppUrl'
import { useParams } from 'react-router-dom'

class CoursesDetailsPage extends Component {

  constructor(){
    super();
    this.state={
        courseID:useParams(),
        MyCourseId:useParams.courseId,
        CoursePassedName:useParams.courseName,
        CourseData:[]
    }
}
  componentDidMount(){
    window.scroll(0,0)

        RestClient.GetRequest(AppUrl.CoursesDetails+this.state.MyCourseId).then(result=>{
            this.setState({CourseData:result});
            })
}
  render() {
    return (

        <Fragment>
            <TopNavigation title="Enroll" />
            <PageTop pagetitle={this.state.CourseName} />
            <CoursesDetails courseallData={this.state.CourseData} />
            <Footer />
        </Fragment>
    )
  }
}

export default CoursesDetailsPage
