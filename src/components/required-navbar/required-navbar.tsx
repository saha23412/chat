import React from 'react'
import { MenuItem, Stack, Box, Icon } from '@mui/material';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';

type Props = {
    exitAccount:()=>void
}

const RequiredNavbar:React.FC<Props> = ({exitAccount}) => {
  return (
    <>

    <Stack
      direction="row"
      spacing={8}
    >
      <Link to="/account">
        <MenuItem>Личный кабинет</MenuItem>
      </Link>
      <Link to="/home">
        <MenuItem>Домашняя страница</MenuItem>
      </Link>
      <Link to="/vacancies">
        <MenuItem>Вакансии</MenuItem>
      </Link>
      <Link to="/favorites-vacancies">
        <MenuItem>Настройки профиля</MenuItem>
      </Link>
    </Stack>
    <Box className='Navbar-output' onClick={() => exitAccount()}>
      <Typography className='Navbar-output-title'>
        Выйти
      </Typography>
      <Icon>
        <ExitToApp />
      </Icon>
    </Box>
  </>
  )
}

export default RequiredNavbar