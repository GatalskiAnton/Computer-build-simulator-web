import React, {useContext} from 'react';
import {Context} from "../index";
import {Row} from "react-bootstrap";
import PartItem from "./PartItem";
import {observer} from "mobx-react-lite";
import BasketItem from "./BasketItem";

const BasketList = observer(() => {
    const {basket} = useContext(Context)
    return (
        <Row className="d-flex">
            {basket.partsInBasket.map(value =>
                <BasketItem key={value.id} part={value.partInfo} partType={value.groupType}/>
            )}
        </Row>
    );
});

export default BasketList;