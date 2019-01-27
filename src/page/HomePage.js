import React, { Component } from 'react';
import styled from 'styled-components';

const Home = styled.div`
    text-align: left;
`;

export class HomePage extends Component {
    render() {
        return (
            <Home>
                <h1>Welkom bij CoderDojo Delft!</h1>
            </Home>
        );
    }
}
