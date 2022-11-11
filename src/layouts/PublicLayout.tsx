import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import { Outlet } from 'react-router-dom'

const styles = {
  root: {
    minHeight: '100vh',
    padding: '100px 0',
    position: 'relative',
  },
  outlet: {
    position: 'relative',
    zIndex: 1,
  },
}

const PublicLayout = () => {
  return (
    <Stack sx={styles.root} alignItems="center" justifyContent="center">
      <Box sx={styles.outlet}>
        <Outlet />
      </Box>
    </Stack>
  )
}

export default PublicLayout
