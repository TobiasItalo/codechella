import './Header.css'
import logo from '../../assets/logo-codechella.svg'
import HamburgerMenu from '../HamburgerMenu'

interface HeaderProps {
  theme: string
  device: string
}

export default function Header({ theme, device }: HeaderProps): JSX.Element {
  return (
    <header className={`header header-${theme}`}>
      <img src={ logo } alt="Logo CodeChella" />
      <HamburgerMenu />
    </header>
  )
}
