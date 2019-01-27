import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
    text-align: center;
`;

export function HeaderComponent() {
    return (
        <Header>
            <a href="/">
                <img src="/img/logo.png" alt="Coder Dojo Delft" />
            </a>
        </Header>
    );
}
