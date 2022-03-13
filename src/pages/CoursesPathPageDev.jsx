import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import CoursesPathDetailsDev from '../components/CoursesPathDetails/CoursesPathDetailsDev'

class CoursesPathPage extends Component {
  render() {
    return (
        
        <Fragment>
            <TopNavigation title="Software Development Academy" />
            <PageTop pagetitle="Become a Software Developer"/>
            <CoursesPathDetailsDev />
            <Footer />
        </Fragment>
    )
  }
}

export default CoursesPathPage