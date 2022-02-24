import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import AllStories from '../components/AllStories/AllStories'
import Contact from '../components/Contact/Contact'
import Summary from '../components/Summary/Summary'

class StoriesPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation />
        <PageTop pagetitle="Our Story" />
        <AllStories />
        <br></br>
        <br></br>
        <Summary />
        <br></br>
        <br></br>
        <Contact />
        <Footer />
      </Fragment>

    )
  }
}

export default StoriesPage
