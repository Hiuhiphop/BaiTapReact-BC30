import React, { Component } from 'react'

export default class SearchSinhVien extends Component {
  render() {
    return (
      <div className='search'>
        <input type="text" placeholder='Tìm sinh viên' className='w-100'/>
      </div>
    )
  }
}
