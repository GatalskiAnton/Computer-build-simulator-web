import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {PART_ROUTE} from "../utils/Consts";
import {getLastGroup} from "../global/GlobalVars";

const PartItem = ({part}) => {
    const history = useHistory();
    console.log(history)
    return (
        <Col md={3} className="mt-4" onClick={() => history.push(PART_ROUTE + '/' + getLastGroup() + '/' + part.id)}>

            <Card style={{width: 150, cursor: "pointer"}} border={"light"}>
                <div className="mt-2">
                    <Image
                        src={require("../images/GPU/GeForceGT1030.jpg")}
                    />
                    <div className="text-black-50">{part.name}</div>
                    <div>{part.price}$</div>
                </div>
            </Card>

        </Col>
    );
};

export default PartItem;