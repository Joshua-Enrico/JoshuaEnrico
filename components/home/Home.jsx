import React from 'react';
import { Abutton, Ascroll, Asocial, HomeButtons, HomeComp, HomeContainer, HomeData, HomeEducation, HomeHandle, HomeImg, HomeName, HomeSocial, HomeSpan, Scrollspan } from './Style';
import { AiFillLinkedin, AiFillMediumCircle } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';
import { BsMouse } from 'react-icons/bs';
import { Link } from "react-scroll";

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
                        <Link className="aboutref" activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>
                            About me
                        </Link>
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
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>
                    <BsMouse />
                    <Scrollspan>Scroll Down</Scrollspan>
                </Link>
            </HomeContainer>
        </HomeComp>
    )
};

export default Home;
