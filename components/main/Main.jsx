import React from 'react';
import About from '../about/About';
import Header from '../header/Header';
import Home from '../home/Home';
import Services from '../services/Services';
import Skills from '../skills/Skills';
import Work from '../work/Work';
import { Main } from './Style'
const MainComponent = () => {
    return <Main>
        <Header/>
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Work/>
    </Main>;
};

export default MainComponent;
