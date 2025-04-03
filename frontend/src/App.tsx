import { Box, Container } from "@mui/material"
import Header from "./components/Header"
import NewNota from "./components/NewNota"

function App() {

  return (
        <>
            <Header></Header>
            <Container maxWidth='lg' sx={{
                    display:'flex', justifyContent:'center', width:'100lvw'
                }}>

                <Box sx={{
                    display:'flex', justifyContent:'center', width:'100%'
                }}>
                    <NewNota>

                    </NewNota>
                </Box>
                
            </Container>
        </>
  )
}

export default App
