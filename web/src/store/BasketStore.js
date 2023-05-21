import {makeAutoObservable} from 'mobx';

export default class BasketStore {
    constructor() {
        this._elements = []
        makeAutoObservable(this);
    }
    setElements(elements) {
        this._elements = elements;
    }

    addToBasket(part){
        this.elements.push(part)
    }

    get elements() {
        return this._elements;
    }
}