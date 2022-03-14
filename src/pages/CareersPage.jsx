import React, { Component, Fragment } from 'react'
import CareerDescription from '../components/Careers/CareerDescription'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'

class CareersPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
}
  render() {
    return (
        <Fragment>
            <TopNavigation title="Our Careers" />
            <PageTop pagetitle="Careers page" />
            <CareerDescription />
            <Footer />
        </Fragment>
      
    )
  }
}

export default CareersPage