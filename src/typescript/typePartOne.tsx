import { configureStore, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { type } from 'os'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

// 1
function sum(a: number, b: number): number {
  return a + b
}
let sumOne = sum(1, 4)

// 2
let stringy: string = 'abc'

const number: number = 12

let isAuth: boolean = true

isAuth = false

let dual: number | string = 1 || '1' // | - или TS, || - или JS
dual = '2'
dual = 2

// 3
let massNumber: number[] = [1, 2, 3]

const massString: string[] = ['1', '2', '3']

let massNull: null[] = [null, null, null]

// 4
function sayHello(name: string, old?: number): string {
  return `Привет ${name}, тебе ${old || 0} лет`
}
const messageOne: string = sayHello('Макс', 20)
const messageTwo: string = sayHello('Макс')

// 5
const FullPizza: React.FC = () => {
  // гарантия возврата jsx разметки
  return <div>123</div>
}

// 6
const [string, setString] = useState<string>('')

const [numbers, setNumbers] = useState<number>(0)

const [pizza2, setPizza2] = useState<{
  img: string
  title: string
  price: string
}>({
  img: '',
  title: '',
  price: '',
}) // объект

const [pizza3, setPizza3] = useState<{
  img: string
  title: string
  price: string
}>() // объект или undefined

//7
const { id } = useParams() // ненадо типизировать то что не принимает параметров

useEffect(() => {}) // не надо типизировать

//8 svg png import assets/@types/assets.d.ts
declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.png' {
  const content: any
  export default content
}

declare module '*.scss' {
  const content: any
  export default content
}

//tsconfig.json - применяем для всего проекта
'include': ["src", "src/@tyes"]

//9
//если данные вбиты в паре ключ-значение то тайпскрипт автоматом типизирует этот код

type SortListItem = {
  name: string
  sortProperty: string
}

const sortList1: {
  name: string
  sortProperty: string
}[] = [
  {name: 'по популярности -', sortProperty: 'rating'},
  {name: 'по популярности +', sortProperty: '-rating'},
  {name: 'по цене', sortProperty: 'price'},
  {name: 'по цене', sortProperty: '-price'},
]

// или

const sortList2: SortListItem[] = [
  {name: 'по популярности -', sortProperty: 'rating'},
  {name: 'по популярности +', sortProperty: '-rating'},
  {name: 'по цене', sortProperty: 'price'},
  {name: 'по цене', sortProperty: '-price'},
]

onClickItem(obj: SortListItem) {
  console.log(...)
}

sortList2.map((obj, index) => <li key={index} onclick={() => onClickItem(obj)}>...</li>)

//10 ref не должен быть undefined - или елемент или null
const sortRef1 = useRef<SVGSVGElement>(null)
const sortRef2 = useRef<HTMLDivElement>(null)

<svg ref={sortRef1}>...</svg>
<div ref={sortRef2}>...</div>

if(sortRef1.current) {
  sortRef1.current.focus()
}

sortRef1.current?.focus() // если нету то фокус не вызывай - оператор опциональной последовательности работает в объекте там запись пиздос большого сравнения - можно увижеть при конвертации тайпскрипта


//11 type - типизирует что угодно а вот объекты лучше типизировать интерфейсом
type CategoriesProps = {
  value: number
  onChangeCategory: (e: React.MouseEvent<HTMLDivElement>) => void // функция пришедшая от родителя ничего не возвращает и получающая event
  //onChangeCategoryTwo?: (index: number) => void 
  onChangeCategoryTwo?: React.MouseEventHandler<HTMLDivElement>  // сокращенно onChangeCategory
  sizes: number[]
}

const Categories: React.FC<CategoriesProps> = ({value, onChangeCategory, sizes, onChangeCategoryTwo}) => {
  // пропсы типизировались
  return (
    <div>...</div>
  )
}

//12 типизация библиотеки
npm i @types/lodash.debounce


//13
dispatch(
  // @ts-ignore - так нельзя делать (но так возможно - на время во время разработки)
  fetchPizzas({
    sortBy,
    order,
    category,
  })
)

const index: any = 1 // так тоже лучше не делать - но можно на время заткнуть ts


//14
const eventTake = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value) // эвент работающий через инпут
}

const onClickClear = (e: React.MouseEvent<SVGSVGElement>) => {
  console.log(e) // эвент работающий через клик по свг
}

//15
type PopupClick = MouseEvent & { path: Node[]} // типизация для path

const HandleClickOutSide1 = (e: PopupClick) => {
  if(!e.path.includes(sortRef.current))
}
// иначе
const HandleClickOutSide2 = (e: PopupClick) => {
  if(sortRef.current && !e.path.includes(sortRef.current)) {
    setOpen(false)
  }
}
// иначе
const HandleClickOutSide3 = (e: MouseEvent) => {
  const _e = e as MouseEvent & {path: Node[]}
  if(sortRef.current && !_e.path.includes(sortRef.current)) {
    setOpen(false)
  }
}
// иначе
const HandleClickOutSide4 = (e: PopupClick) => {
  
  if(sortRef.current && !e.path.includes(sortRef.current)) {
    setOpen(false)
  }
}

//16 interface делает тоже самое как и type - чаще всего интерфейсом типизируют state
type CartItem = {
  id: string
  title: string
  price: number
  imgUrl: string
  type: number
  size: number
  count: number
}

//type Numbers = number

interface IInitialState { // когда большая вложенность типов - интерфейс, мало - type
  //totalPrice: Numbers;
  totalPrice: number
  items: CartItem[]
}

const initialState: IInitialState = {
  totalPrice: 0,
  items: []
}

// мы дали эти типы и все что внутри слайса все впитало и типизировало



//17 типизация хранилища и селекторов
export type RootState = ReturnType<typeof store.getState>

export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizza
  }
})

export const selectFilter = (state: RootState) => state.filter
export const selectSort = (state: RootState) => state.filter.sort


// 18 типизация по конкретно принимаемым значениям

type Sort = {
  name: string
  sortProperty: 'rating' | 'title' | 'price' | '-rating' | '-title' | '-price'
}

// 19 типизация синхронного экшена
addItem(state, action: PayloadAction<CartItem>) {
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

//20 thunk
type fetchItemsArgs1 = {
  order: string
  sortBy: string
  category: string
  search: string
  current: string
}

//или

type fetchItemsArgs = Record<string, string> // все ключ значения у типа - стринг

export const fetchItems1 = createAsyncThunk(
  'filterSort/fetchItemsStatus',
  async (params: fetchItemsArgs) => {
    const { order, sortBy, category, search, current } = params
    const { data } = await axios.get(
      `https://63735446348e947299093a2b.mockapi.io/items?page=${current}&limit=4&${category}${search}&sortBy=${sortBy}&order=${order}`
    )
    return data
  }
)

//или

export const fetchItems2 = createAsyncThunk(
  'filterSort/fetchItemsStatus',
  async (params: Record<string, string>) => {
    const { order, sortBy, category, search, current } = params
    const { data } = await axios.get(
      `https://63735446348e947299093a2b.mockapi.io/items?page=${current}&limit=4&${category}${search}&sortBy=${sortBy}&order=${order}`
    )
    return data as CartItem[]
  }
)

//или

export const fetchItems3 = createAsyncThunk<Pizza[], Record<string, string>>(
  'filterSort/fetchItemsStatus',
  async (params) => {
    const { order, sortBy, category, search, current } = params
    const { data } = await axios.get<Pizza[]>(
      `https://63735446348e947299093a2b.mockapi.io/items?page=${current}&limit=4&${category}${search}&sortBy=${sortBy}&order=${order}`
    )
    return data
  }
)

//21 extraReducers
extraReducers: (builder) => {
  builder.addCase(fetchItems.pending, (state, action) => {
    state.status = Status.LOADING
    state.items = []
  })
  builder.addCase(fetchItems.fulfilled, (state, action) => {
    state.items = action.payload
    state.status = Status.COMPLETED
  })
  builder.addCase(fetchItems.rejected, (state, action) => {
    state.status = Status.ERROR
    state.items = []
  })
}

//22 enum
enum Status {
  LOADING = 'loading',
  COMPLETED = 'completed',
  ERROR = 'error',
}

interface PizzaSliceState {
  items: Pizza[]
  status: Status
  //status: 'loading' | 'completed' | 'error' - выше аналог
}

//23 dispatch

export const useAppDispatch = () => useDispatch<typeof store.dispatch>()

const dispatch = useAppDispatch(...) // уже на месте не от хука а от новой нашей функции

// после такой конструкции можно добавлять асинхронный запрос во внутрь!!!!