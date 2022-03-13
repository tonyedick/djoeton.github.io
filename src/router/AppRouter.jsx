import React, { Component } from 'react'
import { Fragment } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from '../pages/HomePage'
import StoriesPage from '../pages/StoriesPage'
import AllCoursePage from '../pages/AllCoursePage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import RefundPage from '../pages/RefundPage'
import TCPage from '../pages/TCPage'
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage'
import CareersPage from '../pages/CareersPage'
import FaqPage from '../pages/FaqPage'
import CoursesPathPageUI from '../pages/CoursesPathPageUI'
import CoursesPathPageAndroid from '../pages/CoursesPathPageAndroid'
import CoursesPathPageDev from '../pages/CoursesPathPageDev'
import CoursesPathPageProd from '../pages/CoursesPathPageProd'
import CoursesPathPageContent from '../pages/CoursesPathPageContent'
import CoursesPathPageDigital from '../pages/CoursesPathPageDigital'
import CoursesPathPageData from '../pages/CoursesPathPageData'

class AppRouter extends Component {
  render() {
    return (
      <Fragment>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/stories" element={<StoriesPage />} />
            <Route exact path="/schools" element={<AllCoursePage />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/contact" element={<ContactPage />} />

            <Route exact path="/refund" element={<RefundPage />} />
            <Route exact path="/termsandconditions" element={<TCPage />} />
            <Route exact path="/privacypolicy" element={<PrivacyPolicyPage />} />
            
            <Route exact path="/careers" element={<CareersPage />} />
            <Route exact path="/faq" element={<FaqPage />} />
            
            <Route exact path="/coursepathui" element={<CoursesPathPageUI />} />
            <Route exact path="/coursepathandroid" element={<CoursesPathPageAndroid />} />
            <Route exact path="/coursepathdev" element={<CoursesPathPageDev />} />
            <Route exact path="/coursepathprod" element={<CoursesPathPageProd />} />
            <Route exact path="/coursepathcontent" element={<CoursesPathPageContent />} />
            <Route exact path="/coursepathdigital" element={<CoursesPathPageDigital />} />
            <Route exact path="/coursepathdata" element={<CoursesPathPageData />} />
        </Routes>
      </Fragment>
    )
  }
}

export default AppRouter
