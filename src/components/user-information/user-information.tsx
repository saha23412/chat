import React from 'react'
import { Box, Icon, Typography } from '@mui/material'
import { IUserInformationProps } from '../../models/interface/user-information'
import './user-information.scss'

import { PersonOutlineOutlined } from '@mui/icons-material'
import ProgressBar from '../progress-bar/progress-bar'

const UserInformation: React.FC<IUserInformationProps> = ({ user, listLength, getCurrentUser }) => {
    const currentId = localStorage.getItem('idUser')

    return (
        <>
            <Box className='User-information-wrapper-title'>
                <Typography className='User-information-title'>
                    Информация о вас
                    <Icon sx={{ marginLeft: '10px' }}>
                        <PersonOutlineOutlined sx={{ width: '30px' }} />
                    </Icon>
                </Typography>
            </Box>


            <Box className='User-information-wrapper'>
                <Box className='User-information-wrapper-p'>
                    <Typography>Имя:<span>{user.name}</span></Typography>
                    <Typography>Фамилия:<span>{user.surname}</span></Typography>
                    <Typography>Возраст:<span>{user.age}</span></Typography>
                    <Typography>Город:<span>{user.cities}</span></Typography>
                    <Typography>Логин:<span>{user.login}</span></Typography>
                </Box>
            </Box>
            <Box className="User-information-progress">
                <ProgressBar value={listLength} />
            </Box>
        </>



    )
}

export default UserInformation