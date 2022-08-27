import React, { useState } from 'react';
import { Box, Typography, ImageList, ImageListItem, useMediaQuery } from '@mui/material';
import { Lightbox } from './Lightbox';
import { HeaderAppBar } from './HeaderAppBar';
import { Footer } from './Footer';

// Utilizing fslightbox-react
// https://fslightbox.com/react/documentation
export const Gallery = ({ header, images, imageNames }) => {
    const isMobileSize = useMediaQuery('(max-width:600px)');

    // State to control opening Lightbox on clicked image (slide)
    // if toggler is updated when lightbox is closed (false) it will open it
    // if toggler is updated when lightbox is opened (true) it will close it
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
        });
     
    const openLightboxOnSlide = (number) => {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: number
        });
    }

    return (
        <>
            <HeaderAppBar isMobileSize={isMobileSize} />
            <Box
                display='flex'
                flexDirection='column'
                maxWidth='700px'
                mx='auto'
                sx={{
                    marginTop: 15,
                    marginBottom: 10,
                }}
            >
                <Typography 
                    variant={isMobileSize ? 'h4' : 'h3'} 
                    color='#6B3FA0'
                    borderBottom={1}
                    borderColor='#6B3FA0' 
                    sx={{ 
                        fontWeight: 'bold',
                    }}
                >
                    {header}
                </Typography>
                <ImageList
                    sx={{
                        alignSelf: 'center',
                        width: {
                            xs: '164px',
                            sm: '500px',
                        },
                        // height: 450,
                    }}
                    cols={isMobileSize ? 1 : 3}
                    gap={8}
                    rowHeight={164}
                >
                    {imageNames.map((imageName, index) => (
                        <ImageListItem key={imageName} sx={{ overflowY: 'hidden'}}>
                            <img 
                                src={images[imageName]}
                                alt={images[imageName]}
                                onClick={() => openLightboxOnSlide(index + 1)}
                                loading='lazy'
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
            <Lightbox
                images={images} 
                lightboxController={lightboxController}
            />
            <Footer />
        </>
    );
}