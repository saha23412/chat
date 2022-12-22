import { Cities } from "../types/cities";
import { User } from "../types/users";

export interface IAnimatedRoutesProps {
    users: User[],
    auth: boolean,
    exitAccount: () => void,
    cities: Cities[],
    createNewUser: (user: User) => void,
}