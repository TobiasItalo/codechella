import './Header.css'
import logo from '../../assets/logo-codechella.svg'
import HamburgerMenu from '../HamburgerMenu'
import ToggleTheme from '../ToggleTheme'
import { useSettingsContext } from '../../contexts/Settings'
import { Link } from 'react-router-dom'

export default function Header(): JSX.Element {
  const { theme } = useSettingsContext()

  return (
    <header className={`header header-${theme}`}>
      <ToggleTheme />
      <Link to='/'>
        <img src={ logo } alt="Logo CodeChella" />
      </Link>
      <HamburgerMenu />
    </header>
  )
}
