import { Alert, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { IProgressBarProps } from '../../models/interface/progress-bar'
import './progress-bar.scss'
import plural from 'plural-ru'
const ProgressBar: React.FC<IProgressBarProps> = ({ value }) => {
    return (
        <Box className='ProgressBar' >
            <Box className='ProgressBar-wrapper'>
                <Typography>{value} / 10</Typography>
                {
                    value >= 10
                        ? <Box className='ProgressBar-wrapper-alert'>
                            <Alert sx={{ width: 450, display: 'flex', justifyContent: 'center' }} severity="info">Вы откликнулись на 10 вакансий.Ожидайте ответа</Alert>
                        </Box>
                        : <Typography className='ProgressBar-title'><span>{`Откликнитесь ещё ${10 - Number(value)} ${plural(10 - Number(value), 'раз', 'раза', 'раз')}. `}</span>
                            По статистике для одного приглашения требуется около десяти откликов.
                        </Typography>
                }

            </Box>
            <Box className='ProgressBar-scale-wrapper'>
                <progress className='ProgressBar-scale' value={value} max="10"></progress>

            </Box>
        </Box>
    )
}

export default ProgressBar