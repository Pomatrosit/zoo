import {
  IUser,
  useGetAllUsersQuery,
  useSearchUserMutation,
} from '../store/user/user.api'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import {
  Box,
  Button,
  FormControl,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import Loader from './Loader'
import { Controller, useForm } from 'react-hook-form'
import { useGetJobsQuery } from '../store/job/job.api'

const Users = () => {
  const { isLoading, error, data, isFetching } = useGetAllUsersQuery()

  const { data: jobs } = useGetJobsQuery()

  const { register, handleSubmit, reset, control } = useForm<IUser>()

  const [search, { isLoading: searchLoading, error: searchError }] =
    useSearchUserMutation()

  const onSubmit = (data: IUser) => {
    const payload = {
      user_id: data.user_id ? +data.user_id : null,
      name: data.name ? data.name : null,
      age: data.age ? +data.age : null,
      first_passport: data.first_passport ? data.first_passport : null,
      second_passport: data.second_passport ? data.second_passport : null,
      address: data.address ? data.address : null,
      job_id: data.job_id ? +data.job_id : null,
      second_name: data.second_name ? data.second_name : null,
      gender: data.gender ? data.gender : null,
    }
    console.log(payload)
    search(payload)
  }

  const resetSearch = () => {
    reset()
    handleSubmit(onSubmit)()
  }

  const rows = data
  return (
    <>
      <Typography variant="h3" color="grey.600" mb={3}>
        Пользователи
      </Typography>

      <Paper elevation={3}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box p={5}>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <TextField
                  label="ID"
                  fullWidth
                  size="small"
                  {...register('user_id')}
                  type="number"
                ></TextField>{' '}
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Имя"
                  fullWidth
                  size="small"
                  {...register('name')}
                ></TextField>{' '}
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Фамилия"
                  fullWidth
                  size="small"
                  {...register('second_name')}
                ></TextField>{' '}
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Возраст"
                  fullWidth
                  size="small"
                  {...register('age')}
                  type="number"
                ></TextField>{' '}
              </Grid>
              <Grid item xs={3}>
                <FormControl fullWidth>
                  <Controller
                    name="job_id"
                    defaultValue=""
                    control={control}
                    render={({ field }) => (
                      <TextField
                        size="small"
                        {...field}
                        select
                        label="Должность"
                      >
                        <MenuItem key="-1" value="">
                          Не выбрано
                        </MenuItem>
                        {jobs &&
                          jobs.map((job) => (
                            <MenuItem key={job.job_id} value={job.job_id}>
                              {job.name}
                            </MenuItem>
                          ))}
                      </TextField>
                    )}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Серия паспорта"
                  fullWidth
                  size="small"
                  {...register('first_passport')}
                ></TextField>{' '}
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Номер паспорта"
                  fullWidth
                  size="small"
                  {...register('second_passport')}
                ></TextField>{' '}
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Адрес"
                  fullWidth
                  size="small"
                  {...register('address')}
                ></TextField>{' '}
              </Grid>
              <Grid item xs={3}>
                <FormControl fullWidth>
                  <Controller
                    name="gender"
                    defaultValue=""
                    control={control}
                    render={({ field }) => (
                      <TextField size="small" {...field} select label="Пол">
                        <MenuItem key="-1" value="0">
                          Не выбрано
                        </MenuItem>
                        <MenuItem value="m">Мужской</MenuItem>
                        <MenuItem value="f">Женский</MenuItem>
                      </TextField>
                    )}
                  />
                </FormControl>
              </Grid>
            </Grid>

            <Stack
              alignItems="center"
              justifyContent="center"
              direction="row"
              mt={3}
              spacing={2}
            >
              <Button variant="outlined" type="submit" disabled={searchLoading}>
                Искать
              </Button>

              <Button
                variant="outlined"
                disabled={searchLoading}
                onClick={resetSearch}
              >
                Сбросить
              </Button>
            </Stack>
          </Box>
        </form>
      </Paper>

      <Box mt={5}>
        <Paper elevation={3}>
          <Box p={3}>
            {isLoading || searchLoading || isFetching ? (
              <Loader />
            ) : error ? (
              <Typography variant="h6" color="error">
                Произошла ошибка
              </Typography>
            ) : (
              <Table
                sx={{ minWidth: 650 }}
                aria-label="simple table"
                size="small"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Имя</TableCell>
                    <TableCell>Фамилия</TableCell>
                    <TableCell>Возраст</TableCell>
                    <TableCell>Должность</TableCell>
                    <TableCell>Серия Паспорта</TableCell>
                    <TableCell>Номер Паспорта</TableCell>
                    <TableCell>Адрес</TableCell>
                    <TableCell>Пол</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows &&
                    rows.map((row) => (
                      <TableRow
                        key={row.user_id}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          <Typography
                            variant="body1"
                            color="grey.900"
                            fontWeight={700}
                          >
                            {row.user_id}
                          </Typography>
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {row.second_name}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {row.age}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {row.job_name}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {row.first_passport}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {row.second_passport}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {row.address}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {row.gender === 'm' ? 'Мужской' : 'Женский'}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            )}
          </Box>
        </Paper>
      </Box>
    </>
  )
}

export default Users
