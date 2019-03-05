import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { PageTitle } from '../element/PageTitle';
import { Page } from '../element/Page';
import { PageBody } from '../element/PageBody';
import { nextEditions } from '../content/next-edition';
import { routes } from '../routes';

export class AgendaPage extends Component {
    render() {
        return (
            <Page>
                <PageTitle>Agenda</PageTitle>
                <PageBody>
                    <h2>Komende Dojo's</h2>
                    <p>
                        Coderdojo Delft wordt georganiseerd op de 4e zaterdag van de maand.
                        Af en toe wijken we hier vanaf als dit door feestdagen anders niet uitkomt.
                        In de zomervakantie is er geen Dojo.
                    </p>
                    <p>Hieronder vind je een overzicht van de komende edities:</p>
                    <ol>
                        {nextEditions.map((edition, index) => {
                            return (
                                <li key={index}>{edition.displayDate}</li>
                                )
                            })}
                    </ol>
                    <br></br>
                    <p>Je kunt je vanaf de zondag 2 weken voor de Dojo <Link to={routes.nextEdition.url}>hier</Link> aanmelden.</p>
                </PageBody>
            </Page>
        );
    }
}
