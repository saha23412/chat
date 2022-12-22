import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hook/hook'
import { Vacancies } from '../../models/types/vacancies';
import { addFeaturedList, addSelecteList, fetchVacancies } from '../../store/slice/vacanciesSlice'
import VacanciesList from './../../components/vacancies-list/vacancies-list';

const VacanciesBlock: React.FC = () => {
    const dispatch = useAppDispatch()
    const addFeaturedVacancies = (vacancies: Vacancies): void => {
        dispatch(addFeaturedList(vacancies))
    }
    const addSelectedVacancies = (vacanciesId: string): void => {
        dispatch(addSelecteList(vacanciesId))
    }
    const selectRedux = useAppSelector(state => ({
        vacancies: state.vacancies.list,
        loading:state.vacancies.loading,
        featuredList: state.vacancies.featuredList,
        selectedId: state.vacancies.selectedId,
        userAge: state.users.currentUser.age,
        cities: state.cities.list,
    }))

    return (
        <VacanciesList
            selectedId={selectRedux.selectedId}
            featuredList={selectRedux.featuredList}
            loading={selectRedux.loading}
            userAge={selectRedux.userAge}
            cities={selectRedux.cities}
            addFeaturedVacancies={addFeaturedVacancies}
            vacancies={selectRedux.vacancies}
            listLength={selectRedux.selectedId.length}
            addSelectedVacancies={addSelectedVacancies}
        />

    )
}

export default VacanciesBlock