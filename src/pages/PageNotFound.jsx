import React, { Component, Fragment } from 'react';
import Footer from '../components/Footer/Footer';
import NotFound from '../components/NotFound/NotFound';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';

class PageNotFound extends Component {
  render() {
    return (
        <Fragment>
            <TopNavigation  title="Page Not Found"/>
            <PageTop pagetitle="404"/>
            <NotFound />
            <Footer />
        </Fragment>
    )
  }
}

export default PageNotFound;
