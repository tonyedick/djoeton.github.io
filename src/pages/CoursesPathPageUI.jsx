import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import CoursesPathDetailsUI from '../components/CoursesPathDetails/CoursesPathDetailsUI'

class CoursesPathPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
}
  render() {
    return (
        
        <Fragment>
            <TopNavigation title="UI/UX Design School" />
            <PageTop pagetitle="UI/UX Design"/>
            <CoursesPathDetailsUI />
            <Footer />
        </Fragment>
    )
  }
}

export default CoursesPathPage