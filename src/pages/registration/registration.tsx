import React, { useEffect } from 'react'
import { Typography, Button } from "@mui/material"
import { nanoid } from 'nanoid'
import { useForm, useFormState, Controller } from 'react-hook-form'
import { IRegistretionProps } from '../../models/interface/registretion'
import "./registration.scss"
import { User } from '../../models/types/users'
import { loginValidationRequired, nameValidationRequired, passwordValidationRequired, surnameValidationRequired, ageValidationRequired, selectValidationRequired } from '../../validation/validation-required'
import InputController from '../../components/input-controller/input-controller'
import Prompt from '../../components/prompt/prompt'
import SelectCustom from '../../components/select-custom/select-custom'
import { useAppDispatch } from './../../hook/hook';
import { fetchUsers } from '../../store/slice/usersSlice'
import { fetchCities } from '../../store/slice/citiesSlice'

const Registration: React.FC<IRegistretionProps> = ({ cities, users, createNewUser, onSubmit, textError }) => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
        dispatch(fetchCities())
    }, [dispatch])
    const { handleSubmit, control } = useForm<User>({
        mode: 'onSubmit',
        defaultValues: {
            id: nanoid(),
            name: '',
            surname: '',
            age: '',
            login: '',
            password: '',
            cities: ''
        },
    })
    const { errors } = useFormState({ control })

    return (
        <div className='Registration-form'>
            <Typography variant='h5' component="div" className="Registration-form-title">
                Регистрация
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputController
                    control={control}
                    name='name'
                    label='Имя'
                    rules={nameValidationRequired}
                    error={errors.name?.message}
                    helperText={errors.name?.message}
                />
                <InputController
                    control={control}
                    name='surname'
                    label='Фамилия'
                    rules={surnameValidationRequired}
                    error={errors.surname?.message}
                    helperText={errors.surname?.message}
                />
                <InputController
                    control={control}
                    name='age'
                    label='Возраст'
                    rules={ageValidationRequired}
                    error={errors.age?.message}
                    helperText={errors.age?.message}
                />
                <InputController
                    control={control}
                    name='login'
                    label='Логин'
                    rules={loginValidationRequired}
                    error={errors.login?.message}
                    helperText={errors.login?.message}
                />
                {textError
                    ? <Typography className='Registration-form-error'>{textError}</Typography>
                    : null
                }
                <InputController
                    control={control}
                    name='password'
                    label='Пароль'
                    type='password'
                    rules={passwordValidationRequired}
                    error={errors.password?.message}
                    helperText={errors.password?.message}
                />
                {
                    cities.length > 0
                        ? (
                            <Controller
                                control={control}
                                name='cities'
                                rules={selectValidationRequired}

                                render={({ field }) => {
                                    return (
                                        <SelectCustom
                                            error={!!errors.cities?.message}
                                            label='Город'
                                            selectValue={field.value}
                                            onChange={(e) => field.onChange(e)} options={cities}
                                        >
                                            <Typography className='Registration-form-error'>
                                                {errors.cities?.message}
                                            </Typography>
                                        </SelectCustom>
                                    )
                                }}
                            />

                        )
                        : null
                }

                <Button
                    type='submit'
                    variant='contained'
                    fullWidth={true}
                    sx={{
                        marginTop: 2
                    }}
                >
                    Зарегистрироваться
                </Button>
                <Prompt
                    path='/login'
                    question='У вас уже есть аккаунт?'
                    linkText='Пройдите авторизацию'
                />

            </form>
        </div >
    )
}

export default Registration