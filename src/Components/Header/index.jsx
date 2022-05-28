import React from 'react'
import './index.scss'
import siteLogo from '../../images/logo.png'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="header">
      <Link className="image-wrapper" to="/">
          <img className="header__logo" src={siteLogo} alt="site logo" />
      </Link>
    </header>
  )
}
