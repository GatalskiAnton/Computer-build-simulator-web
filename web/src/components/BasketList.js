import React, {useContext} from 'react';
import {Context} from "../index";
import {Row} from "react-bootstrap";
import PartItem from "./PartItem";
import {observer} from "mobx-react-lite";

const BasketList = observer(() => {
    const {basket} = useContext(Context)
    return (
        <Row className="d-flex">
            {basket.partsInBasket.map(part =>
                <PartItem key={part.id} part={part} />
            )}
        </Row>
    );
});

export default BasketList;