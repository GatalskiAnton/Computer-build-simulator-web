import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Form, Nav, Navbar, NavItem} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import "../styles/NavBar.css"
import {BUILD_ROUTE, MAIN_ROUTE} from "../utils/Consts";
import {observer} from "mobx-react-lite";

const NavBar = observer( () => {
    const {user} = useContext(Context);
    return (
        <Navbar expand="lg" className="-bar">
            <Container fluid>
                <NavItem as="text" className = "-bar-item--text">PCBuilder</NavItem>

                <Navbar.Toggle aria-controls="navbarScroll"/>

                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                        <NavLink to={MAIN_ROUTE} className="-bar-link">Home</NavLink>
                        <NavLink to={BUILD_ROUTE} className="-bar-link">Build</NavLink>

                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button className="-bar-button">Search</Button>
                    </Form>

                    {user.isAuth ?
                        <Nav className="ml-auto">
                            <Button className="-bar-button">Admin</Button>
                            <Button className="-bar-button" onClick={() => user.setIsAuth(false)}>Exit</Button>
                        </Nav>
                        :
                        <Nav className="ml-auto">
                            <Button className="-bar-button" onClick={() => user.setIsAuth(true)}>Authorization</Button>
                        </Nav>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
});

export default NavBar;