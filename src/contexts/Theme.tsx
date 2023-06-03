import PropTypes from 'prop-types'
import { type Dispatch, createContext, useContext, useState, type SetStateAction, type ReactNode } from 'react'
import { Theme } from '../enums/themes'

interface ThemeContextValue {
  theme: string
  setTheme: Dispatch<SetStateAction<Theme>>
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
}

export default function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
  const [theme, setTheme] = useState(Theme.SUMMER)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}

export function useThemeContext(): { theme: string, changeTheme: () => void } {
  const context = useContext(ThemeContext)

  if (context == null) {
    throw new Error('useThemeContext must be used within a ThemeProvider')
  }

  const { theme, setTheme } = context

  function changeTheme(): void {
    setTheme(prevTheme => (prevTheme === Theme.SUMMER ? Theme.BOREAL : Theme.SUMMER))
  }

  return { theme, changeTheme }
}

ThemeProvider.propTypes = {
  children: PropTypes.node
}
