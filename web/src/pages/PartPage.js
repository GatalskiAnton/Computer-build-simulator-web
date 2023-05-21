import React, {useContext} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {Context} from "../index";

const PartPage = () => {
    const part = {
        id: 1,
        name: "Test1",
        type: "SSD",
        img: "https://content2.onliner.by/catalog/device/header/b026e6be1a5d8932abb359866cf820bb.jpeg"
    }
    const description = [
        {id: 1, title: "describe1", deskription: "dekription1"},
        {id: 2, title: "describe2", deskription: "dekription2"},
        {id: 3, title: "describe3", deskription: "dekription3"},
        {id: 4, title: "describe4", deskription: "dekription4"},
        {id: 5, title: "describe5", deskription: "dekription5"},
    ]



    const {basket} = useContext(Context)

    const addToBasket = (addPart) => {
        basket.addToBasket(addPart)
    }

    return (
        <Container className="mt-3 d-flex flex-column justify-content-center">
            <Row className="d-flex justify-content-center">
                <Col md={4}>
                    <Image width={300} height={300} src={part.img}/>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column justify-content-around  align-items-center"
                        style={{width: 300, height: 300, border: '3px solid lightgray'}}
                    >
                        <h2>{part.name}</h2>
                        <Button onClick={() => addToBasket(part)}>Add to basket</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column" style={{marginTop: 20}}>
                <h2>Characteristics</h2>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? "lightgrey" : "transparent", padding: 10}}>
                        {info.title} : {info.deskription}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default PartPage;