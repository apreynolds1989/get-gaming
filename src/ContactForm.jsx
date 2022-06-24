import React from 'react';
import { Card, CardContent, Typography, Box, TextField, useMediaQuery } from '@mui/material';

export const ContactForm = () => {
    const variantSize = useMediaQuery('(min-width:600px)') ? 'h3' : 'h4';

    return (
        <Box
        display='flex'
        flexDirection='column'
        maxWidth={700}
        mx='auto'
        mb={5}
        sx={{
            marginTop: {
                sm: 15,
                md: 5
            }
        }}
        >
            <Typography 
            variant={variantSize} 
            color='#6B3FA0'
            borderBottom={1}
            borderColor='#6B3FA0' 
            sx={{ 
                fontWeight: 'bold',
            }}
            >
                Contact Us
            </Typography>
            <Card 
            sx={{ 
                borderRadius: 5,
                minWidth: 200, 
                px: 7, 
                mt: 1, 
                bgcolor: '#F0ECF6' 
              }}
            >
                <CardContent>
                    <Box
                    display='flex'
                    sx={{
                        flexDirection: {
                            xs: 'column',
                            sm: 'row'
                        }
                    }} 
                    flexDirection='row'
                    >
                        <TextField
                        required
                        label='First Name'
                        placeholder='Enter Your First Name'
                        variant='outlined'
                        color='secondary'
                        margin='dense'
                        fullWidth
                        />
                        <TextField
                        required
                        label='Last Name'
                        placeholder='Enter Your Last Name'
                        variant='outlined'
                        color='secondary'
                        margin='dense'
                        fullWidth
                        sx={{
                            marginLeft: {
                                xs: 0,
                                sm: 2
                            }
                        }}
                        />
                    </Box>
                    <TextField
                        required
                        label='Email'
                        placeholder='Enter Your Email'
                        variant='outlined'
                        color='secondary'
                        margin='dense'
                        fullWidth
                    />
                    <TextField
                        multiline
                        rows={10}
                        required
                        label='Message'
                        placeholder='Leave us a message'
                        variant='outlined'
                        color='secondary'
                        margin='dense'
                        fullWidth
                    />
                </CardContent>
            </Card>
        </Box>
    );
};