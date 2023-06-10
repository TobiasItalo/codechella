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
        <Link className="menu-items__link" to="/xp"><li onClick={toggleMenu}>A Experiência</li></Link>
        <hr className='menu-items__hr'/>
        <Link className="menu-items__link" to="/map"><li onClick={toggleMenu}>Mapa de Setores</li></Link>
        <hr className='menu-items__hr'/>
        <Link className="menu-items__link" to="/faq"><li onClick={toggleMenu}>Informações</li></Link>
        <hr className='menu-items__hr'/>
        <Link className="menu-items__link" to="/ticket"><li onClick={toggleMenu}>Ingresso</li></Link>
      </ul>
    </div>
  )
}
