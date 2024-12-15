import React from 'react';

import LandingPage from '../../components/LandingPage/LandingPage';
import styl from './Home.module.css';

const Home = () => {
  return (
    <div className={styl.home}>
      <LandingPage />
    </div>
  );
};

export default Home;
