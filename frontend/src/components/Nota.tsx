import { Box, Divider, IconButton, Input, styled } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ClearIcon from '@mui/icons-material/Clear';
import SaveIcon from '@mui/icons-material/Save';
import Favorito from './Favorito';
import * as React from 'react';
import Cores from './Cores';

type Props = {
    nota: any;
    cores: any;
};

const objCor = {
    id: 0,
    cor: '#FFFFFF'
}

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

export default function NewNota({ nota, cores }: Props) {



    const [editavel, setEditavel] = React.useState(false);

    //const [tituloAnterior, setTituloAnterior] = React.useState(nota.titulo);
    //const [conteudoAnterior, setConteudoAnterior] = React.useState(nota.conteudo);

    const [titulo, setTitulo] = React.useState('');
    const [conteudo, setConteudo] = React.useState('');
    const [favorito, setFavorito] = React.useState(nota.favorito);

    const [cor, setCor] = React.useState(objCor);

    const setCorInit = () => {
        cores.map((c: any) => {
            if (c.id == nota.cor_id){
                setCor(c);
            }
        })
    }
    
    

    const [salvar, setSalvar] = React.useState(false);

    const handleEditar = () => {
        //setTituloAnterior(titulo);
        //setEditavel(true);
        if(!editavel) {
            setEditavel(true);
            setSalvar(true)
            //setTituloAnterior(titulo);
        } else {
            setEditavel(false);
            setSalvar(false)
        }
    }

    const handleAtualiza = () => {
        const attNota = {
            id: nota.id,
            titulo: titulo,
            conteudo: conteudo,
            favorito: favorito,
            cor_id: cor.id
        }

        console.log(attNota)
    }

    const handleExcruir = () => {
        console.log('excluindo...')
    }

    React.useEffect(() => {
        setCorInit();
    }, [])


    return (
        <BoxStyled sx={{backgroundColor:`${cor.cor}`}} >
            <Box sx={{display:'flex', justifyContent:'space-between'}}>
                <InputTitle placeholder='Título' disableUnderline={true} 
                    value={titulo} disabled={!editavel} 
                    autoFocus={editavel}
                    onChange={(e) => setTitulo(e.target.value)}>
                </InputTitle>

                <Favorito favorito={setFavorito} />
            </Box>

            <Divider></Divider>

            <Box sx={{display:'flex', justifyContent:'space-between', 
                flexDirection:'column'}}>

                <InputText placeholder='criar nota ...' 
                    disabled={!editavel} value={conteudo}
                    onChange={(e) => setConteudo(e.target.value)}>    
                </InputText>

                <Box sx={{display:'flex', flexDirection:'row', alignContent:'center',
                        justifyContent:'space-between'
                }}>
                    <Box>
                        <IconButton onClick={handleEditar}>
                            <EditOutlinedIcon sx={{color:'secundary', alignSelf:'end'}} 
                            fontSize='small'  />
                        </IconButton>
                        
                        <Cores />
                        
                    </Box>
                    <IconButton>
                        {!salvar ? 
                            <ClearIcon sx={{color:'secundary', alignSelf:'end'}} 
                            fontSize='small' onClick={handleExcruir} /> :

                            <SaveIcon sx={{color:'green', alignSelf:'end'}} 
                            fontSize='small' onClick={handleAtualiza} />
                        }
                        
                    </IconButton>
                    
                </Box>
            </Box>
            

        </BoxStyled>
    )
}