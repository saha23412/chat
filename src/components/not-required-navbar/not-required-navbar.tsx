import { MenuItem, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

type Props = {}

const NotRequiredNavbar = (props: Props) => {
    return (
        <>
            <Stack
                direction="row"
                spacing={8}
            >
                <Link to="/login">
                    <MenuItem>Войти</MenuItem>
                </Link>
                <Link to="/">
                    <MenuItem>Регистрация</MenuItem>
                </Link>
            </Stack>

        </>
    )
}

export default NotRequiredNavbar