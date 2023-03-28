import React from 'react'
import classes from './EmptyCart.module.scss'
import { Link } from 'react-router-dom'
const EmptyCart = () => {
  return (
    <div className={classes.emptyCart}>
      <h2 className={classes.emptyCart__header}>Корзина пуста</h2>
      <p className={classes.emptyCart__text}>
        Вероятнее всего Вы еще не заказали питсу!
      </p>
      <p>Для того чтобы заказать питсы - перейдите на главную страницу</p>
      <svg
        className={classes.emptyCart__svg}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="cart-delete">
          <path d="M8,17a2,2,0,1,0,2,2A2.002,2.002,0,0,0,8,17Zm0,3a1,1,0,1,1,1-1A1.0013,1.0013,0,0,1,8,20Z" />
          <path d="M18,17a2,2,0,1,0,2,2A2.002,2.002,0,0,0,18,17Zm0,3a1,1,0,1,1,1-1A1.0013,1.0013,0,0,1,18,20Z" />
          <path d="M14.353,10.646a.5.5,0,1,1-.707.707L12.5,10.207l-1.147,1.147a.5.5,0,0,1-.707-.707L11.793,9.5,10.6465,8.3535a.5.5,0,0,1,.707-.707L12.5,8.793l1.1465-1.1465a.5.5,0,0,1,.707.707L13.207,9.5Z" />
          <path d="M21.7505,7.7759l-.5557,5A2.4979,2.4979,0,0,1,18.71,15H8.5A2.503,2.503,0,0,1,6,12.5v-5A1.5017,1.5017,0,0,0,4.5,6h-2a.5.5,0,0,1,0-1h2A2.503,2.503,0,0,1,7,7.5v5A1.5017,1.5017,0,0,0,8.5,14H18.71a1.4986,1.4986,0,0,0,1.4907-1.3345l.5556-5a1.5023,1.5023,0,0,0-.373-1.166A1.482,1.482,0,0,0,19.2656,6H16.5a.5.5,0,0,1,0-1h2.7656a2.5008,2.5008,0,0,1,2.4849,2.7759Z" />
        </g>
      </svg>
      <div className={classes.emptyCart__div__button}>
        <Link to="/" className={classes.emptyCart__button}>
          Вернуться назад
        </Link>
      </div>
    </div>
  )
}

export default EmptyCart
