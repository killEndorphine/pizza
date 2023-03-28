import React from 'react'

const Sort = () => {
  return (
    <div className="main-sort">
      <svg
        className="sort-label"
        height="25"
        viewBox="0 0 48 48"
        width="25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.83 30.83l9.17-9.17 9.17 9.17 2.83-2.83-12-12-12 12z" />
        <path d="M0 0h48v48h-48z" fill="none" />
      </svg>
      <b style={{ marginRight: '10px' }}>Сортировка по:</b>
      <span>популярности</span>
    </div>
  )
}

export default Sort
