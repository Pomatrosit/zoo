import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Alert,
} from '@mui/material'
import { Stack } from '@mui/system'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginValidationSchema } from '../helpers/yup'
import { useRegisterOwnerMutation } from '../store/auth/auth.api'
import { useState } from 'react'
import { useAppDispatch } from '../hooks/redux'
import { login } from '../store/auth/auth.slice'
import { setUserData } from '../store/main/main.slice'

const styles = {
  formWrapper: {
    border: '',
    width: '500px',
  },
  form: {
    padding: '32px',
  },
  logo: {
    height: 200,
    marginTop: -50,
  },
}

interface IForm {
  login: string
  password: string
}

const Login = () => {
  const [trigger, { isLoading, error: loginError, data: loginResponse }] =
    useRegisterOwnerMutation()

  const {
    register: getFieldProps,
    formState: { errors },
    handleSubmit,
  } = useForm<IForm>({
    resolver: yupResolver(loginValidationSchema),
  })

  const dispatch = useAppDispatch()

  const onSubmit: SubmitHandler<IForm> = (data) => {
    register(data)
      .unwrap()
      .then((response) => {
        localStorage.setItem('token', response.token)
        dispatch(login())
      })
  }

  const [passwordVisible, setPassportVisible] = useState<boolean>(false)

  const changePasswordVisibility = () => {
    setPassportVisible((prev: boolean) => !prev)
  }

  return (
    <>
      <Stack justifyContent="center" alignItems="center">
        <Box sx={styles.formWrapper}>
          <Paper elevation={1} sx={styles.form}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box mb={5}>
                <Typography variant="h4" align="center" color="grey.800">
                  Авторизация
                </Typography>
              </Box>
              <Box mb={2}>
                <TextField
                  label="Имя пользователя"
                  fullWidth
                  color="secondary"
                  {...getFieldProps('login')}
                  error={!!errors.login}
                  helperText={errors.login ? errors.login?.message : null}
                />
              </Box>

              <Box mb={2}>
                <TextField
                  {...getFieldProps('password')}
                  error={!!errors.password}
                  helperText={errors.password ? errors.password?.message : null}
                  label="Пароль"
                  fullWidth
                  color="secondary"
                  type={passwordVisible ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={changePasswordVisibility}
                          edge="end"
                        >
                          {passwordVisible ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              {loginError && (
                <div>
                  {'status' in loginError ? (
                    <>
                      {loginError.status === 400 ? (
                        <Alert severity="error">
                          Неверный логин или пароль
                        </Alert>
                      ) : (
                        <Alert severity="error">Что-то пошло не так</Alert>
                      )}{' '}
                    </>
                  ) : null}
                </div>
              )}

              <Stack alignItems="center" justifyContent="center" mt={4} mb={4}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  fullWidth
                  type="submit"
                  disabled={isLoading}
                >
                  Войти
                </Button>
              </Stack>
            </form>
          </Paper>
        </Box>
      </Stack>
    </>
  )
}

export default Login
