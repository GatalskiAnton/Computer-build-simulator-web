import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import "../styles/Auth.css"
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {AUTH_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE} from "../utils/Consts";
import {set} from "mobx";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
const Auth = observer(() => {

    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === AUTH_ROUTE

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
                        value={email}
                        onChange={ e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="-auth-form-control"
                        placeholder="Enter your password"
                        value={password}
                        onChange={ e => setPassword(e.target.value)}
                        type="password"
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
                        <Button className="-auth-btn"

                        >
                            {isLogin ? "Enter" : "Registration"}
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;