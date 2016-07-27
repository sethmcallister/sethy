import React, { PropTypes, Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import tachyons from 'tachyons'
import SiteConfig from '../config/SiteConfig'

class routeApp extends Component {
  render () {
    return (
      <div className='bg-black-10'>
        <Header details={SiteConfig} />
        <div className='mw5 mw7-ns center pa3 ph5-ns'>
          {this.props.children}
        </div>
        <Footer details={SiteConfig} />
      </div>

    )
  }
}
routeApp.propTypes = {
  children: PropTypes.object
}

export default routeApp
