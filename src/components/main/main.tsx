import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import './main.scss'

const Main: React.FC = () => {

    return (
        <div className='Main'>
            <Typography className="Main-title">
                Работа найдется для каждого.
            </Typography>
            <Box className="Main-search">
                <TextField className="Main-search-input" label="Профессия, должность" variant="standard" />
                <Box className="Main-search-button">

                    <Button fullWidth variant="contained">Найти работу</Button>
                </Box>
            </Box>
            <Typography className="Main-description" >
                Поможем всем найти работу ,откликайся на вакансии ,которые  тебе понравились и жди ответа от работодателя.
            </Typography>
        </div>



    )
}

export default Main