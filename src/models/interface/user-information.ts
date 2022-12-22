import { User } from "../types/users";

export interface IUserInformationProps {
    user: User,
    listLength: string | number,
    getCurrentUser:(id:string)=>void,
}