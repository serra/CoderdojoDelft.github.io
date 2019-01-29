import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component } from 'react';

import { GlobalStyle } from './style/global-style';
import { HeaderComponent } from './component/HeaderComponent';
import { HomePage } from './page/HomePage';
import { MenuComponent } from './component/MenuComponent';
import { Container } from './element/Container';
import { Content } from './element/Content';
import {NextEditionPage} from './page/NextEditionPage';




export class App extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <GlobalStyle />
                    <Container>
                        <Content>
                            <HeaderComponent />
                        </Content>
                    </Container>
                    <Container>
                        <MenuComponent />
                        <Content>
                            <Route exact path="/" component={ HomePage } />
                            <Route exact path="/volgendeeditie" component={ NextEditionPage } />
                        </Content>
                    </Container>
                </React.Fragment>
            </Router>
        );
    }
}
