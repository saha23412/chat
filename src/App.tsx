import React, { useState,useEffect} from 'react';
import { useAppSelector, useAppDispatch } from './hook/hook';
import { useNavigate } from 'react-router-dom'
import { createUser, resetCurrentUser, loginUser, fetchUsers } from './store/slice/usersSlice';
import { LoginUser, User } from './models/types/users';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { SubmitHandler } from 'react-hook-form';
import Navbar from './components/navbar/navbar';

import Registration from './pages/registration/registration';
import Login from './pages/login/login';
import RequireAuth from './hook/require-auth';
import Home from './pages/home/home';
import PersonalAccount from './pages/personal-account/personal-account';
import VacanciesBlock from './pages/vacancies/vacancies';
import ProfileSetup from './pages/profile-setup/profile-setup';
import { fetchCities } from './store/slice/citiesSlice';

const App: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(fetchUsers())
    dispatch(fetchCities())
}, [dispatch])
  const location = useLocation()
  const [textError, setTextError] = useState<string>('')
  const selectRedux = useAppSelector(state => ({
    cities: state.cities.list,
    users: state.users.list,
    user: state.users.currentUser,
    auth: state.users.auth,
    error: state.users.error,
    loading: state.users.loading,
  }))
  const onSubmitRegistration: SubmitHandler<User> = (data, event) => {
    event?.preventDefault()
    const usersCheck: User[] = selectRedux.users.filter(user => user.login === data.login)
    if (usersCheck.length) {
      setTextError('Данный логин уже используется')
    } else {
      createNewUser(data)
      navigate('/login')
      setTextError('')
    }
  };
  const onSubmitLogin: SubmitHandler<LoginUser> = (data, event) => {
    event?.preventDefault()
    dispatch(loginUser(data))
    console.log(data)
    navigate('/home')
  };
  const createNewUser = (user: User): void => {
    dispatch(createUser(user))
  }
  const exitAccount = (): void => {
    dispatch(resetCurrentUser())
    navigate('/login')
  }

  return (
    <AnimatePresence>
      <Navbar exitAccount={exitAccount} auth={selectRedux.auth} />
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Registration textError={textError} onSubmit={onSubmitRegistration} users={selectRedux.users} cities={selectRedux.cities} createNewUser={createNewUser} />} />
        <Route path='/login' element={<Login onSubmit={onSubmitLogin} loading={selectRedux.loading} error={selectRedux.error} auth={selectRedux.auth} />} />
        <Route path='/home' element={<RequireAuth auth={selectRedux.auth}><Home /></RequireAuth>} />
        <Route path='/account' element={<RequireAuth auth={selectRedux.auth}><PersonalAccount /></RequireAuth>} />
        <Route path='/vacancies' element={<RequireAuth auth={selectRedux.auth}><VacanciesBlock /></RequireAuth>} />
        <Route path='/favorites-vacancies' element={<RequireAuth auth={selectRedux.auth}><ProfileSetup /></RequireAuth>} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
