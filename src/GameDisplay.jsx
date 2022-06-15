import React from 'react';
import { GameCard } from './GameCard';
import { DownArrow } from './DownArrow';
import Box from '@mui/material/Box';

export const GameDisplay = ({ imgURL, alt, gameName, desc, embedId }) => {
    return (
        <Box
        display="flex"
        flexDirection={'column'}
        justifyContent="center"
        alignItems="center"
        >
            <DownArrow />
            <GameCard
            imgURL={imgURL}
            alt={alt}
            gameName={gameName} 
            desc={desc} 
            embedId={embedId} 
            />
        </Box>
    );
};