import Styled from "styled-components";
import { Tablet } from "../../styles/Responsive";

const FooterComp = Styled.footer`

    background-color: ${props => props.theme.containerColor};
    ${Tablet({
        padding: "1rem",
        position: "absolute",
        left: "0",
        width: "100%",
    })}
    
    `;

const FooterContainer = Styled.div`
    
    padding-bottom: 7rem;
`;

const FooterTitle = Styled.h1`
    color: ${props => props.theme.bodyColor};
    text-align: center;
    margin-bottom: 2rem;
`;

const FooterUl = Styled.ul`
    color: ${props => props.theme.bodyColor};
    display: flex;
    justify-content: center;
    column-gap: 1.5rem;
    margin-bottom: 2rem;
`;

const FooterLi = Styled.li`
`;

const FooterRef = Styled.a``;

const UlFooterSocial = Styled.ul`
    display: flex;
    justify-content: center;
    column-gap: 1.5rem;
`;

const ArefFooterSocial = Styled.a`
    background-color: ${props => props.theme.bodyColor};
    padding: .25rem;
    border-radius: .25rem;
    font-size: 1rem;
    display: flex;
    align-items: center;
    transition: all .2s ease-in-out;
    
    &:hover {
        background-color: ${props => props.theme.firstColor};
        color: ${props => props.theme.containerColor};
    }
    ${Tablet({
        fontSize: '1.5rem',
        padding: '.4rem',
        borderRadius: '.5rem',
    })}
`;

const FooterCopySpan = Styled.span`
    display: block;
    margin-top: 4.5rem;
    color: ${props => props.theme.bodyColor};
    text-align: center;
    font-size: ${props => props.theme.smallerFont};
`;

export { FooterComp, FooterContainer, FooterTitle,
         FooterUl, FooterLi, FooterRef, UlFooterSocial,
         ArefFooterSocial, FooterCopySpan };