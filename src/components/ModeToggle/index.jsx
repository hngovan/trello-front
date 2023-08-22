import Brightness6Icon from '@mui/icons-material/Brightness6'
import Badge from '@mui/material/Badge'
import FormControlLabel from '@mui/material/FormControlLabel'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Tooltip from '@mui/material/Tooltip'
import { useColorScheme } from '@mui/material/styles'
import { useState } from 'react'

function ModeToggle() {
  const { mode, setMode } = useColorScheme()

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const [selectedMode, setSelectedMode] = useState(mode)

  const handleChange = (event) => {
    const newMode = event.target.value
    setSelectedMode(newMode)
    setMode(newMode)
    setAnchorEl(null)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  return (
    <>
      <Tooltip title="Theme">
        <IconButton
          size="large"
          id="basic-button-mode"
          aria-label="change mode"
          aria-controls={open ? 'basic-mode' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          color="inherit"
        >
          <Badge>
            <Brightness6Icon />
          </Badge>
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-mode"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        MenuListProps={{
          'aria-labelledby': 'basic-button-mode'
        }}
        sx={{ mt: 2 }}
      >
        <RadioGroup
          aria-label="mode"
          name="mode"
          value={selectedMode}
          onChange={handleChange}
        >
          <MenuItem value="light">
            <FormControlLabel value="light" control={<Radio />} label="Light">
            </FormControlLabel>
          </MenuItem>
          <MenuItem value="dark">
            <FormControlLabel value="dark" control={<Radio />} label="Dark">
            </FormControlLabel>
          </MenuItem>
          <MenuItem value="system">
            <FormControlLabel value="system" control={<Radio />} label="System">
            </FormControlLabel>
          </MenuItem>
        </RadioGroup>
      </Menu>
    </>
  )
}

export default ModeToggle
