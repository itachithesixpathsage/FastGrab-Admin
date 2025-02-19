import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={assets.logo} alt="" />
        <div className="text">

          <h1>FastGrab</h1>
          <h3>Admin Panel</h3>
        </div>
      </div>
      <img className="profile" src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar