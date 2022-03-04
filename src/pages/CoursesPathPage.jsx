import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import CoursesPathDetails from '../components/CoursesPathDetails/CoursesPathDetails'

class CoursesPathPage extends Component {
  render() {
    return (
        
        <Fragment>
            <TopNavigation title="Choose Your Path" />
            <PageTop pagetitle="Courses Path"/>
            <CoursesPathDetails />
            <Footer />
        </Fragment>
    )
  }
}

export default CoursesPathPage