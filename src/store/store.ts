import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './slice/usersSlice'
import citiesReducer from './slice/citiesSlice'
import vacanciesSlice from './slice/vacanciesSlice';
const store = configureStore({
    reducer: {
        users: usersReducer,
        cities: citiesReducer,
        vacancies: vacanciesSlice,
    }
})
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;