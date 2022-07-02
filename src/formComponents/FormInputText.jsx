import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { TextField } from '@mui/material';

export const FormInputText = ({ name, label }) => {
    const { control } = useForm({
        defaultValues: {
            TextField: '',
        }
    });

    return (
        <Controller 
            name={name}
            control={control}
            rules={{ required: true }}
            render={({ field }) => <TextField {...field } 
                                        label={label}
                                        placeholder={`Enter Your ${label}`}
                                        variant='outlined'
                                        color='secondary'
                                        margin='dense'
                                        fullWidth />
            }
        />
    );
}