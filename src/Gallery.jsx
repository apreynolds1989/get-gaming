import React from 'react';
import { ImageList, ImageListItem } from '@mui/material';

const importAll = (r) => {
    let images = {};
    r.keys().forEach((item, index) => {
        images[item.replace('./', '')] = r(item);
    });
    return images;
};

const images = importAll(require.context('./photos', false, /\.(png|jpe?g|svg)$/));
const imageNames = Object.keys(images);
{/* <img src={images[`IMG_0975.jpeg`]} alt="" /> */}


export const Gallery = () => {
    return (
        <ImageList
        sx={{
            width: 500,
            // height: 'fit',
        }}
        cols={3}
        rowHeight={164}
        >
            {imageNames.map((image) => (
                <ImageListItem key={image}>
                    <img 
                        src={images[image]}
                        // On MUI docs it's written as below?
                        // src={`${images[image]}?w=164&h=164&fit=crop&auto=format`}
                        // srcSet={`${images[image]}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        loading='lazy'
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}