import Styled from 'styled-components';
import { Medium, MediumM, MobileSM, Tablet } from '../../styles/Responsive';

const WorkComp = Styled.section`
    padding: 6.5rem 1.5rem 1rem;

    text-align: center;
`;

const WorkSubtitle = Styled.span``;

const WorkTitle = Styled.h2``;

const WorkFilter = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: .75rem;
    margin-bottom: 2rem;
    ${MobileSM({
        columnGap: '.25rem',
    })}
`;

const WorkItem = Styled.div`
    cursor: pointer;
    color: ${props => props.theme.textColor};
    padding: .25rem .75rem;
    font-weight: ${props => props.theme.fontMedium};
    border-radius: .5rem;
    transition: all .2s ease-in-out;

    &:hover {
        background-color: ${props => props.theme.firstColor};
        color: ${props => props.theme.titleColor};
    }

    &.active-work {
        background-color: ${props => props.theme.firstColor};
        color: ${props => props.theme.titleColor};
    }


`;

const WorkContainer = Styled.div`
    text-align: left;
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    display: grid;
    padding-top: 1rem;
    ${Medium({
        justifyContent: 'center',
    })}
    ${MediumM({
        gridTemplateColumns: 'repeat(2, max-content)',
        gap: '1rem',
    })}
    ${Tablet({
        gap: '3rem',
    })}
`;

const WorkCard = Styled.div`
    background-color: ${props => props.theme.containerColor};
    padding: 1rem;
    border-radius: 1rem;
    margin-bottom: 1rem;
    transition: all .2s ease-in-out;
    animation: fadeIn .5s;
    &.hide-item {
        opacity: 0;
        display: none;
    }
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: scale(0)
        }
   
        to {
            opacity: 1;
            transform: scale(1)

        }
    }
    ${Tablet({
       padding: "1.25rem",  
    })}
`;

const WorkImg = Styled.img`
    border-radius: 1rem;
    margin-bottom: .75rem;
    height: 170px;
    object-fit: cover;
    ${Medium({
        width: '295px',
        
    })}
    ${Tablet({
        marginBottom: '1rem', 
    })}
`;

const WorkCartTitle = Styled.h3`
    font-size: ${props => props.theme.normalFont};
    font-weight: ${props => props.theme.fontMedium};
    margin-bottom: .25rem;
    ${Tablet({
        marginBottom: '.5rem',
    })}
`;

const WorkButton = Styled.a`
    width: max-content;
    color: ${props => props.theme.firstColor};
    font-size: ${props => props.theme.smallestFont};
    display: flex;
    align-items: center;
    column-gap: .25rem;
    transition: all .2s ease-in-out;

    &:hover {
        color: ${props => props.theme.titleColor};
        & > svg {
            font-size: 1rem;
            transition: all .4s ease-in-out;
            transform: translateX(.25rem);
        }
    }
`;

export {
    WorkComp, WorkSubtitle, WorkTitle,
    WorkFilter, WorkItem, WorkContainer,
    WorkCard, WorkImg, WorkCartTitle,
    WorkButton
};