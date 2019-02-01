import styled from 'styled-components';

import { color, font, whitespace } from '../style/variables';

export const PageBody = styled.div`
    padding: ${whitespace.n3};
    background-color: ${color.white.white};
    box-shadow: 10px 5px 5px red;
    font-size: ${font.size.n3};
    font-family: Arial, Helvetica, Tahoma, san-serif;
    line-height: ${font.line.n1}
    color: ${color.grey.charcoal};
    border-radius: 3px;
    box-shadow: 0 8px 6px -6px ${color.grey.charcoal};
    
    h2 {
        font-size: ${font.size.n1};
        font-family: 'Bebas Neue W01 Regular';
    }
    
    h3 {
        font-size: ${font.size.n2};
        font-family: 'Bebas Neue W01 Regular';
    }
      
    h2,
    h3 {
        padding: ${whitespace.n0} ${whitespace.n0} ${whitespace.n1};
    }
    
    p,
    ul {
        padding: ${whitespace.n0} ${whitespace.n0} ${whitespace.n3};
    }
    
    b,
    strong {
        font-weight: bold;
    }
    
    i,
    em {
        font-style: italic;
    }
    
    a {
        color: ${color.grey.charcoal};
        text-decoration: underline;
    }
    
    ul {
        padding-left: 15px;
        list-style-type: disc;
    }
`;
