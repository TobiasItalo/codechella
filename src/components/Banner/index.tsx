import './Banner.css'

interface BannerProps {
  theme: string
  device: string
  text: string
}

export default function Banner({ theme, device, text }: BannerProps): JSX.Element {
  return (
    <div className="banner-container" style={{ backgroundImage: `url("src/assets/${theme}/images/${device}/1-banner-homepage.png")` }}>
      <p className="banner-container__text">{text}</p>
    </div>
  )
}
