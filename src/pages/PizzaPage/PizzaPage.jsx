import React, { useEffect, useState } from 'react'
import styles from './PizzaPage.module.scss'
import { useParams } from 'react-router-dom'
import { fetchItem, pizzaSliceSelector } from '../../redux/Slices/pizzaSlice'
import { useDispatch, useSelector } from 'react-redux'
import PizzaItemSkeleton from '../../components/PizzaItemSkeleton/PizzaItemSkeleton'

const PizzaPage = () => {
  const typeNames = ['Тонкое', 'Традиционное']

  const { id } = useParams()
  const { pizza, status } = useSelector(pizzaSliceSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchItem(id))
  }, [])

  if (status === 'loading') {
    return <PizzaItemSkeleton />
  }
  return (
    <div className={styles.pizzaPage}>
      <img className={styles.pizzaPage__img} src={pizza.url} alt="pizzaItem" />
      <h2 className={styles.pizzaPage__header}>{pizza.name}</h2>
      <ul className={styles.pizzaPage__types}>
        {pizza.type.map((type, index) => (
          <li key={index}>{typeNames[type]}</li>
        ))}
      </ul>
      <ul className={styles.pizzaPage__sizes}>
        {pizza.sizes.map((size, index) => (
          <li key={index}>{size} см</li>
        ))}
      </ul>
    </div>
  )
}

export default PizzaPage
