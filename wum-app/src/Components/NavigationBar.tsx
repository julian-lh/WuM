import React from "react";

import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";


export const NavigationBar = () => {
    return (<Navbar isBordered variant={"sticky"} >
        <Navbar.Brand>
            <Text b color="inherit" hideIn="xs">
                Monokulare Tiefenkriterien
            </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
            {/* <Navbar.Link href="#">Verdeckung</Navbar.Link>
            <Navbar.Link isActive href="#">Schatten</Navbar.Link>
            <Navbar.Link href="#">Vertraute Größe</Navbar.Link>
            <Navbar.Link href="#">Helligkeit & Unschärfe</Navbar.Link>
            <Navbar.Link href="#">Texturdichte</Navbar.Link>
            <Navbar.Link href="#"> Lage zum Horizont</Navbar.Link> */}
        </Navbar.Content>


    </Navbar >);
}