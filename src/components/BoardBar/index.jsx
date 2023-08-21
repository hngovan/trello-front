import Box from '@mui/material/Box'

function BoardBar({ children }) {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.dark',
        width: '100%',
        height: theme => theme.layoutCustom.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        backdropFilter: 'blur(8px)',
        px: 3
      }}
    >
      {children}
    </Box>
  )
}

export default BoardBar
