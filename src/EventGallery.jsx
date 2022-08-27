import React from "react";
import { Box, Typography } from "@mui/material";

export const EventGallery = ({ coverImg, attendees, date }) => {
  return (
    <Box
        sx={{
            paddingTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
    >
        <Box
            component='img'
            sx={{
                height: 233,
                width: 350,
                maxHeight: { xs: 167, md: 233 },
                maxWidth: { xs: 250, md: 350 },
            }}
            alt='Event display'
            src={coverImg}
        />
        <Box>
            <Typography
                sx={{
                    fontWeight: 'bold',
                    color: '#6B3FA0'
                }}
            >
                {date}
            </Typography>
            <Typography
                sx={{
                    fontWeight: 'bold',
                    color: '#6B3FA0'
                }}
            >
                Hosted for: {attendees}
            </Typography>
        </Box>
    </Box>
  );
}
