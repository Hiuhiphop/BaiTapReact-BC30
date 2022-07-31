import React, { Component } from 'react'
import "../../assets/css/BaiTapComponent.css"
import Body from './Body'
import Footer from './Footer'
import Header from './Header'

export default class BaiTapComponent extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    )
  }
}
