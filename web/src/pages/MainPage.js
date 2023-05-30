import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import PartList from "../components/PartList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import async from "async";


const MainPage = observer(() => {
    const {part} = useContext(Context)

    const [chooseType, setChooseType] = useState('')

    const getData = (json) =>{
        switch (chooseType){
            case "CPU":
                part.setParts(json.CPU);
                break;
            case "GPU":
                part.setParts(json.GPU);
                break;
            case "Cooler":
                part.setParts(json.Cooler);
                break;
            case "HDD":
                part.setParts(json.HDD);
                break;
            case "Motherboard":
                part.setParts(json.Motherboard);
                break;
            case "PCCase":
                part.setParts(json.PCCase);
                break;
            case "PowerSupply":
                part.setParts(json.PowerSupply);
                break;
            case "RAM":
                part.setParts(json.RAM);
                break;
            case "SSD":
                part.setParts(json.SSD);
                break;
            default:
                part.setParts(null);
                break;
        }
    }

    const getComponents = async () =>{
        await fetch('http://192.168.0.100:9090/PCBuilder_war_exploded/component/getAll', {
            method:"POST",
            mode:'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "login": "guest",
                "componentName": chooseType,
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
        })
    }

    useEffect(() => {
        getComponents().then(json => getData(json))
            .catch(error => {
                console.log("ERROR GET CHOSEN COMPONENT")
            }).finally()
    },[])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3} className="d-flex flex-column">
                    {part.types.map( type =>
                        <Button
                            key={type.id}
                            value={chooseType}
                            onClick={ e => setChooseType(type.name)}
                            className="mt-1"
                        >{type.name}</Button>
                    )}
                </Col>
                <Col md={9}>
                    <PartList/>
                </Col>
            </Row>
        </Container>
    );
});

export default MainPage;