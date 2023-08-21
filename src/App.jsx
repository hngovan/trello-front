import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button'
import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { LightMode, DarkMode, SettingsBrightness } from '@mui/icons-material'
import Box from '@mui/material/Box'

function ModeToggle() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    setMode(event.target.value)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="label-select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value={'light'}>
          <Box
            component="div"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}
          >
            <LightMode fontSize="small" />
            Light
          </Box>
        </MenuItem>
        <MenuItem value={'dark'}>
          <Box
            component="div"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}
          >
            <DarkMode fontSize="small" />
            Dark
          </Box>
        </MenuItem>
        <MenuItem value={'system'}>
          <Box
            component="div"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}
          >
            <SettingsBrightness fontSize="small" />
            System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ModeToggle />
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
    </>
  )
}

export default App
