import React from 'react'
import classes from './ErrorPage.module.scss'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className={classes.errorCart}>
      <h2 className={classes.errorCart__header}>Произошла ошибка</h2>
      <p className={classes.errorCart__text}>
        По техническим причинам произошел сбой
      </p>
      <p>Просьба повторить попытку чуть позже</p>
      <svg
        className={classes.errorCart__svg}
        height="250"
        viewBox="0 0 48 48"
        width="250"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0h48v48h-48z" fill="none" />
        <path d="M24 4c-11.04 0-20 8.95-20 20s8.96 20 20 20 20-8.95 20-20-8.96-20-20-20zm2 30h-4v-4h4v4zm0-8h-4v-12h4v12z" />
      </svg>
    </div>
  )
}
export default ErrorPage
