import React from 'react';

import { DownArrow } from './DownArrow';
import Box from '@mui/material/Box';

export const GameDisplay = ({ cardToDisplay }) => {
    return (
        <Box
        display="flex"
        flexDirection={'column'}
        alignItems="center"
        marginBottom={1}
        >
            <DownArrow />
            {cardToDisplay}
        </Box>
    );
};