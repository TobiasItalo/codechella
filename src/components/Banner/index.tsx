import { useSettingsContext } from '../../contexts/Settings'
import './Banner.css'

interface BannerProps {
  page: string
  text: string
}

export default function Banner({ page, text }: BannerProps): JSX.Element {
  const { theme, device } = useSettingsContext()

  return (
    <div className="banner-container" style={{ backgroundImage: `url("src/assets/${theme}/images/${device}/banner-${page}.png")` }}>
      <p className={`banner-container__text banner-container__text-${theme}`}>{text}</p>
    </div>
  )
}
