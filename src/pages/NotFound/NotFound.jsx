import React from 'react'
import NotFoundBlock from '../../components/NotFoundBlock'
import styles from '../NotFound/notFound.module.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className={styles.notfound}>
      <NotFoundBlock />
      <Link to="/" className={styles.notfoundbutton}>
        Вернуться
      </Link>
    </div>
  )
}

export default NotFound
