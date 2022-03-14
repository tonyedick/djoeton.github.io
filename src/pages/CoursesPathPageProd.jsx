import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import CoursesPathDetailsProd from '../components/CoursesPathDetails/CoursesPathDetailsProd'

class CoursesPathPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
}
  render() {
    return (
        
        <Fragment>
            <TopNavigation title="Product Design School" />
            <PageTop pagetitle="Product Design"/>
            <CoursesPathDetailsProd />
            <Footer />
        </Fragment>
    )
  }
}

export default CoursesPathPage