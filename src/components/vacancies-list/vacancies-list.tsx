import React, { useState, useMemo } from 'react'
import { Box, TextField, Button } from '@mui/material'
import { IVacanciesLisProps } from '../../models/interface/vacancies-list'
import { useAppDispatch } from './../../hook/hook';
import { fetchVacancies, sortByFavorites, sortVacancies } from '../../store/slice/vacanciesSlice'
import ProgressBar from '../progress-bar/progress-bar'
import VacancyCard from '../vacancy-card/vacancy-card'
import MotionLayout from '../motion-layout/motion-layout'
import SelectCustom from '../select-custom/select-custom'
import { Watch } from 'react-loader-spinner'
import { Cities } from '../../models/types/cities';
import './vacancies-list.scss'

const VacanciesList: React.FC<IVacanciesLisProps> = ({
  vacancies, listLength, addFeaturedVacancies,
  addSelectedVacancies, selectedId, loading,
  cities, userAge, featuredList }) => {

  const dispatch = useAppDispatch()
  console.log('render')
  const options: Cities[] = useMemo(() => ([...cities]), [cities])
  const [selectedValue, setSelectedValue] = useState<string>('')
  const [search, setSearch] = useState<string>('')
  const resetSortCities = (): void => {
    dispatch(fetchVacancies())
    setSelectedValue('')
    setSearch('')
  }
  const sortCities = (nameCities: string): void => {
    setSelectedValue(nameCities)
    dispatch(sortVacancies(nameCities))
  }

  return (
    <MotionLayout>
      <Box className='VacanciesList'>
        {/* <ProgressBar value={listLength} /> */}
        <Box className='VacanciesList-search'>
          <Box className='VacanciesList-search-select'>
            <SelectCustom
              label='Город'
              options={options}
              onChange={sortCities}
              selectValue={selectedValue}
            />
          </Box>
          <TextField
            sx={{ width: '45%' }}
            placeholder='Поиск...'
            value={search}
            onChange={event => { setSearch(event.target.value) }}
          />
          <Button variant="outlined" sx={{ width: '20%' }} size='large' onClick={() => resetSortCities()}>Сбросить фильтры </Button>

        </Box>
        
        {
          loading
            ? <Box className='VacanciesList-loading'>
              <Watch
                height="60"
                width="60"
                radius="48"
                color="#9499ff"
                ariaLabel="watch-loading"
                visible={true}
              />
            </Box>
            : (
              <Box sx={{ scrollbarColor: '#1976d2', scrollbarWidth: '40px' }} className='VacanciesList-wrapper' >
                {vacancies.filter((vacancy) => {
                  if (search === "") {
                    return vacancy
                  } else if (vacancy.jobTitle.toLowerCase().includes(search.trim().toLowerCase())) {
                    return vacancy
                  }
                  return false
                }).map(vacancy => <VacancyCard
                  selectionСheck={!!featuredList.find(vacancies => vacancies.id === vacancy.id)}
                  addFeaturedVacancies={addFeaturedVacancies}
                  key={vacancy.id}
                  userAge={userAge}
                  vacancy={vacancy}
                  isSelectedId={selectedId.includes(vacancy.id)}
                  addSelectedVacancies={addSelectedVacancies} />)}
              </Box>
            )
        }
      </Box>
    </MotionLayout>

  )
}

export default VacanciesList