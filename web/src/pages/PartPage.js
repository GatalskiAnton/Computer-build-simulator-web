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
        getComponent(groupType, partId);
    },[])

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

    const [canAdd, setCanAdd] = useState(true)
    const [canRemove, setCanRemove] = useState(false)

    const reactToAddBtn = () => {
        // if (hasSuchType(basket, groupType) !== -1){
        //     alert('Part of such type is already in basket')
        //     setCanAdd(false)
        // }
        // else{
        //     if (hasSuchElement(basket, partId, groupType) !== -1){
        //         alert('Has such part')
        //         setCanAdd(false)
            // }else{
        for (let i = 0; i < basket.partsInBasket.length; i++) {
            if (basket.partsInBasket[i].partInfo.id === partId && basket.partsInBasket[i].groupType === groupType){
                setCanAdd(false)
                setCanRemove(true)
            }
        }


                if (canAdd){
                    basket.partsInBasket.push({partInfo, groupType})
                    setCanAdd(false)
                }
    }

    const hasSuchElement = (basket, id ,type) => {
        return basket.partsInBasket.findIndex(el => el.groupType === type && el.partInfo.id === id) === -1
    }

    const hasSuchType = (basket, type) => {
        return basket.partsInBasket.findIndex(el => el.groupType === type) === -1
    }
    const reactToRemoveBtn = () =>{
        if (basket.partsInBasket.length > 0){
            try{
                // if (!hasSuchElement(basket, partId, groupType)){
                //     alert("no such element")
                //     return
                // }
                // for (let i = 0; i < basket.partsInBasket.length; i++) {
                //     if (basket.partsInBasket[i].partInfo.id === partId && basket.partsInBasket[i].groupType === groupType){
                //         basket.partsInBasket.splice(i, 1)
                //     }
                // }


                for (let i = 0; i < basket.partsInBasket.length; i++) {
                    if (basket.partsInBasket[i].partInfo.id === partId && basket.partsInBasket[i].groupType === groupType){
                        setCanAdd(false)
                        setCanRemove(true)
                    }
                }

                if (canRemove){
                    for (let i = 0; i < basket.partsInBasket.length; i++) {
                        if (basket.partsInBasket[i].partInfo.id === partId && basket.partsInBasket[i].groupType === groupType) {
                            basket.removeElementIndex(i)
                        }
                    }
                    setCanRemove(false)
                }
            }
            catch (e){
                alert('check what you delete')
            }
        }else{alert('no elements in basket')}
    }

    return (
        <Container className="mt-3 d-flex flex-column justify-content-center">
            <Row className="d-flex justify-content-center">
                <Col md={4}>
                    <Image width={300} height={300} src={require(`../images/${groupType}/${partId}.jpg`)}/>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column justify-content-around  align-items-center"
                        style={{width: 300, height: 300, border: '3px solid lightgray'}}
                    >
                        <h2>{partInfo.name}</h2>
                        <h2>{groupType}</h2>
                        <h2>{partInfo.price}$</h2>
                        <Container className="d-flex flex-column align-content-around justify-content-center">
                            <Button id="addBtn" onClick={() => {
                                reactToAddBtn();
                            }}>Add to basket</Button>
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