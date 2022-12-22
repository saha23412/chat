import React from 'react'
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import { IInputControllerProps } from '../../models/interface/input-controller';


const InputController: React.FC<IInputControllerProps> = ({ name, label, error, helperText, rules, control, type }) => {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            
            render={({ field }) => {
                return (
                    <TextField
                        label={label}
                        size='small'
                        margin='normal'
                        type={type}
                        className='Registration-form-input'
                        onChange={(e) => field.onChange(e)}
                        fullWidth={true}
                        variant="standard"
                        autoComplete="off"
                        value={name==="login"?field.value.trim().toLowerCase():field.value.trim()}
                        error={!!error}
                        helperText={helperText}
                    />
                )
            }}
        />
    )
}

export default InputController