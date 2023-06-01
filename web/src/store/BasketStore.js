import {makeAutoObservable} from 'mobx';

export default class BasketStore {
    constructor() {
        this._partsInBasket = []
        this._typesInBasket = []
        makeAutoObservable(this);
    }

    setTypesInBasket(types){
        this._typesInBasket = types
    }


    addTypeToBasket(type){
        this.typesInBasket.push(type)
    }

    get typesInBasket() {
        return this._typesInBasket;
    }

    setPartsInBasket(elements){
        this._partsInBasket = elements
    }


    get partsInBasket() {
        return this._partsInBasket;
    }
}