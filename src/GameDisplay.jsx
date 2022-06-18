import React from 'react';
import { GameCard } from './GameCard';
import { DownArrow } from './DownArrow';
import Box from '@mui/material/Box';

export const GameDisplay = ({ imgURL, alt, gameName, desc, embedId }) => {
    return (
        <Box
        display="flex"
        flexDirection={'column'}
        alignItems="center"
        marginBottom={5}
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