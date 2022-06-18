import React, { useState } from "react";
import { Typography, Button } from "@mui/material";

export const ToggleDesc = ({ desc }) => {
    let [chars, changeChars] = useState(desc.slice(0, 700));

    const showMore = () => {
        changeChars(chars = desc);
    };

    const showLess = () => {
        changeChars(chars = desc.slice(0, 1000));
    };

    return (
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
    );
};