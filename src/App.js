import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Categories from './components/Categories'
import Sort from './components/Sort'
import PizzaItem from './components/PizzaItem'

//import pizzas from './assets/pizzas.json'

function App() {
  let [items, setItems] = useState([])

  useEffect(() => {
    // способ получения тренировочный!
    fetch('https://63735446348e947299093a2b.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => setItems(arr))
  }, [])

  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="sort">
          <Categories />
          <Sort />
        </div>
        <section className="section">
          <h1 style={{ marginBottom: '25px', textTransform: 'uppercase' }}>
            Все пиццы
          </h1>
          <div className="pizza-items">
            {items.map((obj) => (
              <PizzaItem key={obj.id} {...obj} /> // спред оператор
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
