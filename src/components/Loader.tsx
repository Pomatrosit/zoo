import { CircularProgress } from '@mui/material'
import { Stack } from '@mui/system'

const Loader = () => {
  return (
    <Stack
      justifyContent="center"
      flexDirection="row"
      alignItems="center"
      py={5}
    >
      <CircularProgress />
    </Stack>
  )
}

export default Loader
