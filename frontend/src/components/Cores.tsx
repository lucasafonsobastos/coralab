import * as React from 'react';

import { Box, Dialog, IconButton, Stack, styled, useMediaQuery } from '@mui/material';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import { getcores } from '../service/notas';

type Props = {
}

const ItemCor = styled(IconButton)(() => ({
    padding: '2px',
    ':hover': {
        border: '-1px solid gray',
    },
}));

const CoresSpan = styled(Box)(() => ({
    width: '30px',
    height: '30px',
    borderRadius: '100%',
}))

export default function Cores({}: Props) {

    const [cores, setCores ] = React.useState([]);
    //const [novaCor, setNovaCor] = React.useState('');

    const [active, setActive] = React.useState(false);

    const responsiveCores = useMediaQuery('(max-width:600px)');

    const fetchDados = async () => {
        try {
            const dataCores = await getcores();
            setCores(dataCores);

        } catch (error) {
            console.error('Erro: ', error);
        }
    }

    React.useEffect(() => {
        fetchDados();
    }, []);
    
    const handleActive = () => {
        !active ? setActive(true) : setActive(false);
    }

    const handleBlur = () => {
        //setActive(false);
    }

    const handleClose = () => {

    }

    return (
        <>
            <IconButton onClick={handleActive} onBlur={handleBlur} >
                <FormatColorFillIcon 
                sx={{color:'secundary', alignSelf:'end'}} 
                fontSize='small' />
            </IconButton>

            <Dialog open={active} onClose={handleClose}>
                <Stack direction='row' useFlexGap flexWrap='wrap'
                    sx={{ display:'flex', alignItems:'center',
                    justifyContent:'space-around',
                    width: `${responsiveCores ? '210px' : '450px'}` }}>
                        
                    { cores.map((item: any) => {
                        return <ItemCor key={item.cor}>
                            <CoresSpan sx={{backgroundColor: item.cor}} ></CoresSpan>
                        </ItemCor>
                    })}
                </Stack>
            </Dialog>
        </>
    )
}