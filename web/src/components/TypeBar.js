import React, {useContext} from 'react';
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const TypeBar = observer(() => {
    const {part} = useContext(Context)
    return (
        <ListGroup
            style={{cursor:"pointer"}}
        >
            {part.types.map(type =>
                <ListGroup.Item
                    active={type.id === part.selectedType.id}
                    onClick={() => part.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;