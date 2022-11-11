import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import { Outlet } from 'react-router-dom'
import { ASIDE_NAV_WIDTH } from '../constants/common'
import AsideNav from './AsideNav'

const styles = {
  root: {
    position: 'relative',
  },
  outlet: {
    position: 'relative',
    zIndex: 1,
    width: `calc(100vw - ${ASIDE_NAV_WIDTH}px)`,
  },
}

const PrivateLayout = () => {
  return (
    <Stack justifyContent="center" direction="row" sx={styles.root}>
      <AsideNav width={ASIDE_NAV_WIDTH} />
      <Box sx={styles.outlet} py={10} px={5}>
        <Outlet />
      </Box>
    </Stack>
  )
}

export default PrivateLayout
