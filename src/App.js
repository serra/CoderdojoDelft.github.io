import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component } from 'react';

import { GlobalStyle } from './style/global-style';
import { HeaderComponent } from './component/HeaderComponent';
import { HomePage } from './page/HomePage';
import { MenuComponent } from './component/MenuComponent';
import { Container } from './element/Container';
import { Content } from './element/Content';
import {NextEditionPage} from './page/NextEditionPage';
import { MentorPage } from './page/MentorPage';
import { routes } from './routes';
import { ExtraInfoPage } from './page/ExtraInfoPage';
import { AboutUsPage } from './page/AboutUsPage';

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
                            <Route exact path={routes.home.url} component={ HomePage } />
                            <Route exact path={routes.nextEdition.url} component={ NextEditionPage } />
                            <Route exact path={routes.mentors.url} component={ MentorPage } />
                            <Route exact path={routes.extraInfo.url} component={ ExtraInfoPage } />
                            <Route exact path={routes.aboutUs.url} component={ AboutUsPage } />
                        </Content>
                    </Container>
                </React.Fragment>
            </Router>
        );
    }
}
