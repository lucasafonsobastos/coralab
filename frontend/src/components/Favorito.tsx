import * as React from 'react';

import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { IconButton } from '@mui/material';

type Props = {
    favorito: any
}

export default function Favorito({favorito}: Props) {

    const [isFavorite, setIrFavorite ] = React.useState(favorito);

    const handleFavorite = () => {
        if(isFavorite) {
            setIrFavorite(false);
            favorito(false);
        } else {
            setIrFavorite(true);
            favorito(true);
        }
    }

    return (
        <IconButton onClick={handleFavorite}>
            {isFavorite ? 
                <StarIcon sx={{color:'#FFA000'}} fontSize='small'  /> : 
                <StarBorderIcon sx={{color:'secundary'}} fontSize='small' />}
        </IconButton>
    )
}