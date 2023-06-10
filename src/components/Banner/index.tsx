import { useSettingsContext } from '../../contexts/Settings'
import './Banner.css'

interface BannerProps {
  page: string
  firstLine: string
  secondLine?: string
}

export default function Banner({ page, firstLine, secondLine }: BannerProps): JSX.Element {
  const { theme, device } = useSettingsContext()

  return (
    <section className="banner-container" style={{ backgroundImage: `url("src/assets/${theme}/images/${device}/banner-${page}.png")` }}>
      <p className={`banner-container__text banner-container__text-${theme}`}>{firstLine}</p>
      <p className={`banner-container__text banner-container__text-${theme}`}>{secondLine}</p>
    </section>
  )
}
