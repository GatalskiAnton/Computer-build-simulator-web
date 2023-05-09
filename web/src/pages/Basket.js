import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import BasketList from "../components/BasketList";

const Basket = () => {
    return (
        <Container>
            <Row className="mt-2">
                <Col>
                    <BasketList/>
                </Col>
            </Row>
        </Container>
    );
};

export default Basket;