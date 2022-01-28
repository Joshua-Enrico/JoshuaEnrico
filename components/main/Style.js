import styled from 'styled-components';
import { MobileSM, Tablet } from '../../styles/Responsive';

const Main = styled.main`
    ${MobileSM({
        width: '370px',
    })}
    ${Tablet({
        marginLeft: 'auto',
        marginRight: 'auto',
    })}

    & > section {
        ${Tablet({
            padding: '6.5rem 0 1rem',
        })}
    }
    
`


export { Main };