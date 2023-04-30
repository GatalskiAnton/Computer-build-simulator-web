import React from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import "../styles/Auth.css"
import {NavLink, useLocation} from "react-router-dom";
import {AUTH_ROUTE, REGISTRATION_ROUTE} from "../utils/Consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === AUTH_ROUTE

    console.log(location)
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? "Authorization" : "Registration"}</h2>
                <Form className="-auth-form">
                    <Form.Control
                        className="-auth-form-control"
                        placeholder="Enter your login"
                    />
                    <Form.Control
                        className="-auth-form-control"
                        placeholder="Enter your password"
                    />
                    <div className="-auth-row">
                        {isLogin ?
                            <div>
                                No account?<NavLink to={REGISTRATION_ROUTE}>Register</NavLink>
                            </div>
                        :
                            <div>
                                Have an account?<NavLink to={AUTH_ROUTE}>Enter</NavLink>
                            </div>
                        }
                        <Button className="-auth-btn">
                            {isLogin ? "Enter" : "Registration"}
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;