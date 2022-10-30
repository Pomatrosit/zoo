import { FC, ReactElement, ReactNode, useMemo } from 'react'
// @mui
import { CssBaseline } from '@mui/material'
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from '@mui/material/styles'
//
import palette from './palette'
import shadows from './shadows'
import typography from './typography'
import GlobalStyles from './globalStyles'
import customShadows from './customShadows'
import componentsOverride from './overrides'

// ----------------------------------------------------------------------
interface IProps {
  children: ReactNode | ReactElement
}

const ThemeProvider: FC<IProps> = ({ children }) => {
  const themeOptions: any = useMemo(
    () => ({
      palette,
      shape: { borderRadius: 6 },
      typography,
      shadows: shadows(),
      customShadows: customShadows(),
    }),
    []
  )

  const theme = createTheme(themeOptions)
  theme.components = componentsOverride(theme)

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  )
}

export default ThemeProvider
