import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import siteLogo from '../../images/logo.png'

export const Header = () => {
  return (
    <header className="header">
      <Link className="image-wrapper" to="/">
          <img className="header__logo" src={siteLogo} alt="site logo" />
      </Link>
    </header>
  )
}
