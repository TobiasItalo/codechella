import { type Dispatch, createContext, useContext, useState, type SetStateAction, type ReactNode, useRef } from 'react'
import { Theme } from '../enums/themes'
import { Devices } from '../enums/devices'

interface SettingsContextValue {
  theme: string
  setTheme: Dispatch<SetStateAction<Theme>>
  widthScreen: number
}

interface SettingsProviderProps {
  children: ReactNode
}

interface SettingsResults {
  theme: string
  changeTheme: () => void
  device: string
}

export const SettingsContext = createContext<SettingsContextValue | undefined>(undefined)

export default function SettingsProvider({ children }: SettingsProviderProps): JSX.Element {
  const [theme, setTheme] = useState(Theme.SUMMER)
  const widthScreen = useRef(window.innerWidth).current

  return (
    <SettingsContext.Provider value={{ theme, setTheme, widthScreen }}>
      { children }
    </SettingsContext.Provider>
  )
}

export function useSettingsContext(): SettingsResults {
  const context = useContext(SettingsContext)

  if (context == null) throw new Error('useThemeContext must be used within a ThemeProvider')

  const { theme, setTheme, widthScreen } = context

  const device = widthScreen >= 1440 ? Devices.DESKTOP : (widthScreen >= 768 ? Devices.TABLET : Devices.MOBILE)

  function changeTheme(): void {
    setTheme(prevTheme => (prevTheme === Theme.SUMMER ? Theme.BOREAL : Theme.SUMMER))
  }

  return { theme, changeTheme, device }
}
