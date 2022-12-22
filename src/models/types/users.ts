export type User = {
    id: string,
    name: string,
    surname: string,
    age: string,
    login: string,
    password: string,
    cities: string
}
export type LoginUser = Omit<User, 'id' | 'name' | 'surname' | 'age' | 'cities'>

export type UsersState = {
    list: User[],
    loading: boolean,
    error: string,
    currentUser: User,
    auth: boolean,
}
export type EditUser = Omit<User, 'id' | 'age' | 'login'> & { [index: string]: string | undefined, repeatPassword?: string }
export type EditUserArguments = {
    users: EditUser,
    id: string,
}