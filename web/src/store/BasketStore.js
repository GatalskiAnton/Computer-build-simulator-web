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

    hasInBasket(id){
        for (let i = 0; i < this.elements.length; i++) {
            if (id === this.elements[i].id){
                return true;
            }
        }
        return false;
    }

    setInBasket = (part) =>{
        if (part.inBasket === false){
            part.inBasket = true
        }else{
            part.inBasket = false;
        }
    }

    removeFromBasket(id){
        for (let i = 0; i < this.elements.length; i++) {
            if (id === this.elements[i].id){
                this.elements.splice(i, 1)
            }
        }
    }

    get elements() {
        return this._elements;
    }
}