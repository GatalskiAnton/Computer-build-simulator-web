import {makeAutoObservable} from 'mobx';

export default class BasketStore {
    constructor() {
        this._partsInBasket = []
        this._inBasketElements = []
        makeAutoObservable(this);
    }
    setInBasketElements(elements){
        this._inBasketElements = elements
    }

    setPartsInBasket(elements){
        this._partsInBasket = elements
    }

    get inBasketElements(){
        return this._inBasketElements
    }


    get partsInBasket() {
        return this._partsInBasket;
    }
}