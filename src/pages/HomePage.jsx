import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Analysis from '../components/Analysis/Analysis';
import Stories from '../components/Stories/Stories';
import Summary from '../components/Summary/Summary';
import TopBanner from '../components/TopBanner/TopBanner';
import Courses from '../components/Courses/Courses';
import Modules from '../components/Modules/Modules';
import Video from '../components/Video/Video';
import ClientReview from '../components/ClientReview/ClientReview';
import AboutUs from '../components/AboutUs/AboutUs';
import Footer from '../components/Footer/Footer';

class HomePage extends Component {
  render() {
    return (
        <Fragment>

            <TopNavigation title="SojiLearn | Everything Technology skills Training"/>
            <TopBanner />
            <Stories />
            <Analysis />
            <Summary />
            <Courses />
            <Modules />
            <Video />
            <ClientReview />
            <AboutUs />
            <Footer />

        </Fragment>
    )
  }
}

export default HomePage
