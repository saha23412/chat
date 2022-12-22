import React from 'react'
import { MenuItem, AppBar, Toolbar, Icon, Box, Stack } from '@mui/material';
import { Typography } from 'antd';
import { WorkHistorySharp, ExitToApp } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { INavbarProps } from '../../models/interface/navbar';
import "./navbar.scss"
import RequiredNavbar from './../required-navbar/required-navbar';
import NotRequiredNavbar from '../not-required-navbar/not-required-navbar';

const Navbar: React.FC<INavbarProps> = ({ exitAccount, auth }) => {
  return (
    <AppBar position='static'>
      <Toolbar className='Navbar'>
        <Box className='Navbar-logo'>
          <Typography className='Navbar-logo-title'>
            Работа.ru
          </Typography>
          <Icon>
            <WorkHistorySharp />
          </Icon>
        </Box>
        {auth
          ? <RequiredNavbar exitAccount={exitAccount} />
          : <NotRequiredNavbar />
        }
      </Toolbar>
    </AppBar>

  )
}

export default Navbar