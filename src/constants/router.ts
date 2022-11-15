import { AccountTree, Apple, Person, Work } from '@mui/icons-material'
import JobPage from '../pages/JobPage'
import LoginPage from '../pages/LoginPage'
import MainPage from '../pages/MainPage'
import UserPage from '../pages/UserPage'

export const PUBLIC_ROUTES = [{ id: 1, path: '/login', Component: LoginPage }]

export const PRIVATE_ROUTES = [
  { id: 1, path: '/', Component: MainPage },
  { id: 2, path: '/users', Component: UserPage },
  { id: 3, path: '/jobs', Component: JobPage },
]

export const NAVIGATION = [
  {
    id: 1,
    path: '/',
    title: 'Главная страница',
    icon: AccountTree,
  },
  {
    id: 2,
    path: '/users',
    title: 'Пользователи',
    icon: Person,
  },
  {
    id: 3,
    path: '/jobs',
    title: 'Должности',
    icon: Work,
  },
]
