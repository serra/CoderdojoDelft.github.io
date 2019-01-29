import { NavLink } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

import { color, font, whitespace } from '../style/variables';

const Nav = styled.nav`
    flex-shrink: 0;
    flex-grow: 1;
    margin-right: ${whitespace[3]}px;
    text-align: right;
`;

const Link = styled(NavLink)`
    display: inline-block;
    padding: ${whitespace[1]}px;
    color: ${color.black.black};
    font-family: 'Bebas Neue W01 Regular';
    font-size: ${font.size[0]}px;
    line-height: ${font.line[0]};
    text-decoration: none;
    text-align: right;
    
    &.active {
        background-color: ${color.yellow.selective};
        color: ${color.white.white};
    }
`;

export function MenuComponent() {
    return (
        <Nav>
            <ul>
                <li>
                    <Link exact to="/" activeClassName="active">Home</Link>
                </li>
                <li>
                    <Link exact to="/volgendeeditie" activeClassName="active">Volgende editie</Link>
                </li>
            </ul>
        </Nav>
    );
}
