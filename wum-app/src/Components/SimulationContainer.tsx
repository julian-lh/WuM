import React from 'react';
import { Row, Button, Card, Text, Spacer, Container } from '@nextui-org/react';
import ThreeJsWindow from './ThreeJsWindow';

export const SimulationContainer = ({ title, text, children }: { title: string, text: string, children: JSX.Element }) => {

    return (
        <Container>
            <Spacer y={1} />
            <Text h1 size={30}
                css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}
                weight="bold">
                {title}
            </Text>

            <Spacer y={1} />

            <Card variant="flat" css={{ height: "400px", backgroundColor: "#FFFFFF" }}>
                <Row gap={2}>
                    <Container css={{ height: "400px" }} >
                        {children}
                    </Container>
                    <Container >
                        <Text b>{text}</Text>
                    </Container>
                </Row>
            </Card>
        </Container >
    );
}