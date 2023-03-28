import React, { useState } from 'react'

const PizzaItem = ({ name, price, url, sizes, type }) => {
  const [count, setCount] = useState(0)
  const [activeIndex1, setActiveIndex1] = useState(0)
  const [activeIndex2, setActiveIndex2] = useState(0)
  const typeNames = ['Тонкое', 'Традиционное']

  return (
    <div className="pizza-item-flex">
      <div className="pizza-item">
        <img width="300px" src={url} className="pizza-img" alt="pizza" />
        <h4 className="pizza-title">{name}</h4>
        <div className="pizza-options-top">
          <ul className="pizza-option-one">
            {type.map((type, index) => (
              <li
                key={index}
                onClick={() => setActiveIndex1(index)}
                className={
                  activeIndex1 === index
                    ? 'pizza-option-active'
                    : 'pizza-option-inactive'
                }
              >
                {typeNames[type]}
              </li>
            ))}
          </ul>
          <ul className="pizza-option-two">
            {sizes.map((size, index) => (
              <li
                onClick={() => setActiveIndex2(index)}
                key={index}
                className={
                  activeIndex2 === index
                    ? 'pizza-option-active'
                    : 'pizza-option-inactive'
                }
              >
                {size} см
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-option-bottom">
          <span className="pizza-price">от {price} р</span>
          <button
            onClick={() => setCount(count + 1)}
            className="pizza-item-add"
            href="#"
          >
            <svg
              height="25px"
              version="1.1"
              viewBox="0 0 14 14"
              width="14px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title />
              <desc />
              <defs />
              <g
                fill="none"
                fillRule="evenodd"
                id="Page-1"
                stroke="none"
                strokeWidth="1"
              >
                <g
                  fill="#000000"
                  id="Core"
                  transform="translate(-131.000000, -5.000000)"
                >
                  <g id="add" transform="translate(131.000000, 5.000000)">
                    <path
                      d="M14,8 L8,8 L8,14 L6,14 L6,8 L0,8 L0,6 L6,6 L6,0 L8,0 L8,6 L14,6 L14,8 L14,8 Z"
                      id="Shape"
                    />
                  </g>
                </g>
              </g>
            </svg>
            <span className="pizza-item-add-button">Добавить</span>
            <i className="pizza-item-add-total">{count}</i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PizzaItem
