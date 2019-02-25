import React, { Component } from 'react';

import { Page } from '../element/Page';
import { PageBody } from '../element/PageBody';
import { PageTitle } from '../element/PageTitle';

export class ContinueProgrammingPage extends Component {
    render() {
        return (
            <Page>
                <PageTitle>Thuis verder?</PageTitle>
                <PageBody>
                <p>Je kunt thuis verder leren programmeren in het programma Scratch. Met Scratch programmeer je je eigen interactieve verhalen, spellen en animaties. Ga naar <a href="http://scratch.mit.edu" target="_blank" rel="noopener noreferrer">scratch.mit.edu</a> om een eigen project te starten.</p>
                <p>Kennismaken met HTML? Op <a href="http://www.liveweave.com" target="_blank" rel="noopener noreferrer">www.liveweave.com</a> of op <a href="http://neocities.org" target="_blank" rel="noopener noreferrer">neocities.org</a> kun je bouwen aan je pagina of website. Gebruik <a href="https://drive.google.com/a/dok.info/file/d/0B5ue9rJQ-LwBdHgxZWU0YkdyZjA/view" target="_blank" rel="noopener noreferrer">het stappenplan</a> om je eigen website te bouwen of bekijk thuis <a href="https://drive.google.com/a/dok.info/file/d/0B5ue9rJQ-LwBd0kwaFR5bXpnMk0/view" target="_blank" rel="noopener noreferrer">de presentatie</a> over HTML die is gegeven tijdens de CoderDojo op 31 oktober.</p>
                <p>Je kan je nu ook aansluiten bij onze CodeCombat clan. Klik op <a href="https://codecombat.com/clans/56cd5e28a046201f001ddfe1" target="_blank" rel="noopener noreferrer">deze link</a> om je aan te melden.</p>
                </PageBody>
            </Page>
        )
    }
}