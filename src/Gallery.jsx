import React, { useState } from 'react';
import { ImageList, ImageListItem } from '@mui/material';
import FsLightbox from "fslightbox-react";
import { Lightbox } from './Lightbox';

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
            <ImageList
                sx={{
                    width: 500,
                    // height: 450,
                }}
                cols={3}
                gap={8}
                rowHeight={164}
            >
                {/* can't figure out how to hande vertical photos */}
                {imageNames.map((imageName, index) => (
                    <ImageListItem key={imageName}>
                        <img 
                            src={images[imageName]}
                            onClick={() => openLightboxOnSlide(index + 1)}
                            loading='lazy'
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <Lightbox
                images={images} 
                lightboxController={lightboxController}
            />
        </>
    );
}