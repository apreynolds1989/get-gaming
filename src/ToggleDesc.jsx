import React, { useState } from "react";
import { Typography, Button } from "@mui/material";

export const ToggleDesc = ({ desc }) => {
    const [chars, moreChars] = useState(desc.slice(0, 1000));
    console.log(chars);
    let expanded = false;

    const showMore = () => {
        moreChars(chars = desc);
        expanded = true;
    };

    const showLess = () => {
        moreChars(chars = desc.slice(0, 1000));
        expanded = false;
    };

    return (
        <Typography 
        style={{ whiteSpace: 'break-spaces' }}
        color='#201C77'
        >
            {chars}
            {expanded ? (
                <Button
                onClick={showLess()}
                >
                    Show Less
                </Button>
                ) : (
                <Button
                onClick={showMore()}
                >
                    Show More
                </Button>  
            )};
        </Typography>
    );
};