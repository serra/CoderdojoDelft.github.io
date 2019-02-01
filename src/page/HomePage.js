import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Page } from '../element/Page';
import { PageBody } from '../element/PageBody';
import { PageTitle } from '../element/PageTitle';
import { nextEdition } from '../content/next-edition';
import { routes } from '../routes';

export class HomePage extends Component {
    render() {
        return (
            <Page>
                <PageTitle>Welkom bij CoderDojo Delft!</PageTitle>
                <PageBody>
                    <h2>Welkom bij CoderDojo Delft!</h2>
                    <p>CoderDojo Delft realiseert samen met enthousiaste vrijwilligers een platform waar kinderen van 8 tot 14 jaar in een technische stad als Delft de mogelijkheid krijgen om kennis te maken met een nog ontbrekend vak in het basisonderwijs en voortgezet onderwijs: programmeren.</p>
                    <p>Bij CoderDojo Delft leren kinderen programmeren, websites te bouwen, apps te ontwikkelen, programma’s te maken, games te maken en meer! We komen regelmatig bij elkaar om te leren programmeren, maar ook om andere deelnemers te ontmoeten. De CoderDojo is gratis bij te wonen omdat het volledig georganiseerd en begeleid wordt door vrijwilligers (mentoren).</p>
                    <p>Een belangrijke eigenschap van een CoderDojo is dat het plaatsvindt in een openbare ruimte en voor iedereen toegankelijk is. OPEN (voormalig Bibliotheek DOK Delft) is daarom de perfecte plek voor onze bijeenkomsten.</p>
                    <h3>Activiteiten</h3>
                    <p>We organiseren een CoderDojo op:</p>
                    <p><strong>{nextEdition.date}</strong></p>
                    <p>Kijk op onze pagina <Link to={routes.nextEdition}>‘Volgende editie’</Link> voor meer informatie over de komende CoderDojo!</p>
                    <p>Andere locaties</p>
                    <p>Ook op andere plekken in Nederland zijn CoderDojo’s gestart! Geen plek meer in Delft? Meld je dan aan bij een van de andere CoderDojo’s in de buurt:</p>
                    <ul>
                        <li><a href="http://www.coderdojo-westland.nl/">CoderDojo Westland</a></li>
                        <li><a href="http://www.coderdojo-denhaag.nl/">CoderDojo Den Haag</a></li>
                        <li><a href="http://coderdojo-rotterdam.nl/">CoderDojo Rotterdam</a></li>
                    </ul>
                    <h3>Thuis verder</h3>
                    <p>Je kunt thuis verder leren programmeren in het programma Scratch. Met Scratch programmeer je je eigen interactieve verhalen, spellen en animaties. Ga naar <a href="http://scratch.mit.edu">scratch.mit.edu</a> om een eigen project te starten. Kennismaken met HTML? Op <a href="http://www.liveweave.com">www.liveweave.com</a> of op <a href="http://neocities.org">neocities.org</a> kun je bouwen aan je pagina of website. Gebruik <a href="https://drive.google.com/a/dok.info/file/d/0B5ue9rJQ-LwBdHgxZWU0YkdyZjA/view">het stappenplan</a> om je eigen website te bouwen of bekijk thuis <a href="https://drive.google.com/a/dok.info/file/d/0B5ue9rJQ-LwBd0kwaFR5bXpnMk0/view">de presentatie</a> over HTML die is gegeven tijdens de CoderDojo op 31 oktober.</p>
                    <p>Je kan je nu ook aansluiten bij onze CodeCombat clan. Klik op <a href="https://codecombat.com/clans/56cd5e28a046201f001ddfe1">deze link</a> om je aan te melden.</p>
                </PageBody>
            </Page>
        );
    }
}
