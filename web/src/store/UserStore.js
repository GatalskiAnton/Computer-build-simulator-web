import {makeAutoObservable} from 'mobx';

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._login = ''
        this._user = {};
        makeAutoObservable(this);
    }

    setlogin(login){
        this._login = login
    }

    get login(){
        return this._login;
    }

    setIsAuth(bool) {
        this._isAuth = bool;
    }

    setUser(user) {
        this._isAuth = user;
    }

    get isAuth() {
        return this._isAuth;
    }

    get User() {
        return this._user;
    }
}