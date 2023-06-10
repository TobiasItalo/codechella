import { useState } from 'react'
import { Link } from 'react-router-dom'
import './HamburgerMenu.css'
import { useSettingsContext } from '../../contexts/Settings'

export default function HamburgerMenu(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { theme } = useSettingsContext()

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
      <ul className={`menu-items menu-items-${theme}`}>
        <li><Link className="menu-items__link" to="/xp">A Experiência</Link></li>
        <hr className='menu-items__hr'/>
        <li><Link className="menu-items__link" to="/map">Mapa de Setores</Link></li>
        <hr className='menu-items__hr'/>
        <li><Link className="menu-items__link" to="/faq">Informações</Link></li>
        <hr className='menu-items__hr'/>
        <li><Link className="menu-items__link" to="/ticket">Ingresso</Link></li>
      </ul>
    </div>
  )
}
