import { Box, styled, TextField } from '@mui/material';
import React from 'react'

type Props = {};

const BoxStyled = styled(Box)(() => ({
    minWidth:'300px', minHeight:'90px',
    border: '1px solid #D9D9D9',
    backgroundColor: '#FFFFFF',
    borderRadius:'5px',
    display:'flex', flexDirection:'column',
    padding:'10px'
    
}));

const InputTitle = styled('input')(({theme}) => ({
    border: 'none', backgroundColor:'transparent',
    color:'black', fontSize:'0.7rem', ":focus-visible":false,

}));

export default function NewNota({}: Props) {
    return (
        <BoxStyled>
            <Box>
                <InputTitle placeholder='Título' ></InputTitle>
            </Box>

        </BoxStyled>
    )
}