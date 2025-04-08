import * as React from "react";
import { Box, IconButton, InputBase, styled } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CheckIcon from '@mui/icons-material/Check';
import OptionsNote from "./OptionsNote";

import { getCores, updateNota } from "../service/notas";

export interface NotaProps {
    nota:any,
    onDelete: (id:number) => void,
    onUpdate: (notaAtualizada: any) => void,
}

const BlocoNota = styled(Box)(() => ({
    minWidth:'300px', minHeight:'90px',
    maxWidth:'390px', maxHeight:'450pc',
    border: '1px solid #D9D9D9',
    borderRadius:'25px',
    display:'flex', flexDirection:'column',
    padding:'10px'
}));

const Line = styled('span')(() => ({
    width: '100%',
    height: '2px',
    backgroundColor: 'rgba(0,0,0, 0.2)',
}));

const TextTitulo = styled(InputBase)(() => ({
    border: 'none', backgroundColor:'transparent',
    color:'black', ":focus-visible":false,
    resize:'none', width: '100%', 
}))

const TextConteudo = styled('textarea')(() => ({
    backgroundColor:'transparent',
    color:'black', width:'100%',
    minWidth: '50px', border:'none',
    resize:'none', height:'100%',
    outline:'none',minHeight:'70px'
}));


function Note (props: NotaProps) {

    const {nota, onDelete, onUpdate} = props;
    //onAtualiza = Objeto{...}

    const [corId, setCorId] = React.useState(nota.cor_id);

    const [cores, setCores] = React.useState<any[]>([]);

    const [favorite, setFavorite] = React.useState(nota.favorito);

    const [edit, setEdit] = React.useState(false);

    const [tituloNota, setTituloNota]= React.useState(nota.titulo);
    const [textoNota, setTextoNota]= React.useState(nota.conteudo);

    let notaAtualizada = nota;
    
    //carrega as cores estabelecidas
    const fetchCores = async () => {
        try {
            const data = await getCores();
            setCores(data);
        } catch (error) {
            console.error('Erro ao buscar cores:', error);
        }
    };

    React.useEffect(() => {
        fetchCores();
        setCorId(nota.cor_id);
    }, [nota.cor_id]);

    const fetchUpdateCor = async (novaCor: any) => {
        setCorId(novaCor.id);
        notaAtualizada.cor_id = corId;
        fetchAtualiza();
    };

    const fetchAtualiza = async () => {
        try {
            await updateNota(notaAtualizada);
            onUpdate(notaAtualizada);
            
        } catch (error) {
            console.error('Erro ao atualizar a nota:', error);
        }
    };

    const handleFavorito = () =>{
        if(favorite){
            setFavorite(false);
            notaAtualizada.favorito = false;
        } else {
            setFavorite(true);
            notaAtualizada.favorito = true
        }
        fetchAtualiza();
    }

    const onChangeTituloNota = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTituloNota(e.target.value);
    }

    const onChangeTextoNota = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextoNota(e.target.value);
    }

    const onAtualizaConteuto = () => {
        console.log(notaAtualizada);
        notaAtualizada.titulo= tituloNota;
        notaAtualizada.conteudo = textoNota;
        notaAtualizada.cor_id = corId;
        notaAtualizada.favorito = favorite;
        notaAtualizada.id = nota.id;
        fetchAtualiza();
        setEdit(false);
    }

    const corAtual = cores.find(cor => cor.id === corId)?.cor || '#FFFFFF';

    return (
        <BlocoNota sx={{backgroundColor:corAtual}}>
            <Box sx={{
                display: 'flex', 
                alignItems: 'center', 
                padding: '.2rem 1rem', 
                justifyContent: 'space-between'
            }}>
                {edit &&
                    <TextTitulo rows={1} value={tituloNota} 
                    onChange={onChangeTituloNota} ></TextTitulo>
                }
                {!edit &&
                    <TextTitulo value={nota.titulo} disabled></TextTitulo>
                }
                <IconButton onClick={handleFavorito}>
                    {nota.favorito ? <StarIcon sx={{color:'#FFA000'}}  fontSize="small"/> : <StarBorderIcon/>}
                </IconButton>

            </Box>
            {corAtual != '#FFFFFF' ? <Line sx={{backgroundColor:'#FFFFFF'}} /> : <Line/> }
            <Box sx={{height:'100%', display: 'flex', flexDirection: 'column'}}>
                {edit &&
                    <>
                        <TextConteudo value={textoNota} onChange={onChangeTextoNota}></TextConteudo>
                        <IconButton onClick={onAtualizaConteuto} sx={{width: '100%'}}>
                            <CheckIcon></CheckIcon>
                        </IconButton>
                    </>
                }
                {!edit &&
                    <>
                        <TextConteudo value={nota.conteudo} disabled />
                        <OptionsNote 
                            cores={cores} 
                            notaId={nota.id} 
                            onDelete={onDelete}
                            attCor={fetchUpdateCor}
                            attNota={setEdit}>
                        </OptionsNote>
                    </>
                    
                }
            </Box>
            
            
        </BlocoNota>
    )
}


export default Note;