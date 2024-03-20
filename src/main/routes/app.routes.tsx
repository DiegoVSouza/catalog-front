import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeView from '../../Presentation/Pages/Home/HomeView';
import Login from '../../Presentation/Pages/Login/LoginView';

const Router: React.FC = ()=> {
  return (
    <Routes>
      <Route path='/catalog-front/' element={<HomeView/>}/>
      <Route path='/login/' element={<Login/>}/>
    </Routes>
  );
}

export default Router;
