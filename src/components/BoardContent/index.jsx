import Box from '@mui/material/Box'

function BoardContent({ children }) {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.light',
        width: '100%',
        height: theme => `calc(100vh - ${theme.layoutCustom.appBoard} - ${theme.layoutCustom.boardBarHeight})`,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {children}
    </Box>
  )
}

export default BoardContent
