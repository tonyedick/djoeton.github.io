import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import CoursesPathDetailsContent from '../components/CoursesDetails/CoursesPathDetailsContent'

class CoursesPathPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
}
  render() {
    return (
        
        <Fragment>
            <TopNavigation title="Content Writing School" />
            <PageTop pagetitle="Content Writer"/>
            <CoursesPathDetailsContent />
            <Footer />
        </Fragment>
    )
  }
}

export default CoursesPathPage