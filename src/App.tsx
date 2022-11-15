import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { PUBLIC_ROUTES, PRIVATE_ROUTES } from './constants/router'
import { useAppSelector } from './hooks/redux'
import PrivateLayout from './layouts/PrivateLayout'
import PublicLayout from './layouts/PublicLayout'

function App() {
  const auth = useAppSelector((state) => state.auth.auth)

  useEffect(() => {
    // if (auth)
  }, [auth])
  return (
    <div>
      {!auth ? (
        <Routes>
          <Route element={<PublicLayout />}>
            {PUBLIC_ROUTES.map((route) => (
              <Route
                key={route.id}
                path={route.path}
                element={<route.Component />}
              />
            ))}
            <Route path="*" element={<Navigate to="/login" />} />
          </Route>
        </Routes>
      ) : (
        <Routes>
          <Route element={<PrivateLayout />}>
            {PRIVATE_ROUTES.map((route) => (
              <Route
                key={route.id}
                path={route.path}
                element={<route.Component />}
              />
            ))}
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      )}
    </div>
  )
}

export default App
