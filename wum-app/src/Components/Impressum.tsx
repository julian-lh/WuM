import React from 'react';
import { Container, Input, Spacer, Text } from '@nextui-org/react';

const Impressum = () => {
    return (
        <Container
            style={{
                backgroundColor: 'black',
                color: 'white',
                padding: '20px',
                textAlign: 'center',
                width: '100%',
                maxWidth: '100%',
            }}>
            <Text h2 color='white'>
                Impressum
            </Text>
            <Spacer y={1} />
            <div>
                <Text b color='white'>Julian Lopes Hinz</Text>
            </div>
            <Spacer y={0.5} />
            <div>
                <Text color='white'>Medieninformatik - TH Lübeck</Text>
                <Text color='white'>Sommersemester 2023</Text>
            </div>
            <Spacer />
        </Container>
    );
};

export default Impressum;