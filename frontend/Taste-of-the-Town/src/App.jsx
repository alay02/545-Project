import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { AppHeader } from './components/AppHeader';
import { AppNav } from './components/AppNav';
import { AppFooter } from './components/AppFooter';

import { Toast } from './components/Toast';
import { Tacoria } from './components/Tacoria';
import { Tony } from './components/Tony';
import { EastLA } from './components/EastLA';

import Home from './pages/Home';
import Reviews from './pages/Reviews';
import Restaurants from './pages/Restaurants';
import Trending from './pages/Trending';
import './styles.css';

export default function App() {
  // useNavigate hook
  // const navigate = useNavigate();

  // // Function to navigate to /Restaurant
  // const goToRestaurant = () => {
  //   navigate('/Restaurant');
  // };

  return (
    <>
      <AppHeader />
      <AppNav />
      <div className="content">
        <BrowserRouter>
          <Routes>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/restaurants" element={<Restaurants />} />
              <Route path="/trending" element={<Trending />} />
              <Route path='/restaurant'>
                <Route path='1' element={<Tacoria />}/>
                <Route path='2' element={<Toast />}/>
                <Route path='3' element={<Tony />}/>
                <Route path='4' element={<EastLA />}/>
              </Route>
          </Routes>
        </BrowserRouter>
      </div>
      <AppFooter />
    </>
  );
}
