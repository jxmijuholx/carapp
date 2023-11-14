import { AppBar, Typography } from '@mui/material'
import Carlist from './Components/Carlist'
function App() {
  return (
    <>
      <AppBar position="static">
        <Typography variant="h6">
          Car Shop
        </Typography>
      </AppBar>
      <Carlist />
    </>
  )
}

export default App; 