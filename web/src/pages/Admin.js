import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateType from "../modals/CreateType";
import DeleteType from "../modals/DeleteType";
import CreatePart from "../modals/CreatePart";

const Admin = () => {
    const [typeVisible, setTypeVisible] = useState(false)
    const [deleteVisible, setDeleteVisible] = useState(false)
    const [partVisible, setPartVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button className="mt-3" onClick={() => setTypeVisible(true)}>
                Add part type
            </Button>
            <Button className="mt-3" onClick={() => setDeleteVisible(true)}>
                Delete part type
            </Button>
            <Button className="mt-3" onClick={() => setPartVisible(true)}>
                Add part
            </Button>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <DeleteType show={deleteVisible} onHide={() => setDeleteVisible(false)}/>
            <CreatePart show={partVisible} onHide={() => setPartVisible(false)}/>
        </Container>
    );
};

export default Admin;