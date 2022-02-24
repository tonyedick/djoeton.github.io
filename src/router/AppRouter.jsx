import React, { Component } from 'react'
import { Fragment } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from '../pages/HomePage'
import StoriesPage from '../pages/StoriesPage'
import AllCoursePage from '../pages/AllCoursePage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'

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
        </Routes>
      </Fragment>
    )
  }
}

export default AppRouter
