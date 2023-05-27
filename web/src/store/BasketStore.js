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

    clearAllBasket(){
        this.elements.splice(0, this.elements.length)
    }

    get elements() {
        return this._elements;
    }
}