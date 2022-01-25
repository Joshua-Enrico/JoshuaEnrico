import React from 'react';
import {
    AboutBox,
    AboutComp, AboutContainer, AboutData, AboutInfo,
    H2title, H3Title, ImgAbout, SpanSubtitle, SpanSubtitleInfo
} from './Style';
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
                </AboutData>
            </AboutContainer>
        </AboutComp>);
};

export default About;
