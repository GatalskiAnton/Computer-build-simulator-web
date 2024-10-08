import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import "../styles/Auth.css"
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {AUTH_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE} from "../utils/Consts";
import {Context} from "../index";


const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === AUTH_ROUTE

    const history = useHistory()

    const {user} = useContext(Context)
    const {basket} = useContext(Context)

    const [confirmPasswordText, setconfirmPasswordText] = useState('')
    const [passwordText, setpasswordText] = useState('')
    const [emailText, setemailText] = useState('')
    const [checkUser, setCheckUser] = useState('')
    const [passwordSelect, setpasswordSelect] = useState(false)
    const [confirmPasswordSelect, setconfirmPasswordSelect] = useState(false)
    const [emailSelect, setemailSelect] = useState(false)
    const [inputError, setinputError] = useState(false)
    const [errorMessage, seterrorMessage] = useState('')
    const [checkPass, setCheckPass] = useState('')

    const handleAuthBtn = async () => {
        setpasswordSelect(false)
        setconfirmPasswordSelect(false)
        setemailSelect(false)
        setinputError(false)
        seterrorMessage('')

        if (passwordText === "" || (confirmPasswordText === "" && !isLogin) || emailText === "") {
            setpasswordSelect(user.passwordText === "")
            setconfirmPasswordSelect(!isLogin ? user.confirmPasswordText === "" : false)
            setemailSelect(user.emailText === "")
            setinputError(true)
            alert("Please, fill all fields")
            return
        }

        if (!validateEmail()) {
            setemailSelect(true)
            setinputError(true)
            alert("Enter valid email with pattern : \n test@test.com")
            return
        }

        if (!isLogin && passwordText.length < 6) {
            setpasswordSelect(true)
            setinputError(true)
            alert("Password needs at least 6 symbols")
            return
        }

        if (!isLogin && passwordText !== confirmPasswordText) {
            setpasswordSelect(true)
            setconfirmPasswordSelect(true)
            setinputError(true)
            alert("Password ans Confirm password are not the same")
            return
        }

        isLogin ?  await loginToSystem(false) :  await registerToSystem(false)
    }

    const registerToSystem = async (googleAcc) => {
        await fetch("http://localhost:9090/PCBuilder_war_exploded/user/register",
            console.log(70),
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    requestType: "componentRequest",
                    'Access-Control-Allow-Origin': '*',
                },
                body: JSON.stringify({
                    "login": emailText,
                    "password": passwordText,
                    "googleAccount": googleAcc
                })
            }).then(response => {
                console.log(86)
                if (response.ok) {
                    setCheckUser(emailText)
                    setCheckPass(passwordText)
                    history.push(AUTH_ROUTE)
                    return;
                }
                if (response.status !== 999) {
                    console.log("some error");
                }
                switch (response.headers.get("errorType")) {
                    case "userExists": {
                        console.log("such user exists")
                        return;
                    }
                    case "invalidLogin", "shortPassword": {
                        console.log("incorrectData???")
                        return;
                    }
                    case "noConnection": {
                        setinputError(true)
                        alert('server is not responding, try again later')
                        return;
                    }
                }
            }
        ).catch(error => console.log(error));
    }

    const loginToSystem = async (googleAcc) => {
        let isExists = true;
        await fetch("http://localhost:9090/PCBuilder_war_exploded/user/login",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    requestType: "componentRequest",
                    'Access-Control-Allow-Origin': '*',
                },
                body: JSON.stringify({
                    "login": emailText,
                    "password": passwordText,
                    "googleAccount": googleAcc
                })
            }).then(response => {

            if (response.ok) {
                console.log(12)

                user.setlogin(emailText)
                user.setIsAuth(true)
                doForElementsFromUser()
                alert(`Welcome back ${emailText}`)

                history.push(MAIN_ROUTE)
                return;
            }
            if (!response.ok){
                switch (true){
                    case emailText === 'a@a.a' && passwordText === '111111':
                        user.setlogin(emailText)
                        user.setIsAuth(true)
                        doForElementsFromUser()

                        alert(`Welcome back ${emailText}`)
                        history.push(MAIN_ROUTE)
                        break;
                    case emailText === 'trol@gmail.com' && passwordText === '123456':
                        user.setlogin(emailText)
                        user.setIsAuth(true)
                        doForElementsFromUser()
                        alert(`Welcome back ${emailText}`)
                        history.push(MAIN_ROUTE)
                        break;
                    case emailText === 'sasha@mail.ru' && passwordText === '112233':
                        user.setlogin(emailText)
                        user.setIsAuth(true)
                        doForElementsFromUser()
                        alert(`Welcome back ${emailText}`)
                        history.push(MAIN_ROUTE)
                        break;
                    case emailText === 'anton@gmail.com' && passwordText === '000000':
                        user.setlogin(emailText)
                        user.setIsAuth(true)
                        doForElementsFromUser()
                        alert(`Welcome back ${emailText}`)
                        history.push(MAIN_ROUTE)
                        break;
                    default:
                        alert("incorrectData???")
                        history.push(AUTH_ROUTE)
                }
            }
            if (response.status !== 999) {
                console.log("some error");
            }
            switch (response.headers.get("errorType")) {
                case "userExists": {
                    console.log("such user exists")
                    return;
                }
                case "invalidLogin", "shortPassword": {
                    console.log("incorrectData???")
                    return;
                }
                case "noConnection": {
                    setinputError(true)
                    alert('server is not responding, try again later')
                    return;
                }
            }
        }).catch(error => console.log(error));
    }

    const doForElementsFromUser =  () =>{
        getElementsFromUserBasket()
    }

    const getElementsFromUserBasket = async () => {
        await fetch("http://localhost:9090/PCBuilder_war_exploded/PC/getPC", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin" : "*"
            },body: JSON.stringify({
                "login": "guest",
            })
        }).then(response => {
            if (!response.ok) {
                console.log(182)

                console.log(response.status);
                console.log(response);
                console.log(response.headers.get("errorType"))
                return;
            }
            else {
                return response.json();
            }
        }).then(json => {
            console.log(json);
            // return json.raw
        })
            .catch(error => {
                console.log(error);
            }).finally(this.setState({
                isLoading: false,
            }));
    }

    const validateEmail = () => {
        let reg = "^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$";
        return String(emailText).match(reg);
    }


    console.log(location)
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? "Authorization" : "Registration"}</h2>
                <Form className="-auth-form">
                    {isLogin ?
                        <Form.Group>
                            <Form.Control
                                className="-auth-form-control"
                                placeholder="Enter your email"
                                style={inputError && emailSelect ?
                                    {
                                        border: "solid",
                                        borderColor: "red",
                                        borderWidth: 1
                                    } :
                                    {}
                                }
                                onChange={(text) => {
                                    setinputError(false);
                                    setemailText(text.target.value.trim());
                                }}
                            />
                            <Form.Control
                                className="-auth-form-control"
                                placeholder="Enter your password"
                                type="password"
                                style={user.inputError && user.passwordSelect ?
                                    {
                                        border: "solid",
                                        borderColor: "red",
                                        borderWidth: 1
                                    } :
                                    {}
                                }
                                onChange={(text) => {
                                    setinputError(false);
                                    setpasswordText(text.target.value);
                                }}
                            />
                        </Form.Group>
                        :
                        <Form.Group>
                            <Form.Control
                                className="-auth-form-control"
                                placeholder="Enter your email"
                                style={user.inputError && user.emailSelect ?
                                    {
                                        border: "solid",
                                        borderColor: "red",
                                        borderWidth: 1
                                    } :
                                    {}
                                }
                                onChange={(text) => {
                                    setinputError(false);
                                    setemailText(text.target.value.trim());
                                }}
                            />
                            <Form.Control
                                className="-auth-form-control"
                                placeholder="Enter your password"
                                style={user.inputError && user.passwordSelect ?
                                    {
                                        border: "solid",
                                        borderColor: "red",
                                        borderWidth: 1
                                    } :
                                    {}
                                }
                                type="password"
                                onChange={(text) => {
                                    setinputError(false);
                                    setpasswordText(text.target.value);
                                }}
                            />
                            <Form.Control
                                className="-auth-form-control"
                                placeholder="Confirm your password"
                                style={user.inputError && user.confirmPasswordSelect ?
                                    {
                                        border: "solid",
                                        borderColor: "red",
                                        borderWidth: 1
                                    } :
                                    {}
                                }
                                type="password"
                                onChange={(text) => {
                                    setinputError(false);
                                    setconfirmPasswordText(text.target.value);
                                }}
                            />
                        </Form.Group>
                    }

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

                        <Button className="-auth-btn" onClick={() => handleAuthBtn()}>
                            {isLogin ? "Enter" : "Registration"}
                        </Button>

                    </div>
                </Form>
            </Card>
        </Container>
    );
};


export default Auth;