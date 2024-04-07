import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeView from '../../Presentation/Pages/Home/HomeView';
import LoginPage from '../../Presentation/Pages/Login/LoginView';
import Stores from '../../Presentation/Pages/Stores/Stores';

const Router: React.FC = ()=> {
  return (
    <Routes>
      <Route path='/home/' element={<HomeView/>}/>
      <Route path='/stores/' element={<Stores/>}/>
      <Route path='/login/' element={<LoginPage/>}/>
    </Routes>
  );
}

export default Router;
