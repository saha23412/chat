import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Cities, CitiesState } from "../../models/types/cities"
const initialState: CitiesState = {
    list: [],
}
export const fetchCities = createAsyncThunk<Cities[], undefined, { rejectValue: string }>(
    'cities/fetchCities',
    async function (_, { rejectWithValue }) {

        const response = await fetch('http://localhost:3001/cities')
        if (!response.ok) {
            return rejectWithValue('Ошибка сервера')
        }
        const data = await response.json()
        return data as Cities[]

    }
)
const citiesSlice = createSlice({
    name: "cities",
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCities.fulfilled, (state, action: PayloadAction<Cities[]>) => {
                state.list = action.payload
            })
    }
})
export default citiesSlice.reducer