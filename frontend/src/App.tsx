import { Box, Container, Stack } from "@mui/material";
import Header from "./components/Header";
import NewNota from "./components/NewNota";
import Nota from "./components/Nota";
import { getcores, getnotas } from "./service/notas";
import * as React from "react";


function App() {

    const [notas, setNotas ] = React.useState([]);
    const [cores, setCores ] = React.useState([]);

    const fetchDados = async () => {
        try {
            const data = await getnotas();
            setNotas(data);

            const dataCores = await getcores();
            setCores(dataCores);

        } catch (error) {
            console.error('Erro: ', error);
        }
    }

    React.useEffect(() => {
        fetchDados();
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
                        <Nota nota={nota} cores={cores} />
                    ))}

                    <Nota nota={[{
                        id: 10, 
                        titulo: "Nota de teste", 
                        conteudo: "Conteudo de teste de nota", 
                        favorito: true, 
                        cor_id: 2
                    }]} cores={cores} />

                </Stack>

                
            </Container>
        </Box>
  )
}

export default App
