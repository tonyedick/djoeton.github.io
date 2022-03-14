import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import CoursesPathDetailsAndroid from '../components/CoursesPathDetails/CoursesPathDetailsAndroid'

class CoursesPathPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
}
  render() {
    return (
        
        <Fragment>
            <TopNavigation title="Android Development School" />
            <PageTop pagetitle="Android Development"/>
            <CoursesPathDetailsAndroid />
            <Footer />
        </Fragment>
    )
  }
}

export default CoursesPathPage