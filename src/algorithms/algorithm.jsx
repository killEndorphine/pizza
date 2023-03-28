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

<Link to="/">Ссылка на Home</Link>
<Link to="/card">Ссылка на Card</Link>

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

//12 изменение способа сортировки
const [selected, setSelected] = useState({
  name: 'популярности',
  sortProperty: 'rating',
})

<Sort selected={selected} setSelected={setSelected} />

const list = [
  { name: 'популярности', sortProperty: 'rating' },
  { name: 'цене', sortProperty: 'price' },
  { name: 'алфавиту', sortProperty: 'name' },
]

<span style={{ cursor: 'pointer' }} onClick={() => setOpen(!open)}>
  {selected.name}
</span>

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

//13 new fetch
useEffect(() => {
  setIsLoading(true)
  fetch(
    `https://63735446348e947299093a2b.mockapi.io/items?${
      activeIndex > 0 ? `category=${activeIndex}` : ''
    }&sortBy=${selected.sortProperty}&order=desc`
  )
    .then((res) => res.json())
    .then((arr) => {
      setItems(arr)
      setIsLoading(false)
    })
  window.scrollTo(0, 0) // перевести вверх окно
}, [activeIndex, selected])

//14 изменение сортировки 2.0
const list = [
  { name: 'популярности(по убыванию)', sortProperty: 'rating' },
  { name: 'популярности(по возрастанию)', sortProperty: '-rating' },
  { name: 'цене(по убыванию)', sortProperty: 'price' },
  { name: 'цене(по возрастанию)', sortProperty: '-price' },
  { name: 'алфавиту(по убыванию)', sortProperty: 'name' },
  { name: 'алфавиту(по возрастанию)', sortProperty: '-name' },
]

//15 fetch 2.0
const [selected, setSelected] = useState({
  name: 'популярности(по убыванию)',
  sortProperty: 'rating',
})
const [activeIndex, setActiveIndex] = useState(0)

useEffect(() => {
  const order = selected.sortProperty.includes('-') ? 'asc' : 'desc' //убывание возрастание
  const sortBy = selected.sortProperty.replace('-', '') // sort минус убрали
  const category = activeIndex > 0 ? `category=${activeIndex}` : '' //filter

  setIsLoading(true)
  fetch(
    `https://63735446348e947299093a2b.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`
  )
    .then((res) => res.json())
    .then((arr) => {
      setItems(arr)
      setIsLoading(false)
    })
  window.scrollTo(0, 0) // перевести вверх окно
}, [activeIndex, selected])

// 16 контролируемый инпут 
<input
  value={searchValue}
  onChange={(e) => setSearchValue(e.target.value)}
  placeholder="Поиск питсов..."
  className={style.input}
/>

// 17 перед мапом фильтруем по названиям для статичых массивов
const pizzas = items
    .filter((obj) => {
      if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
        return true
      }
      return false
    })
    .map((obj) => <PizzaItem key={obj.id} {...obj} />)

{isLoading
  ? [...new Array(8)].map((_, index) => <PizzaSkeleton key={index} />)
  : pizzas}    

// 18 useEffect 3.0 - фильтрация через запрос поиска
useEffect(() => {
  const order = selected.sortProperty.includes('-') ? 'asc' : 'desc'
  const sortBy = selected.sortProperty.replace('-', '')
  const category = activeIndex > 0 ? `category=${activeIndex}` : ''
  const search = searchValue ? `search=${searchValue}` : ''

  setIsLoading(true)
  fetch(
    `https://63735446348e947299093a2b.mockapi.io/items?${category}${search}&sortBy=${sortBy}&order=${order}`
  )
    .then((res) => res.json())
    .then((arr) => {
      setItems(arr)
      setIsLoading(false)
    })
  window.scrollTo(0, 0) // перевести вверх окно
}, [activeIndex, selected, searchValue])

// 19 scss pagination
.root {
  display: flex;
  li {
    background-color: rgb(136, 136, 136);
    list-style-type: none;
    margin: 3px;
    border: 1px solid black;
    color: white;
    padding: 5px 10px;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      background-color: black;
    }
    &:active {
      opacity: 0.5;
    }
  }
  :global {
    .selected { // если класс создает библиотека а модули не дают на прямую к ним обратиться - этот способ подойдет!
      background-color: black;
    }
  }
}

// 20 pagination
import ReactPaginate from 'react-paginate'
import style from './Pagination.module.scss'

const Pagination = ({ onChangePage }) => {
  return (
    <ReactPaginate
      className={style.root}
      breakLabel=""
      nextLabel=">"
      onPageChange={(e) => onChangePage(e.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  )
}

export default Pagination

// 21 new fetch
const [currentPage, setCurrentPage] = useState(1)

useEffect(() => {
  const order = selected.sortProperty.includes('-') ? 'asc' : 'desc'
  const sortBy = selected.sortProperty.replace('-', '')
  const category = activeIndex > 0 ? `category=${activeIndex}` : ''
  const search = searchValue ? `search=${searchValue}` : ''

  setIsLoading(true)
  fetch(
    `https://63735446348e947299093a2b.mockapi.io/items?page=${currentPage}&limit=4&${category}${search}&sortBy=${sortBy}&order=${order}`
  )
    .then((res) => res.json())
    .then((arr) => {
      setItems(arr)
      setIsLoading(false)
    })
  window.scrollTo(0, 0) // перевести вверх окно
}, [activeIndex, selected, searchValue, currentPage])

<Pagination onChangePage={(number) => setCurrentPage(number)} />

// 22 context
export const SearchContext = React.createContext('')

const App = () => {
  const [searchValue, setSearchValue] = useState('')
  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <Header />
      <Home />
      <Footer />
    </SearchContext.Provider>
  )
}

import { SearchContext } from '../App'

const Home = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext)
  return <div onClick={(e) => setSearchValue(e.target.value)}>{searchValue}</div>
}

import { SearchContext } from '../App'

const Header = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext)
  return <div onClick={(e) => setSearchValue(e.target.value)}>{searchValue}</div>
}

//23 redux
import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './Slices/filterSlice'

export const store = configureStore({
  reducer: {
    filterSlice,
  },
})

//23.1 provider
import { store } from './redux/store'
import { Provider } from 'react-redux'

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

//24 slice 1.0
import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  activeIndex: 0,
  selected: {
    name: 'популярности(по убыванию)',
    sortProperty: 'rating',
  },
}
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveIndex(state, action) {
      state.activeIndex = action.payload
    },
  },
})
export const { setActiveIndex } = filterSlice.actions
export default filterSlice.reducer

//25 Dispatch
import { useDispatch, useSelector } from 'react-redux'
import { setActiveIndex } from '../redux/Slices/homeSlice'
const activeIndex = useSelector((state) => state.filterSlice.activeIndex)
const dispatch = useDispatch()
const setCategoryId = (id) => {
  dispatch(setActiveIndex(id))
}
<Categories activeIndex={activeIndex} setActiveIndex={setCategoryId} />

//26 slice 2.0
import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  activeIndex: 0,
  selected: {
    name: 'популярности(по убыванию)',
    sortProperty: 'rating',
  },
}
const filterSortSlice = createSlice({
  name: 'filterSort',
  initialState,
  reducers: {
    setActiveIndex(state, action) {
      state.activeIndex = action.payload
    },
    setSelected(state, action) {
      state.selected = action.payload
    },
  },
})
export const { setActiveIndex, setSelected } = filterSortSlice.actions
export default filterSortSlice.reducer

//27 Dispatch 2.0
import { useDispatch, useSelector } from 'react-redux'
import { setActiveIndex, setSelected } from '../redux/Slices/homeSlice'
const filterSortSlice = useSelector((state) => state.filterSortSlice)
const dispatch = useDispatch()

const setCategoryId = (id) => {
  dispatch(setActiveIndex(id))
}

const setSortSelected = (obj) => {
  dispatch(setSelected(obj))
}
// ну и в useEffect поменялись зависимости от filterSortSlice
<Categories
  activeIndex={filterSortSlice.activeIndex}
  setActiveIndex={setCategoryId}
/>
<Sort
  selected={filterSortSlice.selected}
  setSelected={setSortSelected}
/>


//28 axios
axios
  .get(
    `https://63735446348e947299093a2b.mockapi.io/items?page=${currentPage}&limit=4&${category}${search}&sortBy=${sortBy}&order=${order}`
  )
  .then((res) => {
    setItems(res.data)
    setIsLoading(false)
})

//29 ref
const inputRef = useRef()

const onClickClear = () => {
  setSearchValue('')
  inputRef.current.focus()
}

<input ref={inputRef} />

<svg onClick={onClickClear}></svg>

//30 закрытие попапа через любое место в приложении + удаление эвента после unmount
const Sort = ({ selected, setSelected }) => {
  const sortRef = useRef()
  useEffect(() => {
    const handleClickOutside = (event) => {
      let path = event.path || (event.composedPath && event.composedPath())
      if (!path.includes(sortRef.current)) {
        setOpen(false)
      }
    }
    document.body.addEventListener('click', handleClickOutside)
    return () => {
      //Unmount прошел
      document.body.removeEventListener('click', handleClickOutside)
    }
  }, [])
  return {
    <div ref={sortRef} className="main-main-sort">...</div>
  }
}

//31 addItem

const initialState = {
  total: 0,
  items: [],
  totalPrice: 0,
}
addItem(state, action) {
  const findItem = state.items.find((obj) => obj.id === action.payload.id)
  if (findItem) {
    findItem.count++
  } else {
    state.items.push({ ...action.payload, count: 1 })
  }
  state.totalPrice = state.items.reduce((sum, obj) => {
    return obj.price * obj.count + sum
  }, 0)
  state.total = state.items.reduce((sum, obj) => {
    return obj.count + sum
  }, 0)
}

const PizzaItem = ({ id, name, price, url, sizes, type }) => {
  const dispatch = useDispatch()
  const cartItem = useSelector((state) =>
    state.cartSlice.items.find((obj) => obj.id === id)
  )
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
  const addedCount = cartItem ? cartItem.count : 0
  return (
    {addedCount > 0 && (
      <i className="pizza-item-add-total">{addedCount}</i>
    )}
    <button onClick={onClickAdd} className="pizza-item-add" href="#"></button>
  )
}

function Header() {
  const { total, totalPrice } = useSelector((state) => state.cartSlice)
  return (
    <span className="basket-total-price">{totalPrice} p</span>
    <span className="basket-total">{total}</span>
  )
}

const CartItem = ({ id, name, price, count, url, type, size }) => {
  const dispatch = useDispatch() 
  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      })
    )
  }
  return (
    <button onClick={onClickPlus} className="cart-item-operation-button">+</button>
  )
}

// 32 minusItem
minusItem(state, action) {
  const findItem = state.items.find((obj) => obj.id === action.payload)
  if (findItem.count > 1) {
    findItem.count--
  } else {
    state.items = state.items.filter((obj) => obj !== findItem)
  }
  state.totalPrice = state.items.reduce((sum, obj) => {
    return obj.price * obj.count + sum
  }, 0)
  state.total = state.items.reduce((sum, obj) => {
    return obj.count + sum
  }, 0)
}

const CartItem = ({ id, name, price, count, url, type, size }) => {
  const dispatch = useDispatch()
  const onClickMinus = () => {
    dispatch(minusItem(id))
  }
  return (
    <button onClick={onClickMinus} className="cart-item-operation-button">-</button>
  )
}

//33 removeItem
removeItem(state, action) {
  state.items = state.items.filter((obj) => obj.id !== action.payload)
  state.totalPrice = state.items.reduce((sum, obj) => {
    return obj.price * obj.count + sum
  }, 0)
  state.total = state.items.reduce((sum, obj) => {
    return obj.count + sum
  }, 0)
}

const CartItem = ({ id, name, price, count, url, type, size }) => {
  const dispatch = useDispatch()
  const onClickRemove = () => {
    if (window.confirm('Ты правда хочешь удалить питсу?')) {
      dispatch(removeItem(id))
    }
  }
  return (
    <button onClick={onClickRemove} className="cart-item-delete">
      x
    </button>
  )
}

//34 clearItems
clearItems(state) {
  state.items = []
  state.totalPrice = 0
  state.total = 0
}

const Cart = () => {
  const { totalPrice, items, total } = useSelector((state) => state.cartSlice)
  const dispatch = useDispatch()
  const onClickClear = () => {
    if (window.confirm('Очистить корзину?')) {
      dispatch(clearItems())
    }
  }
  return (
    <div onClick={onClickClear} className="cart-clear">Очистить корзину</div>
  )
}

//35 EmptyCart
const Cart = () => {
  const { totalPrice, items, total } = useSelector((state) => state.cartSlice)
  if (!totalPrice) {
    return <EmptyCart />
  }
  return (
    <div>...</div>
  )
}

//36 try catch async await
try {
  dispatch(setIsLoading(true))
  const call = async () => {
    const res = await axios.get(
      `https://63735446348e947299093a2b.mockapi.io/items?page=${homeSlice.currentPage}&limit=4&${category}${search}&sortBy=${sortBy}&order=${order}`
    )
    dispatch(setItems(res.data))
    dispatch(setIsLoading(false))
  }
  call()
} catch (error) {
  console.log(error)
  dispatch(setIsLoading(false))
} finally {
  dispatch(setIsLoading(false))
}

// 37 createAsyncThunk
export const fetchItems = createAsyncThunk(
  'filterSort/fetchItemsStatus',
  async (params) => {
    const { order, sortBy, category, search, current } = params
    const { data } = await axios.get(
      `https://63735446348e947299093a2b.mockapi.io/items?page=${current}&limit=4&${category}${search}&sortBy=${sortBy}&order=${order}`
    )
    return data
  }
)

extraReducers: {
  [fetchItems.pending]: (state) => {
    state.status = 'loading'
    state.items = []
  },
  [fetchItems.fulfilled]: (state, action) => {
    state.items = action.payload
    state.status = 'succes'
  },
  [fetchItems.rejected]: (state) => {
    state.status = 'error'
    state.items = []
  },
},

const Home = () => {
  const { searchValue } = React.useContext(SearchContext)

  const { selected, activeIndex, currentPage, items, status } = useSelector(
    (state) => state.homeSlice
  )
  const dispatch = useDispatch()

  useEffect(() => {
    const order = selected.sortProperty.includes('-') ? 'asc' : 'desc'
    const sortBy = selected.sortProperty.replace('-', '')
    const category = activeIndex > 0 ? `category=${activeIndex}` : ''
    const search = searchValue ? `search=${searchValue}` : ''
    const current = currentPage
    dispatch(
      fetchItems({
        order,
        sortBy,
        category,
        search,
        current,
      })
    )
  }, [activeIndex, selected, searchValue, currentPage]) 

  return (
    <main className="main">
      {status === 'error' ? (
        <ErrorPage />
      ) : (
        <>
          <div className="sort">
            <Categories
              activeIndex={activeIndex}
              setActiveIndex={setCategoryId}
            />
            <Sort selected={selected} setSelected={setSortSelected} />
          </div>
          <section className="section">
            <h1 style={{ marginBottom: '25px', textTransform: 'uppercase' }}>
              Все пиццы
            </h1>
            <div className="pizza-items">
              {status === 'loading'
                ? [...new Array(4)].map((_, index) => (
                    <PizzaSkeleton key={index} />
                  ))
                : items.map((obj) => <PizzaItem key={obj.id} {...obj} />)}
            </div>
            <Pagination
              onChangePage={(number) => dispatch(setCurrentPage(number))}
            />
          </section>
        </>
      )}
    </main>
  )
}

//38 алгоритм 
export const homeSliceSelector = (state) => state.homeSlice

const Home = () => {
  const { searchValue, selected, activeIndex, currentPage, items, status } =
    useSelector(homeSliceSelector)
    const dispatch = useDispatch()
    return (
      <div>...</div>
  )
}