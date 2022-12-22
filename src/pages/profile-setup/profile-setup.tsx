import React, { useEffect, useState } from 'react'
import { SubmitHandler } from 'react-hook-form';
import EditProfile from '../../components/edit-profile/edit-profile';
import { useAppSelector, useAppDispatch } from '../../hook/hook';
import { EditUser } from '../../models/types/users';
import { fetchCities } from '../../store/slice/citiesSlice';
import { editUser } from '../../store/slice/usersSlice';

const ProfileSetup: React.FC = () => {
    const dispatch = useAppDispatch()
    const [textError, setTextError] = useState<string>('')
    useEffect(() => {
        dispatch(fetchCities())
    }, [dispatch])

    const selectRedux = useAppSelector(state => ({
        cities: state.cities.list,
        id: state.users.currentUser.id,
    }))

    const onSubmit: SubmitHandler<EditUser> = (data, event) => {
        event?.preventDefault()
        if (data.password.length > 0 && data.password === data.repeatPassword) {
            console.log('yea')
            dispatch(editUser({ user: data, id: selectRedux.id }))
            setTextError('')
        } else if (!data.password) {
            dispatch(editUser({ user: data, id: selectRedux.id }))
            setTextError('')
        } else {
            setTextError('Разные пароли,попробуйте повторить попытку')
        }
    };
    //Редактировать профиль
    return (
        <EditProfile
            textError={textError}
            onSubmit={onSubmit}
            cities={selectRedux.cities}
        />
    )
}

export default ProfileSetup