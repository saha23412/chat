import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { VacanciesState, Vacancies } from "../../models/types/vacancies"

const initialState: VacanciesState = {
    list: [],
    featuredList: [],
    selectedId: [],
    loading: false,
    error: ''
}
export const fetchVacancies = createAsyncThunk<Vacancies[], undefined, { rejectValue: string }>(
    'users/fetchVacancies',
    async function (_, { rejectWithValue }) {

        const response = await fetch('http://localhost:3001/vacancies')
        if (!response.ok) {
            return rejectWithValue('Ошибка сервера')
        }
        const data = await response.json()
        return data as Vacancies[]

    }
)
export const sortVacancies = createAsyncThunk<Vacancies[], string, { rejectValue: string }>(
    'users/sortVacancies',
    async function (citie, { rejectWithValue }) {
        if (citie === 'all') {
            const data = fetchVacancies()
            if (Array.isArray(data)) {
                return data as Vacancies[]

            } else {
                return rejectWithValue('Ошибка сервера')
            }
        } else {
            const response = await fetch(`http://localhost:3001/vacancies?citie=${citie}`)
            if (!response.ok) {
                return rejectWithValue('Ошибка сервера')
            }
            const data = await response.json()
            console.log(data)
            return data as Vacancies[]
        }
    }
)

const vacanciesSlice = createSlice({
    name: "vacancies",
    initialState: initialState,
    reducers: {
        sortByFavorites(state,action:PayloadAction){
            
            state.list = state.featuredList
        },
        addSelecteList(state, action: PayloadAction<string>) {
            if (!(state.selectedId.find(vacancies => vacancies === action.payload))) {
                state.selectedId.push(action.payload)
            }
        },
        addFeaturedList(state, action: PayloadAction<Vacancies>) {
            if (!(state.featuredList.find(vacancies => vacancies.id === action.payload.id))) {
                state.featuredList.push(action.payload)
            } else {
                state.featuredList = state.featuredList.filter(vacancies => vacancies.id !== action.payload.id)
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchVacancies.pending, (state, action) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(fetchVacancies.fulfilled, (state, action: PayloadAction<Vacancies[]>) => {
                    state.list = action.payload
                    state.loading = false


            })
            .addCase(sortVacancies.pending, (state, action) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(sortVacancies.fulfilled, (state, action: PayloadAction<Vacancies[]>) => {
                state.list = action.payload
                state.loading = false
            })


    }
})
export const { addSelecteList, addFeaturedList,sortByFavorites } = vacanciesSlice.actions

export default vacanciesSlice.reducer