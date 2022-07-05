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

// Implemented form and form validation using MUI, react-hook-form and Yup
// following the tutorial in the following link:
// https://www.bezkoder.com/react-hook-form-material-ui-validation/
export const ContactForm = () => {
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
                                minWidth={1}
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
                                    // flexGrow appearsto be causing visual bug
                                    // text boxes are overflowing the box container
                                    // flexGrow={1}
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
                                    // flexGrow={1}
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




// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export const ContactForm = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_ae1ledj', 'template_58pmr9q', form.current, 'GS7Vrdt8sIYVZCl0L')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="firstName" />
//       <label>Email</label>
//       <input type="email" name="email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };