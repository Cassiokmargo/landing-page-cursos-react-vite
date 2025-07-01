import styles from './MiniCard.module.css'

interface MiniCardProps {
    children: string
}

const MiniCard = ({ children }: MiniCardProps) => {
  return (
    <div className={styles.card_container}>
        <h3>{children}</h3>
    </div>
  )
}

export default MiniCard