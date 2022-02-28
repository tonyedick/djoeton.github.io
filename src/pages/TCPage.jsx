import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TCDEscription from '../components/TermsConditions/TCDescription'
import TopNavigation from '../components/TopNavigation/TopNavigation'


export class TCPage extends Component {
  render() {
    return (
      <Fragment>
          <TopNavigation title="Terms and Condition"/>
          <PageTop pagetitle="Terms and Condition" />
          <TCDEscription />
          <Footer />
      </Fragment>
    )
  }
}

export default TCPage