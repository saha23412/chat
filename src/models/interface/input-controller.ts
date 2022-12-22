
export interface IRules {
    required: string | boolean,
    validate: (value: string) => string | boolean
}
export interface IInputControllerProps {
    control: any,
    name: string,
    label: string,
    type?: string,
    error?: string,
    helperText?: string,
    rules: IRules,
}

