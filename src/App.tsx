import { Container, Tabs, Tab, AppBar } from '@mui/material'
import { SyntheticEvent, useState } from 'react'
import { useTheme } from '@mui/material/styles'
import SwipeableViews from 'react-swipeable-views'
import Equipos from './pages/Equipos'
import TabPanel from './components/TabPanel'
import Jugadores from './pages/Jugadores'

const App = () => {
  const theme = useTheme()
  const [value, setValue] = useState(0)

  const a11yProps = (index: number) => ({
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  })

  const handleChange = (event: SyntheticEvent, newValue: number) => setValue(newValue)

  const handleChangeIndex = (index: number) => setValue(index)

  return (
    <>
      <AppBar className="nav-bar" color="inherit" position="fixed">
        <Tabs value={value} onChange={handleChange} textColor="primary" indicatorColor="primary" centered>
          <Tab label="Lista de jugadores" {...a11yProps(0)} />
          <Tab label="Búsqueda de equipos" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <Container>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Jugadores />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Equipos />
          </TabPanel>
        </SwipeableViews>
      </Container>
    </>
  )
}

export default App
