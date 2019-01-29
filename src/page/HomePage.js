import React, { Component } from 'react';
import styled from 'styled-components';

import { PageTitle } from '../element/PageTitle';

const Home = styled.div`
    text-align: left;
`;

export class HomePage extends Component {
    render() {
        return (
            <Home>
                <PageTitle>Welkom bij CoderDojo Delft!</PageTitle>
            </Home>
        );
    }
}
