import { EditUser } from "../models/types/users";

export const isEmptyObject = (checkObj: object): boolean => {
    for (var keyCheck in checkObj) {
        if (checkObj.hasOwnProperty(keyCheck)) {
            console.log('Вызов 1');
            return true;
        }
    }
    console.log('Вызов 2');

    return false;
}
export const checkData = (object: EditUser): { [index: string]: string | undefined } => {
    const changedData: { [index: string]: string | undefined } = {}
    if (typeof object === 'object' &&
        object !== null && !Array.isArray(object)) {
        if (object.repeatPassword) {

            delete object.repeatPassword
        }
        for (let keyEditUser in object) {

            if (object[keyEditUser]) {
                console.log(object[keyEditUser]);
                changedData[keyEditUser] = object[keyEditUser]
            }

        }


    }
    return changedData
}
