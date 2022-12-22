import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import { useForm, useFormState, Controller } from 'react-hook-form'
import { EditUser } from '../../models/types/users'
import MotionLayout from '../motion-layout/motion-layout'
import SelectCustom from '../select-custom/select-custom';
import InputController from './../input-controller/input-controller';
import './edit-profile.scss'
import { IEditProfileProps } from './../../models/interface/edit-profile';
import { nameValidation, surnameValidation, passwordValidation, selectValidation } from '../../validation/validation-not-required';

const EditProfile: React.FC<IEditProfileProps> = ({ cities, onSubmit, textError }) => {
    const { handleSubmit, control, reset } = useForm<EditUser>({
        mode: 'onSubmit',
        defaultValues: {
            name: '',
            surname: '',
            password: '',
            repeatPassword: '',
            cities: ''
        },
    })
    const onSubmitForm = (data: EditUser) => {
        onSubmit(data)
    }
    const { errors } = useFormState({ control })
    return (
        <MotionLayout>
            <Box className='Edit-profile'>
                <form onSubmit={handleSubmit(onSubmitForm)}>
                    <InputController
                        control={control}
                        name='name'
                        label='Имя'
                        rules={nameValidation}
                        error={errors.name?.message}
                        helperText={errors.name?.message}
                    />
                    <InputController
                        control={control}
                        name='surname'
                        label='Фамилия'

                        rules={surnameValidation}
                        error={errors.surname?.message}
                        helperText={errors.surname?.message}
                    />
                    <InputController
                        control={control}
                        name='password'
                        label='Пароль'
                        type='password'
                        rules={passwordValidation}
                        error={errors.password?.message}
                        helperText={errors.password?.message}
                    />
                    <InputController
                        control={control}
                        name='repeatPassword'
                        label='Повторите пароль'
                        type='password'
                        rules={passwordValidation}
                        error={errors.repeatPassword?.message}
                        helperText={errors.repeatPassword?.message}
                    />
                    {textError
                        ? <Typography className='Edit-profile-error'>{textError}</Typography>
                        : null
                    }
                    <Controller
                        control={control}
                        name='cities'
                        rules={selectValidation}
                        render={({ field }) => {
                            return (
                                <SelectCustom
                                    error={!!errors.cities?.message}
                                    label='Город'
                                    selectValue={field.value}
                                    onChange={(e) => field.onChange(e)} options={cities}
                                >
                                    <Typography className='Edit-profile-error'>
                                        {errors.cities?.message}
                                    </Typography>
                                </SelectCustom>

                            )
                        }}
                    />
                    <Button type='submit' className='Edit-profile-button' variant='contained'>
                        <Typography className='Edit-profile-button-title'>
                            Редактировать профиль
                        </Typography>
                    </Button>
                </form>
            </Box>
        </MotionLayout>


    )
}

export default EditProfile