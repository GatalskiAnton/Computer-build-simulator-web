import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {Context} from "../index";
import {useParams} from 'react-router-dom'
import {isDisabled} from "bootstrap/js/src/util";
import {getLastGroup} from "../global/GlobalVars";

const PartPage = () => {

    const [partInfo, setPartInfo] = useState({info : []})

    const {groupType, partId} = useParams()

    const {basket} = useContext(Context)

    // console.log(`groupType = ${groupType} ; partID = ${partId}`)

    useEffect(() => {
        getComponent(groupType, partId)
    }, [])

     const getComponent = async (partType, partID) => {
        // console.log(`type = ${partType} && id = ${partID}`)
        await fetch("http://localhost:9090/PCBuilder_war_exploded/component/getInfo", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "login": "guest",
                "componentName": partType,
                "id": partID,
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
            setPartInfo(json)
        })
            .catch(error => {
                console.log(error);
            }).finally();
    }

    const getInfo = () => {
        var keys = Object.keys(partInfo)
        var info = [];
        for (let i = 0; i < keys.length; ++i) {
            if (keys[i] === 'price'){
                info.push(
                    <Row key={i} style={{background: i % 2 === 0 ? "lightgrey" : "transparent", padding: 10}}>
                        {keys[i]} | {partInfo[keys[i]]}$
                    </Row>)
            }
            else{
                info.push(
                    <Row key={i} style={{background: i % 2 === 0 ? "lightgrey" : "transparent", padding: 10}}>
                        {keys[i]} | {partInfo[keys[i]]}
                    </Row>)
            }
        }
        return info;
    }

    const reactToAddBtn = () => {
        if (!basket.typesInBasket.includes(groupType) || basket.partsInBasket.length === 0){
            basket.typesInBasket.push(groupType)
            basket.partsInBasket.push(partInfo)
        }else{
            if (basket.typesInBasket.includes(groupType)){
                alert('Part of such type is already in basket')
            }
            else if(hasSuchElement(basket, partInfo.id, groupType)){
                alert('This part is already in basket')
            }
        }
    }

    const hasSuchElement = (basket, id, type) => {
        for (let i = 0; i < basket.typesInBasket.length; i++) {
            if ( basket.partsInBasket[i].id === id && basket.typesInBasket[i] === type ){
                return true;
            }
        }
        return false
    }

    const reactToRemoveBtn = () =>{
        if (basket.partsInBasket.length > 0){
            if (!basket.typesInBasket.includes(groupType)){
                alert('Nothing of such type in basket')
            }
            else if (!hasSuchElement(basket, partInfo.id, groupType)){
                alert('No such part in basket')
            }else {
                for (let i = 0; i < basket.partsInBasket.length; i++) {
                    if (basket.partsInBasket[i].id === partInfo.id && basket.typesInBasket[i] === groupType){
                        basket.partsInBasket.splice(i, 1)
                    }
                }
                basket.typesInBasket.filter(i => i !== groupType)
            }
        }else{alert('no elements in basket')}

    }

    return (
        <Container className="mt-3 d-flex flex-column justify-content-center">
            <Row className="d-flex justify-content-center">
                <Col md={4}>
                    <Image width={300} height={300} src={require("../images/GPU/GeForceGT1030.jpg")}/>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column justify-content-around  align-items-center"
                        style={{width: 300, height: 300, border: '3px solid lightgray'}}
                    >
                        <h2>{partInfo.name}</h2>
                        <h2>{partInfo.price}$</h2>
                        <Container className="d-flex flex-column align-content-around justify-content-center">
                            <Button id="addBtn" onClick={() => reactToAddBtn()}>Add to basket</Button>
                            <Button id="removeBtn" className="mt-2" onClick={() => reactToRemoveBtn()}>Remove from basket</Button>
                        </Container>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column" style={{marginTop: 20}}>
                <h2>Characteristics</h2>
                {
                    getInfo()
                }
            </Row>
        </Container>
    );
};

export default PartPage;