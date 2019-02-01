import styled from 'styled-components';

import { breakpoint, color, font, whitespace } from '../style/variables';

export const PageTitle = styled.h1`
    padding: ${whitespace[2]}px;
    background-color: ${color.yellow.selective};
    color: ${color.white.white};
    font-family: 'Bebas Neue W01 Regular';
    font-size: ${font.size[0]}px;
    line-height: ${font.line[0]};
    
    @media only screen and (min-width: ${breakpoint.md}px) {
        font-size: ${font.size[1]}px;
    }
`;
