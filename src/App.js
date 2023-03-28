import React from 'react'
import Header from './components/Header'
import Categories from './components/Categories'
import Sort from './components/Sort'
import Popup from './components/Popup'
import PizzaItem from './components/PizzaItem'

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
            <PizzaItem title="Мексиканская" price={500} />
            <PizzaItem title="Мексиканская" price={500} />
            <PizzaItem title="Мексиканская" price={500} />
            <PizzaItem title="Мексиканская" price={500} />
            <PizzaItem title="Мексиканская" price={500} />
            <PizzaItem title="Мексиканская" price={500} />
            <PizzaItem title="Мексиканская" price={500} />
            <PizzaItem title="Мексиканская" price={500} />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
