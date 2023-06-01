import React, { useContext, useState, useEffect } from 'react';
import { Col, Container, Row, Button } from "react-bootstrap";
import PartList from "../components/PartList";
import { Context } from '..';
import {setLastGroup} from "../global/GlobalVars";

const MainPage = () => {

    const { part } = useContext(Context)
    const { user } = useContext(Context)

    const getData = (json, name) =>{
        switch (name){
            case "CPU":
                part.setParts(json.CPU)
                setLastGroup(name)
                break;
            case "GPU":
                part.setParts(json.GPU);
                setLastGroup(name)
                break;
            case "Cooler":
                part.setParts(json.Cooler);
                setLastGroup(name)
                break;
            case "HDD":
                part.setParts(json.HDD);
                setLastGroup(name)
                break;
            case "Motherboard":
                part.setParts(json.Motherboard);
                setLastGroup(name)
                break;
            case "PCCase":
                part.setParts(json.PCCase);
                setLastGroup(name)
                break;
            case "PowerSupply":
                part.setParts(json.PowerSupply);
                setLastGroup(name)
                break;
            case "RAM":
                part.setParts(json.RAM);
                setLastGroup(name)
                break;
            case "SSD":
                part.setParts(json.SSD);
                setLastGroup(name)
                break;
            default:
                part.setParts(null);
                setLastGroup(name)
                break;
        }
    }


    const getComponent = async (name) => {
        console.log(name)
        await fetch("http://localhost:9090/PCBuilder_war_exploded/component/getAll", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin" : "*"
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
            // console.log(json);
            getData(json, name);
        })
            .catch(error => {
                console.log(error);
            }).finally(this.setState({
                isLoading: false,
            }));
    }

    const ActiveOnClick = (name) => { //PowerSupply
        // console.log(name)
        getComponent(name)
    }

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3} className="d-flex flex-column">
                    {part.types.map(type =>
                        <Button
                            key={type.id}
                            onClick={e => ActiveOnClick(type.name)}
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