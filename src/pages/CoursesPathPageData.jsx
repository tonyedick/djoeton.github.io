import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import CoursesPathDetailsData from '../components/CoursesPathDetails/CoursesPathDetailsData'

class CoursesPathPage extends Component {
  render() {
    return (
        
        <Fragment>
            <TopNavigation title="Data Analysis School" />
            <PageTop pagetitle="Become a Data Analyst"/>
            <CoursesPathDetailsData />
            <Footer />
        </Fragment>
    )
  }
}

export default CoursesPathPage