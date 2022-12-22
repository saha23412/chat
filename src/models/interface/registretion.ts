import { Cities } from "../types/cities"
import { User } from "../types/users"
export interface IRegistretionProps {
    cities: Cities[],
    users: User[],
    textError?:string,
    createNewUser: (user: User) => void,
    onSubmit: (data: User, event?: React.BaseSyntheticEvent) => void,

}
