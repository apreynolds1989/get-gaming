import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { EmbedVideo } from './EmbedVideo';

export const GameCard = ({ imgURL, alt, gameName, desc, embedId }) => {
    return (
        <Box
        display="flex"
        flexDirection={'column'}
        justifyContent="center"
        alignItems="center"
        mb={5}
        >
            <Typography variant='h4' color='#6B3FA0' sx={{ fontWeight: 'bold' }}>
                {gameName}
            </Typography>
            <Card sx={{ minWidth: 275, maxWidth:500, maxHeight:1000, px: 10, mt: 1, bgcolor: '#F0ECF6' }}>
                <CardContent>
                    <Box display="flex" justifyContent='center' >
                        <img src={imgURL} alt={alt} height={200} />
                    </Box>
                    <Box flexDirection={'column'} textAlign={'left'} py={1}>
                        <Typography fontWeight={'bold'} borderBottom={1} borderColor={'gray'}>
                            Description
                        </Typography>
                        <Typography>
                            {desc}
                        </Typography>
                    </Box>
                    <Box flexDirection={'column'} textAlign={'left'} py={1}>
                        <Typography fontWeight={'bold'} borderBottom={1} borderColor={'gray'}>
                            How to Play?
                        </Typography>
                        <EmbedVideo embedId={embedId} />
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );  
};