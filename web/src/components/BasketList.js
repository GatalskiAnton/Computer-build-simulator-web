import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import PartItem from "./PartItem";

const BasketList = observer(() => {
    const {basket} = useContext(Context)
    return (
        <Row className="d-flex">
            {basket.elements.map(part =>
                <PartItem key={part.id} part={part}/>
            )}
        </Row>
    );
});

export default BasketList;