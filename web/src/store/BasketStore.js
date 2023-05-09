import {makeAutoObservable} from 'mobx';

export default class BasketStore {
    constructor() {
        this._elements = []
        makeAutoObservable(this);
    }

    addElement(element){
        this._elements.push(element)
    }

    setElements(elements) {
        this._elements = elements;
    }

    get elements() {
        return this._elements;
    }
}