import {
  Avatar,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import { FC } from 'react'
import { GREY } from '../theme/palette'
import avatar from '../assets/images/avatars/avatar_default.jpg'
import { Stack } from '@mui/system'
import { NAVIGATION } from '../constants/router'
import { useGetUserQuery } from '../store/user/user.api'
import { Navigate, useNavigate } from 'react-router-dom'

const styles = {
  root: {
    height: '100vh',
    borderRight: `1px dashed ${GREY[300]}`,
    overflow: 'hidden',
  },
  userFrame: {
    backgroundColor: GREY[300],
    borderRadius: 2,
  },
}

interface IProps {
  width: number
}

const AsideNav: FC<IProps> = ({ width }) => {
  const navItems = NAVIGATION

  const { isLoading, error, data } = useGetUserQuery()

  const navigate = useNavigate()

  return (
    <Stack sx={{ ...styles.root, width }} p={3}>
      <Box>
        <Box sx={styles.userFrame} p={2} mt={3} mb={5}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar alt="user_avatar" src={avatar} />
            <Typography variant="subtitle1" color="grey.800" fontSize={14}>
              {data?.name} {data?.second_name}
            </Typography>
          </Stack>
        </Box>
        <Box>
          <List component="nav">
            {navItems.map((item) => (
              <ListItemButton
                key={item.id}
                color="warning"
                onClick={() => navigate(item.path)}
              >
                <ListItemIcon>
                  <item.icon />
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Box>
    </Stack>
  )
}

export default AsideNav
