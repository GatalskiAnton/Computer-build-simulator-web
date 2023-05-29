import {makeAutoObservable} from 'mobx';

Array.prototype.removeAll = function(value) {
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
            {id: 1, name: "Cooler"},
            {id: 2, name: "CPU"},
            {id: 3, name: "GPU"},
            {id: 4, name: "HDD"},
            {id: 5, name: "Motherboard"},
            {id: 6, name: "Case"},
            {id: 7, name: "Power supply"},
            {id: 8, name: "RAM"},
            {id: 9, name: "SSD"},
        ]
        this._parts = [
            {
                id: 1,
                name: "Test1",
                type: "SSD",
                img: "https://content2.onliner.by/catalog/device/header/b026e6be1a5d8932abb359866cf820bb.jpeg",
            },
            {
                id: 2,
                name: "Test2",
                type: "HDD",
                img: "https://content2.onliner.by/catalog/device/header/11a1d947146565622cfd8671b1f9425c.jpeg",
            },
            {
                id: 3,
                name: "Test3",
                type: "Motherboard",
                img: "https://content2.onliner.by/catalog/device/header/938bf9eab74772369fee502d0665039f.jpeg",
            },
            {
                id: 4,
                name: "Test4",
                type: "Case",
                img: "https://content2.onliner.by/catalog/device/header/f0ede0349c151920f232a33176fc6df6.jpeg",
            },
            {
                id: 5,
                name: "Test5",
                type: "RAM",
                img: "https://content2.onliner.by/catalog/device/header/98383f1b967eddb7f2e1115ba814968c.jpeg",
            },
            {
                id: 6,
                name: "Test6",
                type: "GPU",
                img: "https://content2.onliner.by/catalog/device/header/a25dc759a22b8e496cab6322f7170973.jpeg",
            },
            {
                id: 7,
                name: "Test7",
                type: "Cooler",
                img: "https://content2.onliner.by/catalog/device/header/a25dc759a22b8e496cab6322f7170973.jpeg",
            },
            {
                id: 8,
                name: "Test8",
                type: "RAM",
                img: "https://content2.onliner.by/catalog/device/header/a25dc759a22b8e496cab6322f7170973.jpeg",
            },
            {
                id: 9,
                name: "Test9",
                type: "GPU",
                img: "https://content2.onliner.by/catalog/device/header/a25dc759a22b8e496cab6322f7170973.jpeg",
            },
            {
                id: 10,
                name: "Test10",
                type: "SSD",
                img: "https://content2.onliner.by/catalog/device/header/a25dc759a22b8e496cab6322f7170973.jpeg",
            },
            {
                id: 11,
                name: "Test10",
                type: "1",
                img: "https://content2.onliner.by/catalog/device/header/a25dc759a22b8e496cab6322f7170973.jpeg",
            },
            {
                id: 12,
                name: "Test10",
                type: "1",
                img: "https://content2.onliner.by/catalog/device/header/a25dc759a22b8e496cab6322f7170973.jpeg",
            },
        ]
        this._selectedType = {}
        makeAutoObservable(this);
    }

    get types() {
        return this._types;
    }

    get selectedType() {
        return this._selectedType;
    }

    get parts() {
        return this._parts;
    }

    addNewType(type) {
        this.types.push({id: this.types.length + 1, name: type})
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

    setParts(parts) {
        this._parts = parts;
    }
}