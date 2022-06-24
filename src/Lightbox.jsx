import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

export const Lightbox = ({images, lightboxController}) => {
    const sources = Object.values(images);

    return (
        <FsLightbox 
            toggler={lightboxController.toggler} 
            sources={sources} 
            slide={lightboxController.slide}
        />
    );
}