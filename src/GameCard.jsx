import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ToggleDesc } from './ToggleDesc';
import { EmbedVideo } from './EmbedVideo';

export const GameCard = ({ isMobileSize, gameImgURL, alt, gameSiteURL, gameName, desc, embedId }) => {
    const variantSize = gameName.length < 31 ? 35 : 27
    const variantMarginBottom = gameName.length < 31 ? 0 : 1

    return (
        <Box
            display="flex"
            flexDirection='column'
            justifyContent="center"
            alignItems="center"
            mb={5}
        >
            <Typography 
                variant='h6' 
                color='#6B3FA0' 
                sx={{ 
                    fontSize: variantSize,
                    fontWeight: 'bold',
                    maxWidth: '550px', 
                    marginX: 5,
                    marginBottom: variantMarginBottom,
                    textAlign: 'center',
                }}
            >
                <a href={gameSiteURL} style={{ textDecoration: 'none', color: '#6B3FA0'}}>
                    {gameName}
                </a>
            </Typography>
            <Card 
                sx={{ 
                    borderRadius: isMobileSize ? 0 : 5,
                    minWidth: isMobileSize ? '100vw' : '150px', 
                    maxWidth: '500px',
                    minHeight: '900px', 
                    px: 3,
                    mx: 5, 
                    mt: 1, 
                    bgcolor: '#F0ECF6' 
                }}
            >
                <CardContent>
                    <Box 
                        display="flex" 
                        justifyContent='center' 
                    >
                        <a href={gameSiteURL}>
                            <img src={gameImgURL} alt={alt} height={200} />
                        </a>
                    </Box>
                    <Box 
                        flexDirection='column' 
                        textAlign='left'
                        py={1}
                    >
                        <ToggleDesc desc={desc} />
                    </Box>
                    <Box 
                        flexDirection='column'
                        textAlign='left' 
                        py={1}
                    >
                        <Typography 
                            fontWeight='bold' 
                            color='#6B3FA0'
                            borderBottom={1} 
                            borderColor='#6B3FA0'
                            marginBottom={1}
                        >
                            How to Play?
                        </Typography>
                        <EmbedVideo embedId={embedId} />
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );  
};