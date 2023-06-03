import { useSettingsContext } from '../../contexts/Settings'
import { Theme } from '../../enums/themes'
import './ToggleTheme.css'

export default function ToggleTheme(): JSX.Element {
  const { theme, changeTheme } = useSettingsContext()

  return (
    <div className="toggle" onClick={changeTheme}>{theme === Theme.SUMMER ? '😎' : '🌜' }</div>
  )
}
