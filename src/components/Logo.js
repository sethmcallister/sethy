import React, { Component, PropTypes } from 'react'
import ProfileImg from '../img/profile.jpg'

class Logo extends Component {
  render () {
    var details = this.props.details
    return (
      <div className='m1'>
        <div className='dt mw6 center pv4 pv5-m pv6-ns'>
          <div className='dtc v-mid'>
            <img src={ProfileImg} className='br-100 pa1 ba b--black-10 h4 w4' alt={details.logo_text} />
          </div>
          <div className='dtc v-mid pl3'>
            <h1 className='white'>{details.logo_text}</h1>
            <h2 className='white'>{details.title}</h2>
            <p className='lh-copy white'>
              {details.description}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

Logo.propTypes = {
  logo_text: PropTypes.string,
  logo_img: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string
}

export default Logo
