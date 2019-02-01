import styled from 'styled-components';

import { breakpoint, color, font, whitespace } from '../style/variables';

export const PageTitle = styled.h1`
    padding: ${whitespace.n2} ${whitespace.n3};
    margin: 0 0 ${whitespace.n3};
    background-color: ${color.yellow.selective};
    color: ${color.white.white};
    font-family: 'Bebas Neue W01 Regular';
    font-size: ${font.size.n1};
    line-height: ${font.line.n0};
    border-radius: 3px;
    box-shadow: 0 8px 6px -6px ${color.grey.charcoal};
`;
