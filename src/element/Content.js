import styled from 'styled-components';

import { breakpoint, width } from '../style/variables';

export const Content = styled.div`
    width: 100%;
    
    @media only screen and (min-width: ${breakpoint.md}px) {
        width: ${width.content}px;
    }
`;
