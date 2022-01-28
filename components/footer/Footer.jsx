import React from 'react';
import { ArefFooterSocial, FooterComp, FooterContainer, FooterCopySpan, FooterLi, FooterRef, FooterTitle, FooterUl, UlFooterSocial } from './Style';
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub, AiFillMediumSquare } from "react-icons/ai";


const Footer = () => {
    return (
        <FooterComp>
            <FooterContainer>
                <FooterTitle>Joshua</FooterTitle>
                <FooterUl>
                    <FooterLi >
                        <FooterRef href="#about">About</FooterRef>
                    </FooterLi>
                    <FooterLi >
                        <FooterRef href="#work">Work</FooterRef>
                    </FooterLi>
                    <FooterLi>
                        <FooterRef href="#skills">Skills</FooterRef>
                    </FooterLi>
                </FooterUl>
                <UlFooterSocial>
                    <ArefFooterSocial href="https://www.linkedin.com/in/joshua-claudio-enrico/" target="_blank">
                        <BsLinkedin />
                    </ArefFooterSocial>
                    <ArefFooterSocial href="https://github.com/Joshua-Enrico" target="_blank" >
                        <AiFillGithub />
                    </ArefFooterSocial>
                    <ArefFooterSocial href="https://medium.com/@joshuaclaudioenrico" target="_blank">
                        <AiFillMediumSquare />
                    </ArefFooterSocial>
                </UlFooterSocial>

                <FooterCopySpan>
                    All rights reserved 2022
                </FooterCopySpan>
            </FooterContainer>
        </FooterComp>
    );
};

export default Footer;
