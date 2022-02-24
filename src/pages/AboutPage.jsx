import React, { Component, Fragment } from 'react'
import AboutDescription from '../components/AboutDescription/AboutDescription'
import AboutPageTop from '../components/AboutPageTop/AboutPageTop'
import Analysis from '../components/Analysis/Analysis'
import Footer from '../components/Footer/Footer'
import TopNavigation from '../components/TopNavigation/TopNavigation'

class AboutPage extends Component {
  render() {
    return (
      
      <Fragment>

          <TopNavigation />
          <AboutPageTop aboutpagetitle="Digital Transformation for Individuals and Businesses." />
          <AboutDescription />
          <Analysis />
          <Footer />

      </Fragment>
    )
  }
}

export default AboutPage