import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Banner from './components/Banner'
import { useRef } from 'react'
import { useThemeContext } from './contexts/Theme'

export default function AppRoutes(): JSX.Element {
  const widthScreen = useRef(window.innerWidth).current
  const device = widthScreen >= 1440 ? 'desktop' : (widthScreen >= 768 ? 'tablet' : 'mobile')
  const { theme } = useThemeContext()

  return (
    <BrowserRouter>
      <Header theme={theme} device={device} />
      <Banner theme={theme} device={device} text='Boas-vindas ao #CodeChella2023'/>
    </BrowserRouter>
  )
}
