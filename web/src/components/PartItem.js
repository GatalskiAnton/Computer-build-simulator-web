import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {PART_ROUTE} from "../utils/Consts";

const PartItem = ({part}) => {
    const history = useHistory();
    console.log(history)
    return (
        <Col md={3} className="mt-4" onClick={() => history.push(PART_ROUTE + '/' + part.type + '/' + part.id)}>
            <Card style={{width: 150, cursor: "pointer"}} border={"light"}>
                <Image width={150} height={150} src={part.img}/>
                <div className="mt-2">
                    <div className="text-black-50">{part.type}</div>
                    <div>{part.name}</div>
                </div>
            </Card>
        </Col>
    );
};

export default PartItem;