import { IRules } from "../models/interface/input-controller"
import { login, required_field } from "./rules"


export const loginValidationRequired: IRules = {
    required: required_field,
    validate: (value: string) => {
        if (!login.test(value)) {
            return 'Неверный формат логина'

        }
        return true
    }
}
export const passwordValidationRequired: IRules = {
    required: false,
    validate: (value: string) => {

        if (value.length < 6) {
            return 'Пароль должен быть длинее 6-ти символов'
        }
        return true
    }
}
export const repeatPasswordValidationRequired: IRules = {
    required: required_field,
    validate: (value: string) => {

        if (value.length < 6) {
            return 'Пароль должен быть длинее 6-ти символов'
        }
        return true
    }
}
export const nameValidationRequired: IRules = {
    required: required_field,
    validate: (value: string) => {
        if (/[0-9]/.test(value)) {
            return 'Имя должно быть без чисел'
        }
        if (value.length === 1) {
            return 'Имя должно быть длинее 1 символова'

        }
        return true
    }
}
export const surnameValidationRequired: IRules = {
    required: required_field,
    validate: (value: string) => {
        if (/[0-9]/.test(value)) {
            return 'Фамилия должна быть без чисел'
        }
        if (value.length === 1) {
            return 'Фамилия должна быть длинее 1 символова'

        }
        return true
    }
}
export const selectValidationRequired: IRules = {
    required: required_field,
    validate: (value: string) => {
        if (value.length === 0) {
            return 'Выберите один из городов'

        }
        return true
    }
}
export const ageValidationRequired: IRules = {
    required: required_field,
    validate: (value: string) => {
        if (/[a-zA-Z]|[а-яА-Я]/.test(value)) {
            return 'Возраст должен состоять только из цифр '
        }
        if (/^0/.test(value)) {
            return 'Возраст не должен начинаться с 0'

        }
        if (+value > 100) {
            return `Некорректный возраст`
        }
        return true
    }
}