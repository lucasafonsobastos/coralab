import { Box, Container, Stack } from "@mui/material";
import Header from "./components/Header";
import NewNota from "./components/NewNota";
import Nota from "./components/Nota";
import { getnotas } from "./service/notas";
import * as React from "react";


function App() {

    const [notas, setNotas ] = React.useState([])

    const fetchNotas = async () => {
        try {
            const data = await getnotas();
            setNotas(data);
        } catch (error) {
            console.error('Erro: ', error);
        }
    }

    React.useEffect(() => {
        fetchNotas()
    }, []);

    return (

        <Box >
            <Header></Header>
            <Container maxWidth='lg' sx={{
                    display:'flex', justifyContent:'center', width:'100lvw', marginTop:'5rem',
                    flexDirection:'column',
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
                    {notas.map((nota: any) => (
                        <Nota nota={nota} />
                    ))}
                    <Nota nota={{
                        titulo: 'Teste',
                        conteudo: 'Teste de nota'
                    }} />
                </Stack>

                
            </Container>
        </Box>
  )
}

export default App
