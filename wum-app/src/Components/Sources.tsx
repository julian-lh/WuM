import React from 'react';
import { Container, Spacer, Text } from '@nextui-org/react';

export default function Sources() {

    const sources = [
        {
            authors: 'Goldstein, E.B.',
            title: 'Wahrnehmungspsychologie',
            journal: 'Spektrum Akademischer Verlag',
            year: '1997',
        },
        {
            authors: 'Lukas, J',
            title: 'Psychophysik der Raumwahrnehmung',
            journal: 'Psychologie Verlags Union',
            year: '1996',
        },
        {
            authors: 'Niederee,E. und Wulff, H.J.',
            title: 'Tiefenkriterien',
            journal: 'https://filmlexikon.uni-kiel.de/doku.php/t:tiefenkriterien-6315',
            year: '(letzter Aufruf 29.05.2023)',
        },
        {
            authors: 'Uni Heidelberg',
            title: 'Monokulare Tiefenkriterien',
            journal: 'https://www.psychologie.uni-heidelberg.de/ae/allg/lehre/wct/w/w6_raum/w620_monokulare_tk.htm',
            year: '(letzter Aufruf 29.05.2023)',
        },
        // Add more sources as needed
    ];

    return (
        <Container style={{

            color: 'white',
            padding: '20px',
            textAlign: 'center',
            width: '100%',
            maxWidth: '100%',
        }}>
            <Text h2 >
                Quellen
            </Text>
            {sources.map((source, index) => (
                <Text key={index}>
                    {source.authors}. "{source.title}," <em>{source.journal}</em>
                    {source.year && `, ${source.year}.`}
                </Text>
            ))}
            <Spacer y={1} />
            <div>
                <Text b>Verwendete Bibliotheken:</Text>
                <Text>NextUI, React, Three.js, react-three/fiber</Text>
            </div>
        </Container>
    );
};
