import { Box, Container, Stack } from "@mui/material"
import Header from "./components/Header"
import NewNota from "./components/NewNota"
import Nota from "./components/Nota"

function App() {

  return (
        <Box>
            <Header></Header>
            <Container maxWidth='lg' sx={{
                    display:'flex', justifyContent:'center', width:'100lvw', marginTop:'5rem',
                    flexDirection:'column'
                }}>

                <Box sx={{
                    display:'flex', justifyContent:'center', width:'100%',
                }}>
                    <NewNota/>
                    
                </Box>
                <Stack spacing={{xs:2, sm: 2, lg: 3 }} useFlexGap direction='row' 
                    sx={{marginTop:'2rem', flexWrap: 'wrap',
                        width:'100%', justifyContent:'center'
                    }}>
                    <Nota />
                    <Nota />
                    <Nota />
                </Stack>
                
            </Container>
        </Box>
  )
}

export default App
