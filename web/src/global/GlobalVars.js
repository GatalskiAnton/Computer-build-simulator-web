let lastGroup = '';

const setLastGroup = (lastSelected) => {
    lastGroup = lastSelected
}

const getLastGroup = () =>{
    return lastGroup
}

export {setLastGroup, getLastGroup}