import React from 'react'
import './Header.modules.css'
import logo from '../../assets/logo-codechella.svg'
import HamburgerMenu from '../HamburgerMenu'

export default function Header (): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <img src={ logo } alt="Logo CodeChella" />
      </div>
      <HamburgerMenu />
    </header>
  )
}
