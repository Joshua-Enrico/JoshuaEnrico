import React from 'react';
import About from '../about/About';
import Header from '../header/Header';
import Home from '../home/Home';
import { Main } from './Style'
const MainComponent = () => {
    return <Main>
        <Header/>
        <Home/>
        <About/>
    </Main>;
};

export default MainComponent;
