import React from 'react';
import About from '../about/About';
import Header from '../header/Header';
import Home from '../home/Home';
import Services from '../services/Services';
import Skills from '../skills/Skills';
import { Main } from './Style'
const MainComponent = () => {
    return <Main>
        <Header/>
        <Home/>
        <About/>
        <Skills/>
        <Services/>
    </Main>;
};

export default MainComponent;
