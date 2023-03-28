import React, { useEffect, useState } from 'react'

import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaItem from '../components/PizzaItem'
import PizzaSkeleton from '../components/PizzaSkeleton'
import Pagination from '../components/Pagination/Pagination'

import { SearchContext } from '../App'
import { useDispatch, useSelector } from 'react-redux'
import {
  setActiveIndex,
  setSelected,
  setItems,
  setIsLoading,
  setCurrentPage,
} from '../redux/Slices/homeSlice'

import axios from 'axios'

const Home = () => {
  const { searchValue } = React.useContext(SearchContext)

  const homeSlice = useSelector((state) => state.homeSlice)
  const dispatch = useDispatch()

  useEffect(() => {
    const order = homeSlice.selected.sortProperty.includes('-') ? 'asc' : 'desc'
    const sortBy = homeSlice.selected.sortProperty.replace('-', '')
    const category =
      homeSlice.activeIndex > 0 ? `category=${homeSlice.activeIndex}` : ''
    const search = searchValue ? `search=${searchValue}` : ''

    dispatch(setIsLoading(true))
    axios
      .get(
        `https://63735446348e947299093a2b.mockapi.io/items?page=${homeSlice.currentPage}&limit=4&${category}${search}&sortBy=${sortBy}&order=${order}`
      )
      .then((res) => {
        dispatch(setItems(res.data))
        dispatch(setIsLoading(false))
      })

    window.scrollTo(0, 0) // перевести вверх окно
  }, [
    homeSlice.activeIndex,
    homeSlice.selected,
    searchValue,
    homeSlice.currentPage,
  ])

  const setCategoryId = (id) => {
    dispatch(setActiveIndex(id))
  }

  const setSortSelected = (obj) => {
    dispatch(setSelected(obj))
  }

  return (
    <main className="main">
      <div className="sort">
        <Categories
          activeIndex={homeSlice.activeIndex}
          setActiveIndex={setCategoryId}
        />
        <Sort selected={homeSlice.selected} setSelected={setSortSelected} />
      </div>
      <section className="section">
        <h1 style={{ marginBottom: '25px', textTransform: 'uppercase' }}>
          Все пиццы
        </h1>
        <div className="pizza-items">
          {homeSlice.isLoading
            ? [...new Array(4)].map((_, index) => <PizzaSkeleton key={index} />)
            : homeSlice.items.map((obj) => <PizzaItem key={obj.id} {...obj} />)}
        </div>
        <Pagination
          onChangePage={(number) => dispatch(setCurrentPage(number))}
        />
      </section>
    </main>
  )
}

export default Home
