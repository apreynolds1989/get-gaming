import React, { useState } from 'react';
import { Box, Typography, ImageList, ImageListItem, useMediaQuery } from '@mui/material';
import { Lightbox } from './Lightbox';
import { HeaderAppBar } from './HeaderAppBar';
import { Footer } from './Footer';
import { EventFavoriteGame } from './EventFavoriteGame';

// Utilizing fslightbox-react
// https://fslightbox.com/react/documentation
export const Gallery = ({ header, images, imageNames, gameSiteURLOne, gameImgURLOne, altOne, gameSiteURLTwo, gameImgURLTwo, altTwo }) => {
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
                // maxWidth='700px'
                mx='auto'
                sx={{
                    marginTop: 15,
                    marginBottom: 10,
                }}
            >
                <Typography 
                    variant={isMobileSize ? 'h5' : 'h3'} 
                    color='#6B3FA0'
                    borderBottom={1}
                    borderColor='#6B3FA0' 
                    sx={{ 
                        maxWidth: '1000px',
                        alignSelf: 'center',
                        fontWeight: 'bold',
                        textAlign: isMobileSize ? 'center' : 'left',
                    }}
                >
                    {header}
                </Typography>
                <Box
                    sx={{
                        marginX: 'auto',
                        display: 'flex',
                        flexDirection: {
                            xs: 'column',
                            lg: 'row'
                        },
                        marginTop: {
                            lg: 5
                        }
                    }}
                >
                    <Box>
                        <EventFavoriteGame 
                            isMobileSize={isMobileSize} 
                            gameSiteURLOne={gameSiteURLOne}
                            gameImgURLOne={gameImgURLOne}
                            altOne={altOne}
                            gameSiteURLTwo={gameSiteURLTwo}
                            gameImgURLTwo={gameImgURLTwo}
                            altTwo={altTwo}
                        />
                    </Box>
                    <Box
                        sx={{
                            flexDirection: 'column',
                            alignSelf: 'center',
                            paddingLeft: {
                                lg: 15
                            }
                        }}
                    >
                        <Typography 
                            variant={isMobileSize ? 'h5' : 'h4'} 
                            color='#6B3FA0'
                            borderBottom={1}
                            borderColor='#6B3FA0' 
                            sx={{ 
                                marginX: 'auto',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                width: '200px'
                            }}
                        >
                            Gallery
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
                </Box>
            </Box>
            <Lightbox
                images={images} 
                lightboxController={lightboxController}
            />
            <Footer />
        </>
    );
}