import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import CoursesPathDetailsContent from '../components/CoursesPathDetails/CoursesPathDetailsContent'

class CoursesPathPage extends Component {
  render() {
    return (
        
        <Fragment>
            <TopNavigation title="Content Writing School" />
            <PageTop pagetitle="Become a Content Writer"/>
            <CoursesPathDetailsContent />
            <Footer />
        </Fragment>
    )
  }
}

export default CoursesPathPage