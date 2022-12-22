import { Cities } from "../types/cities";
import { EditUser } from "../types/users";

export interface IEditProfileProps {
    cities: Cities[],
    onSubmit: (data: EditUser, event?: React.BaseSyntheticEvent) => void,
    textError?: string,
}