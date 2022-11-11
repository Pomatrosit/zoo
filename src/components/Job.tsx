import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Box, Typography } from '@mui/material'
import Loader from './Loader'
import { useGetJobsQuery } from '../store/job/job.api'

const Job = () => {
  const { isLoading, error, data } = useGetJobsQuery()
  const rows = data
  return (
    <>
      <Typography variant="h3" color="grey.600" mb={3}>
        Должности
      </Typography>
      <Paper elevation={3}>
        <Box p={3}>
          {isLoading ? (
            <Loader />
          ) : error ? (
            <Typography variant="h6" color="error">
              Произошла ошибка
            </Typography>
          ) : (
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Должность</TableCell>
                  <TableCell>Зарплата</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows &&
                  rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <Typography
                          variant="body1"
                          color="grey.900"
                          fontWeight={700}
                        >
                          {row.job_id}
                        </Typography>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.paid}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          )}
        </Box>
      </Paper>
    </>
  )
}

export default Job
