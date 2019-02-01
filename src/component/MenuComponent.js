import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import styled from 'styled-components';

import { breakpoint, color, font, whitespace } from '../style/variables';
import { OcticonComponent } from './OcticonComponent';
import { routes } from '../routes';

const Nav = styled.nav`
    @media only screen and (max-width: ${breakpoint.md - 1}px) {
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: ${color.white.white};
        display: none;
        overflow: auto;
        
        &.open {
            display: block;
        }
    }
    
    @media only screen and (min-width: ${breakpoint.md}px) {
        flex-shrink: 0;
        flex-grow: 1;
        margin-right: ${whitespace[2]}px;
        text-align: right;
    }
`;

const List = styled.ul`
    padding: ${whitespace[6]}px ${whitespace[3]}px;
    
    @media only screen and (min-width: ${breakpoint.md}px) {
        padding: ${whitespace[2]}px ${whitespace[0]}px ${whitespace[2]}px ${whitespace[2]}px;
    }
`;

const Link = styled(NavLink)`
    display: inline-block;
    padding: ${whitespace[2]}px;
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
    
    @media only screen and (min-width: ${breakpoint.md}px) {
        font-size: ${font.size[1]}px;
    }
`;

const Close = styled.a`
    position: absolute;
    right: 0;
    top: 0;
    display: block;
    margin: ${whitespace[4]}px;
    
    @media only screen and (min-width: ${breakpoint.md}px) {
        display: none;
    }
`;

const Open = styled.a`
    position: absolute;
    right: 0;
    top: 0;
    display: block;
    margin: ${whitespace[4]}px;
    
    @media only screen and (min-width: ${breakpoint.md}px) {
        display: none;
    }
`;

export class MenuComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuOpen: false
        };

        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
    }

    handleClose() {
        this.setState({menuOpen: false});
    }

    handleOpen() {
        this.setState({menuOpen: true});
    }

    render() {
        return (
            <React.Fragment>
                <Open onClick={this.handleOpen}>
                    <OcticonComponent name="three-bars" size="large" />
                </Open>
                <Nav className={this.state.menuOpen ? 'open' : 'close'}>
                    <Close onClick={this.handleClose}>
                        <OcticonComponent name="x" />
                    </Close>
                    <List onClick={this.handleClose}>
                        <li>
                            <Link exact to={routes.home} activeClassName="active">Home</Link>
                        </li>
                        <li>
                            <Link exact to={routes.nextEdition} activeClassName="active">Volgende editie</Link>
                        </li>
                    </List>
                </Nav>
            </React.Fragment>
        );
    }
}
