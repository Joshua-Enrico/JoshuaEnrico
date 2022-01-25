import styled from 'styled-components';

const HeaderComp = styled.div`
    width: 100%;
    background: transparent;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: ${props => props.theme.zFixed};
    transition: .4s;
`

const NavContainer = styled.div`
    height: ${props => props.theme.headerHeight};
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-left: 1.5rem;
    margin-right: 1.5rem;

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
`

const Ullist = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LiItem = styled.li`

`

const LiAtag = styled.a`
    padding: .4rem;
    display: flex;
    border-radius: 5rem;
    & > svg {
        color: ${props => props.theme.textColor};
        font-size: 1.25rem;
        
    }
    &.active {
        background: linear-gradient(10deg, ${props => props.theme.firstColor} 0%, ${props => props.theme.firstColorAlt} 200%);
        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.5);
    }
`

export { HeaderComp ,NavContainer, Atag, Menu, Ullist, LiItem, LiAtag };