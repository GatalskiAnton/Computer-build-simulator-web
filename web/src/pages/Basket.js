import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import PartList from "../components/PartList";
import BasketList from "../components/BasketList";

const Basket = () => {
    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BasketList/>
                </Col>
            </Row>
        </Container>
    );
};

export default Basket;