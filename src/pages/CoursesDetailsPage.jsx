import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import CoursesDetails from '../components/CoursesDetails/CoursesDetails'

class CoursesDetailsPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
}
  render() {
    return (
        
        <Fragment>
            <TopNavigation title="Enroll" />
            <PageTop pagetitle="Course Details"/>
            <CoursesDetails />
            <Footer />
        </Fragment>
    )
  }
}

export default CoursesDetailsPage