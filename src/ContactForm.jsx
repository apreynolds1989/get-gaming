import React, { useRef } from 'react';
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
import emailjs from '@emailjs/browser';
import { HeaderAppBar } from './HeaderAppBar';
import { Footer } from './Footer';
import { useState } from 'react';

// Implemented form and form validation using MUI, react-hook-form and Yup
// following the tutorial in the following link:
// https://www.bezkoder.com/react-hook-form-material-ui-validation/
export const ContactForm = () => {
    const [isEmailSent, setIsEmailSent] = useState(false);

    const isMobileSize = useMediaQuery('(max-width:600px)');
    const form = useRef();

    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .required('First Name is required'),
        lastName: Yup.string()
            .required('Last Name is required'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        subject: Yup.string()
            .required('Subject is required'),
        message: Yup.string()
            .required('Please enter your message')
    });
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });
    const sendEmail = (e) => {
        // EmailJs seems to work with react-hook-form if this is commented out?
        // e.preventDefault();
    
        emailjs.sendForm('service_ae1ledj', 'template_58pmr9q', form.current, 'GS7Vrdt8sIYVZCl0L')
        .then((result) => {
            console.log(result.text);
            setIsEmailSent(true);
            reset();
        }, (error) => {
            console.log(error.text);
        });       
      };

    const onFormSubmit = data => {
        sendEmail();
        // console.log(JSON.stringify(data, null, 2));
    };

    return (
        <>
            <HeaderAppBar isMobileSize={isMobileSize} />
            {isEmailSent && <EmailSentModal setIsEmailSent={setIsEmailSent} />}
            <Box
                display='flex'
                flexDirection='column'
                maxWidth='700px'
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
                        minWidth: '200px', 
                        px: 7, 
                        mt: 1, 
                        bgcolor: '#F0ECF6' 
                    }}
                >
                    <CardContent>
                        <form ref={form} onSubmit={handleSubmit(onFormSubmit)}>
                            <Box
                                display='flex'
                                sx={{
                                    flexDirection: {
                                        xs: 'column',
                                        sm: 'row'
                                    }
                                }} 
                            >
                                <Box
                                    display='flex'
                                    flexDirection='column'
                                    minWidth={'49.3%'}
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
                                    <Typography 
                                        variant='inherit' 
                                        color='#6B3FA0'
                                    >
                                        {errors.firstName?.message}
                                    </Typography>
                                </Box>
                                <Box
                                    display='flex'
                                    flexDirection='column'
                                    minWidth={'49.3%'}
                                >
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
                                                sm: 1
                                            }
                                        }}
                                        {...register('lastName')}
                                        error={errors.lastName ? true : false}
                                    />
                                    <Typography 
                                        variant='inherit' 
                                        color='#6B3FA0'
                                        textAlign='right'
                                    >
                                        {errors.lastName?.message}
                                    </Typography>
                                </Box>
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
                                required
                                id='subject'
                                name='subject'
                                label='Subject'
                                placeholder='Enter your email subject here'
                                variant='outlined'
                                color='secondary'
                                margin='dense'
                                fullWidth
                                {...register('subject')}
                                error={errors.subject ? true : false}
                            />
                            <Typography variant='inherit' color='#6B3FA0'>
                                {errors.subject?.message}
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
                                    type='submit'
                                    sx={{
                                        px: 5,
                                        bgcolor: '#6B3FA0',
                                        fontWeight: 'bold',
                                        '&:hover' : {
                                            bgcolor: 'black',
                                        }
                                    }}
                                >
                                    Submit
                                </Button>
                            </Box>
                        </form>
                    </CardContent>
                </Card>
            </Box>
            <Footer />
        </>
    );
};

const EmailSentModal = ({setIsEmailSent}) => {
    return (
        <Card
            
        >
            <CardContent
                sx={{ 
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    borderRadius: 5,
                    border: '1px solid black',
                    bgcolor: 'white',
                    position: 'absolute',
                    top: '25vh',
                    right: '45vw', 
                    zIndex: 'modal',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        sx={{
                            paddingLeft: 5,
                            paddingRight: 4,
                        }}
                    >
                        Email Sent!
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}
                >
                    <Button onClick={() => setIsEmailSent(false)} sx={{ 
                        minHeight: 0, 
                        minWidth: 0, 
                        padding: 0 
                        }}
                    >
                        X
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
}