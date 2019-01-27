import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { GlobalStyle } from './style/global-style';
import { HeaderComponent } from './component/HeaderComponent';
import { HomePage } from './page/HomePage';

export class App extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <GlobalStyle />
                    <HeaderComponent />
                    <Route path="/" component={ HomePage } />
                </React.Fragment>
            </Router>
        );
    }
}
