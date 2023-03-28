import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart-header">
        <div className="cart-logo">
          <svg
            className="cart-logo-svg"
            height="40px"
            version="1.1"
            viewBox="0 0 20 20"
            width="40px"
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
                transform="translate(-212.000000, -422.000000)"
              >
                <g
                  id="shopping-cart"
                  transform="translate(212.000000, 422.000000)"
                >
                  <path
                    d="M6,16 C4.9,16 4,16.9 4,18 C4,19.1 4.9,20 6,20 C7.1,20 8,19.1 8,18 C8,16.9 7.1,16 6,16 L6,16 Z M0,0 L0,2 L2,2 L5.6,9.6 L4.2,12 C4.1,12.3 4,12.7 4,13 C4,14.1 4.9,15 6,15 L18,15 L18,13 L6.4,13 C6.3,13 6.2,12.9 6.2,12.8 L6.2,12.7 L7.1,11 L14.5,11 C15.3,11 15.9,10.6 16.2,10 L19.8,3.5 C20,3.3 20,3.2 20,3 C20,2.4 19.6,2 19,2 L4.2,2 L3.3,0 L0,0 L0,0 Z M16,16 C14.9,16 14,16.9 14,18 C14,19.1 14.9,20 16,20 C17.1,20 18,19.1 18,18 C18,16.9 17.1,16 16,16 L16,16 Z"
                    id="Shape"
                  />
                </g>
              </g>
            </g>
          </svg>
          <p className="cart-logo-name">Корзина</p>
        </div>
        <div className="cart-clear">
          <svg
            width="45px"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title />
            <g data-name="1" id="_1">
              <path d="M356.65,450H171.47a41,41,0,0,1-40.9-40.9V120.66a15,15,0,0,1,15-15h237a15,15,0,0,1,15,15V409.1A41,41,0,0,1,356.65,450ZM160.57,135.66V409.1a10.91,10.91,0,0,0,10.9,10.9H356.65a10.91,10.91,0,0,0,10.91-10.9V135.66Z" />
              <path d="M327.06,135.66h-126a15,15,0,0,1-15-15V93.4A44.79,44.79,0,0,1,230.8,48.67h66.52A44.79,44.79,0,0,1,342.06,93.4v27.26A15,15,0,0,1,327.06,135.66Zm-111-30h96V93.4a14.75,14.75,0,0,0-14.74-14.73H230.8A14.75,14.75,0,0,0,216.07,93.4Z" />
              <path d="M264.06,392.58a15,15,0,0,1-15-15V178.09a15,15,0,1,1,30,0V377.58A15,15,0,0,1,264.06,392.58Z" />
              <path d="M209.9,392.58a15,15,0,0,1-15-15V178.09a15,15,0,0,1,30,0V377.58A15,15,0,0,1,209.9,392.58Z" />
              <path d="M318.23,392.58a15,15,0,0,1-15-15V178.09a15,15,0,0,1,30,0V377.58A15,15,0,0,1,318.23,392.58Z" />
              <path d="M405.81,135.66H122.32a15,15,0,0,1,0-30H405.81a15,15,0,0,1,0,30Z" />
            </g>
          </svg>
          <p className="cart-clear-button">Очистить корзину</p>
        </div>
      </div>
      <hr className="hr" />

      <div className="cart-items">
        <div className="cart-item">
          <img
            className="cart-item-img"
            src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
          />
          <div className="cart-item-info">
            <h3 className="cart-item-name">Сырный цыпленок</h3>
            <p className="cart-item-discription">тонкое тесто, 26 см</p>
          </div>
          <div className="cart-item-operation">
            <button className="cart-item-operation-button">-</button>
            <span className="cart-item-operation-total">2</span>
            <button className="cart-item-operation-button">+</button>
          </div>
          <div className="cart-item-total-price">770 Р</div>
          <button className="cart-item-delete">x</button>
        </div>
        <hr className="hr" />

        <div className="cart-item">
          <img
            className="cart-item-img"
            src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
          />
          <div className="cart-item-info">
            <h3 className="cart-item-name">Сырный цыпленок</h3>
            <p className="cart-item-discription">тонкое тесто, 26 см</p>
          </div>
          <div className="cart-item-operation">
            <button className="cart-item-operation-button">-</button>
            <span className="cart-item-operation-total">2</span>
            <button className="cart-item-operation-button">+</button>
          </div>
          <div className="cart-item-total-price">770 Р</div>
          <button className="cart-item-delete">x</button>
        </div>
        <hr className="hr" />

        <div className="cart-item">
          <img
            className="cart-item-img"
            src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
          />
          <div className="cart-item-info">
            <h3 className="cart-item-name">Сырный цыпленок</h3>
            <p className="cart-item-discription">тонкое тесто, 26 см</p>
          </div>
          <div className="cart-item-operation">
            <button className="cart-item-operation-button">-</button>
            <span className="cart-item-operation-total">2</span>
            <button className="cart-item-operation-button">+</button>
          </div>
          <div className="cart-item-total-price">770 Р</div>
          <button className="cart-item-delete">x</button>
        </div>
        <hr className="hr" />
      </div>
      <div className="cart-footer">
        <div className="cart-footer-total">
          <div className="cart-footer-total-div">
            <p
              style={{
                fontSize: '25px',
                marginRight: '10px',
                fontWeight: 'bold',
              }}
            >
              Всего пицц:
            </p>
            <span style={{ fontSize: '25px', fontWeight: 'bold' }}>3 шт.</span>
          </div>
          <div className="cart-footer-total-div">
            <p
              style={{
                fontSize: '25px',
                marginRight: '10px',
                fontWeight: 'bold',
              }}
            >
              Сумма заказа:
            </p>
            <span style={{ fontSize: '25px', fontWeight: 'bold' }}>900 Р</span>
          </div>
        </div>
        <div className="cart-footer-buttons">
          <Link to="/" className="button-return">
            <svg
              height="48"
              viewBox="0 0 48 48"
              width="48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M30.83 32.67l-9.17-9.17 9.17-9.17-2.83-2.83-12 12 12 12z" />
              <path d="M0-.5h48v48h-48z" fill="none" />
            </svg>
            <p>Вернуться назад</p>
          </Link>
          <button className="button-pay">Оплатить сейчас</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
