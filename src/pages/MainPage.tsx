import { Box, Paper, Typography } from '@mui/material'
import { useAppSelector } from '../hooks/redux'
import { usePageTitle } from '../hooks/usePageTitle'

const MainPage = () => {
  const user = useAppSelector((state) => state.user)
  console.log(user)
  usePageTitle('Главная')
  return (
    <Paper
      elevation={3}
      sx={{ width: '60%', margin: '0 auto', padding: '20px' }}
    >
      <Box p={2}>
        <Typography variant="body1" color="initial">
          Имя: {user?.name}
        </Typography>
        <Typography variant="body1" color="initial">
          Фамилия: {user?.second_name}
        </Typography>
        <Typography variant="body1" color="initial">
          Возраст: {user?.age}
        </Typography>
        <Typography variant="body1" color="initial">
          Адрес: {user?.address}
        </Typography>
        <Typography variant="body1" color="initial">
          Пол: {user?.gender}
        </Typography>
        <Typography variant="body1" color="initial">
          Паспорт: {user?.first_passport} {user?.second_passport}
        </Typography>
      </Box>
    </Paper>
  )
}

export default MainPage
