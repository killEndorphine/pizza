import React, { useState } from 'react'

const PizzaItem = ({ title, price }) => {
  const [count, setCount] = useState(0)
  //let arr = ['20см','26см','30см']
  return (
    <div className="pizza-item">
      <img
        width="300px"
        src="https://avatars.mds.yandex.net/i?id=23733cb67648800c9be2781dfe3422d1a0524393-5222242-images-thumbs&n=13&exp=1"
        className="pizza-img"
        alt="pizza"
      />
      <h4 className="pizza-title">{title}</h4>
      <div className="pizza-options-top">
        <ul className="pizza-option-one">
          <li className="active">Тонкое</li>
          <li>Традиционное</li>
        </ul>
        <ul className="pizza-option-two">
          <li className="active">26 см.</li>
          <li>30 см.</li>
          <li>40 см.</li>
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
  )
}

export default PizzaItem
