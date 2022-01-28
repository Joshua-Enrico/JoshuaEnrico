import React from 'react';
import {
    AboutBox,
    AboutComp, AboutContainer, AboutData, AboutInfo,
    Acontact,
    H2title, H3Title, ImgAbout, PaboutDescription, SpanSubtitle, SpanSubtitleInfo
} from './Style';
import { Link } from "react-scroll";
import {BsFillAwardFill} from 'react-icons/bs';
import {VscBriefcase} from 'react-icons/vsc';
import {BiSupport} from 'react-icons/bi';

const About = () => {
    return (
        <AboutComp id="about">
            <SpanSubtitle>
                My Intro
            </SpanSubtitle>
            <H2title>About Me</H2title>
            <AboutContainer>
                <ImgAbout src="hombre.png" alt="about" />
                <AboutData>
                    <AboutInfo>
                        <AboutBox>
                            <BsFillAwardFill/>
                            <H3Title>Experience</H3Title>
                            <SpanSubtitleInfo>1 Year Working</SpanSubtitleInfo>
                        </AboutBox>
                        <AboutBox>
                            <VscBriefcase/>
                            <H3Title>Projects</H3Title>
                            <SpanSubtitleInfo>38+</SpanSubtitleInfo>
                        </AboutBox>
                        <AboutBox>
                            <BiSupport/>
                            <H3Title>Support</H3Title>
                            <SpanSubtitleInfo>Online 24/7</SpanSubtitleInfo>
                        </AboutBox>
                    </AboutInfo>
                    <PaboutDescription>
                        I am a full-stack web developer with a passion for
                        programming and a love for the web. I have a strong
                        background in web development and have worked with
                        various technologies and frameworks. I am currently
                        working as a full-stack web developer at
                        <a href="https://www.truelancer.com/"> Truelancer</a>
                    </PaboutDescription>
                    <Link className="link" activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>
                            Contact Me
                    </Link>
                </AboutData>
            </AboutContainer>
        </AboutComp>);
};

export default About;
