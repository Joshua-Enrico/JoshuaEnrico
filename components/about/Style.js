import styled from 'styled-components';
import { Medium, MobileSM, Tablet } from '../../styles/Responsive';


const AboutComp = styled.section`
    padding: 6.5rem 1.5rem 1rem;
    text-align: center;
`;


const SpanSubtitle = styled.span`

`;

const H2title = styled.h2`
`;

const AboutContainer = styled.div`
    row-gap: 2.5rem;
    display: grid;
    ${Tablet({
        gridTemplateColumns: 'repeat(2, 1fr)',
        alignItems: 'center',
    })}
`;

const ImgAbout = styled.img`
    width: 220px;
    border-radius: 1.5rem;
    justify-self: center;
    margin-bottom: 1rem;
    ${Tablet({
        width: '320px',
    })}
`;


const AboutData = styled.div`
    text-align: center;

    ${Medium({
        padding: '0  5rem',
    })}
    ${Tablet({
        marginTop: '3rem',
        padding: '0 2rem', 
        alignItems: 'center',
        paddingLeft: '0',
        textAlign: 'initial',
    })}

    & > a {
        &.link {
            cursor: pointer;
            display: inline-block;
            background-color: ${props => props.theme.firstColor};
            color: ${props => props.theme.bodyColor};
            padding: .75rem 1rem;
            border-radius: .5rem;
            font-weight: ${props => props.theme.fontMedium};
            transition: .4s ease-in-out;
            &:hover {
                background-color: ${props => props.theme.firstColorAlt};
                color: ${props => props.theme.bodyColor};
            }
        }
    }

`;

const AboutInfo = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: .5rem;
    margin-bottom: 2rem;
    ${MobileSM({
        gridTemplateColumns: 'repeat(2, 1fr)',
    })}
    ${Medium({
        gridTemplateColumns: 'repeat(3, 140px)',
        justifyContent: 'center',
    })}
    ${Tablet({
        gridTemplateColumns: 'repeat(3, 1fr)',
        justifyContent: 'initial ' ,
        
    })}

`;

const AboutBox = styled.div`
    background-color: ${props => props.theme.containerColor};
    border-radius: .75rem;
    padding: .75rem .5rem;
    & > svg {
        font-size: 1.5rem;
        color: ${props => props.theme.firstColor};
        margin-bottom: .5rem;
    }
    ${Tablet({
        textAlign: 'center',
        padding: '1rem 1.25rem',
    })}
`;

const H3Title = styled.h3`
    font-size: ${props => props.theme.smallestFont};

`;

const SpanSubtitleInfo = styled.span`
    font-size: ${props => props.theme.tinyFont};
`;


const PaboutDescription = styled.p`
    margin-bottom: 2rem;
    ${Tablet({
        padding: '0 4rem 0 0',
        marginBottom: '2.25rem',
    })}

`;

const Acontact = styled.a`

`;

export {
    AboutComp, SpanSubtitle, H2title, AboutContainer,PaboutDescription,
    ImgAbout, AboutData, AboutInfo, AboutBox, H3Title, SpanSubtitleInfo,
    Acontact
};