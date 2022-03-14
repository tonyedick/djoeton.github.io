import React, { Component, Fragment } from 'react'
import Contact from '../components/Contact/Contact'
import FaqDescription from '../components/Faq/FaqDescription'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'

class FaqPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
}
  render() {
    return (
      
      <Fragment>
          <TopNavigation title="FAQ" />
          <PageTop pagetitle="FAQ" />
          <FaqDescription />
          <Contact />
          <Footer />
      </Fragment>
    )
  }
}

export default FaqPage