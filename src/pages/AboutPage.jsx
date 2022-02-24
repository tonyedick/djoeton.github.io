import React, { Component, Fragment } from 'react'
import AboutDescription from '../components/AboutDescription/AboutDescription'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'

class AboutPage extends Component {
  render() {
    return (
      
      <Fragment>

          <TopNavigation />
          <PageTop pagetitle="About Us" />
          <AboutDescription />
          <Footer />

      </Fragment>
    )
  }
}

export default AboutPage