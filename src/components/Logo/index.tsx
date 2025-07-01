import styles from './Logo.module.css'

interface LogoProps  {
    src: string
    alt: string
}

const Logo = ({src, alt}: LogoProps) => {
  return (
    <div className={styles.logo}>
        <img src={src} alt={alt} />
    </div>
  )
}

export default Logo