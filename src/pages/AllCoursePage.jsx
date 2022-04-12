import React, { Component, Fragment } from 'react'
import Courses from '../components/Courses/Courses'
import Modules from '../components/Modules/Modules'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'

class AllCoursePage extends Component {
  componentDidMount(){
    window.scroll(0,0)
}
  render() {
    return (
      
      <Fragment>
        <TopNavigation title="Our Courses"/>
        <PageTop pagetitle="All Courses" />
        <Courses />
        <Modules />
        <Footer />
      </Fragment>
    )
  }
}

export default AllCoursePage