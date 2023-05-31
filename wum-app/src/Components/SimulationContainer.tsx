import React from 'react';
import { Row, Button, Card, Text, Spacer, Container } from '@nextui-org/react';
import ThreeJsWindow from './ThreeJsWindow';

export const SimulationContainer = ({ title, children }: { title: string, children: JSX.Element }) => {
    const fliesstext = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus sem. Proin enim nisl, congue sit amet quam nec, pulvinar pretium tellus. In ac sem orci. Etiam suscipit quis ligula vitae eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi augue risus, ultricies et lectus ac, cursus gravida ex. Aenean sit amet bibendum leo, nec tempus ex. Maecenas libero risus, condimentum ac orci non, gravida vulputate tortor. Duis mi leo, congue id bibendum ac, pharetra ut nunc. Quisque rhoncus volutpat cursus. Mauris metus tortor, molestie ut consectetur in, imperdiet a nisi. Aenean aliquam sit amet tortor et maximus. Aenean mauris metus, tincidunt eu massa sed, volutpat pretium nulla. Phasellus lorem sem, sodales eget mattis ac, consectetur nec turpis.";

    return (
        <Container>
            <Spacer y={1} />
            <Text h1 size={30}
                css={{
                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                }}
                weight="bold">
                {title}
            </Text>

            <Card variant="flat" css={{ height: "400px", backgroundColor: "#FFFFFF" }}>
                <Row gap={2}>
                    <Container>
                        {/* <ThreeJsWindow /> */}
                        {children}
                        {/* <Button rounded}>Click</Button> */}
                    </Container>

                    <Container>
                        <Text b>{fliesstext}</Text>
                    </Container>
                </Row>

            </Card>

        </Container >
    );
}