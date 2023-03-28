import React, { useState } from 'react'

const Sort = ({ selected, setSelected }) => {
  const [open, setOpen] = useState(false)
  //const [selected, setSelected] = useState(0)

  //const list = ['популярности', 'цене', 'алфавиту']
  const list = [
    { name: 'популярности(по убыванию)', sortProperty: 'rating' },
    { name: 'популярности(по возрастанию)', sortProperty: '-rating' },
    { name: 'цене(по убыванию)', sortProperty: 'price' },
    { name: 'цене(по возрастанию)', sortProperty: '-price' },
    { name: 'алфавиту(по убыванию)', sortProperty: 'name' },
    { name: 'алфавиту(по возрастанию)', sortProperty: '-name' },
  ]

  const onClickListItem = (obj) => {
    setSelected(obj)
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
          {selected.name}
        </span>
      </div>
      {open && (
        <div className="main-sort-popup">
          <ul>
            {list.map((type, i) => (
              <li
                onClick={() => onClickListItem(type)}
                key={i}
                className={
                  selected.sortProperty === type.sortProperty
                    ? 'active-popup'
                    : ''
                }
              >
                {type.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default Sort
