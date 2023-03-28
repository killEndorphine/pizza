import React, { useState } from 'react'

const Sort = () => {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(0)

  const list = ['популярности', 'цене', 'алфавиту']
  const sortName = list[selected]

  const onClickListItem = (i) => {
    setSelected(i)
    setOpen(!open)
  }

  return (
    <>
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
        <span style={{ cursor: 'pointer' }} onClick={() => setOpen(!open)}>
          {sortName}
        </span>
      </div>
      {open && (
        <div className="main-sort-popup">
          <ul>
            {list.map((type, i) => (
              <li
                onClick={() => onClickListItem(i)}
                key={i}
                className={selected === i ? 'active-popup' : ''}
              >
                {type}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default Sort
