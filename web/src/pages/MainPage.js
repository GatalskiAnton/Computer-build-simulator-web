import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import PartList from "../components/PartList";

const MainPage = () => {
    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <PartList/>
                </Col>
            </Row>
        </Container>
    );
};

export default MainPage;