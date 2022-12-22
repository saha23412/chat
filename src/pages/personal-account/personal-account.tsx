import React,{useEffect} from 'react'
import { useAppSelector } from '../../hook/hook';
import MotionLayout from '../../components/motion-layout/motion-layout';
import UserInformation from '../../components/user-information/user-information';
import { useAppDispatch } from './../../hook/hook';
import { getUser } from '../../store/slice/usersSlice';


const PersonalAccount: React.FC = () => {
    const dispatch = useAppDispatch()

    const  getCurrentUser = (id:string) =>{
        dispatch(getUser(id))
    }
  
    const selectRedux = useAppSelector(state => ({
        user: state.users.currentUser,
        selectedId: state.vacancies.selectedId
    }))
    useEffect(()=>{
        dispatch(getUser(selectRedux.user.id))
    },[dispatch,selectRedux.user.id])
    return (
        <MotionLayout>
            <UserInformation
                user={selectRedux.user}
                listLength={selectRedux.selectedId.length}
                getCurrentUser={getCurrentUser}
            />
        </MotionLayout>




    )
}

export default PersonalAccount