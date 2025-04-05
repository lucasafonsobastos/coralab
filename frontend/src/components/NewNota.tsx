import { Alert, Box, Divider, IconButton, Input, styled, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Favorito from './Favorito';
import * as React from 'react';
import { createNota } from '../service/notas';

type Props = {};

const BoxStyled = styled(Box)(() => ({
    minWidth:'300px', minHeight:'90px',
    maxWidth:'390px',
    border: '1px solid #D9D9D9',
    backgroundColor: '#FFFFFF',
    borderRadius:'5px',
    display:'flex', flexDirection:'column',
    padding:'10px'
    
}));

const InputTitle = styled(Input)(() => ({
    border: 'none', backgroundColor:'transparent',
    color:'black', fontSize:'0.7rem', ":focus-visible":false,

}));

const InputText = styled('textarea')(() => ({
    backgroundColor:'transparent',
    color:'black', width:'100%',
    minWidth: '50px', border:'none',
    resize:'none', height:'100%',
    outline:'none',minHeight:'70px'


}));

export default function NewNota({}: Props) {

    const [titulo, setTitulo] = React.useState('');
    const [conteudo, setConteudo] = React.useState('');
    const [favorito, setFavorito] = React.useState(false);
    const cor = 1;

    const [alert, setAlert] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent)=> {
        e.preventDefault();

        if(titulo == '' || conteudo == '') {
            setAlert(true); 
        } else {
            try {
                await createNota(titulo, conteudo, cor, favorito);

            } catch (error) {
                console.error('Erro ao criar nota', error);
            }
        }
    }

    return (
        <BoxStyled>
            <Box sx={{display:'flex', justifyContent:'space-between'}}>

                <InputTitle 
                    placeholder='Título'
                    disableUnderline={true} 
                    onChange={(e) => setTitulo(e.target.value)}
                    value={titulo}>
                </InputTitle>

                <Favorito favorito={setFavorito} />

            </Box>

            <Divider></Divider>

            <Box sx={{display:'flex', justifyContent:'space-between', 
                flexDirection:'column'}}>

                <InputText placeholder='criar nota ...'
                    onChange={(e) => setConteudo(e.target.value)} 
                    value={conteudo}>
                </InputText>

                <IconButton onClick={handleSubmit} sx={{alignSelf:'end'}}>
                    <AddIcon sx={{color:'secundary'}} fontSize='small' />
                </IconButton>

            </Box>

            { alert &&
                <Alert severity='warning'>
                    <Typography variant='caption'>
                        Você precisa de um Titulo e um Conteudo
                        para Salvar uma Nota. Revise-a!
                    </Typography>
                </Alert>
            }

        </BoxStyled>
    )
}