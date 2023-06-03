import { useThemeContext } from '../../contexts/Theme'
import { Theme } from '../../enums/themes'
import './ToggleTheme.css'

export default function ToggleTheme(): JSX.Element {
  const { theme, changeTheme } = useThemeContext()

  return (
    <div className="toggle" onClick={changeTheme}>{theme === Theme.SUMMER ? '😎' : '🌜' }</div>
  )
}
