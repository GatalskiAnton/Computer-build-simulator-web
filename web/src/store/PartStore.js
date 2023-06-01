import { makeAutoObservable } from 'mobx';

Array.prototype.removeAll = function (value) {
    for (let i = this.length - 1; i >= 0; i--) {
        if (this[i].type === value) {
            this.splice(i, 1);
        }
    }
    return this;
}

export default class PartStore {
    constructor() {
        this._types = [
            { id: 1, name: "Cooler" },
            { id: 2, name: "CPU" },
            { id: 3, name: "GPU" },
            { id: 4, name: "HDD" },
            { id: 5, name: "Motherboard" },
            { id: 6, name: "PCCase" },
            { id: 7, name: "PowerSupply" },
            { id: 8, name: "RAM" },
            { id: 9, name: "SSD" },
        ]
        this._parts = []

        makeAutoObservable(this);
    }

    get types() {
        return this._types;
    }

    setParts(parts){
        this._parts = parts
    }

    get selectedType() {
        return this._selectedType;
    }

    get parts() {
        return this._parts;
    }

    addNewType(type) {
        this.types.push({ id: this.types.length + 1, name: type })
    }

    deleteType(type) {
        for (let i = 0; i < this.types.length; i++) {
            if (type === this.types[i].name) {
                this.types.splice(i, 1)
            }
        }
        this.parts.removeAll(type)
    }



    setTypes(types) {
        this._types = types;
    }

    setSelectedType(type) {
        this._selectedType = type;
    }
}