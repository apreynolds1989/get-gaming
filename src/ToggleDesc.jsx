import React, { useState } from "react";
import { Typography, Button } from "@mui/material";

export const ToggleDesc = ({ desc }) => {
    const limitedChars = desc.slice(0, 700);
    let [chars, changeChars] = useState(limitedChars);

    const showMore = () => {
        changeChars(chars = desc);
    };

    const showLess = () => {
        changeChars(chars = limitedChars);
    };

    return (
        <>
            <Typography 
            fontWeight={'bold'} 
            color='#6B3FA0'
            borderBottom={1} 
            borderColor={'#6B3FA0'}
            >
                Description
            </Typography>
            <Typography 
            style={{ whiteSpace: 'break-spaces' }}
            color='#201C77'
            >
                {chars}
                {(chars === desc) ? (
                    <Button
                    onClick={showLess}
                    >
                        Show Less
                    </Button>
                    ) : (
                    <Button
                    onClick={showMore}
                    >
                        Show More
                    </Button>  
                )}
            </Typography>
        </>
    );
};