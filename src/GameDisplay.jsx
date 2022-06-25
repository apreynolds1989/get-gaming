import React from 'react';
import { GameCard } from './GameCard';
import { ToggleDesc } from './ToggleDesc';
import { DownArrow } from './DownArrow';
import Box from '@mui/material/Box';

export const GameDisplay = ({ cardToDisplay }) => {
    return (
        <Box
        display="flex"
        flexDirection={'column'}
        alignItems="center"
        marginBottom={5}
        >
            <DownArrow />
            {cardToDisplay}
        </Box>
    );
};