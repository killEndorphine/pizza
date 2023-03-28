import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem, minusItem, removeItem } from '../redux/Slices/cartSlice'

const CartItem = ({ id, name, price, count, url, type, size }) => {
  const dispatch = useDispatch()

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      })
    )
  }

  const onClickMinus = () => {
    dispatch(minusItem(id))
  }

  const onClickRemove = () => {
    if (window.confirm('Ты правда хочешь удалить питсу?')) {
      dispatch(removeItem(id))
    }
  }

  return (
    <>
      <div className="cart-item">
        <img alt="питса" className="cart-item-img" src={url} />
        <div className="cart-item-info">
          <h3 className="cart-item-name">{name}</h3>
          <p className="cart-item-discription">
            {type}, {size} см
          </p>
        </div>
        <div className="cart-item-operation">
          <button onClick={onClickMinus} className="cart-item-operation-button">
            -
          </button>
          <span className="cart-item-operation-total">{count}</span>
          <button onClick={onClickPlus} className="cart-item-operation-button">
            +
          </button>
        </div>
        <div className="cart-item-total-price">{price * count} Р</div>
        <button onClick={onClickRemove} className="cart-item-delete">
          x
        </button>
      </div>
      <hr className="hr" />
    </>
  )
}

export default CartItem
