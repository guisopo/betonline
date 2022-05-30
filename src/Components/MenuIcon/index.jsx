import React, { useState } from 'react'
import './index.scss'

export const MenuIcon = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  // = = = = = = = = = = = = =
  // Event Handlers
  const handleClick = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div onClick={handleClick} className={`menu-icon ${menuOpen ? 'menu-icon--open' : null}`}>
      <div className="lines-wrapper">
        <span className="menu-line"></span>
        <span className="menu-line"></span>
        <span className="menu-line"></span>
      </div>
    </div>
  )
}
