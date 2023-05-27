import React, {useContext} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import PartList from "../components/PartList";
import BasketList from "../components/BasketList";
import {Context} from "../index";


const Basket = () => {
    const {basket} = useContext(Context)

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={8}>
                    <BasketList/>
                </Col>
                <Col md={1}>
                    <Button onClick={() => basket.clearAllBasket()}>Clear all</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Basket;