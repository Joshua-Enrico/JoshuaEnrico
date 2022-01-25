import React from 'react';
import { Abutton, Ascroll, Asocial, HomeButtons, HomeComp, HomeContainer, HomeData, HomeEducation, HomeHandle, HomeImg, HomeName, HomeSocial, HomeSpan, Scrollspan } from './Style';
import { AiFillLinkedin, AiFillMediumCircle } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';
import { BsMouse } from 'react-icons/bs';

const Home = () => {
    return (
        <HomeComp id="home">
            <HomeContainer className='grid'>
                <HomeData>
                    <HomeSpan>Hello I&apos;m</HomeSpan>
                    <HomeName>Joshua Enrico</HomeName>
                    <HomeEducation>Full Stack Developer</HomeEducation>
                    <HomeButtons>
                        <Abutton className='button ghost' download="" href="Joshua Enrico CV.pdf">Dowload CV</Abutton>
                        <Abutton href="#about" className='button'>About me</Abutton>
                    </HomeButtons>
                </HomeData>
                <HomeHandle>
                    <HomeImg src="hombre.png" alt="" className='' />
                </HomeHandle>
                <HomeSocial>
                    <Asocial href="https://www.linkedin.com/in/joshua-claudio-enrico/" target="_blank">
                        <AiFillLinkedin />
                    </Asocial>
                    <Asocial href="https://github.com/Joshua-Enrico" target="_blank">
                        <FaGithubSquare />
                    </Asocial>
                    <Asocial href="https://joshuaclaudioenrico.medium.com/" target="_blank">
                        <AiFillMediumCircle />
                    </Asocial>
                </HomeSocial>
                <Ascroll className="scroll" href="#about">
                    <BsMouse />
                    <Scrollspan>Scroll Down</Scrollspan>
                </Ascroll>
            </HomeContainer>
        </HomeComp>
    )
};

export default Home;
