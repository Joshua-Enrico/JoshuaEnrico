import styled from "styled-components";
import { Medium, MobileMS, MobileSM, Tablet } from "../../styles/Responsive";

const ServiceComp = styled.section`
    padding: 6.5rem 1.5rem 1rem;
    text-align: center;
`;

const SpanSubtitle = styled.span`

`;

const H2title = styled.h2`

`;

const ServiceContainer = styled.div`
    text-align: left;
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 1rem;
    ${MobileSM({
        gridTemplateColumns: '165px',
        justifyContent: 'center',
    })}
    ${Medium({
        gridTemplateColumns: 'repeat(2, 160px)',
        justifyContent: 'center',
    })}

    ${Tablet({
        gridTemplateColumns: 'repeat(3, 192px)',
        columnGap: '3rem',
    })}
    ${MobileMS({
        gridTemplateColumns: 'repeat(2, 130px)',
        columnGap: '3rem',
    })}
    
`;

const ServiceCard = styled.div`
    background-color: ${props => props.theme.containerColor};
    padding: 3rem 1.5rem 1.5rem;
    border-radius: 1rem;
    ${Tablet({
        padding: '4rem 2rem 1.5rem',
    })}
`;

const ServiceTitle = styled.h3`
    font-size: ${props => props.theme.h3Font};
    margin-bottom: 2.5rem;
    ${MobileMS({
        fontSize: '.65rem',
    })}
`;

const ServiceButton = styled.span`
    color: ${props => props.theme.firstColor};
    font-size: ${props => props.theme.smallestFont};
    display: flex;
    align-items: center;
    column-gap: .25rem;
    cursor: pointer;
    transition: all .2s ease-in-out;
    &:hover {
        color: ${props => props.theme.titleColor};
        & > svg {
            transition: all .3s ease-in-out;
            transform: translateX(.25rem);
        }
    }

    & > svg {
        font-size: 1rem;

    }

`;

const ServiceModal = styled.div`
    position: fixed;
    inset: 0;
    background-color: hsl(219deg 32% 12% / 74%);
    padding: 2rem 1rem;
    display: grid;
    place-items: center;
    visibility: hidden;
    opacity: 0;
    transition: all .3s ease-in-out;
    z-index: ${props => props.theme.zModal};
    &.active-Modal {
        visibility: visible;
        opacity: 1;
    }  
`;

const ModalContent = styled.div`
    position: relative;
    background-color: ${props => props.theme.containerColor};
    padding: 4.5rem 1.5rem 2.5rem;
    border-radius: 1.5rem;
    & > svg {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        font-size: 1.5rem;
        cursor: pointer;
        transition: all .3s ease-in-out;
        & > path {
            stroke: ${props => props.theme.firstColor};
        }
        &:hover {
            & > path {
                stroke: ${props => props.theme.titleColor};
            }
        }
    }
    ${Medium({
        width: '500px',
        padding: '4.5rem 2.5rem 2.5rem',
    })}
`;

const ModalTittle = styled.h3`
    text-align: center;
    font-size: ${props => props.theme.h3Font};
    color: ${props => props.theme.firstColor};
    margin-bottom: 1rem;
`;

const ModalDescription = styled.p`
    text-align: center;
    font-size: ${props => props.theme.smallestFont};
    margin-bottom: 2rem;
    ${Medium({
        padding: '0 3.5rem',
    })}
`;

const ModalList = styled.ul`
    display: grid;
    row-gap: .75rem;
`;

const ModalListItem = styled.li`
    display: flex;
    align-items: flex-start;
    column-gap: .5rem;
    & > svg { 
        font-size: 1.3rem;
        color: ${props => props.theme.firstColor};
    }
`;

const ModalItemInfo = styled.p`
    font-size: ${props => props.theme.smallestFont};
`;

export { ServiceComp, SpanSubtitle, H2title, ServiceContainer, ServiceCard,
        ServiceTitle, ServiceButton, ServiceModal, ModalContent, ModalTittle,
        ModalDescription, ModalList, ModalListItem, ModalItemInfo
        };