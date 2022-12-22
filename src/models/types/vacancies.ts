export type Vacancies = {
    id: string,
    jobTitle: string,
    companyTitle: string,
    title: string,
    minimumAge: number,
    wages: number,
    citie: string,
    rating: number,
}

export type VacanciesState = {
    list: Vacancies[],
    featuredList: Vacancies[],
    selectedId: string[],
    loading: boolean,
    error: string,
}
