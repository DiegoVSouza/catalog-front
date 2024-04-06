import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeView from '../../Presentation/Pages/Home/HomeView';
import LoginPage from '../../Presentation/Pages/Login/LoginView';

const Router: React.FC = ()=> {
  return (
    <Routes>
      <Route path='/home/' element={<HomeView/>}/>
      <Route path='/login/' element={<LoginPage/>}/>
    </Routes>
  );
}

export default Router;
