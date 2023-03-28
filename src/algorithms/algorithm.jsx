// 1 map и activeIndex
const Categories = ({ array }) => {
  // const array = [0, 1]- может прийти извне если опции будут отличаться у конкретных объектов
  const names = ['тонкое', 'традиционное']
  const [activeIndex2, setActiveIndex2] = useState(0)

  const arr = ['Все', 'Мясные', 'Вегитарианские', 'Гриль', 'Закрытые']
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <nav className="nav-main">
      <ul className="ul-main">
        {arr.map(
          (
            item,
            index // 1 фиксированный список
          ) => (
            <li
              key={index}
              className={activeIndex == index ? 'li-main li-active' : 'li-main'}
              onClick={() => setActiveIndex(index)}
            >
              {item}
            </li>
          )
        )}
      </ul>

      <ul className="ul-main">
        {array.map(
          (
            item,
            index // 2 список из изменяющихся опций
          ) => (
            <li
              key={index}
              className={
                activeIndex2 == index ? 'li-main li-active' : 'li-main'
              }
              onClick={() => setActiveIndex2(index)}
            >
              {names[item]}
            </li>
          )
        )}
      </ul>
    </nav>
  )
}

// 2 json файлы
;[
  {
    id: 0,
    name: 'Пепперони с сыром',
    type: [0, 1],
    sizes: [26, 30, 40],
    price: 803,
    category: 0,
    rating: 4,
    url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
  },
]
