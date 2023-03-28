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

// 3 open && element отображение окон всплывающих по клику
const Sort1 = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="main-sort">
        <b style={{ marginRight: '10px' }}>Сортировка по:</b>
        <span style={{ cursor: 'pointer' }} onClick={() => setOpen(!open)}>
          популярности
        </span>
      </div>

      {open && ( // так
        <div className="main-sort-popup">
          <ul>
            <li className="active">популярности</li>
            <li>цене</li>
            <li>алфавиту</li>
          </ul>
        </div>
      )}

      {open ? ( // или так
        <div className="main-sort-popup">
          <ul>
            <li className="active">популярности</li>
            <li>цене</li>
            <li>алфавиту</li>
          </ul>
        </div>
      ) : null}
    </>
  )
}

// 4 выбранная опция заносится в другой блок(выбор вида сортировки)
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

// 5 fetch запросы
function App() {
  let [items, setItems] = useState([])

  useEffect(() => {
    // способ получения тренировочный!
    fetch('https://63735446348e947299093a2b.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => setItems(arr))
  }, [])

  return <div>{items.map((item) => {})}</div>
}

// 6 Skeleton
const PizzaSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={278}
    height={472}
    viewBox="0 0 278 472"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="130" cy="130" r="125" />
    <rect x="20" y="275" rx="0" ry="0" width="230" height="30" />
    <rect x="5" y="317" rx="0" ry="0" width="280" height="105" />
    <rect x="5" y="430" rx="0" ry="0" width="85" height="40" />
    <rect x="145" y="430" rx="0" ry="0" width="130" height="47" />
  </ContentLoader>
)

// 7 загрузка и фетч запрос
useEffect(() => {
  // способ получения тренировочный!
  setIsLoading(true)
  fetch('https://63735446348e947299093a2b.mockapi.io/items')
    .then((res) => res.json())
    .then((arr) => {
      setItems(arr)
      setIsLoading(false)
    })
}, [])

// 8 подгрузка скелетонов и реальных питсов
{
  isLoading
    ? [...new Array(8)].map((_, index) => <PizzaSkeleton key={index} />)
    : items.map((obj) => <PizzaItem key={obj.key} {...obj} />)
}

// 9 css module
import styles from '../NotFound/notFound.module.css'

const NotFound = () => {
  return (
    <div className={styles.notfound}>
      <NotFoundBlock />
      <button className={styles.notfoundbutton}>Вернуться</button>
    </div>
  )
}
// .notfound {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// }

// 10 routers - * если ни 1 из адресов не совпал - то будет редирект на *
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

// <Link to="/">Ссылка на Home</Link>
// <Link to="/card">Ссылка на Card</Link>

// 11 adaptation css + grid
.pizza-items {
  /* display: flex;
  flex-wrap: wrap; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
}
@media (max-width: 950px) {
  .pizza-items {
    grid-template-columns: repeat(3, 1fr);
    // или какое другое св-во меняется
  }
}
