import { Cities } from "../types/cities";
import { Vacancies } from "../types/vacancies";

export interface IVacanciesLisProps {
    vacancies: Vacancies[],
    featuredList: Vacancies[],
    loading: boolean,
    addFeaturedVacancies: (vacancies: Vacancies) => void,
    cities: Cities[],
    listLength: string | number,
    addSelectedVacancies: (vacancy: string) => void,
    selectedId: string[],
    userAge: string,
}