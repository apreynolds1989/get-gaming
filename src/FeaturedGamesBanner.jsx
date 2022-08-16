import { Box, Typography } from "@mui/material";
import React from "react";

export const FeaturedGamesBanner = ({isMobileSize}) => {
    return (
        <Box
            sx={{
                marginTop: 15,
                marginX: isMobileSize ? '5vw' : '8vw',
            }}
        >
            <Typography
                variant={isMobileSize ? 'h5' : 'h3'}
                sx={{
                    color: '#6B3FA0', 
                    fontWeight: 'bold',
                    textAlign: 'center',
                    borderBottom: '2px solid #6B3FA0',
                }}
            >
                FEATURED GAMES
            </Typography>
        </Box>
    );
}