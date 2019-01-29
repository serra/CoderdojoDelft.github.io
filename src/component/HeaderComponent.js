import React from 'react';
import styled from 'styled-components';

const BackToHome = styled.a`
    display: block;
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
