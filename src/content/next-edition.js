export const nextEditions = (() => {
    const editions = [
        {
            date: new Date(2019, 1, 23),
            displayDate: 'zaterdag 23 februari 2019',
            registrationStart: 'zondag 10 februari 2019',
            registrationUrl: '//eventbrite.nl/tickets-external?eid=55768330578'
        },
        {
            date: new Date(2019, 2, 23),
            displayDate: 'zaterdag 23 maart 2019',
            registrationStart: 'zondag 10 maart 2019',
            registrationUrl: '//eventbrite.nl/tickets-external?eid=57038658162'
        },
        {
            date: new Date(2019, 3, 20),
            displayDate: 'zaterdag 20 april 2019',
            registrationStart: 'zondag 7 april 2019',
            registrationUrl: '//eventbrite.nl/tickets-external?eid=57043430436'
        },
        {
            date: new Date(2019, 4, 25),
            displayDate: 'zaterdag 25 mei 2019',
            registrationStart: 'zondag 12 mei 2019',
            registrationUrl: '//eventbrite.nl/tickets-external?eid=57043551799'
        },
        {
            date: new Date(2019, 5, 22),
            displayDate: 'zaterdag 22 juni 2019',
            registrationStart: 'zondag 9 juni 2019',
            registrationUrl: '//eventbrite.nl/tickets-external?eid=57043703252'
        },
        {
            date: new Date(2019, 6, 20),
            displayDate: 'zaterdag 20 juli 2019',
            registrationStart: 'zondag 7 juli 2019',
            registrationUrl: '//eventbrite.nl/tickets-external?eid=57043915888'
        },
        {
            date: new Date(2019, 8, 28),
            displayDate: 'zaterdag 28 september 2019',
            registrationStart: 'zondag 15 september 2019',
            registrationUrl: '//eventbrite.nl/tickets-external?eid=57044040260'
        },
        {
            date: new Date(2019, 9, 26),
            displayDate: 'zaterdag 26 oktober 2019',
            registrationStart: 'zondag 13 oktober 2019',
            registrationUrl: '//eventbrite.nl/tickets-external?eid=57044186698'
        },
        {
            date: new Date(2019, 10, 23),
            displayDate: 'zaterdag 23 november 2019',
            registrationStart: 'zondag 10 november 2019',
            registrationUrl: '//eventbrite.nl/tickets-external?eid=57044346175'
        },
        {
            date: new Date(2019, 11, 21),
            displayDate: 'zaterdag 21 december 2019',
            registrationStart: 'zondag 8 december 2019',
            registrationUrl: '//eventbrite.nl/tickets-external?eid=57044489604'
        }
    ].sort((a, b) => {
        if (a.date.getTime() < b.date.getTime()) {
            return -1;
        }

        return 1;
    });

    return editions;
})();

export const nextEdition = ((today) => {
    return nextEditions.filter((edition) => {
        return edition.date.getTime() > today.getTime();
    }).shift();
})(new Date());
