import { IRules } from './../models/interface/input-controller';
export const passwordValidation: IRules = {
    required: false,
    validate: (value: string) => {
        if (value !== '') {
            if (value.length < 6) {
                return 'Пароль должен быть длинее 6-ти символов'
            }
            return true
        }
        return true
    }
}
export const nameValidation: IRules = {
    required: false,
    validate: (value: string) => {
        if (value !== '') {
            if (/[0-9]/.test(value)) {
                return 'Имя должно быть без чисел'
            }
            if (value.length === 1) {
                return 'Имя должно быть длинее 1 символова'

            }
            return true
        }
        return true
    }
}
export const surnameValidation: IRules = {
    required: false,
    validate: (value: string) => {
        if (value !== '') {
            if (/[0-9]/.test(value)) {
                return 'Фамилия должна быть без чисел'
            }
            if (value.length === 1) {
                return 'Фамилия должна быть длинее 1 символова'

            }
            return true
        }
        return true
    }
}
export const selectValidation: IRules = {
    required: false,
    validate: () => true,
}