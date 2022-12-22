export interface IRequireAuthProps {
    auth: boolean,
    children:any,
}
export interface ICheckUserProps {
    children: JSX.Element,
    auth: boolean,
    path: string
}