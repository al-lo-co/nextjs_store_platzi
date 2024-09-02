import Link from "next/link"
import styles from './ChatLink.module.scss'

export const ChatLink = () => {
  return (
    <Link className={styles.ChatLink} href='/chat'>
      Chat ✨
    </Link>
  )
}