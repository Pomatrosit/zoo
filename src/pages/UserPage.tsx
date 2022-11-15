import Users from '../components/Users'
import { usePageTitle } from '../hooks/usePageTitle'

const UserPage = () => {
  usePageTitle('Пользователи')
  return <Users />
}

export default UserPage
