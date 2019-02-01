import React, { Component } from 'react';

import { Page } from '../element/Page';
import { PageBody } from '../element/PageBody';
import { PageTitle } from '../element/PageTitle';

export class MentorPage extends Component {
    render() {
        return (
            <Page>
                <PageTitle>Mentoren</PageTitle>
                <PageBody>
                    <p>Zonder vrijwilligers geen CoderDojo! Er komt veel kijken bij de organisatie van een CoderDojo. We draaien op de inzet van vrijwilligers(mentoren) die graag hun kennis delen of hun tijd willen inzetten om kinderen verder te helpen.</p>
                    <p>Weet je veel van programmeren en vind jij het leuk om kennis over te dragen? Meld je dan aan als mentor! Ook als je niet direct technisch onderlegd bent, kun je veel voor ons doen:</p>
                    <ul>
                        <li>Kinderen begeleiden met hun uitdagingen</li>
                        <li>Nieuwe workshops bedenken, maken en geven</li>
                        <li>Achter de schermen innovatieve dingen bedenken voor de Dojo</li>
                    </ul>
                    <h3>Wat vragen we van een vrijwilliger?</h3>
                    <ul>
                        <li>Je kunt minimaal 6x per jaar aanwezig zijn bij een Dojo (deze organiseren we elke maand)</li>
                        <li>Je bent in bezit van een VOG of kan er een aanvragen. In de meeste gevallen vergoeden we de kosten.</li>
                        <li>Je gaat akkoord met ons <a href="http://www.coderdojo-delft.nl/wp-content/uploads/2016/02/Protocol_Veiligheid.pdf">Protocol Veiligheid CoderDojo Nederland</a> en onze <a href="http://www.coderdojo-delft.nl/wp-content/uploads/2016/02/Vrijwilligers_Overeenkomst.pdf">Vrijwilligers Overeenkomst</a></li>
                    </ul>
                    <h3>Aanmelden</h3>
                    <p>Heb jij ook nog eens veel geduld en ben je kindvriendelijk?</p>
                    <h2><a href="https://docs.google.com/forms/d/1MFSfIiJ98OUiN8yZC5_GIxQKEZeeM4Q1jDVstpo31RA/viewform?c=0&amp;w=1&amp;usp=mail_form_link">Meld je aan!</a></h2>
                </PageBody>
            </Page>
        );
    }
}
