import styled from 'styled-components';
import { Medium, MobileSM, Tablet } from '../../styles/Responsive';

const HeaderComp = styled.div`
    width: 100%;
    max-width: 998px;
    background: ${props => props.theme.bodyColor};
    position: fixed;
    z-index: ${props => props.theme.zFixed};
    transition: .4s;
    box-shadow: 0 0 .5rem ${props => props.theme.bodyColor};
`

const NavContainer = styled.div`
    height: ${props => props.theme.headerHeight};
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-left: 1.5rem;
    margin-right: 1.5rem;
    ${Tablet({
        height: "5rem",
    })}
`

const Atag = styled.a`
    color: ${props => props.theme.titleColor};
    font-weight: ${props => props.theme.fontMedium};
    transition: .4s;
    cursor: pointer;
    &:hover {
        color: ${props => props.theme.textColorLight};
    }
`

const Menu = styled.div`
    position: fixed;
    bottom: 1rem;
    background-color: ${props => props.theme.containerColor};
    width: 90%;
    border-radius: 4rem;
    padding : 1rem 2.25rem;
    backdrop-filter: blur(10px);
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, -50%);
    margin: 0 auto;

    ${MobileSM({
        padding: '1rem 1.25rem',
    })}
    ${Medium({
        width: '328px',
    })}
`

const Ullist = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LiItem = styled.li`

    & > a {
        padding: .4rem;
        display: flex;
        border-radius: 5rem;
        cursor: pointer;
        
        & > svg {
            color: ${props => props.theme.textColor};
            font-size: 1.25rem;
            
        }
        &.active {
            background: linear-gradient(10deg, ${props => props.theme.firstColor} 0%, ${props => props.theme.firstColorAlt} 200%);
            box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.5);
        }
        &:hover {
            background: linear-gradient(10deg, ${props => props.theme.firstColor} 0%, ${props => props.theme.firstColorAlt} 200%);
            box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.5);
        }
    }

`

const LiAtag = styled.a`

`

const ThemeDiv = styled.div`
    cursor: pointer;
`;

export { HeaderComp ,NavContainer, Atag, Menu, Ullist, LiItem, LiAtag, ThemeDiv };