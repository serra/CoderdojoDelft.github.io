import React, { Component } from 'react';

import { PageTitle } from '../element/PageTitle';
import { Page } from '../element/Page';
import { PageBody } from '../element/PageBody';
import { nextEdition } from '../content/next-edition';

export class NextEditionPage extends Component {
    render() {
        return (
            <Page>
                <PageTitle>Volgende editie</PageTitle>
                <PageBody>
                    <h2>{nextEdition.date}</h2>
                    <p>De volgende CoderDojo in Delft wordt georganiseerd op zaterdag 26 januari. De CoderDojo vindt plaats in OPEN – de vernieuwde plaats van Bibliotheek DOK Delft en VAK delft (Vesteplein 100). We zullen op de dag zelf de plaats duidelijk aangeven.</p>
                    <p>De link om in te schrijven vind je onder aan deze pagina. De inschrijving gaat open op {nextEdition.registrationStart} om 12:00 (’s middags) –  Wees er snel bij!</p>
                    <h3>Wat gaan we doen?</h3>
                    <ul>
                        <li>Scratch</li>
                        <li>Microbit</li>
                        <li>Arduino</li>
                        <li>Python</li>
                        <li>Websites</li>
                        <li>3D printer</li>
                    </ul>
                    <p>Kortom, je mag komen met elk project waar je eerder aan gewerkt hebt. Ben je nog nooit geweest? Dan hebben we opdrachten voor je klaarliggen en helpen we je op weg. Maar je mag natuurlijk ook zelf iets verzinnen. Misschien kun je alvast een karakter tekenen voor in een spel dat je wilt maken, of een filmpje zoeken voor een website die je wilt maken.</p>
                    <h3>Waar?</h3>
                    <p>De CoderDojo vindt plaats bij OPEN (Vesteplein 100).</p>
                    <h3>Ouders</h3>
                    <p>We vinden het erg fijn als ouders actief meehelpen, zeker voor de jongere kinderen (minimaal 8 jaar). Ouders kunnen ondertussen ook gebruik maken van de faciliteiten van de bibliotheek. Er is beperkt zitplek voor ouders aan de tafels van de kinderen.</p>
                    <h3>Wat moet ik meenemen?</h3>
                    <ul>
                        <li>Een werkende laptop*</li>
                        <li>Een 3-uurtje &#8211; wij zorgen voor een pakje drinken</li>
                        <li>Een goed humeur!</li>
                    </ul>
                    <p><em>*) Zorg dat je laptop minimaal over WiFi, een browser (Chrome / Firefox) beschikt. Vergeet ook je oplader niet. Wij kunnen helaas niet alle kinderen helpen om alles werkend te krijgen dus wij vertrouwen erop dat alles werkt bij binnenkomst! Zorg er ook voor dat er een e-mailadres beschikbaar is om een account aan te kunnen maken voor online programma’s.</em></p>
                    <p>We hebben een beperkt aantal laptops te leen. Laat het ons via het inschrijfformulier weten als je daarvan gebruik wilt maken.</p>
                    <h3>Inschrijven</h3>
                    <p>Voor deze Dojo hebben we maar beperkt plek! Er is ruimte voor een maximaal aantal deelnemers. Elke deelnemer heeft zijn eigen ticket nodig, en je kunt maximaal twee tickets reserveren. Als de plekken voor deze CoderDojo bezet zijn, kun je je naam op de wachtlijst zetten, we nemen dan contact met je op zodra er een plek vrijkomt. Laat het ons dus ook weten als je verhinderd bent.</p>
                    <iframe title="registration" src={nextEdition.registrationUrl} width="100%" height="500" frameBorder="0" marginWidth="5" marginHeight="5" />
                    <p><i>Is de Dojo vol, of kun je niet op die dag? Je kunt ook kijken of er plek is bij een CoderDojo in de buurt: <a href="http://www.coderdojo-westland.nl">CoderDojo Westland</a>, <a href="http://www.coderdojo-denhaag.nl">CoderDojo Den Haag</a> of <a href="http://www.coderdojo-rotterdam.nl">CoderDojo Rotterdam</a>.</i></p>
                </PageBody>
            </Page>
        );
    }
}
