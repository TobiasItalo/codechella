import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Banner from './components/Banner'

export default function AppRoutes(): JSX.Element {
  return (
    <BrowserRouter>
      <Header/>
      <Banner page="homepage" text='Boas-vindas ao #CodeChella2023'/>
    </BrowserRouter>
  )
}
