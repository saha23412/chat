import { Cities } from "../types/cities";

export interface ISelectCustom {
    label: string,
    onChange: (value: string) => void,
    selectValue: string,
    options: Cities[],
    error?: boolean,
    children?: JSX.Element,
}