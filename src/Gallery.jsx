import React, { useState } from 'react';
import { Box, Typography, ImageList, ImageListItem, useMediaQuery } from '@mui/material';
import { Lightbox } from './Lightbox';
import { HeaderAppBar } from './HeaderAppBar';
import { Footer } from './Footer';

// importAll() and require.context was found by searching how to import all photos
// from a file in React. I followed this information:
// https://shaquillegalimba.medium.com/how-to-import-multiple-images-in-react-1936efeeae7b
const importAll = (arrayOfFiles) => {
    let images = {};
    arrayOfFiles.keys().forEach((item, index) => {
        images[item.replace('./', '')] = arrayOfFiles(item);
    });
    return images;
};

const images = importAll(require.context('./photos', false, /\.(png|jpe?g|svg)$/));
const imageNames = Object.keys(images);

// Utilizing fslightbox-react
// https://fslightbox.com/react/documentation
export const Gallery = () => {
    const mobileSize = useMediaQuery('(max-width:600px)');

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
            <HeaderAppBar />
            <Box
            display='flex'
            flexDirection='column'
            maxWidth={700}
            mx='auto'
            sx={{
                marginTop: 12,
                marginBottom: 10,
            }}
            >
                <Typography 
                variant={mobileSize ? 'h4' : 'h3'} 
                color='#6B3FA0'
                borderBottom={1}
                borderColor='#6B3FA0' 
                sx={{ 
                    fontWeight: 'bold',
                }}
                >
                    Gallery
                </Typography>
                <ImageList
                    sx={{
                        alignSelf: 'center',
                        width: {
                            xs: 164,
                            sm: 500,
                        },
                        // height: 450,
                    }}
                    cols={mobileSize ? 1 : 3}
                    gap={8}
                    rowHeight={164}
                >
                    {/* can't figure out how to hande vertical photos */}
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