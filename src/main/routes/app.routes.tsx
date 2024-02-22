import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeView from '../../Presentation/Pages/Home/HomeView';
import Header from '../../Presentation/Components/Header/Header';

const Router: React.FC = ()=> {
  return (
    <Routes>
      <Route path='/portifolio_pratica_uol' element={<HomeView/>}/>
    </Routes>
  );
}

export default Router;
