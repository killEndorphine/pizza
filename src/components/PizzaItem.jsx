import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, findItemCartSliceSelector } from '../redux/Slices/cartSlice'
import { Link } from 'react-router-dom'

const PizzaItem = ({ id, name, price, url, sizes, type }) => {
  const [activeIndex1, setActiveIndex1] = useState(0)
  const [activeIndex2, setActiveIndex2] = useState(0)
  const typeNames = ['Тонкое', 'Традиционное']

  const dispatch = useDispatch()
  const cartItem = useSelector(findItemCartSliceSelector(id))

  const addedCount = cartItem ? cartItem.count : 0

  const onClickAdd = () => {
    const item = {
      id,
      name,
      price,
      url,
      type: typeNames[activeIndex1],
      size: sizes[activeIndex2],
    }
    dispatch(addItem(item))
  }

  return (
    <div className="pizza-item-flex">
      <div className="pizza-item">
        <Link to={`/items/${id}`}>
          <img width="300px" src={url} className="pizza-img" alt="pizza" />
        </Link>
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
          <button onClick={onClickAdd} className="pizza-item-add" href="#">
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
            {addedCount > 0 && (
              <i className="pizza-item-add-total">{addedCount}</i>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default PizzaItem
