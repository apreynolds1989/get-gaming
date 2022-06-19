import React from 'react';
import { ExtraGamesCard } from './ExtraGamesCard';
import { DownArrow } from './DownArrow';
import Box from '@mui/material/Box';

export const ExtraGamesDisplay = () => {
    return (
        <Box
        display="flex"
        flexDirection={'column'}
        alignItems="center"
        marginBottom={5}
        >
            <DownArrow />
            <ExtraGamesCard />
        </Box>
    );
};