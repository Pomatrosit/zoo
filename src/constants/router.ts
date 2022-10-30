import { AccountTree, Apple } from '@mui/icons-material'
import LoginPage from '../pages/LoginPage'
import MainPage from '../pages/MainPage'

export const PUBLIC_ROUTES = [{ id: 1, path: '/login', Component: LoginPage }]

export const PRIVATE_ROUTES = [{ id: 1, path: '/', Component: MainPage }]

export const NAVIGATION = [
  {
    id: 1,
    path: '/',
    title: 'Главная страница',
    icon: AccountTree,
  },
  {
    id: 2,
    path: '/other',
    title: 'Другая страница',
    icon: Apple,
  },
]
