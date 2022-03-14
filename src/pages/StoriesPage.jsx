import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import AllStories from '../components/AllStories/AllStories'
import Contact from '../components/Contact/Contact'
import Summary from '../components/Summary/Summary'

class StoriesPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
}
  render() {
    return (
      <Fragment>
        <TopNavigation title="Our Story" />
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
