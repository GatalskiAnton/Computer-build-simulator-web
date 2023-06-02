import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Form, Nav, Navbar, NavItem} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import "../styles/NavBar.css"
import {ADMIN_ROUTE, AUTH_ROUTE, BASKET_ROUTE, BUILD_ROUTE, MAIN_ROUTE} from "../utils/Consts";
import {useHistory} from "react-router-dom";
import {observer} from "mobx-react-lite";


//Not working observer, NEED TO FIX
const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()
    return (
        <Navbar expand="lg" className="-bar">
            <Container fluid>
                <NavItem as="text" className="-bar-item--text">PCBuilder</NavItem>

                <Navbar.Toggle aria-controls="navbarScroll"/>

                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >

                        <NavLink to={MAIN_ROUTE} className="-bar-link">Home</NavLink>
                        <NavLink to={BASKET_ROUTE} className="-bar-link">Basket</NavLink>

                    </Nav>


                    {user.isAuth ?
                        <Nav className="ml-auto">
                            <Button
                                className="-bar-button"
                                onClick={() => {
                                    history.push(ADMIN_ROUTE);
                                }
                            }
                            >
                                Admin
                            </Button>
                            <Button
                                className="-bar-button"
                                onClick={() => {
                                    history.push(AUTH_ROUTE);
                                    user.setIsAuth(false);
                                    alert(`Goodbye ${user.login}. See you next time :)`)
                                }
                                }
                            >
                                Exit
                            </Button>
                        </Nav>
                        :
                        <Nav className="ml-auto">
                            <Button
                                className="-bar-button"
                                onClick={() => history.push(AUTH_ROUTE)
                                }
                            >
                                Authorization
                            </Button>
                        </Nav>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
});

export default NavBar;