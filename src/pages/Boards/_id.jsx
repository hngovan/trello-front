import Container from '@mui/material/Container'
import AppBar from '../../components/AppBar'
import BoardBar from '../../components/BoardBar'
import BoardContent from '../../components/BoardContent'

function Board() {
  return (
    <Container disableGutters maxWidth={false} component="main" elevation={0} sx={{ height: '100vh' }}>
      <AppBar/>
      <BoardBar>BoardBar</BoardBar>
      <BoardContent>BoardContent</BoardContent>
    </Container>
  )
}

export default Board
