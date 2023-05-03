import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import PartItem from "./PartItem";

const PartList = observer(() => {
    const {part} = useContext(Context)
    return (
        <Row className="d-flex">
            {part.parts.map(part =>
                <PartItem key={part.id} part={part}/>
            )}
        </Row>
    );
});

export default PartList;