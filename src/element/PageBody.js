import styled from 'styled-components';

import { color, font, whitespace } from '../style/variables';

export const PageBody = styled.div`
    padding: ${whitespace[3]}px ${whitespace[2]}px;
    background-color: ${color.white.white};
    font-size: ${font.size[3]}px;
    line-height: ${font.line[1]}

    h2 {
        font-size: ${font.size[1]}px;
        font-family: 'Bebas Neue W01 Regular';
    }
    
    h3 {
        font-size: ${font.size[2]}px;
        font-family: 'Bebas Neue W01 Regular';
    }
      
    h2,
    h3,
    p,
    ul {
        padding: ${whitespace[0]}px ${whitespace[0]}px ${whitespace[3]}px;
    }
    
    strong {
        font-weight: bold;
    }
    
    a {
        text-decoration: underline;
    }
`;
