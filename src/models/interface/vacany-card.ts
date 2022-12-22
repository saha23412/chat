import { Vacancies } from './../../models/types/vacancies';
export interface IVacancyCardProps {
    selectionСheck: boolean,
    isSelectedId: boolean,
    addFeaturedVacancies: (vacancies: Vacancies) => void,
    vacancy: Vacancies,
    addSelectedVacancies: (vacancy: string) => void,
    userAge: string,
}
