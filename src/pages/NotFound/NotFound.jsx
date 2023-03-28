import React from 'react'
import NotFoundBlock from '../../components/NotFoundBlock'
import styles from '../NotFound/notFound.module.css'

const NotFound = () => {
  return (
    <div className={styles.notfound}>
      <NotFoundBlock />
      <button className={styles.notfoundbutton}>Вернуться</button>
    </div>
  )
}

export default NotFound
