import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import CoursesPathDetailsProd from '../components/CoursesPathDetails/CoursesPathDetailsProd'

class CoursesPathPage extends Component {
  render() {
    return (
        
        <Fragment>
            <TopNavigation title="Product Design School" />
            <PageTop pagetitle="Your Path to Become a Product Designer"/>
            <CoursesPathDetailsProd />
            <Footer />
        </Fragment>
    )
  }
}

export default CoursesPathPage