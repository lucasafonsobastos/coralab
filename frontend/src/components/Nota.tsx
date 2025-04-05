import { Box, Divider, IconButton, Input, styled } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ClearIcon from '@mui/icons-material/Clear';
import SaveIcon from '@mui/icons-material/Save';
import Favorito from './Favorito';
import * as React from 'react';

type Props = {
    nota: any
};

const BoxStyled = styled(Box)(() => ({
    minWidth:'300px', minHeight:'90px',
    maxWidth:'390px', maxHeight:'450pc',
    border: '1px solid #D9D9D9',
    backgroundColor: '#FFFFFF',
    borderRadius:'25px',
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

export default function NewNota({ nota }: Props) {

    const [editavel, setEditavel] = React.useState(false);

    const [tituloAnterior, setTituloAnterior] = React.useState(nota.titulo);
    const [conteudoAnterior, setConteudoAnterior] = React.useState(nota.conteudo);

    const [titulo, setTitulo] = React.useState('');
    const [conteudo, setConteudo] = React.useState('');
    const [favorito, setFavorito] = React.useState(false);

    const [salvar, setSalvar] = React.useState(false);

    const handleEditar = () => {
        //setTituloAnterior(titulo);
        //setEditavel(true);
        if(!editavel) {
            setEditavel(true);
            setTituloAnterior(titulo);
        } else {
            setEditavel(false)
        }
    }

    const handleCancelar = () => {
        setTitulo(nota.titulo);
        setEditavel(false);
    }

    const handleSalvar = () => {
        setEditavel(false);
    }

    const handleBlur = () => {
        if(editavel){
            handleCancelar();
        }
    }

    return (
        <BoxStyled>
            <Box sx={{display:'flex', justifyContent:'space-between'}}>
                <InputTitle placeholder='Título' disableUnderline={true} 
                    value={titulo} disabled={!editavel} 
                    onBlur={handleBlur} autoFocus={editavel}
                    onChange={(e) => setTitulo(e.target.value)}>
                </InputTitle>

                <Favorito favorito={setFavorito} />
            </Box>
0
            <Divider></Divider>

            <Box sx={{display:'flex', justifyContent:'space-between', 
                flexDirection:'column'}}>

                <InputText placeholder='criar nota ...' ></InputText>
                <Box sx={{display:'flex', flexDirection:'row', alignContent:'center',
                        justifyContent:'space-between'
                }}>
                    <Box>
                        <IconButton onClick={handleEditar}>
                            <EditOutlinedIcon sx={{color:'secundary', alignSelf:'end'}} 
                            fontSize='small'  />
                        </IconButton>
                        <IconButton>
                            <FormatColorFillIcon 
                            sx={{color:'secundary', alignSelf:'end'}} 
                            fontSize='small' />
                        </IconButton>
                        
                    </Box>
                    <IconButton>
                        {!editavel ? 
                            <ClearIcon sx={{color:'secundary', alignSelf:'end'}} 
                            fontSize='small' /> :

                            <SaveIcon sx={{color:'green', alignSelf:'end'}} 
                            fontSize='small' />
                        }
                        
                    </IconButton>
                    
                </Box>
            </Box>
            

        </BoxStyled>
    )
}