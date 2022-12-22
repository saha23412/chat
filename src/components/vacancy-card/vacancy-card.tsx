import React from 'react'
import { IVacancyCardProps } from '../../models/interface/vacany-card'
import { Alert, Box, Button, Icon, Rating, Typography } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import CurrencyRubleOutlinedIcon from '@mui/icons-material/CurrencyRubleOutlined';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './vacancy-card.scss'

const VacancyCard: React.FC<IVacancyCardProps> = ({
  vacancy, addSelectedVacancies,
  isSelectedId, userAge,
  selectionСheck, addFeaturedVacancies }) => {
  return (
    <Box className='VacancyCard'>
      <Box className={`VacancyCard-base ${+userAge < vacancy.minimumAge ? 'VacancyCard-wrapper-error' : 'VacancyCard-wrapper'}`}>
        <Typography className='VacancyCard-base-title'>
          <Typography component={'span'}>
            {vacancy.jobTitle}
            <Icon>
              <BadgeOutlinedIcon color="primary" />
            </Icon>
          </Typography>
          <Icon>
            <FavoriteBorderIcon sx={{ cursor: 'pointer' }} onClick={() => addFeaturedVacancies(vacancy)} color={`${selectionСheck ? 'primary' : 'disabled'}`} />
          </Icon>
        </Typography>
        <Typography component={'span'}>
          {`"${vacancy.companyTitle}"`}
          <Icon>
            <WorkIcon color="primary" />
          </Icon>
        </Typography>
        <Typography className='VacancyCard-wrapper-rating' component={'span'}>
          Рейтинг работодателя : {vacancy.rating}
          <Rating name="half-rating-read" defaultValue={vacancy.rating} precision={0.5} readOnly />
        </Typography>
        <Typography component={'span'}>
          {vacancy.citie}
          <Icon>
            <LocationCityOutlinedIcon color="primary" />
          </Icon>
        </Typography>
        <Typography>
          {vacancy.wages}
          <Icon>
            <CurrencyRubleOutlinedIcon color="primary" />
          </Icon>
        </Typography>
        <Typography  >
          Минимиальный возраст: {vacancy.minimumAge} лет
        </Typography>
        <Typography className='VacancyCard-wrapper-title'>
          {vacancy.title}
        </Typography>
        {
          isSelectedId
            ? <Alert sx={{ padding: '2px 15px', display: 'flex', justifyContent: 'center' }} severity="success">
              Отклик успешно оставлен!
            </Alert>
            : <Button disabled={+userAge < vacancy.minimumAge} className='VacancyCard-wrapper-button' onClick={() => addSelectedVacancies(vacancy.id)}>
              Откликнуться на вакансию
            </Button>
        }
      </Box>
    </Box>

  )
}

export default VacancyCard