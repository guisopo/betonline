import React from 'react'
import './index.scss'
import siteLogo from '../../images/logo.png'

export const Header = () => {
  return (
    <header className="header">
      <div className="image-wrapper">
        <img className="header__logo" src={siteLogo} alt="site logo" />
      </div>
    </header>
  )
}
