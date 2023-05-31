import React from "react";

import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";


export const NavigationBar = () => {
    return (<Navbar isBordered variant={"sticky"} >
        <Navbar.Brand>
            <Text b color="inherit" size={25}>
                Monokulare Tiefenkriterien
            </Text>
        </Navbar.Brand>
        <Navbar.Content >

        </Navbar.Content>
        <Navbar.Content>
            <Navbar.Link color="inherit" href="#impressum">
                Impressum
            </Navbar.Link>
            <Navbar.Link color="inherit" href="#quellen">
                Quellen
            </Navbar.Link>
            {/* <Navbar.Item>
                <Button auto flat as={Link} href="#">
                    Sign Up
                </Button>
            </Navbar.Item> */}
        </Navbar.Content>

    </Navbar >);
}