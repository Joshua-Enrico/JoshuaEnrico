import React from 'react';
import Header from '../header/Header';
import Home from '../home/Home';
import { Main } from './Style'
const MainComponent = () => {
    return <Main>
        <Header/>
        <Home/>
    </Main>;
};

export default MainComponent;
