import React, { Component } from 'react';

import { PageTitle } from '../element/PageTitle';
import { Page } from '../element/Page';
import { PageBody } from '../element/PageBody';
import { nextEditions } from '../content/next-edition';

export class AgendaPage extends Component {
    render() {
        return (
            <Page>
                <PageTitle>Agenda</PageTitle>
                <PageBody>
                    <h3>Komende en afgelopen Dojo's</h3>
                    <ol>
                        {nextEditions.map((edition, index) => {
                            return (
                                <li key={index}>{edition.displayDate}</li>
                            )
                        })}
                    </ol>
                </PageBody>
            </Page>
        );
    }
}
