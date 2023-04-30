import {makeAutoObservable} from 'mobx';
export default class PartStore{
    constructor() {
        this._types = [
            {id:1, name: "Cooler"},
            {id:2, name: "CPU"},
            {id:3, name: "GPU"},
            {id:4, name: "HDD"},
            {id:5, name: "Motherboard"},
            {id:6, name: "Case"},
            {id:7, name: "Power supply"},
            {id:8, name: "RAM"},
            {id:9, name: "SSD"},
        ]
        makeAutoObservable(this);
    }

    setTypes(types){
        this._types = types;
    }
    get types(){
        return this._types;
    }
}