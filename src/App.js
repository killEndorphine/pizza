import React from 'react'
import Header from './components/Header'
import Categories from './components/Categories'
import Sort from './components/Sort'
import Popup from './components/Popup'
import PizzaItem from './components/PizzaItem'

import pizzas from './assets/pizzas.json'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="sort">
          <Categories />
          <Sort />
          <Popup />
        </div>
        <section className="section">
          <h1 style={{ marginBottom: '25px', textTransform: 'uppercase' }}>
            Все пиццы
          </h1>
          <div className="pizza-items">
            {pizzas.map((obj, index) => (
              <PizzaItem key={index} {...obj} /> // спред оператор
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
