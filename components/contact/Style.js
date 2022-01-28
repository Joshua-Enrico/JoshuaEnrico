import Styled from 'styled-components';
import { Medium, MediumM, Tablet } from '../../styles/Responsive';


const ContactComponent = Styled.section`
    padding: 6.5rem 1.5rem 1rem;
    margin-bottom: 10rem;
    text-align: center;
`;

const ContactSubtitle = Styled.span``;

const ContactTitle = Styled.h2``;

const ContactContainer = Styled.div`
    text-align: left;
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    display: grid;
    padding-top: 1rem;
    row-gap: 3rem;
    padding-bottom: 3rem;
    ${MediumM({
        gridTemplateColumns: 'repeat(2, max-content)',
        justifyContent: 'center',
        columnGap: '3rem',
    })}
    ${Tablet({
        columnGap: '6rem',
    })}
`;

const ContactContent = Styled.div`

`;

const ContactContTitle = Styled.h3`
    text-align: center;
    font-weight: ${props => props.theme.h3Font};
    margin-bottom: 1.5rem;
`;


const ContactInfo = Styled.div`
    display: grid;
    gap: 1rem;
    ${Medium({
    gridTemplateColumns: '300px',
    justifyContent: 'center',
})}

`;

const ContactCard = Styled.div`
    background-color: ${props => props.theme.containerColor};
    padding: 1rem;
    border-radius: .75rem;
    text-align: center;
    & > svg {
        font-size: 2rem;
        color: ${props => props.theme.titleColor};
        margin-bottom: .25rem;
    }
`;

const ContactCardTitle = Styled.h3`
    font-size: ${props => props.theme.normalFont};
    font-weight: ${props => props.theme.fontMedium};
`;

const ContactCardData = Styled.span`
    font-size: ${props => props.theme.normalFont};
    display: block;
    margin-bottom: .75rem;
`;

const ContactCardButton = Styled.button`

`;

const ContactCardref = Styled.a`
    color: ${props => props.theme.firstColor};
    font-size: ${props => props.theme.smallestFont};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .2s ease-in-out;
    column-gap: .25rem;
    & > svg {
        font-size: 1rem;
    }
    &:hover {
        color: ${props => props.theme.titleColor};
        & > svg {
            transition: all .5s ease-in-out;
            transform: translateX(2px);
            color: ${props => props.theme.titleColor};
        }
    }
`;

const ContactForm = Styled.form`
${Medium({
    width: '360px',
    margin: '0 auto',
    justifyContent: 'center',
})}

`;

const ContctFormDiv = Styled.div`
    position: relative;
    margin-bottom: 2rem;
    height: 4rem;

    &.text-input {
        height: 11rem;
    }

`;

const ContactLabel = Styled.label`
    position: absolute;
    top: -.75rem;
    left: 1.25rem;
    font-size: ${props => props.theme.smallerFont};
    padding: .25rem;
    background-color: ${props => props.theme.bodyColor};
    z-index: 10;
`;

const ContactInput = Styled.input`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid ${props => props.theme.textColorLight};
    background: none;
    color: ${props => props.theme.textColor};
    outline: none;
    padding: 1.5rem;
    border-radius: .75rem;
    z-index: 1;
`;

const TextArea = Styled.textarea`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 11rem;
    border: 2px solid ${props => props.theme.textColorLight};
    background: none;
    color: ${props => props.theme.textColor};
    outline: none;
    padding: 1rem;
    border-radius: .75rem;
    z-index: 1;
    resize: none;
    `;

const FormButton = Styled.button`
    display: inline-block;
    background-color: ${props => props.theme.firstColor};
    color: ${props => props.theme.bodyColor};
    padding: .75rem 1rem;
    border-radius: .5rem;
    font-weight: ${props => props.theme.fontMedium};
    transition: .4s ease-in-out;
    &:hover {
        background-color: ${props => props.theme.titleColor};
        color: ${props => props.theme.bodyColor};
    }
`;

export {
    ContactComponent, ContactSubtitle, ContactTitle, ContactContainer,
    ContactContent, ContactContTitle, ContactInfo, ContactCard,
    ContactCardTitle, ContactCardData, ContactCardButton, ContactCardref,
    ContactForm, ContctFormDiv, ContactLabel, ContactInput, FormButton,
    TextArea
};