import styled from 'styled-components';
import { Medium, MobileSM, Tablet } from '../../styles/Responsive';


const SkillComp = styled.section`
    padding: 6.5rem 1.5rem 1rem;
    text-align: center;

`;

const SpanSubtitle = styled.span`
    display: block;

    color: ${props => props.theme.textColorLight};
`;

const H2Title = styled.h2`
    font-size: ${props => props.theme.biggestFont};
    color: ${props => props.theme.titleColor};
    margin-bottom: 2rem;
`;

const SkillContainer = styled.div`
    margin-left: 1rem;
    margin-right: 1rem;
    row-gap: 2rem;
    padding-top: 1rem;
    ${Medium({
        justifyContent: 'center',
    })}
    ${Tablet({
        gridTemplateColumns: 'repeat(2, 350px)',
        columnGap: '3rem',
    })}
`;

const SkillBoxContent = styled.div`
    background-color: ${props => props.theme.containerColor};
    padding: 1.5rem;
    border-radius: 1.25rem;
    ${Medium({
        padding: '2rem 4rem',
    })}
`;

const SkillTitle = styled.h3`
    font-size: ${props => props.theme.normalFont};
    font-weight: ${props => props.theme.fontMedium};
    color: ${props => props.theme.firstColor};
    text-align: center;
    margin-bottom: 1.5rem;
`;

const SkillsBox = styled.div`
    text-align: start;
    display: flex;
    justify-content: center;
    column-gap: 2.5rem;

    ${MobileSM({
        columnGap: '1rem',
    })}
`;

const SkillsGroups = styled.div`
    display: grid;
    align-content: flex-start;
    row-gap: 1rem;
`;

const SkillsData = styled.div`
    display: flex;
    column-gap: .5rem;

    & > svg {
        font-size: 1.5rem;
        color: ${props => props.theme.firstColor};
    }

`;

const SkillContent = styled.div``;

const SkillName = styled.h3`
    font-size: ${props => props.theme.normalFont};
    font-weight: ${props => props.theme.fontMedium};
    line-height: 18px;
    ${MobileSM({
        fontSize: props => props.theme.smallestFont,
    })}

    `;

const SkillLvl = styled.span`
    font-size: ${props => props.theme.tinyFont};

`;

export { SkillComp, SpanSubtitle, H2Title, SkillContainer,
         SkillTitle, SkillsBox, SkillsGroups, SkillsData,
         SkillContent, SkillName, SkillLvl,SkillBoxContent };