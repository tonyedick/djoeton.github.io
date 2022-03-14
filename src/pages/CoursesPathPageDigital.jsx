import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import CoursesPathDetailsDigital from '../components/CoursesPathDetails/CoursesPathDetailsDigital'

class CoursesPathPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
}
  render() {
    return (
        
        <Fragment>
            <TopNavigation title="Social Media Marketing Academy" />
            <PageTop pagetitle="Digital Marketing"/>
            <CoursesPathDetailsDigital />
            <Footer />
        </Fragment>
    )
  }
}

export default CoursesPathPage