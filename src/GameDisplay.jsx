import React from 'react';
import { GameCard } from './GameCard';
import { DownArrow } from './DownArrow';
import Box from '@mui/material/Box';

export const GameDisplay = ({ gameImgURL, alt, gameSiteURL, gameName, desc, embedId }) => {
    return (
        <Box
        display="flex"
        flexDirection={'column'}
        alignItems="center"
        marginBottom={5}
        >
            <DownArrow />
            <GameCard
            gameImgURL={gameImgURL}
            alt={alt}
            gameSiteURL={gameSiteURL}
            gameName={gameName} 
            desc={desc} 
            embedId={embedId} 
            />
        </Box>
    );
};