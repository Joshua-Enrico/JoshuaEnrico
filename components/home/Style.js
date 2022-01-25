import styled from 'styled-components';


const HomeComp = styled.section`
    padding: 6.5rem 1.5rem 1rem;

`
const HomeContainer = styled.div`
    position: relative;
    row-gap: 4.5rem;
    padding-top: 1rem;

`

const HomeData = styled.div`
    text-align: center;
`

const HomeSpan = styled.span`
    font-size: ${props => props.theme.smallestFont};
    font-weight: ${props => props.theme.fontMedium};
    display: block;
    color: ${props => props.theme.titleColor};
    margin-bottom: .25rem;
`

const HomeName = styled.h1`
    font-size: ${props => props.theme.biggestFont};

`

const HomeEducation = styled.h3`
    font-size: ${props => props.theme.smallestFont};
    font-weight: ${props => props.theme.fontMedium};
    color: ${props => props.theme.textColor};
    margin-bottom: 2.5rem;

`

const HomeButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
`

const Abutton = styled.a`

    &.button {
        display: inline-block;
        background-color: ${props => props.theme.firstColor};
        color: ${props => props.theme.bodyColor};
        padding: .75rem 1rem;
        border-radius: .5rem;
        font-weight: ${props => props.theme.fontMedium};
        transition: .4s ease-in-out;
    }

    &.ghost {
        background-color: transparent;
        border: 2px solid ${props => props.theme.firstColor};
        color: ${props => props.theme.firstColor};
    }

    &:hover {
        background-color: ${props => props.theme.firstColorAlt};
        color: ${props => props.theme.bodyColor};
    }

`
const HomeHandle = styled.div`
    justify-self: center;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 190px;
    height: 293px;
    overflow: hidden;
    background-color: ${props => props.theme.firstColor};
    border-radius: 10rem 10rem 1rem 1rem;
`

const HomeImg = styled.img`
    width: 260px;
    height: 240px;
    object-fit: cover;

`

const HomeSocial = styled.div`
    position: absolute;
    bottom: 5rem;
    display: grid;
    row-gap: .5rem;

    &::after {
        content: '';
        width: 32px;
        height: 2px;
        background-color: ${props => props.theme.titleColor};
        transform: rotate(90deg) translate(16px, 3px);
    }
`

const Asocial = styled.a`
    width: max-content;
    background-color: ${props => props.theme.containerColor};
    color: ${props => props.theme.firstColor};
    padding: .25rem;
    border-radius: .25rem;
    display: flex;
    font-size: 1rem;
    transition: all .4s ease-in-out;

    &:hover {
        background-color: ${props => props.theme.firstColor};
        color: ${props => props.theme.containerColor};
    }
`

const Ascroll = styled.a`
    position: absolute;
    color: ${props => props.theme.firstColor};
    right: -1.5rem;
    bottom: 4rem;
    display: grid;
    row-gap: 2.25rem;
    justify-content: center;
    align-items: center;

    & > svg{
        align-self: center;
        width: 4.8rem;
        font-size: 1.5rem;
    }
`

const Scrollspan = styled.span`
    font-size: ${props => props.theme.smallestFont};
    transform: rotate(-90deg);

`

export {
    HomeComp, HomeContainer, HomeData, HomeSpan,
    HomeName, HomeEducation, HomeButtons, Abutton, HomeHandle, HomeImg
    , HomeSocial, Asocial, Ascroll, Scrollspan
};