import React, {useContext} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import PartList from "../components/PartList";
import BasketList from "../components/BasketList";
import {Context} from "../index";
import {setLastGroup} from "../global/GlobalVars";
import basketList from "../components/BasketList";


const Basket = () => {
    const {basket} = useContext(Context)
    const {user} = useContext(Context)

    const actionOnClearBtn = () => {
        basket.setPartsInBasket([])
        basket.setTypesInBasket([])
    }

    return (
        <Container>
            <Row className="mt-2">
                <Col md={11}>
                    <BasketList/>
                </Col>
                <Col md={1}>
                    {
                        user.isAuth ?
                            <Container className="d-flex flex-column align-items-center justify-content-between">
                                <Button onClick={() => actionOnClearBtn()}>Clear all</Button>
                                <Button className="mt-2" onClick={() => alert("Save all")}>Save</Button>
                            </Container> :
                            <Container className="d-flex flex-column align-items-center justify-content-between">
                                <Button onClick={() => actionOnClearBtn()}>Clear all</Button>
                                <Button className="mt-2"
                                        onClick={() => alert("No access to function. Log in to save your PC")}>Save</Button>
                            </Container>
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default Basket;