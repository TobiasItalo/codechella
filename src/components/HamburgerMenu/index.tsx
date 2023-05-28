import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './HamburgerMenu.modules.css'

export default function HamburgerMenu (): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  function toggleMenu (): void {
    setIsOpen(!isOpen)
  }
  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className="menu-items">
        <li><Link to="/xp">A experiência</Link></li>
        <li><Link to="/map">Mapa de Setores</Link></li>
        <li><Link to="/faq">Informações</Link></li>
        <li><Link to="/ticket">Ingresso</Link></li>
      </ul>
    </div>
  )
}
