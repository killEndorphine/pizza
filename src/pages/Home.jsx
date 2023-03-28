import React, { useEffect, useState } from 'react'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaItem from '../components/PizzaItem'
import PizzaSkeleton from '../components/PizzaSkeleton'

const Home = ({ searchValue }) => {
  let [items, setItems] = useState([])
  const [selected, setSelected] = useState({
    name: 'популярности(по убыванию)',
    sortProperty: 'rating',
  })
  const [activeIndex, setActiveIndex] = useState(0) // теперь они тут!
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const order = selected.sortProperty.includes('-') ? 'asc' : 'desc'
    const sortBy = selected.sortProperty.replace('-', '')
    const category = activeIndex > 0 ? `category=${activeIndex}` : ''
    const search = searchValue ? `search=${searchValue}` : ''

    setIsLoading(true)
    fetch(
      `https://63735446348e947299093a2b.mockapi.io/items?${category}${search}&sortBy=${sortBy}&order=${order}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr)
        setIsLoading(false)
      })
    window.scrollTo(0, 0) // перевести вверх окно
  }, [activeIndex, selected, searchValue])

  return (
    <main className="main">
      <div className="sort">
        <Categories activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        <Sort selected={selected} setSelected={setSelected} />
      </div>
      <section className="section">
        <h1 style={{ marginBottom: '25px', textTransform: 'uppercase' }}>
          Все пиццы
        </h1>
        <div className="pizza-items">
          {isLoading
            ? [...new Array(8)].map((_, index) => <PizzaSkeleton key={index} />)
            : items.map((obj) => <PizzaItem key={obj.id} {...obj} />)}
        </div>
      </section>
    </main>
  )
}

export default Home
