import React from 'react';
import { Card, CardContent, Typography, Box, TextField } from '@mui/material';

export const ContactForm = () => {
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
            variant='h4' 
            color='#6B3FA0'
            borderBottom={1}
            borderColor='#6B3FA0' 
            sx={{ 
                fontWeight: 'bold',
                display: {
                    xs: 'block',
                    sm: 'none'
                }
            }}
            >
                Contact Us
            </Typography>
            <Typography 
            variant='h3' 
            color='#6B3FA0'
            borderBottom={1}
            borderColor='#6B3FA0' 
            sx={{ 
                fontWeight: 'bold',
                display: {
                    xs: 'none',
                    sm: 'block'
                }
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
                        sx={{
                            marginRight: 1
                        }}
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
                            marginLeft: 1
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