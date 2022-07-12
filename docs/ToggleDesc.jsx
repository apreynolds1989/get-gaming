import React, { useState } from "react";
import { Typography, Button } from "@mui/material";

export const ToggleDesc = ({ desc }) => {
    const limitedChars = desc.slice(0, 700) + '... ';
    let [gameDesc, setGameDesc] = useState(limitedChars);

    const showMore = () => {
        setGameDesc(desc);
        setIsShowingFullDesc(!isShowingFullDesc);
    };

    const showLess = () => {
        setGameDesc(limitedChars);
        setIsShowingFullDesc(!isShowingFullDesc);
    };

    const [isShowingFullDesc, setIsShowingFullDesc] = useState(false);

    return (
        <>
            <Typography 
                fontWeight='bold' 
                color='#6B3FA0'
                borderBottom={1} 
                borderColor='#6B3FA0'
            >
                Description
            </Typography>
            <Typography 
                style={{ 
                    whiteSpace: 'break-spaces', 
                }}
                color='#201C77'
            >
                {gameDesc}
                {(isShowingFullDesc) ? (
                    <Button
                        onClick={showLess}
                        sx={{
                            lineHeight: 1,
                        }}
                    >
                        Show Less
                    </Button>
                    ) : (
                    <Button
                        onClick={showMore}
                        sx={{
                            lineHeight: 1,
                        }}
                    >
                        Show More
                    </Button>  
                )}
            </Typography>
        </>
    );
};