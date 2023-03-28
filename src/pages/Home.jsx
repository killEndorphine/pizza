import React, { useEffect, useState } from 'react'

import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaItem from '../components/PizzaItem'
import PizzaSkeleton from '../components/PizzaSkeleton'
import Pagination from '../components/Pagination/Pagination'
import ErrorPage from './Error/ErrorPage'

import { useDispatch, useSelector } from 'react-redux'
import {
  setActiveIndex,
  setSelected,
  fetchItems,
  setCurrentPage,
  homeSliceSelector,
} from '../redux/Slices/homeSlice'

const Home = () => {
  const { searchValue, selected, activeIndex, currentPage, items, status } =
    useSelector(homeSliceSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    const order = selected.sortProperty.includes('-') ? 'asc' : 'desc'
    const sortBy = selected.sortProperty.replace('-', '')
    const category = activeIndex > 0 ? `category=${activeIndex}` : ''
    const search = searchValue ? `search=${searchValue}` : ''
    const current = currentPage
    dispatch(
      fetchItems({
        order,
        sortBy,
        category,
        search,
        current,
      })
    )
  }, [activeIndex, selected, searchValue, currentPage])

  const setCategoryId = (id) => {
    dispatch(setActiveIndex(id))
  }

  const setSortSelected = (obj) => {
    dispatch(setSelected(obj))
  }

  return (
    <main className="main">
      {status === 'error' ? (
        <ErrorPage />
      ) : (
        <>
          <div className="sort">
            <Categories
              activeIndex={activeIndex}
              setActiveIndex={setCategoryId}
            />
            <Sort selected={selected} setSelected={setSortSelected} />
          </div>
          <section className="section">
            <h1 style={{ marginBottom: '25px', textTransform: 'uppercase' }}>
              Все пиццы
            </h1>
            <div className="pizza-items">
              {status === 'loading'
                ? [...new Array(4)].map((_, index) => (
                    <PizzaSkeleton key={index} />
                  ))
                : items.map((obj) => <PizzaItem key={obj.id} {...obj} />)}
            </div>
            <Pagination
              onChangePage={(number) => dispatch(setCurrentPage(number))}
            />
          </section>
        </>
      )}
    </main>
  )
}

export default Home
