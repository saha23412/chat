import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { EditUser, LoginUser, User, UsersState } from "../../models/types/users"
import { checkData, isEmptyObject } from '../../utils/utils';
const initialState: UsersState = {
    list: [],
    loading: false,
    error: '',
    currentUser: {
        id: "",
        name: "",
        surname: "",
        age: "",
        login: "",
        password: "",
        cities: ""
    },
    auth: false,
}
export const getUser = createAsyncThunk<User, string, { rejectValue: string }>(
    'users/getUser',
    async function (id, { rejectWithValue }) {
        const response = await fetch(`http://localhost:3001/users/${id}`)
        if (!response.ok) {
            return rejectWithValue('Ошибка сервера')
        }
        const data = await response.json()
        return data as User

    }
)
//Получаем авторизированного пользователя
export const fetchUsers = createAsyncThunk<User[], undefined, { rejectValue: string }>(
    'users/fetchUsers',
    async function (_, { rejectWithValue }) {
        const response = await fetch('http://localhost:3001/users')
        if (!response.ok) {
            return rejectWithValue('Ошибка сервера')
        }
        const data = await response.json()
        return data as User[]

    }
)
//Получаем всех пользователей
export const loginUser = createAsyncThunk<void, LoginUser, { rejectValue: string }>(
    'users/loginUser',
    async function (user, { rejectWithValue, dispatch }) {
        const users = await dispatch(fetchUsers())
        const { login, password } = user
        if (Array.isArray(users.payload)) {
            const verifiedUser:User[] = users.payload.filter(checkUser => (
                checkUser.login === login && checkUser.password === password
            ))
            if (verifiedUser && verifiedUser.length > 0) {
                const usersCheck = verifiedUser[0]
                localStorage.setItem('idUser', usersCheck.id)
                dispatch(addCurrentUser(usersCheck))
            } else {
                dispatch(errorAcces('Пользователя не существует,проверьте введенные данные'))
            }
        } else {
            dispatch(errorAcces('Ошибка на сервере,повторите попытку'))
        }
    }
)
//Проверяем логин и пароль пользователя
export const editUser = createAsyncThunk<void, { user: EditUser, id: string }, { rejectValue: string }>(
    'users/editUser',
    async function ({ user, id }, { rejectWithValue, dispatch }) {

        const checkUser = checkData(user)
        if (isEmptyObject(checkUser)) {
            const response = await fetch(`http://localhost:3001/users/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(checkUser)
            })
            if (!response.ok) {
                return rejectWithValue('Ошибка сервера')
            }
        } else {
            dispatch(errorAcces('Ошибка на сервере,повторите попытку'))
        }
    }
)
//Обновляем данные пользователя
export const createUser = createAsyncThunk<User, User, { rejectValue: string }>(
    'users/createUser',
    async function (user, { rejectWithValue }) {
        const response = await fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        if (!response.ok) {
            return rejectWithValue('Ошибка сервера')
        }
        const data = await response.json()
        return data as User
    }
)
//Создаем новго пользователя
const usersSlice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
        addCurrentUser(state, action: PayloadAction<User>) {
            state.auth = true
            state.currentUser = action.payload
        },
        resetCurrentUser(state) {
            state.auth = false
            state.currentUser = {
                id: "",
                name: "",
                surname: "",
                age: "",
                login: "",
                password: "",
                cities: ""
            }
            localStorage.removeItem('idUser')
        },
        errorAcces(state, action: PayloadAction<string>): void {
            state.error = action.payload

        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state, action) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
                state.list = action.payload
                state.loading = false
            })
            .addCase(loginUser.pending,(state)=>{
                state.loading = true;
                state.error = ''; 
            })
            .addCase(createUser.pending, (state, action) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(getUser.fulfilled, (state, action: PayloadAction<User>) => {
                state.currentUser = action.payload
                state.loading = false
            })

    }
})
export const { addCurrentUser, errorAcces, resetCurrentUser } = usersSlice.actions

export default usersSlice.reducer