import React, { useState } from 'react'

const Categories = ({ activeIndex, setActiveIndex }) => {
  const arr = ['Все', 'Мясные', 'Вегитарианские', 'Гриль', 'Закрытые']
  //const [activeIndex, setActiveIndex] = useState(0)
  return (
    <nav className="nav-main">
      <ul className="ul-main">
        {arr.map((item, index) => (
          <li
            key={index}
            className={activeIndex === index ? 'li-main li-active' : 'li-main'}
            onClick={() => setActiveIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Categories
