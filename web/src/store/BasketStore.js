import {makeAutoObservable} from 'mobx';

export default class BasketStore {
    constructor() {
        this._partsInBasket = []
        makeAutoObservable(this);
    }

    removeElementIndex(index){
        this._partsInBasket.splice(index, 1)
    }

    setPartsInBasket(elements){
        this._partsInBasket = elements
    }


    get partsInBasket() {
        return this._partsInBasket;
    }
}