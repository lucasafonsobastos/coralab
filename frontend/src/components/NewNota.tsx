import { Box, Divider, Input, styled } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AddIcon from '@mui/icons-material/Add';
//import React from 'react'

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
    return (
        <BoxStyled>
            <Box sx={{display:'flex', justifyContent:'space-between'}}>
                <InputTitle placeholder='Título' disableUnderline={true} ></InputTitle>
                <StarBorderIcon sx={{color:'secundary'}} fontSize='small'/>
            </Box>
            <Divider></Divider>
            <Box sx={{display:'flex', justifyContent:'space-between', flexDirection:'column'}}>
                <InputText placeholder='criar nota ...' ></InputText>
                <AddIcon sx={{color:'secundary', alignSelf:'end'}} fontSize='small' />
            </Box>
            

        </BoxStyled>
    )
}