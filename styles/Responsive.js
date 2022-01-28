import {css} from 'styled-components';

export const Tablet = (props) => {
    return css`
    @media only screen and (min-width: 992px) {
        ${props}
    }
    `;
}

export const Mobile = (props) => {
    return css`
    @media only screen and (max-width: 768px) {
        ${props}
    }
    `;
}

export const Medium = (props) => {
    return css`
    @media only screen and (min-width: 576px) {
        ${props}
    }
    `;
}
export const MediumM = (props) => {
    return css`
    @media only screen and (min-width: 775px) {
        ${props}
    }
    `;
}
export const MobileMS = (props) => {
    return css`
    @media only screen and (max-width: 420px) {
        ${props}
    }
    `;
}

export const MobileSM = (props) => {
    return css`
    @media only screen and (max-width: 320px) {
        ${props}
    }
    `;
}