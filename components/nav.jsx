import React, {useState, useEffect, useRef} from 'react'
import {useRouter} from 'next/router'

const Nav = ({}) => {
  const router = useRouter()
  
  const handleNav = (e) => {
    e.target.textContent.toLowerCase() == 'admin' ? window.open('/admin', '_blank', 'noopener,noreferrer') : null
  }

  const goToPage = (var1) => {
    window.open(`/${var1}`, '_blank', 'noopener,noreferrer')
  }
  
  return (
    <>
    <div className="nav-container">
      <nav className="nav">
        <a href="/" className="nav-logo">Santiagos Shine</a>
        <div className="nav-menu">
          <a className="nav-menu-item">About
            <ul className="nav-menu-dropdown">
              <li>About Item 1</li>
              <li>About Item 2</li>
              <li>About Item 3</li>
            </ul>
          </a>
          <a className="nav-menu-item">Services
            <ul className="nav-menu-dropdown">
              <li>Research Item 1</li>
              <li>Research Item 2</li>
              <li>Research Item 3</li>
            </ul>
          </a>
          <a className="nav-menu-item">Resources
            <ul className="nav-menu-dropdown">
              <li>Resources Item 1</li>
              <li>Resources Item 2</li>
              <li>Resources Item 3</li>
            </ul>
          </a>
          <a className="nav-menu-item">Accounts
            <ul className="nav-menu-dropdown">
              <li onClick={handleNav}>Admin</li>
              <li>Researcher</li>
            </ul>
          </a>
        </div>
      </nav>
    </div>
    </>
  )
}

export default Nav
