import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import PrivacyDescription from '../components/PrivacyDescription/PrivacyDescription'
import TopNavigation from '../components/TopNavigation/TopNavigation'

class PrivacyPolicyPage extends Component {
  render() {
    return (
      <Fragment>
          <TopNavigation title="Privacy Policy" />
          <PageTop pagetitle="Privacy Policy" />
          <PrivacyDescription />
          <Footer />
      </Fragment>
    )
  }
}

export default PrivacyPolicyPage