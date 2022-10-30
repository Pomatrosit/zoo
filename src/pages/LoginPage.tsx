import Login from '../components/Login'
import { usePageTitle } from '../hooks/usePageTitle'

const LoginPage = () => {
  usePageTitle('Авторизация')
  return (
    <div>
      <Login />
    </div>
  )
}

export default LoginPage
