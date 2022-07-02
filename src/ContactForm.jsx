import React, { Fragment } from 'react';
import { 
    Card, 
    CardContent, 
    Typography, 
    Box, 
    TextField, 
    Button, 
    useMediaQuery
 } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { HeaderAppBar } from './HeaderAppBar';
import { Footer } from './Footer';
import { MailToButton } from './MailToButton'

// Implemented form and form validation using MUI, react-hook-form and Yup
// following the tutorial in the following link:
// https://www.bezkoder.com/react-hook-form-material-ui-validation/
export const ContactForm = () => {
    const isMobileSize = useMediaQuery('(max-width:600px)');

    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .required('First Name is required'),
        lastName: Yup.string()
            .required('Last Name is required'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        message: Yup.string()
            .required('Please enter your message')
    });
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });
    const onSubmit = data => {
        console.log(JSON.stringify(data, null, 2));
    };

    return (
        <>
            <HeaderAppBar isMobileSize={isMobileSize} />
            <Box
                display='flex'
                flexDirection='column'
                maxWidth={700}
                mx='auto'
                sx={{
                    marginTop: 12,
                    marginBottom: 10,
                }}
            >
                <Typography 
                    variant={isMobileSize ? 'h4' : 'h3'} 
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
                                id='firstName'
                                name='firstName'
                                label='First Name'
                                placeholder='Enter Your First Name'
                                variant='outlined'
                                color='secondary'
                                margin='dense'
                                fullWidth
                                {...register('firstName')}
                                error={errors.firstName ? true : false}
                            />
                            <Typography variant='inherit' color='#6B3FA0'>
                                {errors.firstName?.message}
                            </Typography>
                            <TextField
                                required
                                id='lastName'
                                name='lastName'
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
                                {...register('lastName')}
                                error={errors.lastName ? true : false}
                            />
                            <Typography variant='inherit' color='#6B3FA0'>
                                {errors.lastName?.message}
                            </Typography>
                        </Box>
                        <TextField
                            required
                            id='email'
                            name='email'
                            label='Email'
                            placeholder='Enter Your Email'
                            variant='outlined'
                            color='secondary'
                            margin='dense'
                            fullWidth
                            {...register('email')}
                                error={errors.email ? true : false}
                            />
                            <Typography variant='inherit' color='#6B3FA0'>
                                {errors.email?.message}
                            </Typography>
                        <TextField
                            multiline
                            rows={10}
                            required
                            id='message'
                            name='message'
                            label='Message'
                            placeholder='Leave us a message'
                            variant='outlined'
                            color='secondary'
                            margin='dense'
                            fullWidth
                            {...register('message')}
                                error={errors.message ? true : false}
                            />
                            <Typography variant='inherit' color='#6B3FA0'>
                                {errors.message?.message}
                            </Typography>
                        <Box
                            paddingTop={2}
                            display='flex'
                            justifyContent='center'
                        >
                            <Button
                                variant='contained'
                                sx={{
                                    paddingX: 5,
                                    bgcolor: '#6B3FA0',
                                    fontWeight: 'bold',
                                    '&:hover' : {
                                        bgcolor: 'black',
                                    }
                                }}
                                onClick={handleSubmit(onSubmit)}
                            >
                                Submit
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
            {/* Backup Option */}
            <MailToButton label="Write me an E-Mail" mailto="mailto:test@gmail.com" />
            <Footer />
        </>
    );
};