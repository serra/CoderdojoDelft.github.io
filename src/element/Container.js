import styled from 'styled-components';

import { breakpoint, width } from '../style/variables';

export const Container = styled.div`
    width: 100%;
    
    @media only screen and (min-width: ${breakpoint.md}px) {
        display: flex;
        justify-content: flex-end;
        margin: 0 auto;
        width: ${width.container}px;
    }
`;
