import React from 'react';
import { ImageList, ImageListItem } from '@mui/material';

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

export const Gallery = () => {
    return (
        <ImageList
        sx={{
            width: 500,
            // height: 450,
        }}
        cols={3}
        rowHeight={164}
        >
            {imageNames.map((image) => (
                <ImageListItem key={image}>
                    <img 
                        src={images[image]}
                        loading='lazy'
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}