import React, { useEffect } from 'react'
import Main from '../../components/main/main'
import MotionLayout from '../../components/motion-layout/motion-layout'
import { fetchVacancies } from '../../store/slice/vacanciesSlice';
import { useAppDispatch } from './../../hook/hook';

const Home: React.FC = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchVacancies())
    }, [dispatch])
    return (
        <MotionLayout>
            <Main />
        </MotionLayout>
    )
}

export default Home