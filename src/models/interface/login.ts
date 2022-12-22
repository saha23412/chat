import { LoginUser } from "../types/users";

export interface ILogin {
    auth: boolean,
    error?: string,
    loading: boolean,
    onSubmit: (data: LoginUser, event?: React.BaseSyntheticEvent) => void,

}