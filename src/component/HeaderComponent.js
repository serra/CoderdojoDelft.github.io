import React from 'react';
import styled from 'styled-components';

import { breakpoint, whitespace } from '../style/variables';

const BackToHome = styled.a`
    display: block;
    padding: 0 ${whitespace.n2}
    
    @media only screen and (min-width: ${breakpoint.md}px) {
        padding: 0 ${whitespace.n4}
    }
`;

const Logo = styled.img`
    display: block;
    width: 100%;
    max-width: 570px;
    height: auto;
`;

export function HeaderComponent() {
    return (
        <header>
            <BackToHome href="/">
                <Logo src="/img/logo.png" alt="Coder Dojo Delft" />
            </BackToHome>
        </header>
    );
}
