import React, { useContext, useState, useEffect } from 'react';
import { Col, Container, Row, Button } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import PartList from "../components/PartList";
import { Context } from '..';

const MainPage = () => {

    const { part } = useContext(Context)
    const { user } = useContext(Context)


    const tempArray = []

    const getComponent = async (name) => {
        console.log(name)
        await fetch("http://localhost:9090/PCBuilder_war_exploded/component/getAll", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "login": "guest",
                "componentName": name,
            })
        }).then(response => {
            if (!response.ok) {
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
            // getData(json);
            part.clearParts()
            part.pasts = json.name
        })
            .catch(error => {
                console.log(error);
            }).finally(this.setState({
                isLoading: false,
            }));
    }

    const activeOnClick = (name) => { //PowerSupply
        console.log(name)

        getComponent(name)
    }

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3} className="d-flex flex-column">
                    {part.types.map(type =>
                        <Button
                            key={type.id}
                            onClick={e => activeOnClick(type.name)}
                            className="mt-1"
                        >{type.name}</Button>
                    )}
                </Col>
                <Col md={9}>
                    <PartList />
                </Col>
            </Row>
        </Container>
    );
};

export default MainPage;