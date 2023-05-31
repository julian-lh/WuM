import React from 'react';
import { Container, Spacer, Text } from '@nextui-org/react';

export default function Sources() {

    const sources = [
        {
            authors: 'Doe, J., Smith, A.',
            title: 'The Title of the Paper',
            journal: 'Journal of Example',
            volume: '10',
            number: '2',
            pages: '123-135',
            year: '2022',
        },
        {
            authors: 'Brown, C.',
            title: 'Another Paper',
            journal: 'Conference on Sample',
            volume: '',
            number: '',
            pages: '45-53',
            year: '2021',
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
                    {source.volume && `, vol. ${source.volume}`}
                    {source.number && `, no. ${source.number}`}
                    {source.pages && `, pp. ${source.pages}`}
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
