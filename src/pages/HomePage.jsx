import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Analysis from '../components/Analysis/Analysis'
import Stories from '../components/Stories/Stories'
import Summary from '../components/Summary/Summary'
import TopBanner from '../components/TopBanner/TopBanner'
import ClientReview from '../components/ClientReview/ClientReview'
import Courses from '../components/Courses/Courses'
import Modules from '../components/Modules/Modules'
import Video from '../components/Video/Video'
import Footer from '../components/Footer/Footer'
import Welcome from '../components/Welcome/Welcome'

class HomePage extends Component {
  componentDidMount(){
    window.scroll(0,0)
}
  render() {
    return (
        <Fragment>

            <TopNavigation title="SojiLearn | Everything Technology skills Training"/>
            <TopBanner />
            <Welcome />
            <ClientReview />
            <Stories />
            <Analysis />
            <Summary />
            <Courses />
            <Modules />
            <Video />
            <Footer />

        </Fragment>
    )
  }
}

export default HomePage
